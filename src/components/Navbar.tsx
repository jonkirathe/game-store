import {HStack, Image} from "@chakra-ui/react";
import logo from '../assets/images/logo/logo.webp'
import {ColorModeSwitch} from "./ColorModeSwitch.tsx";
import {SearchingGames} from "./SearchingGames.tsx";
export const Navbar = () => {
    return (
        <>
        <HStack justifyContent='space-between' padding='10px'>
            <Image src={logo} boxSize='60px'></Image>
            <SearchingGames/>
            <ColorModeSwitch/>
        </HStack>
        </>
    );
};
