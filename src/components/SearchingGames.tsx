import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/bs";
import {useRef} from "react";

interface Props {
    onSearch: (searchText: string) => void;
}

export const SearchingGames = ({onSearch}: Props) => {
    const searchInputRef = useRef<HTMLInputElement>(null);
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            if (searchInputRef.current) onSearch(searchInputRef.current.value)
        }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch/>}/>
                <Input ref={searchInputRef} borderRadius={20} placeholder='Search games...' variant='filled'/>
            </InputGroup>
        </form>
    );
};