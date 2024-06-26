'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export default function DarkModeBtn() {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div>
      {currentTheme === 'dark' ? (
        <Button onClick={() => setTheme('light')}>
          <Moon />
        </Button>
      ) : (
        <Button onClick={() => setTheme('dark')}>
          <Sun />
        </Button>
      )}
    </div>
  );
}
