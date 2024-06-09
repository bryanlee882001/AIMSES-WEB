import React, { createContext, useState, useEffect } from 'react';
import { selections as initialSelections } from '../config/config';

type Selection = {
  name: string;
  active: boolean;
};

type SelectionGroup = {
  [key: string]: Selection[];
};

type SelectionContextType = {
  selections: SelectionGroup;
  setSelections: React.Dispatch<React.SetStateAction<SelectionGroup>>;
};

export const SelectionContext = createContext<SelectionContextType>(
  null as unknown as SelectionContextType,
);

type SelectionProviderProps = {
  children: React.ReactNode;
};

export const SelectionProvider = ({ children }: SelectionProviderProps) => {
  const [selections, setSelections] = useState<SelectionGroup>({});

  // Initialize selections from config
  useEffect(() => {
    setSelections(initialSelections);
  }, []);
  return (
    <SelectionContext.Provider
      value={{
        selections,
        setSelections,
      }}
    >
      {children}
    </SelectionContext.Provider>
  );
};
