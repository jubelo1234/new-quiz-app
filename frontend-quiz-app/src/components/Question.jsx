import correcti from "../images/icon-correct.svg";
import errori from "../images/icon-error.svg";
import { useDispatch } from "react-redux";
import { addToScore } from "./QuizSlice";

function Question({
  option,
  val,
  onOptionSelect,
  isSelected,
  showres,
  isCorrect,
  disable,
}) {
  const handleOptionSelect = () => {
    onOptionSelect(val);
  };
  const dispatch = useDispatch();

  const correctOption = isCorrect === val ? true : false;
  let optionStyle;
  let boxStyle;
  let statusImg;



  if (isSelected && showres === "show" && correctOption) {
    optionStyle = "outline outline-[2px] mobile:outline-[3px] outline-green";
    boxStyle = " bg-green text-white";
    statusImg = " ";
      if (isCorrect === val ){
    dispatch((addToScore()));
  }
  } else if (isSelected && showres === "show" && !correctOption) {
    optionStyle = "outline outline-[2px] mobile:outline-[3px] outline-red";
    boxStyle = " bg-red text-white";
    statusImg = " ";
  } else if (isSelected && showres !== "show") {
    optionStyle = "outline outline-[2px] mobile:outline-[3px] outline-blue";
    boxStyle = " bg-blue text-white";
    statusImg = "hidden";
  } else if (showres === "show" && correctOption) {
    optionStyle = "outline outline-[2px] mobile:outline-[3px] outline-green";
    boxStyle = " bg-green text-white";
    statusImg = " ";
  } else {
    optionStyle = " ";
    boxStyle = "bg-light text-italicl group-hover:text-blue";
    statusImg = "hidden";
  }

  return (
    <div>
      <button
        disabled={disable}
        onClick={handleOptionSelect}
        className={`group flex w-full  justify-start p-[12px] ${optionStyle} mobile:p-[18px] cursor-pointer  font-[500] text-[15px] exsm:text-[18px] mobile:rounded-[20px] mobile:text-[28px] tablet:text-[24px] items-center rounded-[12px] bg-white shadow-3xl dark:shadow-none dark:bg-question `}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex w-full gap-[16px] items-center">
            {" "}
            <span
              className={`w-[35px] h-[35px] exsm:w-[40px] uppercase ${boxStyle} min-w-[35px] exsm:min-w-[40px] mobile:min-w-[56px] mobile:w-[56px] grid place-items-center exsm:h-[40px] mobile:h-[56px] text-[18px] rounded-[8px] mobile:text-[28px] `}
            >
              {option}
            </span>
            <h3 className=" leading-[1.4rem] mobile:leading-[1.9rem]">{val}</h3>
          </div>
          <img
            src={!correctOption ? errori : correcti}
            alt="correct"
            className={`w-[25px] px-1 exsm:w-[32px] mobile:w-[40px] ${statusImg}`}
          />
        </div>
      </button>
    </div>
  );
}

export default Question;
