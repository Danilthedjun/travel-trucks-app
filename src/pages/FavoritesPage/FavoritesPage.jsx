import { useSelector } from "react-redux";
import CamperDetails from "../../components/CamperDetails/CamperDetails";
import css from "./FavoritesPage.module.css";
import { selectFavorites } from "../../redux/favorites/slice";

export default function FavoritesPage() {
  const favoriteCampers = useSelector(selectFavorites);
  const campersList = useSelector(state => state.campers.campersList);

  const favoriteCamperDetails = campersList.filter(camper =>
    favoriteCampers.some(fav => fav.id === camper.id)
  );

  return (
    <div className={css.page}>
      <h1>Favorites</h1>
      {favoriteCamperDetails.length > 0 ? (
        favoriteCamperDetails.map(camper => (
          <CamperDetails key={camper.id} camper={camper} />
        ))
      ) : (
        <p>No favorite campers found.</p>
      )}
    </div>
  );
}
