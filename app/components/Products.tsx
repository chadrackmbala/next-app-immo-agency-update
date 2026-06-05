"use client";

import { ScrollFadeIn } from "./ScrollFadeIn";
import ProductData from "./ProductData";

function Products() {
  return (
    <section className="mx-auto mt-10 flex w-full max-w-[1300px] flex-col items-center gap-5">
      <ScrollFadeIn>
        {/* <h2 className="text-center text-[30px]">
          Logements disponibles
        </h2> */}
        <h2 className="text-[29px] text-center uppercase tracking-[0.3em] text-[#BFA75C]">Logements disponibles</h2>
        {/* <h2 className="max-w-3xl text-lg leading-8 text-slate-400">Logements disponibles</h2> */}
      </ScrollFadeIn>
      <ProductData />
    </section>
  );
}

export default Products;