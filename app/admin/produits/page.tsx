"use client";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import Link from "next/link";

type Produit = {
    id: number;
    titre: string;
    commune: string;
    quartier: string;
    avenue: string;
    type_produit: string;
    image: string;
};

export default function ProduitsPage() {
    const [openDeleteDialog, setOpenDeleteDialog] =
        useState(false);

    const [selectedProduitId, setSelectedProduitId] =
        useState<number | null>(null);
    const [produits, setProduits] = useState<
        Produit[]
    >([]);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {
        fetchProduits();
    }, []);

    const openDeleteConfirmation = (
        produitId: number
    ) => {
        setSelectedProduitId(produitId);
        setOpenDeleteDialog(true);
    };

    const fetchProduits = async () => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/produits`
            );

            console.log("STATUS", response.status);

            const data = await response.json();

            console.log("DATA", data);

            setProduits(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (
        id: number
    ) => {
        const confirmed = window.confirm(
            "Voulez-vous vraiment supprimer ce bien ?"
        );

        if (!confirmed) return;

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/produits/${id}`,
                {
                    method: "DELETE",
                }
            );

            if (!response.ok) {
                throw new Error(
                    "Erreur suppression"
                );
            }

            setProduits((prev) =>
                prev.filter(
                    (produit) =>
                        produit.id !== id
                )
            );
        } catch (error) {
            console.error(error);
            alert(
                "Impossible de supprimer ce bien."
            );
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
        <section className="min-h-screen bg-slate-100 p-4 md:p-8">
            <div className="mx-auto max-w-7xl">

                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">
                            Gestion des biens
                        </h1>

                        <p className="mt-1 text-slate-500">
                            Gérez les annonces
                            publiées.
                        </p>
                    </div>

                    <Link
                        href="/admin/produits/create"
                        className="rounded-xl bg-teal-700 px-5 py-3 text-white hover:bg-teal-800"
                    >
                        Ajouter un bien
                    </Link>
                </div>

                {produits.length === 0 ? (
                    <div className="rounded-2xl bg-white p-8 text-center shadow">
                        Aucun bien trouvé.
                    </div>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {produits.map(
                            (produit) => (
                                <div
                                    key={
                                        produit.id
                                    }
                                    className="overflow-hidden rounded-3xl bg-white shadow-lg"
                                >
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_API_URL}${produit.image}`}
                                        alt={
                                            produit.titre
                                        }
                                        className="h-56 w-full object-cover"
                                    />

                                    <div className="p-5">
                                        <h2 className="text-xl font-semibold">
                                            {
                                                produit.titre
                                            }
                                        </h2>

                                        <p className="mt-2 text-slate-600">
                                            {
                                                produit.commune
                                            }
                                            {" - "}
                                            {
                                                produit.quartier
                                            }
                                        </p>

                                        <p className="text-sm text-slate-500">
                                            {
                                                produit.type_produit
                                            }
                                        </p>

                                        <div className="mt-5 flex gap-3">
                                            <Link
                                                href={`/admin/produits/${produit.id}/edit`}
                                                className="flex-1 rounded-xl bg-blue-600 px-4 py-2 text-center text-white hover:bg-blue-700"
                                            >
                                                Modifier
                                            </Link>

                                            <button
                                                onClick={() =>
                                                    openDeleteConfirmation(
                                                        produit.id
                                                    )
                                                }
                                                className="flex-1 rounded-xl bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                                            >
                                                Supprimer
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                )}
                
            </div>
            <Dialog
    open={openDeleteDialog}
    onClose={() =>
        setOpenDeleteDialog(false)
    }
>
    <DialogTitle>
        Supprimer le bien
    </DialogTitle>

    <DialogContent>
        <DialogContentText>
            Voulez-vous vraiment supprimer
            ce bien immobilier ?
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
                    selectedProduitId
                ) {
                    handleDelete(
                        selectedProduitId
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
        </section>
        
    );
}
