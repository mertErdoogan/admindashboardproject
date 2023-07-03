import { FieldValues, UseFormRegister, ValidationRule } from 'react-hook-form';

interface InputProps<T extends FieldValues> {
  label?: string;
  type?: string;
  name: string;
  register: UseFormRegister<T>;
  required?: string;
  pattern?: ValidationRule<RegExp> | string;
  className?: string;
  placeholder?: string;
}

const CustomTextInput = ({
  label,
  type = 'text',
  name,
  register,
  required,
  className,
  pattern,
  placeholder,
}: InputProps<any>) => {
  return (
    <>
      <label className="text-gray-500 font-medium">{label}</label>
      <input
        className={`border block outline-1 placeholder:text-gray-300 outline-gray-400/60 border-gray-200 text-black ${
          className ? className : 'px-4 py-3'
        }`}
        type={type}
        placeholder={placeholder}
        {...register(name, {
          required,
          pattern: pattern as unknown as ValidationRule<RegExp>,
        })}
      />
    </>
  );
};

export default CustomTextInput;
