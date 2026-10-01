import React from 'react';
import useCartStore from '../../Zustand/CartSlice';
import Container from '../../Components/Container';
import Header from '../../Components/AuthComponents/Header';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default function Cart() {
  const cart = useCartStore((state) => state.cart) || [];
  const addToCart = useCartStore((state) => state.addToCart);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

    const totalPrice = cart.reduce((total, item) => {
    const price = Number(item?.price) || 0;
    const qty = Number(item?.quantity) || 1;
    return total + price * qty;
  }, 0);

  return (
    <Container>
      <Header name={'Shopping Cart'} user />

      <div className="py-8">
        {cart.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-400 mb-4"> Your Shopping Cart Is Currently Empty 🛒</h2>
            <Link
              to="/shop"
              className="inline-block bg-(--main-color) text-black font-bold px-6 py-2 rounded shadow hover:opacity-90 transition-all"
            >
             Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">            
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item, index) => {
                const itemId = item?.id ||  item?._id || item?.title || index;
                return (
                  <div
                    key={itemId}
                    className="flex items-center justify-between bg-slate-800 p-4 rounded-lg text-white border border-slate-700 shadow-sm"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item?.image || item?.img || 'https://via.placeholder.com/80'}
                        alt={item?.title || 'Product'}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div>
                        <h3 className="font-bold text-lg">{item?.title || 'Product'}</h3>
                        <div>
  <h3 className="font-bold text-lg">{item?.title || 'Product'}</h3>
  <div className="flex items-center gap-2">
    <span className="text-(--main-color) font-bold text-lg">
      ${((Number(item?.price) || 0) * (Number(item?.quantity)||  1)).toFixed(2)}
    </span>
    {item?.quantity > 1 && (
      <span className="text-xs text-gray-400">
        {`$${item?.price}/item`}
      </span>
    )}
  </div>
</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 bg-slate-900 px-3 py-1.5 rounded-full">
                      <button
                        onClick={() => decreaseQuantity && decreaseQuantity(itemId)}
                        className="text-gray-300 hover:text-white p-1"
                      >
                        <FaMinus size={12} />
                      </button>
                      <span className="font-bold text-sm w-4 text-center">{item?.quantity || 1}</span>
                      <button
                        onClick={() => addToCart && addToCart(item)}
                        className="text-gray-300 hover:text-white p-1"
                      >
                        <FaPlus size={12} />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart && removeFromCart(itemId)}
                      className="text-red-400 hover:text-red-600 p-2 transition-colors"
                      title="Remove From Cart"
                    >
                      <FaTrash />
                    </button>
                  </div>
                );
              })}
            </div>
           
            <div className="bg-slate-800 p-6 rounded-lg text-white border border-slate-700 h-fit space-y-4"><h2 className="text-xl font-bold border-b border-slate-700 pb-3">Order Summary</h2>
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total:</span>
                <span className="text-(--main-color) font-black text-2xl">${totalPrice.toFixed(2)}</span>
              </div>
              <button className="w-full bg-(--main-color) text-black font-bold py-3 rounded-lg shadow hover:opacity-90 transition-all cursor-pointer">
                Continue Shopping (Checkout)
              </button>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}