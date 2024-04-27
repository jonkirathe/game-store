export interface Game {
    id: number,
    name: string,
    background_image: string,
    parent_platforms: {platform: Platform}[] /*Platform[][0]*/
}

export interface Platform {
    id: number,
    name: string,
    slug: string
}