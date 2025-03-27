import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Divider,
} from "@mui/material";
import { useCreate, useCustomMutation, useLogin } from "@refinedev/core";
import { CredentialResponse } from "../../../interfaces/google";
import { IUserResponse } from "../../../types/auth";
import { useNavigation } from "@refinedev/core";

const GOOGLE_CLIENT_ID =
  "456283535586-di7sa1ubk4nd43mkhg0rgedamrsdkaei.apps.googleusercontent.com";

export const LoginPage: React.FC = () => {
  const { mutate: login } = useLogin<IUserResponse>();
  const { mutateAsync } = useCustomMutation<IUserResponse>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { push } = useNavigation();

  const { mutate: emailLogin } = useCreate({
    resource: "auth/email/login",
    meta: {
      operation: "login",
    },
  });

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    emailLogin(
      {
        resource: "auth/email/login",
        values: {
          email,
          password,
        },
      },
      {
        onSuccess: (response) => {
          const { token } = response.data;
          localStorage.setItem("token", token);
          localStorage.setItem(
            "user",
            JSON.stringify({
              ...response.data,
            }),
          );
          push("/");
          // Handle successful login
        },
        onError: (error) => {
          // Handle login error
          console.error("Login failed:", error);
        },
      },
    );
  };

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
      maxWidth="sm"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          width: "100%",
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" component="h1" align="center" gutterBottom>
          Đăng nhập Admin
        </Typography>

        <form onSubmit={handleEmailLogin}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Mật khẩu"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Đăng nhập
          </Button>
        </form>

        <Divider sx={{ my: 3 }}>hoặc</Divider>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <GoogleButton />
        </Box>
      </Paper>
    </Container>
  );
};
