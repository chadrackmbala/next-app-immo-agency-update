import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const idNumber = Number(id);
    if (Number.isNaN(idNumber)) {
      return NextResponse.json(
        { message: "ID invalide." },
        { status: 400 }
      );
    }

    const result = await pool.query(
      "SELECT * FROM maisons WHERE id = $1",
      [idNumber]
    );

    if (result.rowCount === 0) {
      return NextResponse.json(
        { message: "Produit introuvable." },
        { status: 404 }
      );
    }

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error("Erreur lors de la récupération du produit :", error);
    return NextResponse.json(
      {
        message: "Erreur serveur lors de la récupération du produit",
        error: error instanceof Error ? error.message : "Erreur inconnue",
      },
      { status: 500 }
    );
  }
}
