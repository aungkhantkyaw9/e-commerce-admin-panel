import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const Login = React.lazy(() => import("./views/login/LoginIndex"));
const ContainerLayout = React.lazy(() => import("./container/MainLayout"));

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route
            exact
            path="/login"
            name="Login"
            render={(props) => <Login {...props} />}
          />

          <Route
            exact
            path="/dashboard"
            name="Dashboard"
            render={(props) => <ContainerLayout {...props} />}
          />

          <Route
            path="/"
            name="Home"
            render={() => {
              window.location.href = "/login";
            }}
          />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
