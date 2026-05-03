import { create } from 'zustand';
import axios from "axios";

const useProductsStore = create((set) => ({
    products: [],
    async getProductData() {
        try {
            const response = await axios.get('https://65b7cc9846324d531d558a48.mockapi.io/loangoserver');
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