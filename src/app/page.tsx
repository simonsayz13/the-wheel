"use client";
import { useState } from "react";
import NameInput from "./components/NameInput";
import Wheel from "./components/Wheel";
import NameList from "./components/NameList";
import Image from "next/image";
import logo from "../../public/fortune-wheel.png";
import { useWindowSize } from "react-use";
import dynamic from "next/dynamic";
import Winner from "./components/Winner";

const Confetti = dynamic(() => import("react-confetti"), { ssr: false });

export default function Home() {
  const [names, setNames] = useState<string[]>([]);
  const [ready, setReady] = useState<boolean>(false);
  const [winner, setWinner] = useState<string>("");
  const addName = (name: string) => {
    setNames([...names, name]);
  };

  const deleteNameAtIndex = (indexToDelete: number) => {
    setNames((prevNames) =>
      prevNames.filter((_, index) => index !== indexToDelete)
    );
  };

  const onClickReady = () => {
    setReady(true);
  };
  const onClickReset = () => {
    setReady(false);
    setNames([]);
    setWinner("");
  };
  const onClickBack = () => {
    setReady(false);
  };

  const onWin = (winner: string) => {
    setWinner(winner);
  };

  const onClickBackWinner = () => {
    setWinner("");
    setReady(false);
  };

  const { width, height } = useWindowSize();
  return (
    <main className="flex justify-center flex-col gap-4">
      <div className="flex flex-col justify-center items-center">
        {winner && <Confetti width={width} height={height} />}
        <Image src={logo} alt="Description of image" width={100} height={100} />
        {/* <h1 className="text-6xl font-bold text-center text-blue-500">
          The Wheel
        </h1> */}
        <h1 className="text-6xl font-bold text-center">
          <span className="text-red-500">T</span>
          <span className="text-orange-500">h</span>
          <span className="text-yellow-500">e</span>
          &nbsp;
          <span className="text-green-500">W</span>
          <span className="text-blue-500">h</span>
          <span className="text-indigo-500">e</span>
          <span className="text-purple-500">e</span>
          <span className="text-pink-500">l</span>
        </h1>
      </div>

      {winner ? (
        <Winner winner={winner} onClickBack={onClickBackWinner} />
      ) : ready ? (
        <Wheel names={names} onClickBack={onClickBack} onWin={onWin} />
      ) : (
        <div className="flex flex-col gap-2">
          <div className="flex justify-center flex-row gap-2">
            <NameInput onAdd={addName} />
            <button
              className="bg-red-500 text-white  rounded-lg border-blue-500 w-18"
              onClick={onClickReset}
            >
              Clear
            </button>
          </div>

          <NameList names={names} onClickDelete={deleteNameAtIndex} />

          <div className="flex justify-center">
            <button
              className={
                names.length > 0
                  ? "border-2 bg-blue-500 border-blue-500  py-2 rounded-lg w-18"
                  : "py-2 rounded-lg bg-gray-200 text-gray-500  cursor-not-allowed w-18"
              }
              onClick={onClickReady}
              disabled={names.length === 0}
            >
              Ready
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
