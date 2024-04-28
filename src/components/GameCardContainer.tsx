import {Box} from "@chakra-ui/react";
import {ReactNode} from "react";


interface Props {
    children: ReactNode
}
export const GameCardContainer = ({children}: Props) => {
    return (
        <Box borderRadius={10} overflow={"hidden"}>{children}</Box>
    );
};