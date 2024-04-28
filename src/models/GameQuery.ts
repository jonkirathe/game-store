import {Platform} from "./Platform.ts";
import {Genre} from "./Genre.ts";

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    sortOrder: string;
    searchText: string;
}