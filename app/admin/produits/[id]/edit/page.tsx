"use client";

import { useEffect, useState, useRef } from "react";
import { useParams, useRouter } from "next/navigation";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";


type ProduitImage = {
    id: number;
    image: string;
};

type FormValues = {
    titre: string;
    commune: string;
    quartier: string;
    avenue: string;
    type_produit: string;
    description: string;
};

export default function EditProduitPage() {

    const fileInputRef =
        useRef<HTMLInputElement>(null);

    const [newImages, setNewImages] =
        useState<File[]>([]);

    const [images, setImages] =
        useState<ProduitImage[]>([]);

    const { id } = useParams();
    const router = useRouter();

    const [loading, setLoading] =
        useState(true);

    const [successOpen, setSuccessOpen] =
        useState(false);

    const [errorOpen, setErrorOpen] =
        useState(false);

    const [openDeleteDialog, setOpenDeleteDialog] =
        useState(false);

    const [selectedImageId, setSelectedImageId] =
        useState<number | null>(null);

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

    useEffect(() => {
        fetchProduit();
    }, []);

    const handleAddImages = async () => {
        try {
            console.log("Images :", newImages);

            if (newImages.length === 0) {
                console.log("Aucune image sélectionnée");
                return;
            }

            const formData = new FormData();

            newImages.forEach((file) => {
                formData.append("images", file);
            });

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/produits/${id}/images`,
                {
                    method: "POST",
                    body: formData,
                }
            );

            console.log("Status :", response.status);

            const result = await response.text();

            console.log("Réponse serveur :", result);

            if (!response.ok) {
                throw new Error("Erreur ajout images");
            }

            setNewImages([]);

            await fetchProduit();
        } catch (error) {
            console.error(error);
        }
    };

    const fetchProduit = async () => {
        try {

            console.log(
                "URL :",
                `${process.env.NEXT_PUBLIC_API_URL}/produits/${id}`
            );
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/produits/${id}`
            );

            console.log(
                "Response status :",
                response.status
            );

            const data =
                await response.json();

            setFormValues({
                titre: data.titre || "",
                commune: data.commune || "",
                quartier:
                    data.quartier || "",
                avenue: data.avenue || "",
                type_produit:
                    data.type_produit ||
                    "",
                description:
                    data.description ||
                    "",
            });
            setImages(data.images || []);
            console.log(data.images);
        } catch (error) {
            console.error(error);
            setErrorOpen(true);
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteImage = async (
        imageId: number
    ) => {

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/produits/images/${imageId}`,
                {
                    method: "DELETE",
                }
            );

            if (!response.ok) {
                console.log(
                    "STATUS:",
                    response.status
                );

                const error =
                    await response.text();

                console.log(
                    "SERVER ERROR:",
                    error
                );

                throw new Error(
                    "Erreur suppression image"
                );
            }

            setImages((prev) =>
                prev.filter(
                    (img) =>
                        img.id !== imageId
                )
            );
        } catch (error) {
            console.error(error);
        }
    };

    const openDeleteConfirmation = (
        imageId: number
    ) => {
        setSelectedImageId(imageId);
        setOpenDeleteDialog(true);
    };

    const handleSubmit = async (
        e: React.FormEvent
    ) => {
        e.preventDefault();

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/produits/${id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type":
                            "application/json",
                    },
                    body: JSON.stringify(
                        formValues
                    ),
                }
            );

            if (!response.ok) {
                throw new Error(
                    "Erreur modification"
                );
            }

            setSuccessOpen(true);

            setTimeout(() => {
                router.push(
                    "/admin/produits"
                );
            }, 1500);
        } catch (error) {
            console.error(error);
            setErrorOpen(true);
        }
    };

    if (loading) {
        return (
            <div className="p-10">
                Chargement...
            </div>
        );
    }

    return (
        <section className="min-h-screen bg-slate-100 py-8 md:py-12 px-4">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8 md:mb-10 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
                        Modifier un bien
                    </h1>

                    <p className="mt-3 text-sm md:text-base text-slate-600">
                        Modifiez les informations
                        du bien immobilier.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="mx-auto max-w-4xl"
                >
                    <div className="rounded-3xl bg-white p-5 md:p-8 shadow-lg">
                        <div className="mb-6 md:mb-8">
                            <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
                                Informations du bien
                            </h2>

                            <p className="mt-1 text-sm md:text-base text-slate-500">
                                Mettez à jour les
                                informations.
                            </p>
                        </div>

                        <div className="grid gap-4 md:gap-5 md:grid-cols-2">
                            <TextField
                                label="Titre"
                                value={
                                    formValues.titre
                                }
                                onChange={(e) =>
                                    setFormValues(
                                        (
                                            prev
                                        ) => ({
                                            ...prev,
                                            titre:
                                                e
                                                    .target
                                                    .value,
                                        })
                                    )
                                }
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
                                onChange={(e) =>
                                    setFormValues(
                                        (
                                            prev
                                        ) => ({
                                            ...prev,
                                            quartier:
                                                e
                                                    .target
                                                    .value,
                                        })
                                    )
                                }
                                fullWidth
                                sx={fieldStyles}
                            />

                            <TextField
                                label="Avenue / N°"
                                value={
                                    formValues.avenue
                                }
                                onChange={(e) =>
                                    setFormValues(
                                        (
                                            prev
                                        ) => ({
                                            ...prev,
                                            avenue:
                                                e
                                                    .target
                                                    .value,
                                        })
                                    )
                                }
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
                                onChange={(e) =>
                                    setFormValues(
                                        (
                                            prev
                                        ) => ({
                                            ...prev,
                                            description:
                                                e
                                                    .target
                                                    .value,
                                        })
                                    )
                                }
                                fullWidth
                                multiline
                                rows={6}
                                sx={fieldStyles}
                            />
                        </div>

                        <div className="mt-8">
                            <h3 className="mb-4 text-xl font-semibold text-slate-900">
                                Images actuelles
                            </h3>

                            {images.length === 0 ? (
                                <p className="text-slate-500">
                                    Aucune image disponible.
                                </p>
                            ) : (
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {images.map((img, index) => (
                                        <div
                                            key={`${img.id || img.image}-${index}`}
                                            className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                                        >
                                            <img
                                                src={`${process.env.NEXT_PUBLIC_API_URL}${img.image}`}
                                                alt="Produit"
                                                className="h-40 w-full object-cover"
                                            />

                                            <button
                                                type="button"
                                                className="w-full bg-red-600 py-2 text-sm font-medium text-white hover:bg-red-700"
                                                onClick={() =>
                                                    openDeleteConfirmation(
                                                        img.id
                                                    )
                                                }
                                            >
                                                Supprimer
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="mt-8 rounded-2xl border border-slate-200 p-4">
                            <h3 className="mb-4 text-xl font-semibold text-slate-900">
                                Ajouter des images
                            </h3>

                            <input
                                ref={fileInputRef}
                                type="file"
                                multiple
                                accept="image/*"
                                hidden
                                onChange={async (e) => {
                                    const files = e.target.files;

                                    if (!files) return;

                                    const selectedFiles =
                                        Array.from(files);

                                    setNewImages(
                                        selectedFiles
                                    );

                                    try {
                                        const formData =
                                            new FormData();

                                        selectedFiles.forEach(
                                            (file) => {
                                                formData.append(
                                                    "images",
                                                    file
                                                );
                                            }
                                        );

                                        const response =
                                            await fetch(
                                                `${process.env.NEXT_PUBLIC_API_URL}/produits/${id}/images`,
                                                {
                                                    method: "POST",
                                                    body: formData,
                                                }
                                            );

                                        if (!response.ok) {
                                            throw new Error(
                                                "Erreur upload"
                                            );
                                        }

                                        setNewImages([]);

                                        await fetchProduit();
                                    } catch (error) {
                                        console.error(error);
                                    }
                                }}
                            />

                            {newImages.length > 0 && (
                                <p className="mt-3 text-sm text-slate-500">
                                    {newImages.length} image(s)
                                    sélectionnée(s)
                                </p>
                            )}

                            {/* <Button
                                    variant="outlined"
                                    onClick={() =>
                                        fileInputRef.current?.click()
                                    }
                                    sx={{
                                        textTransform: "none",
                                        borderRadius: "12px",
                                    }}
                                >
                                    Choisir des images
                                </Button> */}

                            <Button
                                variant="outlined"
                                sx={{
                                    textTransform: "none",
                                    borderRadius: "12px",
                                }}
                                onClick={() =>
                                    fileInputRef.current?.click()
                                }
                            >
                                Ajouter des images
                            </Button>

                            {newImages.length > 0 && (
                                <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {newImages.map(
                                        (file, index) => (
                                            <img
                                                key={index}
                                                src={URL.createObjectURL(
                                                    file
                                                )}
                                                alt=""
                                                className="h-32 w-full rounded-xl object-cover"
                                            />
                                        )
                                    )}
                                </div>
                            )}

                        </div>

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
                            Mettre à jour le bien
                        </Button>
                    </div>
                </form>

                <Dialog
                    open={openDeleteDialog}
                    onClose={() =>
                        setOpenDeleteDialog(false)
                    }
                >
                    <DialogTitle>
                        Supprimer l'image
                    </DialogTitle>

                    <DialogContent>
                        <DialogContentText>
                            Voulez-vous vraiment supprimer
                            cette image ?
                        </DialogContentText>
                    </DialogContent>

                    <DialogActions>
                        <Button
                            onClick={() =>
                                setOpenDeleteDialog(false)
                            }
                        >
                            Annuler
                        </Button>

                        <Button
                            color="error"
                            variant="contained"
                            onClick={() => {
                                if (
                                    selectedImageId
                                ) {
                                    handleDeleteImage(
                                        selectedImageId
                                    );
                                }

                                setOpenDeleteDialog(
                                    false
                                );
                            }}
                        >
                            Supprimer
                        </Button>
                    </DialogActions>
                </Dialog>

                <Snackbar
                    open={successOpen}
                    autoHideDuration={3000}
                    onClose={() =>
                        setSuccessOpen(false)
                    }
                >
                    <Alert
                        severity="success"
                        variant="filled"
                    >
                        Produit mis à jour avec
                        succès !
                    </Alert>
                </Snackbar>

                <Snackbar
                    open={errorOpen}
                    autoHideDuration={3000}
                    onClose={() =>
                        setErrorOpen(false)
                    }
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