import {Game} from "../models/Game.ts";
import useData from "./useData.ts";

const useGames = () => useData<Game>('/games')

export default useGames;