'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { COLOR_OPTIONS, DEFAULT_ACCENT_COLOR } from '../constants/colors';

// Define o tipo do valor do contexto
type AccentColorContextType = {
  accentColor: string;
  setAccentColor: React.Dispatch<React.SetStateAction<string>>;
  colorOptions: readonly string[];
};

const AccentColorContext = createContext<AccentColorContextType | undefined>(
  undefined,
);

export const AccentColorProvider = ({ children }: { children: ReactNode }) => {
  const [accentColor, setAccentColor] = useState(DEFAULT_ACCENT_COLOR);
  const colorOptions = COLOR_OPTIONS;

  return (
    <AccentColorContext.Provider
      value={{ accentColor, setAccentColor, colorOptions }}
    >
      {children}
    </AccentColorContext.Provider>
  );
};

// Hook customizado para facilitar o uso do contexto
export const useAccentColor = () => {
  const context = useContext(AccentColorContext);
  if (context === undefined) {
    throw new Error('useAccentColor must be used within a AccentColorProvider');
  }
  return context;
};
