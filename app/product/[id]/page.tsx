import ProductGallery from "@/components/ProductGallery";

type ProductDetailsProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetails({
  params,
}: ProductDetailsProps) {
  const { id } = await params;

  try {
    const response = await fetch(
      `http://localhost:3001/produits/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      return (
        <div className="flex min-h-screen items-center justify-center">
          <h1 className="text-3xl font-bold text-red-500">
            Produit introuvable
          </h1>
        </div>
      );
    }

    const produit = await response.json();

    return (
      <main className="min-h-screen bg-slate-50 py-10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
            {/* IMAGE PRINCIPALE */}
            <img
              src={`http://localhost:3001${produit.image}`}
              alt={produit.titre}
              className="h-[500px] w-full object-cover"
            />

            <div className="p-8">
              {/* TITRE */}
              <div className="flex flex-col gap-4">
                <h1 className="text-4xl font-bold text-slate-900">
                  {produit.titre}
                </h1>

                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full bg-[#008B8B]/10 px-4 py-2 text-sm font-medium text-[#008B8B]">
                    {produit.type_produit}
                  </span>

                  <span className="rounded-full bg-slate-100 px-4 py-2 text-sm">
                    {produit.commune}
                  </span>
                </div>
              </div>

              {/* INFORMATIONS */}
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-slate-100 p-5">
                  <p className="text-sm text-slate-500">
                    Commune
                  </p>

                  <h3 className="mt-2 text-xl font-bold">
                    {produit.commune}
                  </h3>
                </div>

                <div className="rounded-2xl bg-slate-100 p-5">
                  <p className="text-sm text-slate-500">
                    Quartier
                  </p>

                  <h3 className="mt-2 text-xl font-bold">
                    {produit.quartier}
                  </h3>
                </div>

                <div className="rounded-2xl bg-slate-100 p-5">
                  <p className="text-sm text-slate-500">
                    Avenue
                  </p>

                  <h3 className="mt-2 text-xl font-bold">
                    {produit.avenue}
                  </h3>
                </div>
              </div>

              {/* GALERIE D'IMAGES */}
              {produit.images &&
                produit.images.length > 0 && (
                  <div className="mt-10">
                    <h2 className="mb-6 text-2xl font-semibold">
                      Galerie photos
                    </h2>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      <ProductGallery
                        images={produit.images}
                        titre={produit.titre}
                      />
                    </div>
                  </div>
                )}

              {/* DESCRIPTION */}
              <div className="mt-10">
                <h2 className="mb-4 text-2xl font-semibold">
                  Description
                </h2>

                <p className="leading-8 text-slate-700">
                  {produit.description}
                </p>
              </div>

              {/* ACTIONS */}
              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  type="button"
                  className="rounded-xl bg-[#008B8B] px-6 py-3 font-medium text-white transition hover:bg-[#0f7880]"
                >
                  Contacter l'agence
                </button>

                <button
                  type="button"
                  className="rounded-xl border border-[#008B8B] px-6 py-3 font-medium text-[#008B8B] transition hover:bg-[#008B8B] hover:text-white"
                >
                  Programmer une visite
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  } catch (error) {
    console.error(error);

    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-3xl font-bold text-red-500">
          Une erreur est survenue
        </h1>
      </div>
    );
  }
}