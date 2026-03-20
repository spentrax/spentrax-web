import { login, signup } from "../api/auth";

export const handleLogin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const res = await login({ email, password });

  // store token
  localStorage.setItem("token", res.token);

  return res;
};

export const handleSignup = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const res = await signup({ email, password });

  return res;
};
