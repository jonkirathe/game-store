import useGenres from "../hooks/useGenres.ts";

export const GenreList = () => {
    const {data} = useGenres()
    return (
        <>
            {data.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>

            ))}
        </>
    );
};