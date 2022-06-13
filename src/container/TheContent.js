import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

// routes config
import routes from "../routes";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const TheContent = () => {
  console.log("oka")
  return (
    <main className="main page-main">
      <div className="container-fluid">
        <Suspense fallback={loading}>
          <Switch>
            {routes.map((route, idx) => {
              return (
                route.component && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) => <route.component {...props} />}
                  />
                )
              );
            })}
          </Switch>
        </Suspense>
      </div>
    </main>
  );
};

export default React.memo(TheContent);
