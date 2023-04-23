import React, { createContext, useState, useContext, ReactNode } from "react";
import {Family, EmptyFamily} from "../models";
import useLocalStorage from "../hooks/useLocalStorage";

const familyContext = createContext<Family>(EmptyFamily);
const setFamilyContext = createContext((family:Family) => {});
const voidFamilyContext = createContext(()=>{});

export const useFamilyContext = () => useContext(familyContext);
export const useSetFamilyContext = () => useContext(setFamilyContext);
export const useVoidFamilyContext = () => useContext(voidFamilyContext);

type PropsChatProvider = {
  children : ReactNode
}

const FamilyProvider = ({ children }: PropsChatProvider) => {
  const [family, setFamily] = useState(EmptyFamily);
  const voidFamily = () => {
    setFamily(EmptyFamily);
  }

  return (
    <familyContext.Provider value={family}>
      <setFamilyContext.Provider value={setFamily}>
          <voidFamilyContext.Provider value={voidFamily}>
          {children}
          </voidFamilyContext.Provider>
      </setFamilyContext.Provider>
    </familyContext.Provider>
  );
};

export default FamilyProvider;

