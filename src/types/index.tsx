import React, { ReactNode, SetStateAction } from "react";

export interface AppContextInterface {
  data: responseTypes[];
  setData: (newState: []) => void;
  input: string;
  setInput: (c: string) => void;
  handleClick(): any;
  selected: string;
  setSelected: (c: string) => void;
  btnSort: boolean;
  crescentSort(): any;
  decrescentSort(): any;
  setChangeState: React.Dispatch<SetStateAction<boolean>>;
  loading: boolean;
  setLoading: (newState: boolean) => void;
}
export interface Props {
  children: ReactNode;
}

export interface responseTypes {
  name: string;
  price: any;
  type: string;
}

export interface Contexts {
  name: string;
  price: string;
  type: string;
}

export interface changeStateBoolean {
  changeState: boolean;
  setChangeState: (newState: boolean) => void;
}

export interface LocationState {
  state: {
    name: string;
    price: string;
    type: string;
  };
}
