import React from "react";
import { TrashIcon } from "@heroicons/react/24/solid";

type propsType = {
  names: Array<string>;
  onClickDelete: (index: number) => void;
};

const NameList = (props: propsType) => {
  const { names, onClickDelete } = props;
  return (
    <div className="flex flex-col items-center border-3 border-blue-500 rounded-2xl h-100 overflow-auto mt-1">
      {names.map((name, index) => (
        <div
          key={"name" + index}
          className="flex flex-row border-b justify-center items-center w-full px-6"
        >
          <h1 className=" text-3xl text-black w-full">{name}</h1>
          <button
            onClick={() => {
              onClickDelete(index);
            }}
          >
            <TrashIcon className="h-6 w-6 text-red-500" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default NameList;
