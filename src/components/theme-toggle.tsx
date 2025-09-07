"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="cursor-pointer"
      onClick={toggleTheme}
    >
      {mounted ? (
        theme === "dark" ? (
          <Sun className="h-6 w-6 " />
        ) : (
          <Moon className="h-6 w-6" />
        )
      ) : null}
    </Button>
  );
}
