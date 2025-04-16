import { lazy } from "react";
import GuestLayout from "./layout/GuestLayout";
// import AccountLayout from "./layouts/GuestLayout/AccountLayout";
// import Privacy from "./layouts/PrivacyLayout/Privacy";

// Replace lazyImport function with direct lazy imports
const Index = ({ children }) => {
  return (<>{children}</>)
}
const Home = lazy(() => import("./pages/Frontend/Home"));
const About = lazy(()=> import("./pages/Frontend/About"));
const ContactUs = lazy(() => import("./pages/Frontend/ContactUs"));
const CourseList = lazy(() => import("./pages/Frontend/CourseList"));
const NotFoundPage = lazy(() => import("./pages/NotFound"));

export const routes = [
  { exact: true, path: "/", layout: GuestLayout, component: Home },
  { exact: true, path: "/About", layout: GuestLayout, component: About},
  { exact: true, path: "/ContactUs", layout: GuestLayout, component: ContactUs},
  { exact: true, path: "/Courses", layout: GuestLayout, component: CourseList},
  { exact: true, path: "*", component: NotFoundPage },
];
