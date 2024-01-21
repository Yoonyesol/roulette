import style from "./Explain.module.css";

const Explain = () => {
  return (
    <div className={style.container}>
      <h2>룰렛 이용방법</h2>
      <div className={style.content}>
        <p>
          1. 옵션 개수를 선택해 주세요. 2개 ~ 10개까지의 옵션을 설정할 수
          있습니다.
        </p>
        <p>
          2. 룰렛 하단의 입력창에 옵션명을 입력해 주세요. 모든 옵션을 입력한 뒤
          <b> 완료</b> 버튼을 눌러주세요.
        </p>
        <p>
          3. 룰렛 돌리기 버튼을 눌러 룰렛을 돌리고 당첨 결과를 확인해 주세요.
        </p>
        <br />
        <h3>룰렛 결과를 확인한 후</h3>
        <p>
          <b>* 다시 돌리기</b> 버튼을 눌러 룰렛을 한번 더 돌릴 수 있습니다.
        </p>
        <p>
          <b>* 재설정</b> 버튼을 눌러 현재 룰렛에 옵션을 추가하거나 제거할 수
          있습니다.
        </p>
        <p>
          <b>* 새 원판</b> 버튼을 눌러 모든 옵션이 초기화된 새로운 룰렛을 생성할
          수 있습니다.
        </p>
      </div>
    </div>
  );
};

export default Explain;
