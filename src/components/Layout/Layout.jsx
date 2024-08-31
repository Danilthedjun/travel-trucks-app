import { Toaster } from "react-hot-toast";
// import Banner from "../Banner/Banner.jsx";
import css from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      {/* <Banner /> */}
      {children}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
