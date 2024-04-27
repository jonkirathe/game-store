import {Badge} from "@chakra-ui/react";

interface Props {
    score: number
}
export const CriticScore = ({score}: Props) => {
    const color = score > 75 ? 'green' : score > 60 ? 'yellow' : ''

    return (
        <Badge colorScheme={color} paddingX={2} fontSize='14px' borderRadius='4px'>{score}</Badge>
    );
};