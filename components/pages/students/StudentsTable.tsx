import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { UsersT } from '../../../hooks/useFetch';
import Image from 'next/image';

type TBodyStudentT = {
  values: UsersT[];
  setSelectedStudent: (student: UsersT) => void;
  setIsOpen: (key: boolean) => void;
  handleDeleteStudent: (key: number) => void;
};

const StudentsTable = ({
  values,
  setSelectedStudent,
  setIsOpen,
  handleDeleteStudent,
}: TBodyStudentT) => {
  return (
    <tbody>
      {values &&
        values?.map((item) => (
          <tr
            key={item.id}
            className="bg-gray-100 border-t-[10px] border-white border-separate"
          >
            <td className="py-2 px-4">
              <Image
                src={item.image}
                alt={item.firstName}
                className="rounded-2xl"
                width={65}
                height={55}
              />
            </td>
            <td className="py-2 px-4 text-sm">{item.firstName}</td>
            <td className="py-2 px-4 text-sm">{item.email}</td>
            <td className="py-2 px-4 text-sm">{item.phone}</td>
            <td className="py-2 px-4 text-sm">
              <a href={item.domain} className="hover:underline">
                {item.domain}
              </a>
            </td>
            <td className="py-2 px-4">{item?.company?.name}</td>
            <td className="py-2 px-4">
              <button
                onClick={() => {
                  setSelectedStudent(
                    values.find((student) => student.id === item.id) as UsersT
                  );
                  setIsOpen(true);
                }}
                className="font-bold py-1 px-2 rounded"
              >
                <PencilIcon className="w-6 h-6 text-yellow-500" />
              </button>
              <button
                onClick={() => handleDeleteStudent(item.id)}
                className="font-bold py-1 px-2 rounded ml-2"
              >
                <TrashIcon className="w-6 h-6 text-yellow-500" />
              </button>
            </td>
          </tr>
        ))}
    </tbody>
  );
};

export default StudentsTable;
