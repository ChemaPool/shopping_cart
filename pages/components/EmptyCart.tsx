import Link from 'next/link';

const EmptyCart: React.FC = () => (
  <div className="flex flex-col items-center space-y-8 py-24">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
    </svg>
    <div className="font-semibold">
      Carrito vacío
    </div>
    <div>
      <Link href="/">
        <a className="bg-green-500 hover:bg-green-700 text-base text-white font-semibold px-6 py-2 rounded-lg m-4">
          Ir de compras
        </a>
      </Link>
    </div>
  </div>
);

export default EmptyCart;
