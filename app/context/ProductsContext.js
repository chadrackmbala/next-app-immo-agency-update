import { create } from 'zustand';
import axios from "axios";

const useProductsStore = create((set) => ({
    products: [],
    async getProductData() {
        try {
            // API interne Next.js App Router
            const response = await axios.get('/api/produits');
            set({ products: response.data }); // <-- ici products, pas product
            // console.log(response.data);
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    },
    upDateProduct(data) {
        set({ products: data }); // <-- idem ici
    }
}));

export default useProductsStore;