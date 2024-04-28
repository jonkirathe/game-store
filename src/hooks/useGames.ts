import {Game} from "../models/Game.ts";
import useData from "./useData.ts";
import {Genre} from "../models/Genre.ts";
import {Platform} from "../models/Platform.ts";

const useGames = (selectedGenre: Genre | null, selectedPlatForm: Platform | null) =>
    useData<Game>('/games',
        {
            params: {
                genres: selectedGenre?.id,
                platforms: selectedPlatForm?.id
            }
        }, [selectedGenre?.id, selectedPlatForm?.id])

export default useGames;