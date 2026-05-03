"use client";

import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import type { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import UploadMedia from "../components/UploadMedia";
import { ScrollFadeIn } from "../components/ScrollFadeIn";

const communes = [
  { value: "ngaliema", label: "Ngaliema" },
  { value: "limete", label: "Limete" },
  { value: "kitambo", label: "Kitambo" },
  { value: "masina", label: "Masina" },
];

const propertyTypes = [
  { value: "maison", label: "Maison" },
  { value: "appartement", label: "Appartement" },
  { value: "bureau", label: "Bureau" },
  { value: "terrain", label: "Terrain" },
];

const operations = [
  { value: "vente", label: "Vente" },
  { value: "location", label: "Location" },
];

type FormValues = {
  nom: string;
  commune: string;
  quartier: string;
  avenue: string;
  numero: string;
  typeBien: string;
  operation: string;
  prix: string;
  description: string;
  medias: File[];
};

export default function AjoutPage() {
  const [formValues, setFormValues] = useState<FormValues>({
    nom: "",
    commune: "",
    quartier: "",
    avenue: "",
    numero: "",
    typeBien: "",
    operation: "",
    prix: "",
    description: "",
    medias: [],
  });

  const mediaCount = useMemo(() => formValues.medias.length, [formValues.medias]);

  const fieldStyles = {
    color: "var(--app-text)",
    '& .MuiInputBase-root': {
      color: "var(--app-text)",
      backgroundColor: "rgba(255,255,255,0.05)",
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: "rgba(148,163,184,0.5)",
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: "rgba(148,163,184,0.8)",
    },
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: "#BFA75C",
    },
    '& .MuiInputLabel-root': {
      color: "var(--app-text)",
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: "var(--app-text)",
    },
    '& .MuiFormLabel-root': {
      color: "var(--app-text)",
    },
    '& .MuiSvgIcon-root': {
      color: "var(--app-text)",
    },
    '& .MuiSelect-icon': {
      color: "var(--app-text)",
    },
  } as const;

  const handleChange =
    (field: keyof FormValues) =>
    (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>
    ) => {
      setFormValues((current) => ({
        ...current,
        [field]: event.target.value,
      }));
    };

  const handleMediasChange = (files: File[]) => {
    setFormValues((current) => ({
      ...current,
      medias: files,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Envoi du formulaire", formValues);
    alert("Formulaire envoyé avec succès !");
  };

  return (
    <section className="min-h-screen bg-[var(--app-bg)] text-[var(--app-text)] py-10 px-4 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <ScrollFadeIn>
          <div className="mb-10 rounded-[28px] border border-slate-700 bg-[var(--surface-variant)]/80 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:p-12">
            <h1 className="text-4xl font-semibold text-[var(--app-text)] mb-3">Ajout d&apos;informations</h1>
            <p className="max-w-3xl text-slate-400 leading-8">
              Déposez votre bien immobilier avec un formulaire clair et moderne. Vous pouvez ajouter plusieurs images et vidéos dans le même uploader, puis choisir les options de commune, quartier et type de bien.
            </p>
          </div>
        </ScrollFadeIn>

        <form onSubmit={handleSubmit} className="grid gap-8 lg:grid-cols-[1.25fr_0.85fr]">
          <div className="space-y-6 rounded-[24px] bg-[var(--surface)]/95 p-6 shadow-lg shadow-slate-900/10 backdrop-blur-sm text-[var(--app-text)] lg:p-8">
            <ScrollFadeIn>
              <div className="grid gap-5 sm:grid-cols-2">
                <TextField
                  label="Nom du propriétaire"
                  value={formValues.nom}
                  onChange={handleChange("nom")}
                  fullWidth
                  sx={fieldStyles}
                />
                <FormControl fullWidth sx={fieldStyles}>
                  <InputLabel id="commune-label">Commune</InputLabel>
                  <Select
                    labelId="commune-label"
                    label="Commune"
                    value={formValues.commune}
                    onChange={handleChange("commune")}
                    sx={fieldStyles}
                  >
                    {communes.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <TextField
                  label="Quartier"
                  value={formValues.quartier}
                  onChange={handleChange("quartier")}
                  fullWidth
                  sx={fieldStyles}
                />
                <TextField
                  label="Avenue"
                  value={formValues.avenue}
                  onChange={handleChange("avenue")}
                  fullWidth
                  sx={fieldStyles}
                />

                <TextField
                  label="Numéro"
                  value={formValues.numero}
                  onChange={handleChange("numero")}
                  fullWidth
                  sx={fieldStyles}
                />
                <FormControl fullWidth sx={fieldStyles}>
                  <InputLabel id="type-label">Type de bien</InputLabel>
                  <Select
                    labelId="type-label"
                    label="Type de bien"
                    value={formValues.typeBien}
                    onChange={handleChange("typeBien")}
                    sx={fieldStyles}
                  >
                    {propertyTypes.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth sx={fieldStyles}>
                  <InputLabel id="operation-label">Opération</InputLabel>
                  <Select
                    labelId="operation-label"
                    label="Opération"
                    value={formValues.operation}
                    onChange={handleChange("operation")}
                    sx={fieldStyles}
                  >
                    {operations.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  label="Prix / loyer"
                  value={formValues.prix}
                  onChange={handleChange("prix")}
                  fullWidth
                  placeholder="Ex : 1500 USD"
                  sx={fieldStyles}
                />
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn>
              <TextField
                label="Description du bien"
                value={formValues.description}
                onChange={handleChange("description")}
                multiline
                rows={5}
                fullWidth
                sx={fieldStyles}
              />
            </ScrollFadeIn>

            <div className="pt-1">
              <Button
                type="submit"
                variant="contained"
                sx={{
                  bgcolor: "#008B8B",
                  textTransform: "capitalize",
                  fontSize: "18px",
                  px: 5,
                  py: 1.6,
                  '&:hover': { bgcolor: '#0f7880' },
                }}
              >
                Enregistrer
              </Button>
            </div>
          </div>

          <div className="space-y-6 rounded-[24px] border border-slate-700 bg-[var(--surface-variant)]/90 p-6 shadow-lg shadow-slate-900/20 lg:p-8">
            <ScrollFadeIn>
              <div className="rounded-3xl border border-slate-700 bg-slate-950/90 p-5">
                <h2 className="text-xl font-semibold text-white mb-3">Media</h2>
                <p className="text-sm text-slate-400">
                  Ajoutez images et vidéos en un seul endroit. Les aperçus s’affichent immédiatement.
                </p>
              </div>
            </ScrollFadeIn>

            <UploadMedia onChange={handleMediasChange} />

            <div className="rounded-3xl bg-slate-950/90 p-5 text-slate-300">
              <p className="text-sm">Fichiers sélectionnés : {mediaCount}</p>
              <p className="text-sm text-slate-400">Types pris en charge : images et vidéos</p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
