import css from "./Layout.module.css";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <Logo />
        <Navigation />
      </header>
      <main>{children} </main>
    </div>
  );
}
