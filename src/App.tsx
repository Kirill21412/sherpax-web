import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";

const App: React.FC = () =>
{
  const { i18n } = useTranslation();
  const language = i18n.language;
  return (
    <Suspense fallback={<div>Loading...</div>}>

    </Suspense>
  );
};

export default App;
