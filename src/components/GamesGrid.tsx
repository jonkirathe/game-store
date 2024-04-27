import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";

interface Game {
    id: number,
    name: string
}

interface GamesResponse {
    count: number,
    results: Game[]
}
export const GamesGrid = () => {
    const [games, setGames] = useState<Game[]>([]);

    useEffect(() => {
        apiClient.get<GamesResponse>('/games')
            .then((res) => setGames(res.data.results))
            .catch(err => console.log(err.message))
    }, []);
    return (
        <>
            {games.map((game) => (
                <li key={game.id}>{game.name}</li>
            ))}
        </>
    );
};