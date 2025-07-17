// export interface PostListRowProps {
//   title: string;
//   author: string;
//   category: string;
//   date: string;
//   status: "Pending" | "Posted" | "Deleted";
// }

// const statusIcons = {
//   Pending: "/Pending.svg",
//   Posted: "/Posted.svg",
//   Deleted: "/Deleted.svg",
// } as const;

// const PostListRow = ({
//   title,
//   author,
//   category,
//   date,
//   status,
// }: PostListRowProps) => {
//   return (
//     <tr className="border-b border-gray-300 text-sm text-gray-700">
//       <td className="px-4 py-3 font-normal">
//         <img src="/Rectangle2.svg" alt="Checkbox" />
//       </td>
//       {/* Name + Author + Checkbox */}
//       <td className="px-4 py-4">
//         <div className="flex items-start gap-3">
//           <div className="flex flex-col">
//             <span className="font-medium text-gray-900">{title}</span>
//             <span className="text-gray-500 text-sm">{author}</span>
//           </div>
//         </div>
//       </td>

//       {/* Category */}
//       <td className="px-4 py-4">{category}</td>

//       {/* Date */}
//       <td className="px-4 py-4">{date}</td>

//       {/* Status */}
//       <td className="px-4 py-4">
//         <span
//           className={`inline-flex items-center gap-2 px-4 py-1 rounded-full text-sm font-medium ${
//             status === "Pending"
//               ? "bg-orange-100 text-orange-600"
//               : status === "Posted"
//               ? "bg-green-100 text-green-600"
//               : "bg-red-100 text-red-600"
//           }`}
//         >
//           <img src={statusIcons[status]} alt={status} className="w-4 h-4" />
//           {status}
//         </span>
//       </td>

//       {/* Actions */}
//       <td className="px-4 py-4">
//         <div className="flex gap-3 justify-center bg-gray-200 rounded-3xl px-5 py-2">
//           <img src="/file.svg" alt="Copy" className="cursor-pointer" />
//           <img src="/Edit.svg" alt="Edit" className="cursor-pointer" />
//           <img src="/Trash.svg" alt="Delete" className="cursor-pointer" />
//         </div>
//       </td>
//     </tr>
//   );
// };

// export default PostListRow;
