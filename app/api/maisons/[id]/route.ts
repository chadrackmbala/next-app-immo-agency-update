import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function PUT(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const idNumber = Number(id);
    if (Number.isNaN(id)) {
      return NextResponse.json(
        { message: "ID invalide." },
        { status: 400 }
      );
    }

    const body = await request.json();
    const titre = typeof body.titre === "string" ? body.titre.trim() : "";

    if (!titre) {
      return NextResponse.json(
        { message: "Le titre est requis." },
        { status: 400 }
      );
    }

    const result = await pool.query(
      "UPDATE maisons SET titre = $1 WHERE id = $2 RETURNING *",
      [titre, idNumber]
    );

    if (result.rowCount === 0) {
      return NextResponse.json(
        { message: "Maison introuvable." },
        { status: 404 }
      );
    }

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error("Erreur lors de la mise à jour de la maison :", error);
    return NextResponse.json(
      {
        message: "Erreur serveur lors de la mise à jour de la maison",
        error: error instanceof Error ? error.message : "Erreur inconnue",
      },
      { status: 500 }
    );
  }
}
