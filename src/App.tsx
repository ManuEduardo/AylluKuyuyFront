import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {Welcome, Register, Login} from "./pages"
import { ROUTES } from "./models";
import { ProtectedRoute, NavWrapper } from "./components";
import { FamilyProvider } from "./context";

function App() {
  //const URL = import.meta.env.VITE_URL_API;

  return (
    <BrowserRouter>
      <FamilyProvider>
        <Routes>
          <Route path={ROUTES.welcome} element={<Welcome/>} />
          <Route path={ROUTES.login} element={<Login/>} />
          <Route path={ROUTES.register} element={<Register/>} />
          <Route element={<ProtectedRoute redirectTo={ROUTES.welcome} />}>
            <Route element={<NavWrapper />}>
              <Route path={ROUTES.home} element={<h1>home</h1>} />
              <Route path={ROUTES.familyRoles} element={<h1>familia</h1>} />
              <Route path={ROUTES.myHome} element={<h1>hogar</h1>} />
              <Route path={ROUTES.zone} element={<h1>zone</h1>} />
              <Route path={ROUTES.bag} element={<h1>mochila</h1>} />
              <Route path={ROUTES.plan} element={<h1>plan</h1>} />
              <Route path={ROUTES.resources} element={<h1>recursos</h1>} />
            </Route>
          </Route>

          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </FamilyProvider>
    </BrowserRouter>
  );
}

export default App;
