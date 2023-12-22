import React, { FC } from "react";

type Props = {
  numbers: string[];
  activeBlock: number;
  setActiveBlock: (number: number) => void;
  checkAnswer: () => void;
};

export const InputBlock: FC<Props> = (props) => {
  const numWrapper: React.CSSProperties = {
    display: "flex"
  };
  const numBlock: React.CSSProperties = {
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid",
    cursor: "pointer"
  };

  const checkFilledAnswer = () => {
    return props.numbers.some((num) => num === "");
  };

  return (
    <div style={numWrapper}>
      {props.numbers.map((num, index) => {
        return (
          <div
            style={{
              ...numBlock,
              backgroundColor: props.activeBlock === index ? "pink" : "initial"
            }}
            key={index}
            onClick={() => props.setActiveBlock(index)}
          >
            {num}
          </div>
        );
      })}
      {!checkFilledAnswer() && (
        <button onClick={props.checkAnswer} style={{ marginLeft: "10px" }}>
          回答！
        </button>
      )}
    </div>
  );
};
