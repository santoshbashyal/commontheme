import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { HttpClient } from "../../lib/axios";
import { endpoints } from "../endpoints";
import type { IDisclaimer } from "../../types/disclaimer.types";

const disclaimerKey = {
  get: "disclaimer",
};
export const getDisclaimer = async () => {
  const response = await HttpClient.get<IDisclaimer>(
    endpoints.disclaimer.getDisclaimer
  );
  return response?.data;
};

export const postDisclaimer = async (data: FormData) => {
  const response = await HttpClient.post(
    endpoints.disclaimer.postDisclaimer,
    data
  );
  return response;
};

export const useDisclaimer = () =>
  useQuery({
    queryKey: [disclaimerKey.get],
    queryFn: getDisclaimer,
  });

export const useUpdateDisclaimer = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postDisclaimer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [disclaimerKey.get] });
    },
  });
};
