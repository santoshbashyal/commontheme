import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useLogin } from "../../../services/auth";
type LoginFormInputs = {
  username: string;
  password: string;
};

const LoginPage = () => {
  const { mutateAsync } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormInputs) => {
    console.log(data, "submitted data");
    try {
      const res = await mutateAsync({
        user_email: data.username,
        password: data.password,
      });
      if (!res) return;
      console.log("login successful", res.data);
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (err) {
      console.log(err);
      alert("login failed");
    }
  };

  // const [errors, setErrors] = useState({
  //   username: "",
  //   password: "",
  // });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   const newErrors = { username: "", password: "" };
  // };

  return (
    <>
      <div className="w-full mt-20 pb-20  flex items-center justify-center shadow-2xl ">
        <div className=" border max-w-md p-6">
          <div className=" space-y-6 p-6">
            <div className=" text-2xl text-center font-bold my-3 mb-8">
              Login
            </div>
            <h2 className="text-gray-400 my-2 px-3 border-b border-b-gray-400 ">
              Welcome Back, Please login to continue
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} action="">
              <div className=" flex flex-col mt-5 gap-3">
                Username
                <input
                  className="border p-1 border-gray-400 rounded-xs outline-0"
                  type="text"
                  {...register("username", {
                    required: "username is required",
                  })}
                />
                {errors.username && (
                  <p className="text-red-500 text-sm">
                    {errors.username.message}
                  </p>
                )}
              </div>
              <div className=" flex flex-col mt-5 gap-3">
                Password
                <input
                  className="border p-1 border-gray-400 rounded-xs outline-0"
                  {...register("password", {
                    required: "password is required",
                    minLength: {
                      value: 5,
                      message: "password must be atleast 5 characters",
                    },
                  })}
                  type="password"
                />
                {errors.password && (
                  <p className="text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className=" w-full py-6">
                <button
                  type="submit"
                  className="bg-orange-600 w-full py-2 text-white rounded-2xl"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
