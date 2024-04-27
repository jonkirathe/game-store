import useGenres from "../hooks/useGenres.ts";

export const GenreList = () => {
    const {genres} = useGenres()
    return (
        <>
            {genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>

            ))}
        </>
    );
};