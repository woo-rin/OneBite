import { Navigate, Route, Routes, type RoutesProps } from "react-router";
import SigninPage from "./pages/sign-in-page";
import SignUpPage from "./pages/sign-up-page";
import ForgetPasswordPage from "./pages/forget-password-page";
import IndexPage from "./pages/index-page";
import PostdetailPage from "./pages/post-detail-page";
import ProfiledetailPage from "./pages/profile-detail-page";
import ResetPasswordPage from "./pages/reset-password-page";

export default function RootRoute() {
  return (
    <Routes>
      <Route path="/sign-in" element={<SigninPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/forget-password" element={<ForgetPasswordPage />} />
      <Route path="/" element={<IndexPage />} />
      <Route path="/post/postId" element={<PostdetailPage />} />
      <Route path="/profile/postId" element={<ProfiledetailPage />} />

      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}
