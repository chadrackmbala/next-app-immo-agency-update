export default function DocumentationPage() {
  return (
    <section className="min-h-screen bg-[var(--app-bg)] text-[var(--app-text)] p-8">
      <div className="mx-auto max-w-6xl space-y-16">
        <header className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-[#BFA75C]">Documentation & ressources</p>
          <h1 className="text-3xl lg:text-5xl font-bold">Immobilier, partenariat public et accompagnement stratégique</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-400">
            Découvrez nos bonnes pratiques, nos engagements et les alliances stratégiques qui renforcent la confiance de nos clients et partenaires au Congo.
          </p>
        </header>

        <article className="grid gap-8 lg:grid-cols-[1fr_0.9fr] items-start">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Le marché immobilier congolais aujourd'hui</h2>
            <p className="text-base leading-8 text-slate-300">
              Le secteur immobilier en RDC connaît une forte dynamique avec une demande croissante pour les logements modernes, les bureaux de qualité et les projets mixtes. Nous accompagnons les investisseurs, les promoteurs et les particuliers à mieux comprendre les tendances du marché, les quartiers à fort potentiel, et les opportunités de développement résidentiel et commercial.
            </p>
            <p className="text-base leading-8 text-slate-300">
              Nos services couvrent l’achat, la vente, la location et la gestion de patrimoine, en s’appuyant sur des analyses de marché fiables et un réseau local solide.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-400">
            <div className="h-64 rounded-3xl border-2 border-dashed border-slate-600 bg-slate-900/30 flex items-center justify-center text-slate-500">
              Zone image marché immobilier
            </div>
          </div>
        </article>

        <article className="grid gap-8 lg:grid-cols-[0.9fr_1fr] items-start">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-400">
            <div className="h-64 rounded-3xl border-2 border-dashed border-slate-600 bg-slate-900/30 flex items-center justify-center text-slate-500">
              Zone image partenariat gouvernemental
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Partenariat avec le Ministère de l’Habitat</h2>
            <p className="text-base leading-8 text-slate-300">
              Nous travaillons en étroite collaboration avec le Ministère de l’Habitat de la République démocratique du Congo afin de développer des projets immobiliers responsables et accessibles. Ce partenariat public-privé nous permet de garantir des constructions conformes aux normes nationales et des logements intégrés aux politiques d’urbanisme du pays.
            </p>
            <p className="text-base leading-8 text-slate-300">
              L’objectif est de faciliter l’accès à la propriété, de soutenir les programmes de logements sociaux et d’optimiser les processus d’autorisation pour nos promoteurs et clients particuliers.
            </p>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-semibold">Nos domaines d’expertise</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold mb-3">Accompagnement personnalisé</h3>
              <p className="text-slate-300 leading-7">
                Analyse de vos besoins, sélection des biens, optimisation de financement et suivi de dossier pour chaque projet immobilier.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold mb-3">Investissement sécurisé</h3>
              <p className="text-slate-300 leading-7">
                Études de rentabilité, sélection des meilleurs emplacements et projets garantissant un fort potentiel de valorisation.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold mb-3">Relation institutionnelle</h3>
              <p className="text-slate-300 leading-7">
                Une présence reconnue auprès des autorités locales et des partenaires publics pour accélérer vos démarches et sécuriser vos opérations.
              </p>
            </div>
          </div>
        </article>

        <article className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold mb-4">Pourquoi choisir IMMO 24 ?</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <p className="text-slate-300 leading-7">
                Nous proposons une approche transparente, une expertise locale et un accompagnement sur mesure pour vous aider à concrétiser vos projets immobiliers dans un environnement réglementaire en évolution.
              </p>
            </div>
            <div>
              <p className="text-slate-300 leading-7">
                Grâce à notre partenariat avec le gouvernement congolais et le Ministère de l’Habitat, nous unissons le savoir-faire du secteur privé et la conformité publique pour des projets durables et fiables.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
