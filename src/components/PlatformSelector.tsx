import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms.ts";
import {Platform} from "../models/Platform.ts";

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}

export const PlatformSelector = ({onSelectPlatform, selectedPlatform}: Props) => {
    const {data} = usePlatforms();

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                {selectedPlatform?.name || 'Platforms'}
            </MenuButton>
            <MenuList>
                {data.map(platform => <MenuItem onClick={() => onSelectPlatform(platform)}
                                                key={platform.id}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    );
};