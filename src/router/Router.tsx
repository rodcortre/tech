import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RoutesAuth } from "./RoutesAuth";
import { RoutesNoAuth } from "./RoutesNoAuth";

const Router = () => {
  const [isWithSession, setIsWithSession] = useState(false);
  const { token } = useSelector((state: any) => state.user);
  useEffect(() => {
    if (!token) {
      setIsWithSession(false);
    } else {
      setIsWithSession(true);
    }
  }, [token]);

  if (!isWithSession) return <RoutesNoAuth />;
  return <RoutesAuth></RoutesAuth>;
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
