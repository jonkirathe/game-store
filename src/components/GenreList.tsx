import useGenres from "../hooks/useGenres.ts";
import {Button, Heading, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";
import {Genre} from "../models/Genre.ts";


interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

export const GenreList = ({onSelectGenre, selectedGenre}: Props) => {
    const {data, isLoading} = useGenres()

    if (isLoading) return <Spinner/>
    return (
        <>
            <Heading fontSize="2xl" marginTop={9} marginBottom={3}>
                Genres
            </Heading>
            <List>
                {data.map((genre) => (
                    <ListItem key={genre.id} paddingY="5px">
                        <HStack>
                            <Image
                                boxSize="32px"
                                borderRadius={8}
                                objectFit="cover"
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Button
                                whiteSpace="normal"
                                textAlign="left"
                                fontSize={selectedGenre?.id === genre.id ? 'large' : 'md'}
                                colorScheme={selectedGenre?.id === genre.id ? 'blue' : 'white'}
                                fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal'}
                                onClick={() => onSelectGenre(genre)}
                                variant="link"
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
}