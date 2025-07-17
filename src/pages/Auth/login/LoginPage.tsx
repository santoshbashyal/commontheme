import { useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("   ");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
  }>({});
  //   const [errors, setErrors] = useState({
  //   username: "",
  //   password: ""
  // });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); //this stops page from reloading

    const newErrors: { username?: string; password?: string } = {};

    // const newErrors ={username:"", password:""};

    if (username.trim() === "") {
      newErrors.username = "Username is required";
    }
    if (password.trim() === "") {
      newErrors.password = "Password is required";
    } else if (password.length < 7) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Save errors to state
    setErrors(newErrors);
    console.log("username", username);
    console.log("password", password);
  };

  return (
    <div className="w-full flex items-center justify-center shadow-2xl ">
      <div className=" border max-w-md p-6">
        <div className=" space-y-6 p-6">
          <div className=" text-2xl text-center font-bold my-3 mb-8">Login</div>
          <h2 className="text-gray-400 my-2 px-3 border-b border-b-gray-400 ">
            Welcome Back, Please login to continue
          </h2>
          <div className=" flex flex-col mt-5 gap-3">
            Username
            <input
              className="border p-1 border-gray-400 rounded-xs outline-0"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username}</p>
            )}
          </div>
          <div className=" flex flex-col mt-5 gap-3">
            Password
            <input
              className="border p-1 border-gray-400 rounded-xs outline-0"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password "
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password}</p>
            )}
          </div>

          <div className=" w-full py-6">
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-orange-600 w-full py-2 text-white rounded-2xl"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
