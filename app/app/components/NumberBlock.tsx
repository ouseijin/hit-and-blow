import React, { FC, useState } from "react";

type Props = {
  onInputNumber: (num: number) => void;
  onInputPrev: () => void;
  onInputNext: () => void;
  onInputClear: () => void;
  userAnswer: string[];
};

export const NumberBlock: FC<Props> = (props) => {
  const numberAry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const wrapper: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    width: "200px"
  };
  const item: React.CSSProperties = {
    width: "50px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "pink",
    border: "1px solid",
    padding: "5px",
    cursor: "pointer"
  };
  const selectedItem: React.CSSProperties = {
    ...item,
    backgroundColor: "gray",
    pointerEvents: "none"
  };
  return (
    <div style={wrapper}>
      <div style={item} onClick={() => props.onInputPrev()}>
        ←
      </div>
      <div style={item} onClick={() => props.onInputNext()}>
        →
      </div>
      <div style={item} onClick={() => props.onInputClear()}>
        C
      </div>
      {numberAry.map((num, index) => {
        return (
          <div
            key={index}
            style={props.userAnswer.includes(String(num)) ? selectedItem : item}
            onClick={() => {
              props.onInputNumber(num);
            }}
          >
            {num}
          </div>
        );
      })}
    </div>
  );
};
