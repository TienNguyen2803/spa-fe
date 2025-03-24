import https from "../http";

export const googleLogin = async (idToken: string): Promise<any> => {
  const res = await https.post(
    `http://localhost:3000/api/v1/auth/google/login`,
    {
      idToken: idToken,
    }
  );
  return res.data;
};
