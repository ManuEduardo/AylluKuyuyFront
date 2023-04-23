import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  Welcome,
  Register,
  Login,
  Home,
  FamilyPage,
  NotFound,
  MyHome,
  Zone,
  Bag,
  Plan,
  Resources
} from "./pages";
import { ROUTES } from "./models";
import { ProtectedRoute, NavWrapper } from "./components";
import { FamilyProvider } from "./context";

function App() {
  //const URL = import.meta.env.VITE_URL_API;

  return (
    <BrowserRouter>
      <FamilyProvider>
        <Routes>
          <Route path="/" element={<Navigate to={ROUTES.home}></Navigate>} />
          <Route path={ROUTES.welcome} element={<Welcome />} />
          <Route path={ROUTES.login} element={<Login />} />
          <Route path={ROUTES.register} element={<Register />} />
          <Route element={<ProtectedRoute redirectTo={ROUTES.welcome} />}>
            <Route element={<NavWrapper />}>
              <Route path={ROUTES.home} element={<Home />} />
              <Route path={ROUTES.familyRoles} element={<FamilyPage />} />
              <Route path={ROUTES.myHome} element={<MyHome />} />
              <Route path={ROUTES.zone} element={<Zone />} />
              <Route path={ROUTES.bag} element={<Bag />} />
              <Route path={ROUTES.plan} element={<Plan/>} />
              <Route path={ROUTES.resources} element={<Resources/>} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </FamilyProvider>
    </BrowserRouter>
  );
}

export default App;
