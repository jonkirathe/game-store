import useData from "./useData.ts";
import {Platform} from "../models/Platform.ts";

const usePlatforms = () => useData<Platform>('platforms/lists/parents')

export default usePlatforms;
