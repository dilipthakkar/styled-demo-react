import "./App.css";
import Header from "./components/header";
import { FillItem, Grid, GridItem } from "./styled-component/container";
function App() {
  return (
    <div className="App">
      <Grid>
        <GridItem
          lg={4}
          style={{
            backgroundColor: "red",
            display: "block",
            width: 300,
            height: 400,
          }}
        ></GridItem>

        <GridItem
          lg={3}
          style={{
            backgroundColor: "teal",
            display: "block",
            width: 300,
            height: 400,
          }}
        ></GridItem>
      </Grid>
    </div>
  );
}

export default App;
