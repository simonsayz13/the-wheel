import React from "react";

type propsType = {
  winner: string;
  onClickBack: () => void;
};

const Winner = (props: propsType) => {
  const { winner, onClickBack } = props;

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col border-2 border-red-500 justify-center items-center rounded-2xl w-full">
        <h1 className="text-red-500 text-3xl">Congratulations</h1>
        <h1 className="text-red-500 text-6xl font-bold">{winner}</h1>
      </div>
      <button
        className="mt-4 border-2 bg-blue-500 border-blue-500  py-2 rounded-lg w-18"
        onClick={onClickBack}
      >
        Back
      </button>
    </div>
  );
};

export default Winner;
