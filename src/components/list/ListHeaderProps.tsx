interface ListHeaderProps {
  title: string;
}

const ListHeader = ({ title }: ListHeaderProps) => {
  return <h2 className="text-2xl font-semibold mb-4">{title}</h2>;
};

export default ListHeader;
