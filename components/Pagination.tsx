import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import React from 'react';

interface PaginationProps {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  itemsPerPage,
  totalItems,
  goToNextPage,
  goToPreviousPage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevious = () => {
    goToPreviousPage();
  };

  const handleNext = () => {
    goToNextPage();
  };

  return (
    <div className="flex justify-end items-center mt-4">
      <div className="mr-2">Rows per page: {itemsPerPage}</div>
      <div className="mr-2">
        {(currentPage - 1) * itemsPerPage + 1}-
        {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}
      </div>
      <button
        className={`mx-1 px-3 py-1 rounded ${
          currentPage === 1
            ? 'cursor-not-allowed text-gray-300'
            : 'text-gray-500'
        }`}
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        <ChevronLeftIcon className="w-5 h-5" />
      </button>
      <button
        className={`mx-1 px-3 py-1 rounded ${
          currentPage === totalPages
            ? 'bg-gray-200 cursor-not-allowed'
            : 'text-gray-500'
        }`}
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        <ChevronRightIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Pagination;
