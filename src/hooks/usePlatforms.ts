import platforms from "../data/platforms.ts";

// const usePlatforms = () => useData<Platform>('platforms/lists/parents')
const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });

export default usePlatforms;
