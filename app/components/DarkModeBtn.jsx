'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export default function DarkModeBtn() {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {currentTheme === 'dark' ? (
        <Button variant="ghost" onClick={() => setTheme('light')}>
          <Moon size={20} />
        </Button>
      ) : (
        <Button variant="ghost" onClick={() => setTheme('dark')}>
          <Sun size={20} />
        </Button>
      )}
    </>
  );
}
