import { type RouteConfig, layout, route } from "@react-router/dev/routes";

export default [
  layout("layouts/auth.tsx", [
    route("login", "routes/login.tsx"),
    route("register", "routes/register.tsx"),
  ]),
  route("dashboard", "routes/dashboard.tsx"),
] satisfies RouteConfig;
