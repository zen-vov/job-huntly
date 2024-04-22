import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../layout";
import { HomePage } from "../../pages/homePage";
import { Profile } from "../../pages/profile";
import { SignInPage } from "../../pages/signIn/ui/signIn";
import { SignUpPage } from "../../pages/signUp/ui/signUp";
import { DashBoardPage } from "../../pages/dashboard";
import { FindJobsPage } from "../../pages/findJobs";
import { ProductPage } from "../../pages/product/ui/product";

import "../styles/index.css";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout showHeaderFooter={true} />}>
          <Route index element={<HomePage />} />
          <Route path="signin" element={<SignInPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<HomePage />} />
        </Route>
        <Route path="/app/*" element={<Layout showHeaderFooter={false} />}>
          <Route path="dashboard" element={<DashBoardPage />} />
          <Route path="findjobs" element={<FindJobsPage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
