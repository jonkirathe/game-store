import genres from "../data/genres.ts";

// const useGenres = () => useData<Genre>('/genres');
const useGenres = () => ({ data: genres, isLoading: false, error: null })

export default useGenres;