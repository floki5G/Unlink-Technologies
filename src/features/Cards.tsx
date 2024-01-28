import React from "react";
import { useNavigate } from "react-router-dom";

export function Cards({
  name,
  description,
  icon,
  keyName,
  link,
  edit,
}: {
  name: string;
  description: string;
  icon: string;
  keyName: string;
  link: string;
  edit?: React.ReactNode;
}) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <h3 className="text-lg font-bold text-gray-800 dark:text-white">
        {name}
      </h3>
      <p className="mt-1 text-xs font-medium text-gray-500 dark:text-gray-500">
        {description}
      </p>
      {edit}

      <button
        onClick={() => navigate(link)}
        className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      >
        Card link
        <svg
          className="flex-shrink-0 w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}
