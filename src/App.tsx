import React, { FC, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header";
import { GlobalStyle } from "./GlobalStyle";
import { Footer } from "./components/Footer";
import Homepage from "./components/homepage";
import { ResultsPage } from "./components/resultsPage/ResultsPage";
import { ContactModal } from "./components/ContactModal";

const App: FC = () => {
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  return (
    <>
      <GlobalStyle />
      <Header setIsContactOpen={setIsContactOpen} />
      {isContactOpen && <ContactModal setIsContactOpen={setIsContactOpen} />}
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/results">
          <ResultsPage />
        </Route>
      </Switch>
      <Footer setIsContactOpen={setIsContactOpen} />
    </>
  );
};

export default App;
