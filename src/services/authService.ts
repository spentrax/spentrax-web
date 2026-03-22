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
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) => {
  const res = await signup({ name, email, password });

  return res;
};
