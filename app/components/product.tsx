"use client";

type ProductData = {
  image?: string;
  title?: string;
  rooms?: number;
};

type ProductProps = {
  productData?: ProductData;
};

export default function Product({ productData }: ProductProps) {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-[15px] shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
      <img
        src={productData?.image ?? '/house1.jpg'}
        alt={productData?.title ?? 'Logement'}
        className="h-48 w-72 object-cover rounded-lg"
      />
      <div className="mt-4 text-center">
        <h3 className="font-semibold text-lg">{productData?.title ?? 'Logement'}</h3>
        <p className="text-sm text-gray-500">{productData?.rooms ?? 0} chambre(s) salon</p>
      </div>
    </div>
  );
}
