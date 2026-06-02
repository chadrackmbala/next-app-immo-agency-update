"use client";

import {
    useState,
    useMemo,
    type ChangeEvent,
    type FormEvent,
} from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import UploadMedia from "../components/UploadMedia";
import { ScrollFadeIn } from "../components/ScrollFadeIn";

type FormValues = {
    titre: string;
    commune: string;
    quartier: string;
    avenue: string;
    type_produit: string;
    description: string;
};

export default function SavingForm() {
    const [formValues, setFormValues] =
        useState<FormValues>({
            titre: "",
            commune: "",
            quartier: "",
            avenue: "",
            type_produit: "",
            description: "",
        });

    const communes = [
        "Gombe",
        "Barumbu",
        "Kinshasa",
        "Lingwala",
        "Kintambo",
        "Ngaliema",
        "Bandalungwa",
        "Kasa-Vubu",
        "Kalamu",
        "Lemba",
        "Matete",
        "Ngaba",
        "Limete",
        "Masina",
        "Kimbanseke",
        "Nsele",
        "Maluku",
        "Mont-Ngafula",
        "Selembao",
        "Bumbu",
        "Makala",
        "Kisenso",
        "Matonge",
    ];

    const productTypes = [
        "Appartement",
        "Maison",
        "Villa",
        "Bureau",
        "Parcelle",
        "Entrepôt",
        "Immeuble",
    ];

    const [images, setImages] = useState<File[]>([]);

    const [successOpen, setSuccessOpen] =
        useState(false);

    const [errorOpen, setErrorOpen] =
        useState(false);

    const mediaCount = useMemo(
        () => images.length,
        [images]
    );

    const fieldStyles = {
        color: "var(--app-text)",
        "& .MuiInputBase-root": {
            color: "var(--app-text)",
            backgroundColor:
                "rgba(255,255,255,0.05)",
        },
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(148,163,184,0.5)",
        },
        "&:hover .MuiOutlinedInput-notchedOutline":
        {
            borderColor:
                "rgba(148,163,184,0.8)",
        },
        "& .Mui-focused .MuiOutlinedInput-notchedOutline":
        {
            borderColor: "#008B8B",
        },
    };

    const handleChange =
        (field: keyof FormValues) =>
            (event: ChangeEvent<HTMLInputElement>) => {
                setFormValues((prev) => ({
                    ...prev,
                    [field]: event.target.value,
                }));
            };

    const handleMedia = (files: File[]) => {
        setImages(files);
    };

    const handleSubmit = async (
        e: FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        try {
            if (images.length === 0) {
                setErrorOpen(true);
                return;
            }

            const data = new FormData();

            data.append("titre", formValues.titre);
            data.append("commune", formValues.commune);
            data.append("quartier", formValues.quartier);
            data.append("avenue", formValues.avenue);
            data.append(
                "type_produit",
                formValues.type_produit
            );
            data.append(
                "description",
                formValues.description
            );

            images.forEach((image) => {
                data.append("images", image);
            });

            const res = await fetch(
                "http://localhost:3001/produits",
                {
                    method: "POST",
                    body: data,
                }
            );

            const result = await res.json();

            if (!res.ok) {
                throw new Error(
                    result.message ||
                    "Erreur serveur"
                );
            }

            setSuccessOpen(true);

            setFormValues({
                titre: "",
                commune: "",
                quartier: "",
                avenue: "",
                type_produit: "",
                description: "",
            });

            setImages([]);
        } catch (err) {
            console.error(err);
            setErrorOpen(true);
        }
    };

    return (
        <section className="min-h-screen px-4 py-10 text-[var(--app-text)]">
            <div className="mx-auto max-w-5xl">
                <ScrollFadeIn>
                    <h1 className="mb-8 text-3xl font-bold">
                        Ajouter un bien immobilier
                    </h1>
                </ScrollFadeIn>

                <form
                    onSubmit={handleSubmit}
                    className="grid gap-8 lg:grid-cols-2"
                >
                    <div className="space-y-5">
                        <TextField
                            label="Titre"
                            value={formValues.titre}
                            onChange={handleChange(
                                "titre"
                            )}
                            fullWidth
                            sx={fieldStyles}
                        />

                        <FormControl fullWidth>
                            <InputLabel>
                                Commune
                            </InputLabel>

                            <Select
                                value={
                                    formValues.commune
                                }
                                label="Commune"
                                onChange={(e) =>
                                    setFormValues(
                                        (prev) => ({
                                            ...prev,
                                            commune:
                                                e.target.value,
                                        })
                                    )
                                }
                            >
                                {communes.map(
                                    (commune) => (
                                        <MenuItem
                                            key={commune}
                                            value={commune}
                                        >
                                            {commune}
                                        </MenuItem>
                                    )
                                )}
                            </Select>
                        </FormControl>

                        <TextField
                            label="Quartier"
                            value={
                                formValues.quartier
                            }
                            onChange={handleChange(
                                "quartier"
                            )}
                            fullWidth
                            sx={fieldStyles}
                        />

                        <TextField
                            label="Avenue / N°"
                            value={formValues.avenue}
                            onChange={handleChange(
                                "avenue"
                            )}
                            fullWidth
                            sx={fieldStyles}
                        />

                        <FormControl fullWidth>
                            <InputLabel>
                                Type de produit
                            </InputLabel>

                            <Select
                                value={
                                    formValues.type_produit
                                }
                                label="Type de produit"
                                onChange={(e) =>
                                    setFormValues(
                                        (prev) => ({
                                            ...prev,
                                            type_produit:
                                                e.target.value,
                                        })
                                    )
                                }
                            >
                                {productTypes.map(
                                    (type) => (
                                        <MenuItem
                                            key={type}
                                            value={type}
                                        >
                                            {type}
                                        </MenuItem>
                                    )
                                )}
                            </Select>
                        </FormControl>

                        <TextField
                            label="Description"
                            value={
                                formValues.description
                            }
                            onChange={handleChange(
                                "description"
                            )}
                            fullWidth
                            multiline
                            rows={8}
                            sx={fieldStyles}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                bgcolor: "#008B8B",
                                py: 1.5,
                                fontSize: 16,
                                textTransform: "none",
                                "&:hover": {
                                    bgcolor: "#0f7880",
                                },
                            }}
                        >
                            Enregistrer le bien
                        </Button>
                    </div>

                    <div>
                        <ScrollFadeIn>
                            <div className="mb-4 text-sm opacity-80">
                                Ajoutez plusieurs images du
                                bien
                            </div>
                        </ScrollFadeIn>

                        <UploadMedia
                            onChange={handleMedia}
                        />

                        <div className="mt-4 rounded-xl bg-slate-100 p-4 text-sm">
                            <p>
                                Images sélectionnées :
                                <strong>
                                    {" "}
                                    {mediaCount}
                                </strong>
                            </p>

                            <p className="mt-2 text-slate-500">
                                Vous pouvez
                                sélectionner
                                plusieurs photos
                                pour créer une
                                galerie complète du
                                bien.
                            </p>
                        </div>
                    </div>
                </form>

                <Snackbar
                    open={successOpen}
                    autoHideDuration={3000}
                    onClose={() =>
                        setSuccessOpen(false)
                    }
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "center",
                    }}
                >
                    <Alert
                        severity="success"
                        variant="filled"
                        onClose={() =>
                            setSuccessOpen(false)
                        }
                    >
                        Produit enregistré avec
                        succès !
                    </Alert>
                </Snackbar>

                <Snackbar
                    open={errorOpen}
                    autoHideDuration={3000}
                    onClose={() =>
                        setErrorOpen(false)
                    }
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "center",
                    }}
                >
                    <Alert
                        severity="error"
                        variant="filled"
                        onClose={() =>
                            setErrorOpen(false)
                        }
                    >
                        Une erreur est survenue
                        lors de
                        l&apos;enregistrement.
                    </Alert>
                </Snackbar>
            </div>
        </section>
    );
}