import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import ButtonComponent from "../components/ButtonComponent";
const caseImages = import.meta.glob("/public/cases/*.png");

const caseDropImages = {
  elf: import.meta.glob("/public/elf_case/*.jpg"),
  human: import.meta.glob("/public/human_case/*.jpg"),
  orc: import.meta.glob("/public/orc_case/*.jpg"),
  undead: import.meta.glob("/public/undead_case/*.jpg"),
};

export default function CaseOpening() {
  const [shouldMove, setShouldMove] = useState(false);
  const [selectedCase, setSelectedCase] = useState(0);
  const x = useRef();
  const renderImages = Object.entries(
    Object.entries(caseDropImages)[selectedCase][1]
  ).map((e, key) => (
    <img
      src={e[0].replace("/public/", "")}
      key={key}
      id={key}
      className="grayscale transition-all duration-200"
    />
  ));

  function handleRightArrow() {
    if (shouldMove) return;
    else {
      if (selectedCase >= Object.keys(caseImages).length - 1) {
        setSelectedCase(0);
      } else {
        setSelectedCase(selectedCase + 1);
      }
    }
  }

  function handleLeftArrow() {
    if (shouldMove) return;
    else {
      if (selectedCase == 0) {
        setSelectedCase(Object.keys(caseImages).length - 1);
      } else {
        setSelectedCase(selectedCase - 1);
      }
    }
  }

  async function rollCase() {
    if (JSON.parse(localStorage.getItem("user_data")).case_ticket > 0) {
      if (shouldMove) {
        console.log("U cant open two cases at once");
      } else {
        setShouldMove(true);

        const winningNumber = Math.floor(Math.random() * 11);
        console.log(winningNumber);
        for (let index = 0; index < 3; index++) {
          for (
            let i = 0;
            i <
            Object.entries(Object.entries(caseDropImages)[selectedCase][1])
              .length;
            i++
          ) {
            if (index == 2) {
              for (
                let i = 0;
                i <
                Object.entries(Object.entries(caseDropImages)[selectedCase][1])
                  .length;
                i++
              ) {
                if (i == winningNumber) {
                  await addGrayscaleFilter(i, 300 * index);
                  endOpening(winningNumber);
                  setShouldMove(false);
                  return;
                } else {
                  await addGrayscaleFilter(i, 300 * index);
                  await removeGrayscaleFilter(i, 300 * index);
                }
              }
            } else {
              await addGrayscaleFilter(i, 300 * index);
              await removeGrayscaleFilter(i, 300 * index);
            }
          }
        }
      }
    } else {
      console.log("no tickets..");
    }
  }

  function endOpening(winNumber) {
    console.log(winNumber);
    let possibleWinnings = {
      1: 1,
      2: 2,
      3: 5,
      4: 10,
      5: 20,
      6: 30,
      7: 40,
      8: 100,
      9: 110,
      10: 120,
      11: 130,
      12: 200,
    };

    console.log("U should win" + Object.values(possibleWinnings)[winNumber]);
    /// send data to server add wartokens
    sendData(Object.values(possibleWinnings)[winNumber]);
  }

  const sendData = (winAmount) => {
    console.log("Called");
    console.log(winAmount);

    let fD = new FormData();

    fD.append("winAmount", winAmount);
    fD.append("betterId", JSON.parse(localStorage.getItem("user_data")).id);

    const requestOptions = {
      method: "POST",
      body: fD,
    };

    console.log(requestOptions.body);

    fetch("http://jnt.wbgl.eu/api/opening-win", requestOptions)
      .then((response) => {
        if (response.ok) {
          console.log("good");
        } else {
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
        <div className="flex flex-row justify-between w-full items-center">
          <ChevronLeft onClick={() => handleLeftArrow()} />
          <img
            src={Object.keys(caseImages)[selectedCase].replace("/public/", "")}
            width={120}
            height={75}
          />
          <ChevronRight onClick={() => handleRightArrow()} />
        </div>
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
