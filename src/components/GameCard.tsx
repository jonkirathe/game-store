import {Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";
import {Game} from "../models/Game.ts";
import {PlatformIconList} from "./PlatformIconList.tsx";
import {CriticScore} from "./CriticScore.tsx";
import getCroppedImageUrl from "../services/image-url.ts";
import Emoji from "./Emoji.tsx";

interface Props {
    game: Game
}

export const GameCard = ({game}: Props) => {
    return (
        <>
            <Card>
                <Image src={getCroppedImageUrl(game.background_image)}/>
                <CardBody>
                    <HStack justifyContent='space-between' marginBottom={3}>
                        <PlatformIconList platforms={game.parent_platforms?.map(p => p.platform)}/>
                        <CriticScore score={game.metacritic}/>
                    </HStack>
                    <Heading fontSize='2xl'>{game.name} <Emoji rating={game.rating_top}/></Heading>
                </CardBody>
            </Card>
        </>
    );
};