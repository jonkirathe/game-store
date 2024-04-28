import './App.css'
import {Grid, GridItem, Show} from "@chakra-ui/react";
import {Navbar} from "./components/Navbar.tsx";
import {GamesGrid} from "./components/GamesGrid.tsx";
import {GenreList} from "./components/GenreList.tsx";
import {useState} from "react";
import {Genre} from "./models/Genre.ts";

function App() {
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)

    return (
        <>
            <Grid
                templateAreas={{
                    base: `"nav" "main"`,
                    lg: `"nav nav" "aside main"` //1024px
                }}
                templateColumns={{
                    base: '1fr',
                    lg: '250px 1fr'
                }}
            >
                <GridItem area="nav"><Navbar/></GridItem>
                <Show above="lg">
                    <GridItem area="aside" paddingX={5}>
                        <GenreList selectedGenre={selectedGenre} onSelectedGenre={(genre) => setSelectedGenre(genre)}/>
                    </GridItem>
                </Show>
                <GridItem area="main">
                    <GamesGrid selectedGenre={selectedGenre}/>
                </GridItem>
            </Grid>
        </>
    )
}

export default App
