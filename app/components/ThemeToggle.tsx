"use client";

import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const STORAGE_KEY = "immo-theme";

type ThemeMode = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>("dark");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
    const initialTheme = savedTheme === "light" ? "light" : "dark";
    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
  }, []);

  const handleToggle = () => {
    const nextTheme: ThemeMode = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  };

  return (
    <Button
      onClick={handleToggle}
      variant="outlined"
      sx={{
        color: theme === "dark" ? "#ffffff" : "#ffffff",
        borderColor: theme === "dark" ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.3)",
        textTransform: "none",
        fontWeight: 600,
        px: 3,
        py: 1,
        '&:hover': {
          borderColor: theme === "dark" ? "rgba(255,255,255,0.6)" : "rgba(16,24,37,0.5)",
          bgcolor: theme === "dark" ? "rgba(255,255,255,0.08)" : "rgba(16,24,37,0.08)",
        },
      }}
      startIcon={theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
    >
      {theme === "dark" ? "Clair" : "Sombre"}
    </Button>
  );
}
