import { HttpClient } from "@/lib/axios";
import { endpoints } from "../endpoints";
import type { ICookie } from "../../types/cookie.types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const cookieKey = {
  get: "cookie",
};
export const getCookiePolicy = async () => {
  const response = await HttpClient.get<ICookie>(
    endpoints.cookie.getCookiePolicy
  );
  return response?.data;
};

export const postCookiePolicy = async (data: FormData) => {
  const response = await HttpClient.post(
    endpoints.cookie.postCookiePolicy,
    data
  );
  return response;
};
export const useCookiePolicy = () =>
  useQuery({
    queryKey: [cookieKey.get],
    queryFn: getCookiePolicy,
  });

export const useUpdateCookiePolicy = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postCookiePolicy,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [cookieKey.get] });
    },
  });
};
