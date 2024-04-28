import './App.css'
import {Grid, GridItem, Show} from "@chakra-ui/react";
import {Navbar} from "./components/Navbar.tsx";
import {GamesGrid} from "./components/GamesGrid.tsx";
import {GenreList} from "./components/GenreList.tsx";
import {useState} from "react";
import {PlatformSelector} from "./components/PlatformSelector.tsx";
import {GameQuery} from "./models/GameQuery.ts";

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
                        <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre})} />
                    </GridItem>
                </Show>
                <GridItem area="main">
                    <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform}) } />
                    <GamesGrid gameQuery={gameQuery}/>
                </GridItem>
            </Grid>
        </>
    )
}

export default App
