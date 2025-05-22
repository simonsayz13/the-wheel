import { useState } from "react";

type propsType = {
  onAdd: (name: string) => void;
};

const NameInput = (props: propsType) => {
  const { onAdd } = props;
  const [input, setInput] = useState("");
  const handleAdd = () => {
    if (input.trim()) {
      onAdd(input.trim());
      setInput("");
    }
  };

  return (
    <div className="flex flex-row justify-center">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="p-2 rounded-l-lg border-blue-500 border-2 focus:outline-none placeholder-blue-500 text-blue-500 "
        placeholder="Enter name"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded-r-lg border-blue-500 border-2"
      >
        Add
      </button>
    </div>
  );
};

export default NameInput;
