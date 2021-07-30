type ButtonProps = {
  text?: string;
  onClick?: (params?: any) => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      type="button"
      className="bg-green-500 hover:bg-green-700 text-base text-white font-semibold px-6 py-2 rounded-lg m-4"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
