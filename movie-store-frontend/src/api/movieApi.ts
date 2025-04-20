import { AddMovieData } from "../types/AddMovie.ts";
import { api } from "./api.ts";

export const GetMovieById = async (id: string) => {
  console.log("/movies/" + id);
  const response = await api.get("/movies/" + id);

  if (response.status !== 200) {
    throw new Error("Something went wrong!");
  }

  const data = response.data;

  if (data === "") {
    throw new Error("data was not accepted");
  }

  return data;
};

export const addMovieRequest = async (dataObject: AddMovieData) => {
  const formData = new FormData();

  formData.append("title", dataObject.title);
  formData.append("description", dataObject.description);
  formData.append("language", dataObject.language);
  formData.append("rating", String(dataObject.rating));

  if (dataObject.movieCover) {
    formData.append("movieCover", dataObject.movieCover);
  }

  const response = await api.post("/movies", formData);

  if (response.status !== 200) {
    throw new Error("Something went wrong!");
  }

  const data = response.data;

  if (data === "") {
    throw new Error("data was not accepted");
  }
};
