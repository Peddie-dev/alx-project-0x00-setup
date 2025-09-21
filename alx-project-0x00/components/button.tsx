import { ButtonProps } from "@/interfaces/index"

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button
      className={`px-4 py-2 font-medium text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 ${styles}`}
    >
      {title}
    </button>
  );
};

export default Button;