import useGames from "../hooks/useGames.ts";
import {SimpleGrid} from "@chakra-ui/react";
import {GameCard} from "./GameCard.tsx";
import {GameCardSkeleton} from "./GameCardSkeleton.tsx";

export const GamesGrid = () => {
    const {games, isLoading} = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    return (
        <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} padding='10px' spacing={10}>
            {isLoading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton}/>)}
            {games.map((game) => (
                <GameCard key={game.id} game={game}></GameCard>
            ))}
        </SimpleGrid>
    );
};