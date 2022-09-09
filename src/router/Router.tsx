import { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./routes";

const Router = () => {
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
export default Router;

/*
<Suspense fallback={<span>...cargando</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <ul>
              {routes.map((route, index) => (
                <li key={index}>
                  <NavLink
                    to={route.to}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
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
        </div>
      </BrowserRouter>
    </Suspense>
*/
