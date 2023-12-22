import { FC, useEffect, useState } from "react";

export type HitAndBlowType = {
  answer: string;
  hit: number;
  blow: number;
};

type Props = {
  answerHistories: HitAndBlowType[];
  clickNewGame: () => void;
};

export const HitAndBlow: FC<Props> = (props) => {
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  useEffect(() => {
    if (props.answerHistories.length > 0) {
      setIsCorrect(() => {
        if (props.answerHistories[0].hit === 4) {
          return true;
        }
        return false;
      });
    } else {
      setIsCorrect(false);
    }
  }, [props]);

  return (
    <>
      <div
        style={{
          color: "red",
          fontSize: "20px",
          fontWeight: "bold",
          margin: "10px"
        }}
      >
        {isCorrect && "おめでとう"}
      </div>
      {isCorrect && <button onClick={props.clickNewGame}>もう一度する</button>}
      <div>
        {props.answerHistories.map((history, index) => {
          return (
            <div key={index}>
              Answer: {history.answer} Hit: {history.hit} Blow: {history.blow}
            </div>
          );
        })}
      </div>
    </>
  );
};
