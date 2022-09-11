import { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./dynamicRoutesNoAuth";
export const RoutesNoAuth = () => {
  return (
    <Suspense fallback={<></>}>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.to}
              path={route.path}
              element={<route.Component></route.Component>}
            ></Route>
          ))}

          <Route
            path="/*"
            element={<Navigate to={routes[0].to} replace></Navigate>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
