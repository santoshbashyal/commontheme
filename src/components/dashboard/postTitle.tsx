interface PostTitleProps {
  postTitle: string;
}

export const PostTitles = ({ postTitle }: PostTitleProps) => {
  return (
    <div className="p-2 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg">
      {postTitle}
    </div>
  );
};
