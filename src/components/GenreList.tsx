import useGenres from "../hooks/useGenres.ts";
import {Button, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";
import {Genre} from "../models/Genre.ts";


interface Props {
    onSelectedGenre: (genre: Genre) => void;
}
export const GenreList = ({onSelectedGenre}:Props) => {
    const {data, isLoading} = useGenres()

    if(isLoading) return <Spinner/>

    return (
        <List>
            {data.map((genre) => (
                <ListItem key={genre.id} paddingY='5px'>
                    <HStack>
                        <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
                        <Button onClick={() => onSelectedGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
                    </HStack>
                </ListItem>

            ))}
        </List>
    );
};