import { create } from 'zustand';
import axios from 'axios';

const ApiProduct = "http://localhost:5000/products";
const limit = 8;

const useProductInfo = create((set, get) => ({
  products: [],
  isPendingProducts: false,
  error: null,
  page: 1,
  totalPages: 1,
  selectedCategory: "women",
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setPage: (newPage) => {
    set({ page: newPage });
  },
  fetchProducts: async (category) => {
    const { page } = get();
    try {
      set({ isPendingProducts: true });

      const url = category 
        ? `${ApiProduct}?category=${category}&_limit=${limit}&_page=${page}`
        : `${ApiProduct}?_limit=${limit}&_page=${page}`;
      const res = await axios.get(url);
      const total = res.headers['x-total-count'] || 20;

      set({ 
        products: res.data,
        isPendingProducts: false,
        totalPages: Math.ceil(total / limit),
        error: null
      });
    } catch (error) {
      set({ 
        error: error.message, 
        isPendingProducts: false 
      });
    }
  }
}));

export default useProductInfo;