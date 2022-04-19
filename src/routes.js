import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/DashboardIndex"));

const routes = [
  { path: "/dashboard", exact: true, name: "Dashboard", component: Dashboard },
];

export default routes;
