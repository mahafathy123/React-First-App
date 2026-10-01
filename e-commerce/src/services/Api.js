const BASE_URL = 'https://dummyjson.com/products';

export const fetchAllProducts = async (limit = 20, skip = 0) => {
  try {
    const res = await fetch(`${BASE_URL}?limit=${limit}&skip=${skip}`);
    const data = await res.json();
    return data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const fetchProductsByCategory = async (category) => {
  try {
    const res = await fetch(`${BASE_URL}/category/${category}`);
    const data = await res.json();
    return data.products;
  } catch (error) {
    console.error(`Error fetching category ${category}:, error`);
    return [];
  }
};

export const searchProducts = async (query) => {
  try {
    const res = await fetch(`${BASE_URL}/search?q=${query}`);
    const data = await res.json();
    return data.products;
  } catch (error) {
    console.error("Error searching products:", error);
    return [];
  }
};