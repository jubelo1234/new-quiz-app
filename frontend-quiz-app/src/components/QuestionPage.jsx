import ProgressBar from "./ProgressBar";
import Question from "./Question";
import errori from "../images/icon-error.svg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import quizData from "../data";
import TimeOut from "./TimeOut";

function Questions() {
  const title = useSelector((state) => state.quiz.title);
  // const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  

  // useEffect(() => {
  //   if (!title) {
  //     navigate('/');
  //   }
  // }, [title, navigate]);


  if (!title) {
    return (
      <TimeOut/>
    );
  }

  const allQuestions = quizData.filter((item) => item.title === title);
  

  const currentQuestion = allQuestions[0].questions[currentQuestionIndex];
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const [shuffledOptions, setShuffledOptions] = useState([]);

  useEffect(() => {
    // Shuffle the options when the currentQuestionIndex changes
    setShuffledOptions(shuffleArray([...currentQuestion.options]));
  }, [currentQuestionIndex, currentQuestion.options]);

  // console.log(currentQuestion);

  const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];

  const questionLength = allQuestions[0].questions.length;
  console.log(questionLength);

  const [selectedOption, setSelectedOption] = useState(null);
  const [showRes, setShowRes] = useState("no");
  const correctOption = currentQuestion.answer;

  const [shouldDisable, setShouldDisable] = useState(false);

  function handleOptionSelect(selected) {
    setSelectedOption(selected);
  }



  return (
    <>
      <div className="flex flex-col tablet:flex-row tablet:justify-between">
        <div className="flex flex-col tablet:justify-between tablet:w-[40%]">
          <div>
            <p className=" text-[14px] mobile:text-[20px] text-italicl dark:text-italicd italic">
              {`Question ${currentQuestionIndex + 1} of ${questionLength}`}
            </p>
            <h1 className="text-[27px] font-bold exsm:text-[32px] mobile:text-[36px] leading-none mt-[12px]  mb-[24px]">
              {currentQuestion.question}
            </h1>
          </div>
          <ProgressBar cur={currentQuestionIndex + 1} len={questionLength} />
        </div>
        <div className="flex flex-col gap-[12px] mobile:gap-[24px] w-full tablet:w-[48%] mt-[40px] tablet:mt-[0px]">
          {shuffledOptions.map((option, index) => (
            <Question
              key={index}
              option={letters[index]}
              val={option}
              onOptionSelect={handleOptionSelect}
              isSelected={selectedOption === option}
              showres={showRes}
              isCorrect={correctOption}
              disable={shouldDisable}
            />
          ))}
        </div>
      </div>
      <SubmitBut
        set={setShowRes}
        dis={setShouldDisable}
        check={selectedOption}
        setQuesIndex={setCurrentQuestionIndex}
        setOption={setSelectedOption}
        ableButton={setShouldDisable}
        queslength={questionLength}
        currentQuestionIndex={currentQuestionIndex}
      />
    </>
  );
}

function SubmitBut({
  set,
  dis,
  check,
  setQuesIndex,
  setOption,
  ableButton,
  queslength,
  currentQuestionIndex,
}) {
  const [picked, setPicked] = useState(true);
  const [submitButtonState, setButton] = useState("submit answer");

  const navigate = useNavigate();

  function handleClick(e) {
    const value = e.target.value;
    console.log(currentQuestionIndex);

    if (value === "submit answer") {
      console.log(check);
      if (check) {
        setPicked(true);
        set("show");
        dis(true);
        if (currentQuestionIndex >= queslength - 1) {
          setButton("show results");
        } else {
          setButton("next question");
        }
      } else {
        setPicked(false);
      }
    } else if (value === "next question") {
      setQuesIndex((currentQuestionIndex) => (currentQuestionIndex += 1));

      setButton("submit answer");
      set("no");
      setOption(null);
      ableButton(false);
    } else if (value === "show results") {
      navigate("/score");
    }
  }

  return (
    <div className="w-full relative mt-[12px] flex mobile:mt-[24px] items-center justify-center tablet:justify-end pb-[55px] tablet:pb-[75px]">
      <button
        value={submitButtonState}
        onClick={handleClick}
        className="w-full desktop:hover:bg-italicd transition duration-300 ease-in-out tablet:w-[48%] bg-blue text-white py-2 h-[56px] mobile:h-[86px] font-bold text-[16px] mobile:text-[28px] exsm:text-[18px] rounded-[12px] capitalize mobile:rounded-[20px]"
      >
        {submitButtonState}
      </button>
      <div
        className={` absolute items-center justify-center gap-1 bottom-0 right-0 ${
          picked ? "hidden" : "flex"
        } w-full tablet:w-[48%]`}
      >
        <img src={errori} alt="choose an option" />
        <p className="capitalize text-[14px] exsm:text-[16px] mobile:text-[18px] font-semibold">
          Please select an answer
        </p>
      </div>
    </div>
  );
}

export default Questions;
