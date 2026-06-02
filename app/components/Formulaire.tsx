"use client";

import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function Formulaire() {
  const [titre, setTitre] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "/api/maisons/3",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ titre }),
        }
      );

      if (!response.ok) {
        throw new Error("Erreur lors de la mise à jour");
      }

      setTitre("");
      setOpen(true);

    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="mx-auto mt-10 max-w-md">
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white p-6 shadow-lg"
        >
          <h2 className="mb-6 text-2xl font-bold">
            Modifier une propriété
          </h2>

          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium">
              Titre
            </label>

            <input
              type="text"
              value={titre}
              onChange={(e) => setTitre(e.target.value)}
              placeholder="Ex : Jolie Villa"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#008B8B]"
            />
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer rounded-lg bg-[#008B8B] py-3 font-medium text-white transition hover:opacity-90"
          >
            Enregistrer
          </button>
        </form>
      </div>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Propriété mise à jour avec succès !
        </Alert>
      </Snackbar>
    </>
  );
}