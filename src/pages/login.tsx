import { useCustomMutation, useLogin } from "@refinedev/core";
import { useEffect, useRef } from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { ThemedTitleV2 } from "@refinedev/mui";

import { CredentialResponse } from "../interfaces/google";
import { IUserResponse } from "../types/auth";

// Todo: Update your Google Client ID here
const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

export const Login: React.FC = () => {
  const { mutate: login } = useLogin<IUserResponse>();
  const { mutateAsync } = useCustomMutation<IUserResponse>();

  const GoogleButton = (): JSX.Element => {
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (typeof window === "undefined" || !window.google || !divRef.current) {
        return;
      }

      try {
        window.google.accounts.id.initialize({
          ux_mode: "popup",
          client_id: GOOGLE_CLIENT_ID,
          callback: handleGoogleCallback,
        });
        window.google.accounts.id.renderButton(divRef.current, {
          theme: "filled_blue",
          size: "medium",
          type: "standard",
        });
      } catch (error) {
        console.log(error);
      }
    }, []);

    return <div ref={divRef} />;
  };

  const handleGoogleCallback = async (res: CredentialResponse) => {
    if (res.credential) {
      try {
        const user = await mutateAsync({
          url: `${import.meta.env.VITE_API_URL}/auth/google/login`,
          method: "post",
          values: {
            idToken: res.credential,
          },
          successNotification: () => {
            console.log("Login success");

            return {
              key: "4-users-notification",
              message: "Đăng nhập Google thành công",
              description: "Bạn đã đăng nhập thành công bằng tài khoản Google",
              type: "success",
            };
          },
          errorNotification: (error, values) => {
            return {
              message: "Đăng nhập Google thất bại",
              description:
                error?.message || "Đã xảy ra lỗi khi đăng nhập bằng Google",
              type: "error",
            };
          },
        });
        if (user) login(user.data);
      } catch (error) {
        console.error("Login failed", error);
      }
    }
  };

  return (
    <Container
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        display="flex"
        gap="36px"
        justifyContent="center"
        flexDirection="column"
      >
        <ThemedTitleV2
          collapsed={false}
          wrapperStyles={{
            fontSize: "22px",
            justifyContent: "center",
          }}
        />

        <GoogleButton />

        <Typography align="center" color={"text.secondary"} fontSize="12px">
          Powered by
          <img
            style={{ padding: "0 5px" }}
            alt="Google"
            src="https://refine.ams3.cdn.digitaloceanspaces.com/superplate-auth-icons%2Fgoogle.svg"
          />
          Google
        </Typography>
      </Box>
    </Container>
  );
};
