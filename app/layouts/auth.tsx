import { Outlet } from "react-router";

const Auth = () => {
  return (
    // 1. El contenedor que abarca TODA la pantalla y centra el contenido
    <main className="flex flex-col justify-center items-center min-h-screen bg-slate-50 w-full p-4">
      <img src="/tamabra-logo.png" alt="Logo" className="mb-8 w-70" />

      <Outlet />

      {/* 4. Un footer sencillo que heredarán todas tus rutas de auth */}
      <footer className="mt-8 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} contracts
      </footer>
    </main>
  );
};

export default Auth;
