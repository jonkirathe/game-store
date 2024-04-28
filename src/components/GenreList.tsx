import useGenres from "../hooks/useGenres.ts";
import {HStack, Image, List, ListItem, Spinner, Text} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";

export const GenreList = () => {
    const {data, isLoading} = useGenres()

    if(isLoading) return <Spinner/>

    return (
        <List>
            {data.map((genre) => (
                <ListItem key={genre.id} paddingY='5px'>
                    <HStack>
                        <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
                        <Text fontSize='lg'>{genre.name}</Text>
                    </HStack>
                </ListItem>

            ))}
        </List>
    );
};