'use client';
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { useAccentColor } from '../../context/AccentColorContext';

const SideColumnRight = () => {
  const { accentColor, setAccentColor, colorOptions } = useAccentColor();

  return (
    <div className="fixed right-4 bottom-10 z-40 hidden flex-col items-center md:flex lg:right-8 xl:right-16">
      <div className="mb-4 flex flex-col items-center gap-2">
        {colorOptions.map((color) => (
          <button
            key={color}
            onClick={() => setAccentColor(color)}
            className={`h-5 w-5 cursor-pointer rounded-full border-2 transition-all ${
              accentColor === color
                ? 'scale-110 border-white ring-2 ring-white/50'
                : 'border-gray-600 hover:border-gray-400'
            }`}
            style={{ backgroundColor: color }}
            aria-label={`Mudar cor para ${color}`}
            title={color}
          />
        ))}
        <input
          type="color"
          value={accentColor}
          onChange={(e) => setAccentColor(e.target.value)}
          className="h-6 w-6 cursor-pointer appearance-none rounded-full border-none bg-transparent p-0"
          title="Escolher cor personalizada"
        />
      </div>
      <span className="[writing-mode:vertical-lr] text-xs uppercase tracking-widest text-gray-500">
        Scroll Down
      </span>
      <ArrowDown className="h-5 w-5 text-gray-500" />
    </div>
  );
};

export default SideColumnRight;
