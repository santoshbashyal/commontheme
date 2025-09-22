import { useQuery } from "@tanstack/react-query";
import { endpoints } from "./../endpoints";
import { HttpClient } from "@/lib/axios";
import type { IPostResponseDTO } from "@/types/posts.types";

export const getAllPosts = async () => {
  const response = await HttpClient.get<IPostResponseDTO>(
    endpoints.posts.getAllPosts
  );
  return response?.data.data;
};
export const usePosts = () =>
  useQuery({
    queryKey: ["posts"],
    queryFn: getAllPosts,
  });
