import { useState, useEffect } from 'react';
import axios from 'axios'
import CardProduct from 'pages/components/CardProduct';
import { URL_PRODUCTS } from 'utils/constants';
import useSaveItems from 'pages/hooks/useSaveItems';

const validateLocalStore = ({ key }: any) => {
  const item = localStorage.getItem(key);

  if (item !== 'undefined') JSON.parse(item ?? '[]');

  return JSON.parse(item ?? '[]');
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<string[]>([]);
  const [itemsShoppingCart, setItemsShoppingCart] = useSaveItems();

  useEffect(() => {
    const getProducts = validateLocalStore({ key: 'products' });

    if (!products?.length) {
      setProducts(getProducts);
    }

    if (!products?.length && !getProducts?.length) {
      axios.get(URL_PRODUCTS)
      .then(response => {
        const products = response.data;
        localStorage.setItem('products', JSON.stringify(products));
        setProducts(products);
      });
    }
  }, [products?.length]);

  useEffect(() => {
    localStorage.setItem('shoppingCart', JSON.stringify(itemsShoppingCart));
  }, [itemsShoppingCart]);

  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-evenly flex-wrap">
          {products?.map((element: any, index: number) => <CardProduct key={index} product={element} setItemsShoppingCart={setItemsShoppingCart} />)}
        </div>
      </div>
    </>
  );
}

export default Home;
