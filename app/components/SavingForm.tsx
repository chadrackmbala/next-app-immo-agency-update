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
        "& .MuiInputBase-root": {
            backgroundColor: "#ffffff",
            borderRadius: "14px",
        },

        "& .MuiInputLabel-root": {
            color: "#64748b",
        },

        "& .MuiInputLabel-root.Mui-focused": {
            color: "#0f766e",
        },

        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#cbd5e1",
        },

        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
            {
                borderColor: "#94a3b8",
            },

        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
                borderColor: "#0f766e",
                borderWidth: 2,
            },
    };

    const selectStyles = {
        borderRadius: "14px",
        backgroundColor: "#ffffff",

        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#cbd5e1",
        },

        "&:hover .MuiOutlinedInput-notchedOutline":
            {
                borderColor: "#94a3b8",
            },

        "&.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
                borderColor: "#0f766e",
                borderWidth: 2,
            },
    };

    const handleChange =
        (field: keyof FormValues) =>
            (
                event: ChangeEvent<HTMLInputElement>
            ) => {
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
            data.append(
                "commune",
                formValues.commune
            );
            data.append(
                "quartier",
                formValues.quartier
            );
            data.append(
                "avenue",
                formValues.avenue
            );
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
                `${process.env.NEXT_PUBLIC_API_URL}/produits`,
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
        <section className="min-h-screen bg-slate-100 py-8 md:py-12 px-4">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8 md:mb-10 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
                        Ajouter un bien immobilier
                    </h1>

                    <p className="mt-3 text-sm md:text-base text-slate-600">
                        Complétez les informations du
                        bien et ajoutez des photos
                        attractives.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="grid gap-6 md:gap-8 lg:grid-cols-3"
                >
                    <div className="lg:col-span-2 rounded-3xl bg-white p-5 md:p-8 shadow-lg">
                        <div className="mb-6 md:mb-8">
                            <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
                                Informations du bien
                            </h2>

                            <p className="mt-1 text-sm md:text-base text-slate-500">
                                Renseignez les détails
                                principaux.
                            </p>
                        </div>

                        <div className="grid gap-4 md:gap-5 md:grid-cols-2">
                            <TextField
                                label="Titre"
                                value={
                                    formValues.titre
                                }
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
                                    sx={
                                        selectStyles
                                    }
                                    onChange={(e) =>
                                        setFormValues(
                                            (
                                                prev
                                            ) => ({
                                                ...prev,
                                                commune:
                                                    e
                                                        .target
                                                        .value,
                                            })
                                        )
                                    }
                                >
                                    {communes.map(
                                        (
                                            commune
                                        ) => (
                                            <MenuItem
                                                key={
                                                    commune
                                                }
                                                value={
                                                    commune
                                                }
                                            >
                                                {
                                                    commune
                                                }
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
                                value={
                                    formValues.avenue
                                }
                                onChange={handleChange(
                                    "avenue"
                                )}
                                fullWidth
                                sx={fieldStyles}
                            />

                            <FormControl fullWidth>
                                <InputLabel>
                                    Type de bien
                                </InputLabel>

                                <Select
                                    value={
                                        formValues.type_produit
                                    }
                                    label="Type de bien"
                                    sx={
                                        selectStyles
                                    }
                                    onChange={(e) =>
                                        setFormValues(
                                            (
                                                prev
                                            ) => ({
                                                ...prev,
                                                type_produit:
                                                    e
                                                        .target
                                                        .value,
                                            })
                                        )
                                    }
                                >
                                    {productTypes.map(
                                        (
                                            type
                                        ) => (
                                            <MenuItem
                                                key={
                                                    type
                                                }
                                                value={
                                                    type
                                                }
                                            >
                                                {
                                                    type
                                                }
                                            </MenuItem>
                                        )
                                    )}
                                </Select>
                            </FormControl>
                        </div>

                        <div className="mt-5 md:mt-6">
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
                                rows={6}
                                sx={fieldStyles}
                            />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="rounded-3xl bg-white p-5 md:p-6 shadow-lg">
                            <h2 className="mb-2 text-lg md:text-xl font-semibold text-slate-900">
                                Galerie photos
                            </h2>

                            <p className="mb-5 text-sm text-slate-500">
                                Ajoutez plusieurs
                                images du bien.
                            </p>

                            <UploadMedia
                                onChange={
                                    handleMedia
                                }
                            />
                        </div>

                        <div className="rounded-3xl bg-white p-5 md:p-6 shadow-lg">
                            <h3 className="font-semibold text-slate-900">
                                Résumé
                            </h3>

                            <div className="mt-4 flex items-center justify-between">
                                <span className="text-slate-600">
                                    Images
                                </span>

                                <span className="font-semibold">
                                    {
                                        mediaCount
                                    }
                                </span>
                            </div>

                            <p className="mt-4 text-sm text-slate-500">
                                Les annonces avec
                                plusieurs photos
                                attirent davantage
                                d’acheteurs.
                            </p>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                    mt: 4,
                                    bgcolor:
                                        "#0f766e",
                                    py: {
                                        xs: 1.2,
                                        sm: 1.4,
                                        md: 1.6,
                                    },
                                    borderRadius:
                                        "14px",
                                    textTransform:
                                        "none",
                                    fontSize: {
                                        xs: "0.9rem",
                                        sm: "1rem",
                                    },
                                    fontWeight: 600,
                                    "&:hover":
                                        {
                                            bgcolor:
                                                "#115e59",
                                        },
                                }}
                            >
                                Publier le bien
                            </Button>
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
                    >
                        Une erreur est survenue.
                    </Alert>
                </Snackbar>
            </div>
        </section>
    );
}