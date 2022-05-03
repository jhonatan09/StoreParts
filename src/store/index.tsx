import React, { createContext, useState, useEffect } from "react";
import { AppContextInterface, Props, responseTypes } from "../types";

import api from "../services/api";

const DataContext = createContext<AppContextInterface>(
  {} as AppContextInterface
);

function DataContextProvider({ children }: Props) {
  const [data, setData] = useState<responseTypes[]>([]);

  const [input, setInput] = useState<string>("");

  const [selected, setSelected] = useState<string>("");

  const [changeState, setChangeState] = useState<boolean>(true);

  const [btnSort, setBtnSort] = useState<boolean>(true);

  const [cres, setCres] = useState<any>();

  const handleClick = () => {
    setChangeState((statePrev) => !statePrev);
    setSelected("");
  };

  const crescentSort = () => {
    const cres = data.sort(function (a, b) {
      return parseFloat(a.price) - parseFloat(b.price);
    });
    setData(cres);
    setBtnSort((statePrev) => !statePrev);
  };

  const decrescentSort = () => {
    const des = data
      .sort(function (a, b) {
        return parseFloat(a.price) - parseFloat(b.price);
      })
      .reverse();
    setData(des);
    setBtnSort((statePrev) => !statePrev);
  };

  useEffect(() => {
    api.get(`store/parts?type=${input || selected}`).then((response) => {
      setData(response.data);
    });
  }, [changeState]);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        input,
        setInput,
        handleClick,
        selected,
        setSelected,
        btnSort,
        crescentSort,
        decrescentSort,
        setChangeState,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export { DataContextProvider, DataContext };
