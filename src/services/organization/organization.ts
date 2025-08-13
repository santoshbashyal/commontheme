import { HttpClient } from "../../lib/axios";
import { endpoints } from "../endpoints";
import type { Isettings } from "./organization.types";

export const getSocialLinks = async () => {
  const res = await HttpClient.get<Isettings>(endpoints.settings.getsettings);
  return res?.data;
};
