import useGenres from "../hooks/useGenres.ts";
import {Button, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";
import {Genre} from "../models/Genre.ts";


interface Props {
    onSelectedGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

export const GenreList = ({onSelectedGenre, selectedGenre}: Props) => {
    const {data, isLoading} = useGenres()

    if (isLoading) return <Spinner/>

    return (
        <List>
            {data.map((genre) => (
                <ListItem key={genre.id} paddingY='5px'>
                    <HStack>
                        <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
                        <Button
                            colorScheme={selectedGenre?.id === genre.id ? 'blue' : 'white'}
                            fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal'}
                            onClick={() => onSelectedGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
                    </HStack>
                </ListItem>

            ))}
        </List>
    );
};