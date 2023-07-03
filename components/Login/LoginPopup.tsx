import CustomTextInput from '../FormElements/CustomTextInput';
import CustomButton from '../FormElements/CustomButton';
import { ValidationRule, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

type LoginProps = {
  email: string;
  password: string;
};

const LoginPopup = () => {
  const form = useForm<LoginProps>();
  const router = useRouter();
  const onSubmit = (data: LoginProps) => {
    localStorage.setItem('loggedIn', 'true');
    router.push('/');
    console.log(`email: ${data.email}
password: ${data.password}`);
  };

  useEffect(() => {
    if (localStorage.getItem('loggedIn')) router.push('/');
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[480px] shadow-md rounded-2xl px-8 py-10 bg-white">
        <div className="flex justify-center">
          <span className="block relative before:absolute before:-left-3 text-3xl text-black font-bold text-center before:flex before:h-full before:w-1.5 before:mr-3 before:bg-yellow-300">
            MANAGE COURSES
          </span>
        </div>
        <div className="block text-center mt-11">
          <span className="text-xl text-black font-semibold">SIGN IN</span>
          <span className="block mt-2 text-gray-500">
            Enter your credentials to access your account
          </span>
        </div>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="block mt-11">
            <div className="mb-3">
              <CustomTextInput
                name="email"
                label={'email'}
                register={form.register}
                required="Email is required"
                pattern={{
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email format',
                }}
              />
              {form.formState.errors.email && (
                <span className="text-red-500">
                  {form.formState.errors.email.message}
                </span>
              )}
            </div>
            <div className="mb-3">
              <CustomTextInput
                name="password"
                label={'password'}
                register={form.register}
                required="Password is required"
                pattern={
                  {
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters long',
                    },
                  } as unknown as ValidationRule<RegExp>
                }
              />
              {form.formState.errors.password && (
                <span className="text-red-500">
                  {form.formState.errors.password.message}
                </span>
              )}
            </div>
          </div>
          <div className="block">
            <CustomButton onClick={() => form.handleSubmit(onSubmit)}>
              SIGN IN
            </CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
