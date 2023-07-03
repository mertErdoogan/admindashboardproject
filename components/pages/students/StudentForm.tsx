import React, { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Dialog, Transition } from '@headlessui/react';
import CustomTextInput from '../../FormElements/CustomTextInput';

const schema = yup.object().shape({
  firstName: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone is required'),
  domain: yup.string().required('Website is required'),
  company: yup.string().required('Company name is required'),
});
export type FormValues = {
  firstName: string;
  email: string;
  phone: string;
  domain: string;
  company: string;
};
const StudentForm = ({
  isOpen,
  setIsOpen,
  student,
  updateStudent,
  createStudent,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  student?: FormValues;
  updateStudent: (values: FormValues) => void;
  createStudent: (values: FormValues) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    if (student) {
      updateStudent(data);
      reset();
    } else {
      createStudent(data);
      reset();
    }
    closeModal();
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (student) {
      for (const key in student) {
        setValue(key as keyof FormValues, student[key as keyof FormValues]);
      }
    } else {
      reset();
    }
  }, [student]);

  return (
    <div className="max-w-md mx-auto mt-8 p-4">
      <Transition.Root show={isOpen} as={React.Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-4 p-4"
                >
                  <div>
                    <CustomTextInput
                      name="firstName"
                      register={register}
                      label="firstName"
                      placeholder="firstName"
                      className="px-2 py-2 mt-2 w-full"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <CustomTextInput
                      name="email"
                      register={register}
                      label="E-mail"
                      placeholder="email"
                      className="px-2 py-2 mt-2 w-full"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <CustomTextInput
                      name="phone"
                      register={register}
                      label="Phone"
                      placeholder="phone"
                      className="px-2 py-2 mt-2 w-full"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <CustomTextInput
                      name="domain"
                      register={register}
                      label="Website"
                      placeholder="website"
                      className="px-2 py-2 mt-2 w-full"
                    />
                    {errors.domain && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.domain.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <CustomTextInput
                      name="company"
                      register={register}
                      label="CompanyName"
                      placeholder="companyName"
                      className="px-2 py-2 mt-2 w-full"
                    />
                    {errors.company && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.company.message}
                      </p>
                    )}
                  </div>
                  <div className="flex space-x-4">
                    <button
                      type="submit"
                      className="px-4 py-2 text-white bg-yellow-500 hover:bg-yellow-600 rounded-md"
                    >
                      {student ? 'Edit' : 'Create'}
                    </button>
                    <button
                      type="button"
                      onClick={closeModal}
                      className="px-4 py-2 text-white bg-gray-500 hover:bg-gray-600 rounded-md"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default StudentForm;
