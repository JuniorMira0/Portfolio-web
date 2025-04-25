'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define o tipo do valor do contexto
type AccentColorContextType = {
  accentColor: string;
  setAccentColor: React.Dispatch<React.SetStateAction<string>>;
  colorOptions: string[];
};

const AccentColorContext = createContext<AccentColorContextType | undefined>(
  undefined,
);

export const AccentColorProvider = ({ children }: { children: ReactNode }) => {
  const [accentColor, setAccentColor] = useState('#ff0000');
  const colorOptions = [
    '#ffffff',
    '#f43f5e',
    '#f97316',
    '#facc15',
    '#84cc16',
    '#22d3ee',
    '#8b5cf6',
  ];

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
