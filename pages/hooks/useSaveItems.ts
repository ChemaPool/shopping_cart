import { useState } from 'react';

const validateLocalStore = ({ key }: any) => {
  const item = localStorage.getItem(key);

  if (item !== 'undefined') JSON.parse(item ?? '[]');

  return JSON.parse(item ?? '[]');
}

const useSaveItems = () => {
  const shoppingCart = typeof window !== 'undefined' ? validateLocalStore({ key: 'shoppingCart' }) : [];

  const [itemsShoppingCart, setItemsShoppingCart] = useState(
    shoppingCart
  );

  return [itemsShoppingCart, setItemsShoppingCart];
};

export default useSaveItems;
