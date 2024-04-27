import {HStack, Image, Text} from "@chakra-ui/react";
import logo from '../assets/images/logo/logo.webp'
import {ColorModeSwitch} from "./ColorModeSwitch.tsx";
export const Navbar = () => {
    return (
        <>
        <HStack justifyContent='space-between' padding='10px'>
            <Image src={logo} boxSize='60px'></Image>
            <Text>Home</Text>
            <ColorModeSwitch/>
        </HStack>
        </>
    );
};
