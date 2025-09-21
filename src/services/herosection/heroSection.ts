import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { HttpClient } from "@/lib/axios";
import { endpoints } from "../endpoints";
import type { IHeroSection } from "@/types/heroSection.types";

const heroKey = {
  get: "hero",
};
export const getHeroSection = async () => {
  const response = await HttpClient.get<IHeroSection>(
    endpoints.heroSection.getHeroSection
  );

  return response?.data;
};
export const postHeroSection = async (data: FormData) => {
  const response = await HttpClient.post(
    endpoints.heroSection.postHeroSection,
    data
  );
  return response;
};

export const useHeroSection = () =>
  useQuery({
    queryKey: [heroKey.get],
    queryFn: getHeroSection,
  });

export const useUpdateHeroSection = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postHeroSection,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [heroKey.get] });
    },
  });
};
