import { useRef, useState } from "react";
import { render } from "react-dom";
import { ChevronDown } from "react-feather";
import caseImg from "../assets/case.png";
import ButtonComponent from "../components/ButtonComponent";
const humanCaseImages = import.meta.glob("/public/human_case/*.jpg");

export default function CaseOpening() {
  const [shouldMove, setShouldMove] = useState(false);
  const [selectedCase, setSelectedCase] = useState(0);
  const x = useRef();

  const renderImages = Object.entries(humanCaseImages).map((e, key) => (
    <img
      src={e[0].replace("/public/", "")}
      key={key}
      id={key}
      className="grayscale"
    />
  ));

  async function rollCase() {
    const winningNumber = Math.floor(
      Math.random() * Object.entries(humanCaseImages).length
    );
    console.log(winningNumber);

    //run 5 times and each time make it slower
    for (let index = 0; index < 5; index++) {
      console.log("Round" + index);
      for (let i = 0; i < Object.entries(humanCaseImages).length; i++) {
        if (index == 4) {
          // when we're in final lap we should decide where we stop
          console.log("last round");
          for (let i = 0; i < Object.entries(humanCaseImages).length; i++) {
            if (i == winningNumber) {
              console.log("We found it");
              await addGrayscaleFilter(i, 100 * index);
              return;
            } else {
              await addGrayscaleFilter(i, 100 * index);
              await removeGrayscaleFilter(i, 100 * index);
            }
          }
        } else {
          await addGrayscaleFilter(i, 100 * index);
          await removeGrayscaleFilter(i, 100 * index);
        }
      }
    }
  }

  const addGrayscaleFilter = async (img, delay) => {
    document.getElementById(img).classList.add("grayscale-0");
    await sleep(delay);
  };

  const removeGrayscaleFilter = async (img, delay) => {
    document.getElementById(img).classList.remove("grayscale-0");
    await sleep(delay);
  };
  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  return (
    <>
      <h1 className="font-medium text-2xl">Case opening</h1>
      <div className="flex flex-col items-center gap-y-8 w-full my-[40px] relative flex-wrap">
        <img src={caseImg} width={120} height={75} />
        <div
          ref={x}
          className={`flex flex-row justify-between flex-wrap gap-4 top-0 left-0 duration-1000 transition-all transform translate-x-0`}
        >
          {renderImages}
        </div>
      </div>
      <ButtonComponent text="OTEVŘÍT BEDNU" onClick={() => rollCase()} />
    </>
  );
}
