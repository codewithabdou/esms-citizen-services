import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Agenda, FAQ, Talks, Workshops, Sponsors, Contact } from "./routes";
import Layout from "./components/Layout/Layout";
import ROUTES from "./constants/routes";

const App = () => {
  return (
    <Layout >
      <Routes>
        <Route element={<Home />} path={ROUTES.HOME} />
        <Route element={<Workshops />} path={ROUTES.WORKSHOPS} />
        <Route element={<Talks />} path={ROUTES.TALKS} />
        <Route element={<Agenda />} path={ROUTES.AGENDA} />
        <Route element={<FAQ />} path={ROUTES.FAQ} />
        <Route element={<Sponsors />} path={ROUTES.SPONSORS} />
        <Route element={<Contact />} path={ROUTES.CONTACT} />
      </Routes>
    </Layout>
  );
};

export default App;
