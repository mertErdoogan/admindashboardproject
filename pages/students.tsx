import React from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import CustomTextInput from '../components/FormElements/CustomTextInput';
import { useForm } from 'react-hook-form';
import CustomButton from '../components/FormElements/CustomButton';
import useFetch, { UsersT } from '../hooks/useFetch';
import Loading from '../components/Loading';
import { GetServerSideProps, NextPage } from 'next';
import { useEffect, useState } from 'react';
import Pagination from '../components/Pagination';
import StudentForm, {
  FormValues,
} from '../components/pages/students/StudentForm';
import FilterInput from '../components/FilterInput';
import StudentsTable from '../components/pages/students/StudentsTable';

interface ServerPageProps {
  initialData: any[];
}

const Students: NextPage<ServerPageProps> = () => {
  const form = useForm();
  const [data, setData] = useState<UsersT[]>();
  const limit = 5;
  const {
    data: studentData,
    isLoading,
    currentPage,
    totalItems,
    goToNextPage,
    goToPreviousPage,
  } = useFetch('https://dummyjson.com/users', limit);

  const thRows = ['Name', 'Email', 'Phone', 'Website', 'Company Name'];

  // Edit & Create Form Modal State
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<UsersT>();
  //

  // Search Input
  const [filterText, setFilterText] = useState<string>('');
  const [filteredValues, setFilteredValues] = useState<UsersT[]>([]);

  const handleFilterChange = (filteredValues: UsersT[]) => {
    setFilteredValues(filteredValues);
  };
  //
  const updateStudent = (values: FormValues) => {
    setData((prevState) =>
      prevState?.map((student) => {
        if (student.id === selectedStudent?.id) {
          return {
            ...student,
            firstName: values.firstName,
            email: values.email,
            phone: values.phone,
            domain: values.domain,
            company: {
              name: values.company,
            },
          };
        }
        return student;
      })
    );
  };

  const createStudent = (values: FormValues) => {
    data &&
      setData([
        ...data,
        {
          id: data.length + 1,
          firstName: values.firstName,
          email: values.email,
          phone: values.phone,
          domain: values.domain,
          company: {
            name: values.company,
          },
          image: data[0].image,
        } as unknown as UsersT,
      ]);
  };

  const handleDeleteStudent = (student_id: number) => {
    setData((prevState) =>
      prevState?.filter((student) => student.id !== student_id)
    );
  };

  useEffect(() => {
    setData(studentData.users as UsersT[]);
  }, [studentData]);

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between border-b pb-8">
        <h1 className="text-2xl font-bold">Student List</h1>
        <div className="flex">
          <form className="flex items-center">
            <FilterInput
              values={data as UsersT[]}
              onFilterChange={handleFilterChange}
              filterText={filterText}
              setFilterText={setFilterText}
            />
            <CustomButton
              onClick={(e: React.SyntheticEvent) => {
                e.preventDefault();
                setSelectedStudent(undefined);
                setIsOpen(true);
              }}
            >
              ADD NEW STUDENT
            </CustomButton>
          </form>
        </div>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <table className="min-w-full border-collapse mt-6">
          <thead>
            <tr>
              <th className="py-2 px-4"></th>
              {thRows.map((item) => (
                <th
                  key={`${item}`}
                  className="text-gray-400 text-xs font-semibold py-2 px-4"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          {data && filteredValues && (
            <StudentsTable
              values={filterText ? filteredValues : data}
              setSelectedStudent={setSelectedStudent}
              setIsOpen={setIsOpen}
              handleDeleteStudent={handleDeleteStudent}
            />
          )}
        </table>
      )}
      <Pagination
        currentPage={currentPage}
        itemsPerPage={limit}
        totalItems={totalItems}
        goToPreviousPage={goToPreviousPage}
        goToNextPage={goToNextPage}
      />
      <StudentForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        updateStudent={updateStudent}
        createStudent={createStudent}
        student={
          selectedStudent
            ? {
                firstName: selectedStudent?.firstName,
                email: selectedStudent?.email,
                phone: selectedStudent?.phone,
                domain: selectedStudent?.domain,
                company: selectedStudent?.company.name,
              }
            : undefined
        }
      />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<
  ServerPageProps
> = async () => {
  const initialData: any[] = [];

  return {
    props: { initialData },
  };
};

export default Students;
