import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import css from "./CamperDetails.module.css";
import icons from "../../assets/sprite.svg";
import CamperFeatures from "../CamperFeatures/CamperFeatures";
import {
  addFavorite,
  removeFavorite,
  toggleFavorite,
} from "../../redux/favorites/slice";
import { isFavorite } from "../../redux/favorites/selectors";

export default function CamperDetails({ camper }) {
  const dispatch = useDispatch();
  const isFavoriteCamper = useSelector(state => isFavorite(state, camper.id));

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(camper.id));
  };

  return (
    <div className={css.itemContainer}>
      {camper.gallery?.[0]?.thumb && (
        <img
          className={css.photoImage}
          src={`${camper.gallery[0].thumb}`}
          width="292"
          alt={`${camper.name}`}
        />
      )}
      <div className={css.infoContainer}>
        <div className={css.titleContainer}>
          <h2 className={css.title}>{camper.name}</h2>
          <div className={css.favoriteContainer}>
            <p>{`€ ${Number(camper.price).toFixed(2)}`}</p>
            <svg
              width="26"
              height="24"
              onClick={handleFavoriteClick}
              className={
                isFavoriteCamper
                  ? css.favoriteIconActive
                  : css.favoriteIconInactive
              }
              style={{ cursor: "pointer" }}
            >
              <use href={`${icons}#heart`} />
            </svg>
          </div>
        </div>
        <div className={css.ratingContainer}>
          <svg width="16" height="16">
            <use href={`${icons}#icon-Rating`} />
          </svg>
          <p className={css.reviewText}>
            {camper.rating} ({camper.reviews.length} Reviews)
          </p>
          <svg width="20" height="20">
            <use href={`${icons}#Map`} />
          </svg>{" "}
          {camper.location}
        </div>
        <p className={css.descriptionText}>
          {`${camper.description.substring(0, 55)}` + "..."}
        </p>
        <CamperFeatures camper={camper} />
        <Link
          to={`/catalog/${camper.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button type="button" className={css.showMoreButton}>
            Show more
          </button>
        </Link>
      </div>
    </div>
  );
}
