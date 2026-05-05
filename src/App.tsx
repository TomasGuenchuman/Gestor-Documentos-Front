import { Routes, Route, Navigate } from "react-router-dom";
import EntitiesPage from "./pages/EntitiesPage";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Navigate to="/entities" replace />} />
          <Route path="/entities" element={<EntitiesPage />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
