import {Genre} from "../models/Genre.ts";
import useData from "./useData.ts";

const useGenres = () => useData<Genre>('/genres');
export default useGenres;