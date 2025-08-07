interface StatisticsProps {
  title: string;
  count: number;
}

const Statistics = ({ title, count }: StatisticsProps) => {
  return (
    <div className=" border border-gray-300 p-2 shadow-md hover:shadow-2xl text-gray-700 rounded-xl">
      <div className="font-bold text-xl">{title}</div>
      <div>{count}</div>
    </div>
  );
};

export default Statistics;
