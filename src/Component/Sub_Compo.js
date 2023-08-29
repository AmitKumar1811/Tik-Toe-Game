import React, {  useEffect, useState } from "react";
import "./CSS/index.css";

const Sub_Compo = () => {
  const [data, setData] = useState(Array(9).fill(null));
  const [isATurn, setIsATurn] = useState(null);
  const starthandler = (value) => {
    setIsATurn(value);
    if (value === true) {
      alert("Match Start By A");
    } else {
      alert("Match Start By B");
    }
  };

  const winnerHandler = () => {
    const winning = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6], 
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2],
    ];
    for (let logic of winning) {
      const [a, b, c] = logic;
      if (
        data[a] !== null &&
        data[a] === data[b] &&
        data[a] === data[c] &&
        data[c] === data[b]
      ) {
        
        return data[a];
      }
    }

    return false;
  };
  
  const Win=winnerHandler();

  const fetchrandom = (index) => {
  console.log("index is", index);
  const copystate = [...data];

  if(copystate[index] === null) {
  copystate[index] = isATurn ? "X" : "O";
  console.log(copystate);
  setData(copystate);

  setIsATurn(!isATurn);
  } 
  else 
  {
  alert("Select Empty Box");
  }
  };


  const handlegame = () => {
    setData(Array(9).fill(null));
    setIsATurn(null);
  };


  return (
    <>
      <div className="Main">
        <div>
          {isATurn === null ? (
            <>
              <button onClick={() => starthandler(true)}>First Start A</button>
              <button onClick={() => starthandler(false)}>First Start B</button>
            </>
          ) : Win ? (
            <>
              <h1>Winner is {Win}</h1>
              <button onClick={handlegame}>Start Game</button>
            </>
          ) : (
            <>
              <button onClick={handlegame}>Reset Game</button>
              <div className="buttonhandle">
                <button className={isATurn ? "myButton1" : "myButton"}>
                  Start A
                </button>
                <button className={isATurn ? "myButton" : "myButton1"}>
                  Start B
                </button>
              </div>
              <div className="Box1">
                <div className="bigSquare">
                  <div className= "smallSquare"  onClick={() => fetchrandom(0)}>
                    <p className={data[0]==="X" ? "xturn" : "oturn"} value={data[0]}>{data[0]}</p>
                  </div>
                  <div className="smallSquare" onClick={() => fetchrandom(1)}>
                    <p className={data[1]==="X" ? "xturn" : "oturn"} value={data[1]}>{data[1]}</p>
                  </div>
                  <div className="smallSquare" onClick={() => fetchrandom(2)}>
                    <p className={data[2]==="X" ? "xturn" : "oturn"} value={data[2]}>{data[2]}</p>
                  </div>
                  <div className="smallSquare" onClick={() => fetchrandom(3)}>
                    <p className={data[3]==="X" ? "xturn" : "oturn"} value={data[3]}>{data[3]}</p>
                  </div>
                  <div className="smallSquare" onClick={() => fetchrandom(4)}>
                    <p className={data[4]==="X" ? "xturn" : "oturn"} value={data[4]}>{data[4]}</p>
                  </div>
                  <div className="smallSquare" onClick={() => fetchrandom(5)}>
                    <p className={data[5]==="X" ? "xturn" : "oturn"} value={data[5]}>{data[5]}</p>
                  </div>
                  <div className="smallSquare" onClick={() => fetchrandom(6)}>
                    <p className={data[6]==="X" ? "xturn" : "oturn"} value={data[6]}>{data[6]}</p>
                  </div>
                  <div className="smallSquare" onClick={() => fetchrandom(7)}>
                    <p className={data[7]==="X" ? "xturn" : "oturn"} value={data[7]}>{data[7]}</p>
                  </div>
                  <div className="smallSquare" onClick={() => fetchrandom(8)}>
                    <p className={data[8]==="X" ? "xturn" : "oturn"} value={data[8]}>{data[8]}</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Sub_Compo;
