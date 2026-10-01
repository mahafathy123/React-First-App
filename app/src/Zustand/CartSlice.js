import { create } from 'zustand';

const useCartStore = create((set, get) => ({
  cart: [],
  wishlist: [],
  toggleWishlist: (product) => {
    if (!product) return;
    const { wishlist } = get();
    const productId = product.id || product._id || product.title;

    const exists = wishlist.some(
      (item) => (item.id || item._id || item.title) === productId
    );

    if (exists) {   
      set({
        wishlist: wishlist.filter(
          (item) => (item.id || item._id || item.title) !== productId
        ),
      });
    } else {     
      set({
        wishlist: [...wishlist, product],
      });
    }
  },

  addToCart: (product) => {
    if (!product) return;
    const { cart } = get();
    const productId = product.id || product._id || product.title;

    const existingIndex = cart.findIndex(
      (item) => (item.id || item._id || item.title) === productId
    );

    if (existingIndex > -1) {
      const updatedCart = cart.map((item, index) =>
        index === existingIndex
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      );
      set({ cart: updatedCart });
    } else {
      set({ cart: [...cart, { ...product, quantity: 1 }] });
    }
  },

  decreaseQuantity: (productId) => {
    const { cart } = get();
    const updatedCart = cart
      .map((item) => {
        const id = item.id || item._id ||  item.title;
        if (id === productId) {
          return { ...item, quantity: (item.quantity || 1) - 1 };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);

    set({ cart: updatedCart });
  },

  removeFromCart: (productId) => {
    const { cart } = get();
    set({
      cart: cart.filter(
        (item) => (item.id || item._id || item.title) !== productId
      ),
    });
  },
  clearCart: () => set({ cart: [] }),
}));

export default useCartStore;