import Image from 'next/image';
import Button from 'pages/components/Button';
import { useConsumer } from 'utils/Context';
import { Product } from 'utils/types';

type PropTypes = {
  product: Product;
  setItemsShoppingCart: ([]: any) => void;
};

const CardProduct: React.FC<PropTypes> = ({ product, setItemsShoppingCart }) => {
  const [state, dispatch]: any = useConsumer();

  const addItem = (item: Product) => {
    dispatch({ type: 'ADD_ITEM', data: { item } });
    setItemsShoppingCart((prevState: any) => [...prevState, product]);
  }

  return (
    <div className="grid grid-cols-1 m-5 bg-gray-100 shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <div className="relative z-10 col-start-1 row-start-1 px-4 pt-40 pb-3 bg-gradient-to-t from-black">
        <h2
          className="text-base font-semibold text-white w-24 truncate"
          title={product?.name}
        >
          {product?.name}
        </h2>
      </div>
      <div className="col-start-1 row-start-2 px-4">
        <div className="flex justify-center text-sm font-medium my-5">
          <div className="text-base font-normal mx-2">
            $ {product?.price} MXN
          </div>
        </div>
        <hr className="w-16 border-gray-300 hidden" />
      </div>
      <div className="col-start-1 row-start-3 px-4">
        <Button
          text="Agregar al carrito"
          onClick={() => addItem(product)}
        />
      </div>
      <div className="col-start-1 row-start-1 flex">
        <div className="w-full grid grid-cols-3 grid-rows-2 gap-2">
          <div className="relative col-span-3 row-span-2">
            <Image src={product?.cover} alt={product?.name} className="absolute inset-0 w-full h-full object-cover bg-gray-100" layout="fill" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
