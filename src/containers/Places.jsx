import Footer from "../components/common/Footer";
import PlacesHeader from "../components/common/PlacesHeader";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";
import Card from "../components/common/Card";
import { fetchPlaces } from "../reducks/places/operations";
import { getPlaces } from "../reducks/places/selectors";
import { fetchFromLocalStorage } from "../reducks/favourites/operations";
import { getCategories } from "../reducks/categories/selectors";

const Places = () => {
  const parsed = queryString.parse(window.location.search);
  const [search, setSearch] = useState(null);
  const [category, setCategory] = useState([]);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const places = getPlaces(selector);
  console.log(places);
  useEffect(() => {
    dispatch(fetchFromLocalStorage());

    if (parsed.search !== undefined) {
      setSearch(parsed.search);
    }
    if (parsed.category !== undefined) {
      setCategory(parsed.category);
    }
  }, []);
  const categories = getCategories(selector);
  useEffect(() => {
    if (search != null || category != null) {
      dispatch(fetchPlaces(search, category));
    }
  }, [search, category]);
  return (
    <>
      <PlacesHeader />
      <section class="places-container">
        <h2 className="place-heading">Places To Visit</h2>
        <div className="places-items">
          {places.map((place) => (
            <Card key={place.id} place={place} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Places;
