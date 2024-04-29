import './App.css'
import {Box, Flex, Grid, GridItem, Show} from "@chakra-ui/react";
import {GamesGrid} from "./components/GamesGrid.tsx";
import {useState} from "react";
import {PlatformSelector} from "./components/PlatformSelector.tsx";
import {GameQuery} from "./models/GameQuery.ts";
import SortSelector from "./components/SortSelector.tsx";
import {GenreList} from "./components/GenreList.tsx";
import {Navbar} from "./components/Navbar.tsx";

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
               {/* <GridItem area="nav">
                    <Navbar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})}/>
                </GridItem>*/}
                <GridItem area="nav"><Navbar/></GridItem>
                <Show above="lg">
                    <GridItem area="aside" paddingX={5}>
                        <GenreList selectedGenre={gameQuery.genre}
                                   onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}/>
                    </GridItem>
                </Show>
                <GridItem area="main">
                    <Box paddingLeft={2}>
                        {/*<GameHeading gameQuery={gameQuery} />*/}

                        <Flex marginBottom={5}>
                            <Box marginRight={5}>
                                <PlatformSelector selectedPlatform={gameQuery.platform}
                                                  onSelectPlatform={(platform) => setGameQuery({
                                                      ...gameQuery,
                                                      platform
                                                  })}/>
                            </Box>
                            <SortSelector sortOrder={gameQuery.sortOrder}
                                          onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
                        </Flex>
                    </Box>
                    <GamesGrid gameQuery={gameQuery}/>
                </GridItem>
            </Grid>
        </>
    )
}

export default App
