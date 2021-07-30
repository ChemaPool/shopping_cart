import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useConsumer } from 'utils/Context';
import EmptyCart from 'pages/components/EmptyCart';
import { Product } from 'utils/types';
import useSaveItems from 'pages/hooks/useSaveItems';

const ShoppingCart: React.FC = () => {
  const [state, dispatch]: any = useConsumer();
  const [itemsShoppingCart, setItemsShoppingCart]: any = useSaveItems();
  const [totalPriceCart, setTotalPriceCart] = useState<number>(0);
  const totalPrice: number = state.cart?.reduce((acc: number, item: Product) => acc + parseFloat(item.price), 0);

  let hash: any = {};
  let frecuencyItems: any = {};
  const singleProducts = state.cart?.filter((element: Product) => hash[element.id] ? false : hash[element.id] = true);
  state.cart?.forEach((numero: any) => {
    frecuencyItems[numero.id] = (frecuencyItems[numero.id] || 0) + 1;
  });

  const addItem = (item: any) => {
    dispatch({ type: 'ADD_ITEM', data: { item } });
    setItemsShoppingCart((prevState: any) => [...prevState, item]);
  }

  const removeItem = (item: any, index: any) => {
    dispatch({ type: 'REMOVE_ITEM', data: { index } });
    setItemsShoppingCart((prevState: any) => [...prevState.slice(0, index), ...prevState.slice(index + 1)]);
  }

  const clearCart = () => {
    dispatch({ type: 'REMOVE_ALL_ITEMS' });
    localStorage.removeItem('shoppingCart');
    window.location.reload();
  }

  const transformTotal = (value: number) => value.toFixed(2);

  useEffect(() => {
    localStorage.setItem('shoppingCart', JSON.stringify(itemsShoppingCart));
  }, [itemsShoppingCart]);

  useEffect(() => {
    if (totalPriceCart === 0 || totalPriceCart) {
      setTotalPriceCart(totalPrice)
    }
  }, [totalPriceCart, totalPrice]);

  if (!state?.cart.length) return <EmptyCart />;

  return (
    <div className="divide-y divide-gray-100">
      <div className="flex justify-between">
        <div>
          <button
            type="button"
            className="bg-green-500 hover:bg-green-700 text-base text-white font-semibold px-6 py-2 rounded-lg m-4"
            onClick={clearCart}
          >
            Vaciar carrito
          </button>
        </div>
        <div className="flex items-center font-bold">
          <div className="px-3 py-2">Total: ${transformTotal(totalPriceCart)} MXN</div>
        </div>
      </div>

      {singleProducts?.map((item: Product, index: number) => (
        <article key={index} className="p-4 flex space-x-4">
          <Image src={item?.cover} alt={item.name} className="flex-none rounded-lg object-cover bg-gray-100" width="144" height="144" />
            <div className="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20 w-24 md:w-auto">
              <h2 className="text-sm font-semibold text-black mb-0.5 md:text-lg overflow-clip">
                {item?.name}
              </h2>
              <div className="flex flex-wrap text-sm font-medium whitespace-pre">
                <div className="flex items-center w-full mt-0.5 font-normal ">
                  <button
                    className="rounded bg-gray-100 hover:bg-gray-200 p-2"
                    onClick={() => removeItem(item, index)}
                  >
                    -
                  </button>
                  <div className="flex justify-center w-10">
                    {frecuencyItems[item.id]}
                  </div>
                  <button
                    className="rounded bg-gray-100 hover:bg-gray-200 p-2"
                    onClick={() => addItem(item)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap text-sm font-medium whitespace-pre">
                <div>
                  Precio: {item.price} MXN c/u
                </div>
              </div>
            </div>
        </article>
      ))}
    </div>
  );
}

export default ShoppingCart;
