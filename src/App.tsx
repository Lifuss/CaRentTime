import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader/Loader";

const Home = lazy(() => import("./pages/Home"));
const Catalog = lazy(() => import("./pages/Catalog"));
const Favorites = lazy(() => import("./pages/Favorites"));
const Layout = lazy(() => import("./components/Layout/Layout"));

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loader />}>
            <Layout />
          </Suspense>
        }
      >
        <Route
          index
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/catalog"
          element={
            <Suspense fallback={<Loader />}>
              <Catalog />
            </Suspense>
          }
        />
        <Route
          path="/favorites"
          element={
            <Suspense fallback={<Loader />}>
              <Favorites />
            </Suspense>
          }
        />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
