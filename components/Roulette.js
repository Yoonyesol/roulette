import { useEffect, useRef, useState } from "react";
import style from "./Roulette.module.css";

const Roulette = () => {
  const canvasRef = useRef(null);
  const [option, setOption] = useState(2);
  const [product, setProduct] = useState([]);
  const [inputValues, setInputValues] = useState([""]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [winning, setWinning] = useState("");

  const colors = [
    "#e0496a",
    "#3e5bdd",
    "#f6d049",
    "#60b236",
    "#f7a416",
    "#2ca073",
    "#9ec1e6",
    "#dd6db4",
    "#7058b3",
    "#9e3a92",
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext(`2d`);
    if (!ctx) return;

    const newMake = () => {
      const [canvasWidth, canvasHeight] = [canvas.width / 2, canvas.height / 2];
      const arc = Math.PI / (option / 2);

      for (let i = 0; i < option; i++) {
        ctx.beginPath();
        ctx.fillStyle = colors[i % colors.length];

        ctx.moveTo(canvasWidth, canvasHeight);
        ctx.arc(canvasWidth, canvasHeight, canvasWidth, arc * (i - 1), arc * i);
        ctx.fill();
        ctx.closePath();
      }

      ctx.fillStyle = "black";
      ctx.font = "18px Pretendard";
      ctx.textAlign = "center";

      for (let i = 0; i < product.length; i++) {
        const angle = arc * i + arc / 2;

        ctx.save();

        ctx.translate(
          canvasWidth + Math.cos(angle) * (canvasWidth - 50),
          canvasHeight + Math.sin(angle) * (canvasHeight - 50)
        );

        ctx.rotate(angle + Math.PI / 2);

        product[i].split(" ").forEach((text, j) => {
          ctx.fillText(text, 0, 30 * j);
        });

        ctx.restore();
      }
    };

    newMake();
  }, [product, colors, option]);

  const rotate = () => {
    if ((option === 1 && inputValues[0] === "") || inputValues.includes("")) {
      alert("옵션을 모두 입력해 주세요!");
      return;
    }

    if (product.length === 0) {
      alert("완료 버튼을 눌러 주세요!");
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    setIsSpinning(true);

    canvas.style.transform = `initial`;
    canvas.style.transition = `initial`;

    setTimeout(() => {
      const ran = Math.floor(Math.random() * option);

      const arc = (2 * Math.PI) / option;
      const rotate = (arc * ran + Math.PI / 2) * (180 / Math.PI) + 3630;

      canvas.style.transform = `rotate(-${rotate}deg)`;
      canvas.style.transition = `2s`;

      setTimeout(() => {
        setIsSpinning(false);
        setShowButtons(true);
        setWinning(product[ran]);
        alert(`축하합니다! '${product[ran]}' 당첨`);
      }, 2000);
    }, 1);
  };

  const resetRoulette = () => {
    setProduct([]);
    setInputValues(Array(option).fill(""));
    setWinning("");
    setShowButtons(false);
  };

  const increaseOption = () => {
    if (option !== 10) {
      setOption(option + 1);
      setInputValues((prevValues) => [...prevValues, ""]);
    }
  };

  const decreaseOption = () => {
    if (option !== 2) {
      setOption(option - 1);
      setInputValues((prevValues) => prevValues.slice(0, -1));
    }
  };

  const handleInputChange = (index, value) => {
    setInputValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });
  };

  const handleComplete = () => {
    setProduct([...inputValues]);
  };

  return (
    <div className={style.container}>
      <div className={style.optionContainer}>
        <h3>옵션 개수 선택</h3>
        <p>(2 ~ 10개 선택)</p>
        <div className={style.controller}>
          <button onClick={decreaseOption}>-</button>
          <p>
            <b>{option}</b>개
          </p>
          <button onClick={increaseOption}>+</button>
        </div>
      </div>
      <div className={style.roulette}>
        <canvas ref={canvasRef} width="350" height="350"></canvas>
      </div>
      {!showButtons && (
        <button className={style.start} onClick={rotate}>
          룰렛 돌리기
        </button>
      )}
      {showButtons && (
        <div className={style.winningBtn}>
          <div className={style.winningLabel}>
            <b>{`"${winning}"`}</b> 당첨
          </div>
          <div className={style.behindBtn}>
            <button
              className={style.start}
              onClick={rotate}
              disabled={isSpinning}
            >
              다시 돌리기
            </button>
            <button
              className={style.new}
              onClick={resetRoulette}
              disabled={isSpinning}
            >
              새 원판
            </button>
          </div>
        </div>
      )}
      {!showButtons && (
        <p style={{ color: "grey", marginTop: "1.5rem" }}>
          옵션을 모두 입력한 뒤 완료 버튼을 눌러주세요.
        </p>
      )}
      {!showButtons && (
        <div className={style.optionInput}>
          {Array.from({ length: option }).map((_, index) => (
            <div key={index} className={style.inputDiv}>
              <input
                placeholder={`옵션 ${index + 1} 입력`}
                value={inputValues[index]}
                onChange={(e) => handleInputChange(index, e.target.value)}
              />
            </div>
          ))}
          <button onClick={handleComplete}>완료</button>
        </div>
      )}
    </div>
  );
};

export default Roulette;
