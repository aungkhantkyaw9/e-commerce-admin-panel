import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/DashboardIndex"));
const ProductRegistration = React.lazy(() => import("./views/product-registration/ProductRegistration"));
const InventoryList = React.lazy(() => import("./views/inventory-list/InventoryList"));

const routes = [
  { path: "/dashboard", exact: true, name: "Dashboard", component: Dashboard },
  { path: "/product-registration", exact: true, name: "Product Registratio", component: ProductRegistration },
  { path: "/inventory-list", exact: true, name: "Inventory List", component: InventoryList },
];

export default routes;
