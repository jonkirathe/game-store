import {Heading} from "@chakra-ui/react";
import {GameQuery} from "../models/GameQuery.ts";

interface Props {
    gameQuery: GameQuery;
}

export const GameHeading = ({gameQuery}: Props) => {
    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`;

    return (
        <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>
    );
};