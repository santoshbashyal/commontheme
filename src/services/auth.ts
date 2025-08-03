import { useMutation } from "@tanstack/react-query";
import { HttpClient } from "../lib/axios";
import { endpoints } from "./endpoints";

export const useLogin = () =>
  useMutation({
    mutationFn: (data: { user_email: string; password: string }) =>
      HttpClient.post<{ token: string }>(endpoints.auth.login, data),
  });
