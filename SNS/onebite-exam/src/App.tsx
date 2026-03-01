import "./App.css";
import { Outlet, Route, Routes } from "react-router";
import IndexPage from "./pages/index-page";
import SignInPage from "./pages/sign-in-page";
import SignUpPage from "./pages/sign-up-page";
import Counter from "./pages/couter-page";

function AuthLayout() {
  return (
    <div>
      <header>Auth!</header>
      <Outlet />
    </div>
  );
}
function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/counter" element={<Counter />} />
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Route>
    </Routes>
  );
}
export default App;
