import React, { useEffect, useState } from "react";
import { addFavourite } from "../../reducks/favourites/operations";
import { getFavourites } from "../../reducks/favourites/selectors";
import { useSelector, useDispatch } from "react-redux";
import Imglike from "../../assets/img/favorite.svg";
import Places from "../../containers/Places";

const Card = ({ place }) => {
  const dispatch = useDispatch();
  const clickFavourite = (place) => {
    dispatch(addFavourite(place));
  };
  const selector = useSelector((state) => state);
  const favourites = getFavourites(selector);
  const [showLikeButton, setShowLikeButton] = useState(true);
  useEffect(() => {
    let favoritePlace = favourites.filter(
      (favourite) => favourite.id === place.id
    );
    if (favoritePlace.length > 0) {
      setShowLikeButton(false);
    }
  }, [favourites]);

  return (
    <>
        <div className="category-list">
          <div className="category-image">
            <img src={place.image} alt="" />
            <div className="like">
              <img
                src={Imglike}
                onClick={() => {
                  clickFavourite(place);
                }}
                alt=""
              />
            </div>
          </div>
          <div className="category-text">
            <div className="category-heading">
              <h1>{place.name}</h1>
            </div>
            <div className="gridsubheading">
              <h2>{place.place_type}</h2>
            </div>
            <div className="gridtext">
      
              <p>{place.description}</p>
            </div>
            <div className="input-button">
              <a href={place.google_map_link} target="_blank">
                {" "}
                Direction{" "}
              </a>
            </div>
          </div>
        </div>
    </>
  );
};

export default Card;
