// import { useState } from "react";

// interface TextBoxProps {
//   onPublish: (content: string) => void;
//   maxLength?: number;
// }

// const TextBox = ({ onPublish, maxLength = 8000 }: TextBoxProps) => {
//   const [content, setContent] = useState("");
//   const [message, setMessage] = useState("");

//   const handlePublish = () => {
//     if (content.trim() === "") {
//       setMessage("Please type something before publishing.");
//       return;
//     }
//     onPublish(content);
//     setMessage("Published !");
//     setContent("");

//     setTimeout(() => {
//       setMessage("");
//     }, 4000);
//   };
//   return (
//     <div className="px-2">
//       <div className="relative border border-gray-300 rounded-b-2xl h-[750px] bg-white shadow-sm">
//         <textarea
//           className="w-full h-full resize-none p-6 text-gray-700 outline-none rounded-2xl"
//           placeholder="Begin writing here ..."
//           value={content}
//           onChange={(e) => {
//             setContent(e.target.value);
//             setMessage("");
//           }}
//           maxLength={maxLength}
//         />

//         {/* Bottom bar */}
//         <div className="absolute bottom-10 left-6 right-6 flex justify-between items-center text-sm text-gray-500">
//           <span>
//             {content.length}/{maxLength}
//           </span>
//           {/* <img src="/Notches.svg" alt="Notches" /> */}

//           <button
//             onClick={handlePublish}
//             className="bg-black px-4 p-2 text-white rounded-3xl"
//           >
//             {" "}
//             Publish
//           </button>
//         </div>
//         <div className="h-6 mt-2 text-sm text-center text-gray-500">
//           {message && <p>{message}</p>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TextBox;
