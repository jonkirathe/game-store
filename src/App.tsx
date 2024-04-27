import './App.css'
import {Grid, GridItem, Show} from "@chakra-ui/react";
import {Navbar} from "./components/Navbar.tsx";
import {GamesGrid} from "./components/GamesGrid.tsx";

function App() {

  return (
    <>
      <Grid templateAreas={{
        base:  `"nav" "main"`,
        lg: `"nav nav" "aside main"` //1024px
      }}>
        <GridItem area="nav"><Navbar/></GridItem>
          <Show above="lg">
              <GridItem area="aside">Aside</GridItem>
          </Show>
        <GridItem area="main">
            <GamesGrid/>
        </GridItem>
      </Grid>
    </>
  )
}

export default App
