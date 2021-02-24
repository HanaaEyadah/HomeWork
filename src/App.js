import {Switch, Route} from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import {ThemeProvider} from "styled-components";
import GlobalStyles from "./styles";



function App(){

  const theme ={
    primaryColor: "blue",
    secondryColor: "purple",
    somethingElse: "black",
  };
  return(
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <Switch>
          <Route exact path= "/">
            <Home />
            </Route>
            <Route path= "/about">
              <About />
          </Route>
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;