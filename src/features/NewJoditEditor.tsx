import React from "react";

import JoditEditor from "jodit-react";
export function NewJoditEditor({
  placeholder,
  setPlaceholder,
}: {
  placeholder: string;
  setPlaceholder: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <JoditEditor
      value={placeholder}
      onChange={(value) => setPlaceholder(value)}
      className="100vh"
    />
  );
}
