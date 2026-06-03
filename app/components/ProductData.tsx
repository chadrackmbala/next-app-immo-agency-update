"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ScrollFadeIn } from "./ScrollFadeIn";

type Produit = {
  id: number;
  image: string;
  titre: string;
  commune: string;
  quartier: string;
  avenue: string;
  type_produit: string;
  description: string;
};

function ProductData() {
  const [products, setProducts] = useState<Produit[]>([]);
  const [visibleCount, setVisibleCount] = useState(9);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        // const response = await fetch(
        //   "http://localhost:3001/produits"
        // );

        console.log(process.env.NEXT_PUBLIC_API_URL);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/produits`
        );

        if (!response.ok) {
          throw new Error(
            `Erreur API : ${response.status}`
          );
        }

        const data = await response.json();

        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error(
            "La réponse n'est pas un tableau :",
            data
          );
          setProducts([]);
        }
      } catch (error) {
        console.error(
          "Erreur lors du chargement des produits :",
          error
        );
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const visibleProducts = products.slice(
    0,
    visibleCount
  );

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  if (loading) {
    return (
      <div className="py-20 text-center">
        Chargement des produits...
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="grid w-full grid-cols-1 gap-6 px-4 py-8 sm:grid-cols-2 xl:grid-cols-3">
        {visibleProducts.map((produit) => (
          <ScrollFadeIn key={produit.id}>
            <Link
              href={`/product/${produit.id}`}
              className="block"
            >
              <div className="group cursor-pointer overflow-hidden rounded-[15px] bg-white shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
                <div className="overflow-hidden">
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL}${produit.image}`}
                    alt={produit.titre}
                    className="h-60 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>

                <div className="flex h-full flex-col justify-between gap-4 p-5">
                  <div>
                    <h2 className="text-xl font-bold">
                      {produit.titre}
                    </h2>

                    <p className="mt-2 line-clamp-2 text-sm text-gray-600">
                      {produit.description}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-[#008B8B]/10 px-3 py-1 text-xs font-medium text-[#008B8B]">
                        {produit.type_produit}
                      </span>

                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs">
                        {produit.commune}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-500">
                        {produit.quartier}
                      </p>

                      <p className="text-sm font-medium text-[#008B8B]">
                        {produit.commune}
                      </p>
                    </div>

                    <span className="rounded-md bg-[#008B8B] px-4 py-2 text-sm font-medium text-white">
                      Détails
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollFadeIn>
        ))}
      </div>

      {visibleCount < products.length && (
        <div className="flex justify-center py-12">
          <button
            onClick={handleShowMore}
            className="group relative cursor-pointer overflow-hidden rounded-full border border-[#008B8B] bg-white px-8 py-3 font-medium text-[#008B8B] transition-all duration-300 hover:-translate-y-1 hover:bg-[#008B8B] hover:text-white hover:shadow-lg hover:shadow-[#008B8B]/30"
          >
            <span className="flex items-center gap-2">
              Voir plus de biens

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductData;