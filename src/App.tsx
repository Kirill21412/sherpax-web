import React, { useState, useEffect } from "react";
import HomePage from "./pages/HomePage/index";
import MobileHomePage from "./mobileHomePage/index";
import { Route, Switch, BrowserRouter } from "react-router-dom";

const App: React.FC = () =>
{
  const [isIOS, setIsIOS] = useState<boolean>(false);
  const [isAndroid, setIsAndroid] = useState<boolean>(false);
  const [, setIsSafari] = useState<boolean>(false);
  const [, setIsBrowser] = useState<boolean>(true);
  const [ua, setUa] = useState<string>("");
  const [, setIsWindows] = useState(false);
  const [miniScreen, setMiniScreen] = useState(false)
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
  window.onresize = function ()
  {
    watchChangeSize();
  }

  function watchChangeSize()
  {
    var offsetWid = document.documentElement.clientWidth;
    if (offsetWid <= 750) {
      setMiniScreen(true)
    } else {
      setMiniScreen(false)
    }
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={
          (isIOS || isAndroid || miniScreen) ? MobileHomePage : HomePage
        } />

      </Switch>
    </BrowserRouter>
  );
};

export default App;