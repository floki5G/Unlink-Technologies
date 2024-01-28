export function InputCheckbox({
  key,
  label,
  value,
  setValue,
}: {
  key: number | undefined;
  label: string;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <>
      <div className="flex">
        <input
          value={value}
          onChange={(e) => {
            setValue(Number(e.target.value));
          }}
          type="checkbox"
          className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
          id={`checkbox-${label}-${key}`}
        />
        <label
          htmlFor={`checkbox-${label}-${key}`}
          className="text-lg text-gray-500 ms-3 dark:text-gray-400"
        >
          {label}
        </label>
      </div>
    </>
  );
}
