import React, { useState, useEffect } from "react";
import HomePage from "./pages/HomePage/index";
import MobileHomePage from "./pages/mobileHomePage/index";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";

const App: React.FC = () =>
{
  const { i18n } = useTranslation();
  const [paltform, setPlatform] = useState(true)
  const language = i18n.language;
  useEffect(() =>
  {
    const platformValue = window.navigator.userAgent.toLowerCase()
    const boolean = platformValue.includes('window')
    setPlatform(boolean)
    console.log(platformValue)
  }, [])
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={paltform ? HomePage : MobileHomePage} />

      </Switch>
    </BrowserRouter>
  );
};

export default App;
