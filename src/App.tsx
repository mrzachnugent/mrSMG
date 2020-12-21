import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header";
import { GlobalStyle } from "./GlobalStyle";
import { Footer } from "./components/Footer";
import Homepage from "./components/homepage";

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
