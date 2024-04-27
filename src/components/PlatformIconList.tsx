import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import {HStack, Icon} from "@chakra-ui/react";
import { IconType } from "react-icons";
import {Platform} from "../models/Game.ts";

const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe
}

interface Props {
    platforms: Platform[]
}
export const PlatformIconList = ({platforms}: Props) => {
    return (
        <HStack>
            {platforms.map((platform) => (
                <Icon as={iconMap[platform.slug]} color='gray.500'/>
            ))}
        </HStack>
    );
};