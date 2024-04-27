import useGames from "../hooks/useGames.ts";

export const GamesGrid = () => {
    const {games} = useGames();
    return (
        <>
            {games.map((game) => (
                <li key={game.id}>{game.name}</li>
            ))}
        </>
    );
};