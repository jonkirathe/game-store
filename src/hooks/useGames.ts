import {Game} from "../models/Game.ts";
import useData from "./useData.ts";
import {GameQuery} from "../models/GameQuery.ts";

const useGames = (gameQuery: GameQuery) =>
    useData<Game>(
        "/games",
        {
            params: {
                genres: gameQuery.genre?.id,
                platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText
            },
        },
        [gameQuery]
    );

export default useGames;