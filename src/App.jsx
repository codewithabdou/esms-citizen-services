import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Agenda, Faq, Conferences, Workshops, Sponsors } from "./routes";
import Layout from "./components/Layout/Layout";
import ROUTES from "./constants/routes";

const App = () => {
  return (
    <Layout >
      <Routes>
        <Route element={<Home />} path={ROUTES.HOME} />
        <Route element={<Workshops />} path={ROUTES.WORKSHOPS} />
        <Route element={<Conferences />} path={ROUTES.CONFERENCES} />
        <Route element={<Agenda />} path={ROUTES.AGENDA} />
        <Route element={<Faq />} path={ROUTES.FAQ} />
        <Route element={<Sponsors />} path={ROUTES.SPONSORS} />
      </Routes>
    </Layout>
  );
};

export default App;
