import axios from "axios";


const api = axios.create({
  baseURL: "https://danielt3k.pythonanywhere.com/around",
  headers: {
    "Content-Type": "application/json",
  },
});

export default class API {
  getPlaces = async (search, category) => {
    let url = "/places/";
    let query = new URLSearchParams();
    if (search) {
      query.append("search", search);
    }
    if (category) {
      query.append("category", category);
    }

    if (query.toString() !== "") {
      url += "?" + query.toString();
    }

    const places = await api
      .get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return places;
  };
  getCategories = async () => {
    const categories = await api
      .get("/categories/")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return categories;
  };
}
