import {Game} from "../models/Game.ts";
import useData from "./useData.ts";
import {Genre} from "../models/Genre.ts";

const useGames = (selectedGenre: Genre | null) =>
    useData<Game>('/games',
        {params: {genres: selectedGenre?.id}}, [selectedGenre?.id])

export default useGames;