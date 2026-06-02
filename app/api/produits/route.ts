import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

function normalizeNumber(value: string | null): number | null {
  if (!value) return null;
  const cleaned = value.replace(/[^0-9.-]/g, "");
  if (cleaned.trim() === "") return null;
  const numeric = Number(cleaned);
  return Number.isNaN(numeric) ? null : numeric;
}

export async function GET() {
  try {
    const result = await pool.query("SELECT * FROM maisons");
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error("Erreur lors de la récupération des maisons :", error);
    return NextResponse.json(
      {
        message: "Erreur serveur lors de la récupération des maisons",
        error: error instanceof Error ? error.message : "Erreur inconnue",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const titre = formData.get("titre")?.toString() ?? "";
    const description = formData.get("description")?.toString() ?? "";
    const adresse = formData.get("adresse")?.toString() ?? "";
    const prix = normalizeNumber(formData.get("prix")?.toString() ?? "");
    const chambres = normalizeNumber(
      formData.get("chambres")?.toString() ?? ""
    );
    const salles_de_bain = normalizeNumber(
      formData.get("salles_de_bain")?.toString() ?? ""
    );
    const surface = normalizeNumber(
      formData.get("surface")?.toString() ?? ""
    );

    if (
      !titre ||
      !adresse ||
      prix === null ||
      chambres === null ||
      salles_de_bain === null ||
      surface === null
    ) {
      return NextResponse.json(
        {
          message: "Veuillez remplir tous les champs obligatoires avec des valeurs valides.",
        },
        { status: 400 }
      );
    }

    const result = await pool.query(
      "INSERT INTO maisons (titre, description, adresse, prix, chambres, salles_de_bain, surface) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        titre,
        description,
        adresse,
        prix,
        chambres,
        salles_de_bain,
        surface,
      ]
    );

    return NextResponse.json({ message: "Bien ajouté", maison: result.rows[0] }, { status: 201 });
  } catch (error) {
    console.error("Erreur lors de l'ajout du bien :", error);
    return NextResponse.json(
      {
        message: "Erreur serveur lors de l'ajout du bien",
        error: error instanceof Error ? error.message : "Erreur inconnue",
      },
      { status: 500 }
    );
  }
}
