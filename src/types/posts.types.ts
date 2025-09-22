export interface IPostResponseDTO {
  from_table: string;
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  data: Daum[];
}

export interface Daum {
  ID: number;
  post_author: number;
  post_date: string;
  post_date_gmt: string;
  post_content: string;
  post_title: string;
  post_excerpt: string;
  post_status: string;
  comment_status: string;
  ping_status: string;
  post_password: string;
  post_name: string;
  to_ping: string;
  pinged: string;
  post_modified: string;
  post_modified_gmt: string;
  post_content_filtered: string;
  post_parent: number;
  guid: string;
  menu_order: number;
  post_type: string;
  post_mime_type: string;
  comment_count: number;
  thumbnail_url: string;
}
