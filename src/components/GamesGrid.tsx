import useGames from "../hooks/useGames.ts";
import {SimpleGrid} from "@chakra-ui/react";
import {GameCard} from "./GameCard.tsx";
import {GameCardSkeleton} from "./GameCardSkeleton.tsx";
import {GameCardContainer} from "./GameCardContainer.tsx";

export const GamesGrid = () => {
    const {data, isLoading} = useGames()
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    return (
        <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} padding='10px' spacing={6}>
            {isLoading && skeletons.map(skeleton => (
                <GameCardContainer key={skeleton}>
                    <GameCardSkeleton key={skeleton}/>
                </GameCardContainer>
            ))}
            {data.map((game) => (
                <GameCardContainer key={game.id}>
                <GameCard key={game.id} game={game}></GameCard>
                </GameCardContainer>
            ))}
        </SimpleGrid>
    );
};