import useGames from "../hooks/useGames.ts";
import {SimpleGrid} from "@chakra-ui/react";
import {GameCard} from "./GameCard.tsx";

export const GamesGrid = () => {
    const {games} = useGames();

    return (
        <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} padding='10px' spacing={10}>
            {games.map((game) => (
                <GameCard key={game.id} game={game}></GameCard>
            ))}
        </SimpleGrid>
    );
};