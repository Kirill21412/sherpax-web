import React from "react";
import HomePage from "./pages/HomePage/index";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";

const App: React.FC = () =>
{
  const { i18n } = useTranslation();
  const language = i18n.language;
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />

      </Switch>
    </BrowserRouter>
  );
};

export default App;
