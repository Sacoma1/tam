import { TextField } from "@mui/material";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <form className="bg-white w-full max-w-[400px] p-8 rounded-2xl shadow-2xl">
      <h2 className="text-2xl font-bold mb-4">Inicia sesión</h2>
      <div className="flex flex-col gap-6">
        <TextField
          id="email"
          label="Email"
          variant="standard"
          placeholder="Type your email"
          type="email"
          fullWidth
        />

        <TextField
          id="Password"
          label="password"
          variant="standard"
          placeholder="Type your password"
          type="password"
          fullWidth
        />
        <button className="bg-orange-500 text-white py-2 rounded mt-4">
          Inicar sesion
        </button>
        <p className="text-center text-sm text-gray-500">
          ¿No tienes cuenta?{" "}
          <span className="text-indigo-600 cursor-pointer">Registrate</span>
        </p>
      </div>
      <button className="flex items-center justify-center gap-3 border border-gray-300 py-2.5 rounded-lg mt-4 hover:bg-gray-50 transition-colors shadow-sm w-full mt-[10px]">
        <FcGoogle className="text-xl" />{" "}
        <span className="text-gray-700 font-medium text-sm">
          Iniciar sesion con google
        </span>
      </button>
    </form>
  );
};

export default Login;
