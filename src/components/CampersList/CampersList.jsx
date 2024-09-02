import css from "./CamperList.module.css";
import CamperDetails from "../CamperDetails/CamperDetails";
import { useSelector } from "react-redux";
import { isLoading } from "../../redux/campers/selectors";
import Loader from "../Loader/Loader";

export default function CampersList({ list }) {
  const loading = useSelector(isLoading);

  if (loading) {
    return <Loader />;
  }

  if (list.length === 0) {
    return <p className={css.text}>Sorry, there are no campers!</p>;
  }

  return (
    <ul className={css.list}>
      {list.map(item => (
        <li className={css.item} key={item.id}>
          <CamperDetails camper={item} />
        </li>
      ))}
    </ul>
  );
}
