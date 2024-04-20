import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../layout";
import { HomePage } from "../../pages/homePage";
import { Profile } from "../../pages/profile";

import "../styles/index.css";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
