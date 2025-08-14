import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { HttpClient } from "../../lib/axios";
import { endpoints } from "../endpoints";
import type { Isettings, Settings } from "./organization.types";

const settingsKey = {
  get: "settings",
};

export const getSocialLinks = async () => {
  const res = await HttpClient.get<Isettings>(endpoints.settings.getsettings);
  return res?.data;
};

export const postSocialLinks = async (data: Partial<Settings>) => {
  const res = await HttpClient.post(endpoints.settings.postsettings, data);
  return res?.data;
};

export const useSettings = () =>
  useQuery({
    queryKey: [settingsKey.get],
    queryFn: getSocialLinks,
  });

export const useUpdateSettings = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postSocialLinks,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [settingsKey.get] });
    },
  });
};
