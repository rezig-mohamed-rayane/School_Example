import React, { createContext, useContext, useState, useEffect } from 'react';

export type LatinFont = 'tan-mon-cheri' | 'arsenica' | 'franchy-sage' | 'amort';

export interface FontOption {
  id: LatinFont;
  label: string;
  fontFamily: string;
}

export const FONT_OPTIONS: FontOption[] = [
  { id: 'tan-mon-cheri',  label: 'Tan Mon Cheri',  fontFamily: '"Tan Mon Cheri", "Cormorant Garamond", serif' },
  { id: 'arsenica',       label: 'Arsenica',        fontFamily: '"Arsenica", "Playfair Display", serif' },
  { id: 'franchy-sage',   label: 'Franchy Sage',    fontFamily: '"Franchy Sage", "DM Serif Display", serif' },
  { id: 'amort',          label: 'Amort',           fontFamily: '"Amort", "Libre Baskerville", serif' },
];

interface FontContextType {
  latinFont: LatinFont;
  setLatinFont: (font: LatinFont) => void;
  currentFontFamily: string;
}

const FontContext = createContext<FontContextType | undefined>(undefined);

export function FontProvider({ children }: { children: React.ReactNode }) {
  const [latinFont, setLatinFontState] = useState<LatinFont>(() => {
    const saved = localStorage.getItem('latinFont');
    return (saved as LatinFont) || 'tan-mon-cheri';
  });

  const currentFontFamily =
    FONT_OPTIONS.find((f) => f.id === latinFont)?.fontFamily ??
    FONT_OPTIONS[0].fontFamily;

  const setLatinFont = (font: LatinFont) => {
    setLatinFontState(font);
    localStorage.setItem('latinFont', font);
  };

  // Apply the font to the CSS custom property on every change
  useEffect(() => {
    document.documentElement.style.setProperty('--font-latin-selected', currentFontFamily);
  }, [currentFontFamily]);

  return (
    <FontContext.Provider value={{ latinFont, setLatinFont, currentFontFamily }}>
      {children}
    </FontContext.Provider>
  );
}

export function useFont() {
  const ctx = useContext(FontContext);
  if (!ctx) throw new Error('useFont must be used within a FontProvider');
  return ctx;
}
