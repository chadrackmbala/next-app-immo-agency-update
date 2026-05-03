"use client";
import { useEffect } from "react";
import { ScrollFadeIn } from './ScrollFadeIn';
import useProductsStore from '../context/ProductsContext';

function Products() {
  const products = useProductsStore((state) => state.products);
  const getProductData = useProductsStore((state) => state.getProductData);

  useEffect(() => {
    if (products.length === 0) {
      getProductData();
    }
  }, [getProductData, products.length]);

  const productsArray = [...products].reverse();

  return (
    <section className='w-full max-w-[1300px] mx-auto flex flex-col gap-5 items-center m-5 mt-16'>
      <ScrollFadeIn>
        <h2 className='text-[30px] text-center'>Logements disponibles</h2>
      </ScrollFadeIn>

      <div className='w-full flex flex-wrap justify-center gap-10 lg:gap-x-10'>
        {productsArray.map((productData, index) => (
          <ScrollFadeIn key={productData.id ?? index}>
            <div className='flex justify-center pb-3 gap-5 lg:pb-3'>
              <div className='group flex flex-col justify-between items-center p-2 bg-white rounded-[15px] shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105 hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)] hover:bg-[#ADD8E6] w-[320px] lg:w-80 h-auto lg:h-[520px]'>
                <img
                  src={productData.image}
                  alt={productData.title}
                  className="h-60 w-full object-cover rounded-xl transition-transform duration-200 group-hover:scale-110"
                />

                <div className='flex flex-col justify-between w-full gap-4 p-4'>
                  <div>
                    <h2 className='font-bold text-lg'>{productData.title}</h2>
                    <p>{productData.rooms} chambre(s) salon</p>
                  </div>

                  <div className='flex justify-center'>
                    <button
                      type="button"
                      className='cursor-pointer text-white w-[200px] text-center bg-[#008B8B] px-3 py-1 transition-transform duration-300 rounded-md hover:scale-105 hover:bg-[#0f7880]'
                    >
                      Détails et images
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        ))}
      </div>
    </section>
  );
}

export default Products;