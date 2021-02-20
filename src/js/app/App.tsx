import * as React from "react";
import {hot} from "react-hot-loader";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "../utils/general/general";
import {AppHeaderStyled, AppWrap} from "@/js/app/App.styled";


const App = () => {
  return (
    <AppWrap>
      <Router>
        <AppHeaderStyled data-testid="app-header">
        </AppHeaderStyled>
      </Router>
      <div data-testid="select-root" id={'select-root'}></div>
    </AppWrap>
  );
};

declare let module: Object;

export default hot(module)(App);