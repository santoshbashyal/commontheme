import { HttpClient } from "@/lib/axios";
import { endpoints } from "../endpoints";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { IPrivacy } from "@/types/privacy.types";

const privacyKey = {
  get: "privacy-policy",
};
export const getPrivacyPolicy = async () => {
  const response = await HttpClient.get<IPrivacy>(
    endpoints.privacy.getPrivacyPolicy
  );
  return response?.data;
};

export const postPrivacyPolicy = async (data: FormData) => {
  const response = await HttpClient.post(
    endpoints.privacy.postPrivacyPolicy,
    data
  );
  return response;
};
export const usePrivacyPolicy = () =>
  useQuery({
    queryKey: [privacyKey.get],
    queryFn: getPrivacyPolicy,
  });

export const useUpdatePrivacyPolicy = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postPrivacyPolicy,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [privacyKey.get],
      });
    },
  });
};
