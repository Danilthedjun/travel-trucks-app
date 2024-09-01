import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout.jsx";
import Loader from "../Loader/Loader.jsx";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
// const CatalogPage = lazy(() =>
//   import("../../pages/CatalogPage/CatalogPage.jsx")
// );
// const CamperPage = lazy(() => import("../../pages/CamperPage/CamperPage.jsx"));
// const NotFoundPage = lazy(() =>
//   import("../../pages/NotFoundPage/NotFoundPage.jsx")
// );

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog:id" element={<CamperPage />} />
        <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </Suspense>
    </Layout>
  );
}
