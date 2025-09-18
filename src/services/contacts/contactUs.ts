import { HttpClient } from "@/lib/axios";
import type { IContactUs } from "@/types/contacts.types";
import { endpoints } from "../endpoints";
import { useQuery } from "@tanstack/react-query";

export const getAllContacts = async () => {
  const response = await HttpClient.get<IContactUs>(
    endpoints.contacts.getAllContacts
  );
  return response?.data.data;
};
export const useContacts = () =>
  useQuery({
    queryKey: ["contacts"],
    queryFn: getAllContacts,
  });
