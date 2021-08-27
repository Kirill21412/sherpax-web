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
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isIOS, setIsIOS] = useState<boolean>(false);
  const [isAndroid, setIsAndroid] = useState<boolean>(false);
  const [isSafari, setIsSafari] = useState<boolean>(false);
  const [isBrowser, setIsBrowser] = useState<boolean>(true);
  const [ua, setUa] = useState<string>("");
  const [groupString, setGroupString] = React.useState<string>("");
  const [inviteString, setInviteString] = useState<string>("");
  const [isWindows, setIsWindows] = useState(false);
  useEffect(() =>
  {
    ua?.match(/windows/) && setIsWindows(true);
  }, [ua]);
  useEffect(() =>
  {
    if (typeof window !== "undefined") {
      setUa(window.navigator.userAgent.toLowerCase());
    }
  });
  useEffect(() =>
  {
    ua?.match(/(iphone|ipad|ipod)/) && setIsIOS(true);
    ua?.match(/android[\s\/]([\d\.]+)/) && setIsAndroid(true);
    ua?.match(/version\/([\d.]+).*safari/) && setIsSafari(true);
    ua?.match(/micromessenger/i) && setIsBrowser(false);
  }, [ua]);
  useEffect(() =>
  {
    if (window.location.href.split("group/#")[1]) {
      setGroupString(window.location.href.split("group/#")[1]);
    } else {
      setGroupString("");
    }
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={
          (isIOS || isAndroid) ? MobileHomePage : HomePage
        } />

      </Switch>
    </BrowserRouter>
  );
};

export default App;
