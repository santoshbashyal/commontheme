import { HttpClient } from "@/lib/axios";
import { endpoints } from "../endpoints";
import { useQuery } from "@tanstack/react-query";
import type { IContactDetails } from "@/types/contactDetail.types";

// Type of a single contact

// Fetch single contact by ID
export const getContactsByID = async (id: string) => {
  const response = await HttpClient.get<IContactDetails>(
    endpoints.contacts.getContactsByID.replace(":id", id)
  );
  return response?.data.data;
};

// React Query hook
export const useContactsDetails = (id: string) =>
  useQuery({
    queryKey: ["contact", id],
    queryFn: async () => await getContactsByID(id),
    enabled: !!id,
  });
