"use client";
import { useState } from "react";
import Wheel from "../components/ClientWheel";

type propsType = {
  names: Array<string>;
  onClickBack: () => void;
  onWin: (winnerName: string) => void;
};

const NameWheel = (props: propsType) => {
  const { names, onClickBack, onWin } = props;
  const [mustSpin, setMustSpin] = useState(false);
  const [winIndex, setWinIndex] = useState(0);

  const data = names.map((name) => ({ option: name }));

  const handleSpin = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    setWinIndex(randomIndex);
    setMustSpin(true);
  };

  return (
    <div className="flex flex-col items-center h-100">
      {data.length > 0 && (
        <>
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={winIndex}
            data={data}
            onStopSpinning={() => {
              setMustSpin(false);
              onWin(names[winIndex]);
              console.log(winIndex);
            }}
            backgroundColors={["#ff6384", "#36a2eb", "#cc65fe", "#ffce56"]}
            textColors={["#ffffff"]}
            outerBorderColor="black"
            radiusLineWidth={3}
            outerBorderWidth={3}
            radiusLineColor="black"
            disableInitialAnimation={true}
            spinDuration={1}
          />
          <div className="flex flex-row gap-4">
            <button
              className="mt-4 border-2 border-blue-500 text-blue-500 py-2 rounded-lg w-18"
              onClick={onClickBack}
            >
              Back
            </button>
            <button
              className="mt-4 border-2 border-blue-500 bg-blue-500 text-white py-2 rounded-lg w-18"
              onClick={handleSpin}
            >
              Spin
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default NameWheel;
