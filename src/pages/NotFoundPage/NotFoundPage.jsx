import { Link } from "react-router-dom";
import { GiAstronautHelmet } from "react-icons/gi";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.notFoundContainer}>
      <h1 className={css.notFoundTitle}>404</h1>
      <p className={css.notFoundMessage}>Oops! You seem to be lost in space.</p>
      <div className={css.notFoundAnimation}>
        <GiAstronautHelmet className={css.astronaut} />
      </div>
      <p className={css.notFoundSuggestion}>
        No worries, let’s get you back <Link to="/">home</Link>.
      </p>
    </div>
  );
}
