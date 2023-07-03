interface CustomButtonProps {
  onClick: (e: React.SyntheticEvent) => void;
  children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onClick, children }) => {
  return (
    <button
      className={`bg-yellow-500 text-white rounded-md py-3 px-4`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
