"use client";
import Formulaire from "@/components/Formulaire";
import SavingForm from "@/components/SavingForm";

export default function AjoutPage() {
  
  return (
    <section className="min-h-screen bg-[var(--app-bg)] text-[var(--app-text)] py-10 px-4 sm:px-8">
      <Formulaire />
      <SavingForm />
    </section>
  );
}
