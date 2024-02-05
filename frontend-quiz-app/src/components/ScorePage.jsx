import icon_CSS from "../images/icon-css.svg";
import icon_HTML from "../images/icon-html.svg";
import icon_Javascript from "../images/icon-js.svg";
import icon_Accessibility from "../images/icon-accessibility.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reset } from "./QuizSlice";
import { useEffect } from "react";
import TimeOut from "./TimeOut";

function ScorePage() {
  const title = useSelector((state) => state.quiz.title);

  // const navigate = useNavigate();

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

  let titleImg;

  if (title === "HTML") {
    titleImg = icon_HTML;
  } else if (title === "CSS") {
    titleImg = icon_CSS;
  } else if (title === "Javascript") {
    titleImg = icon_Javascript;
  } else {
    titleImg = icon_Accessibility;
  }

  return (
    <div className="flex flex-col tablet:flex-row tablet:justify-between">
      <div>
        <h1 className="text-[33px] font-[400] exsm:text-[40px] mobile:text-[64px] leading-none  mb-[8px]">
          Quiz completed
        </h1>
        <h1 className="text-[35px] font-[500] exsm:text-[40px] mobile:text-[64px] leading-none">
          You scored...
        </h1>
      </div>
      <div className="flex flex-col gap-[12px] mobile:gap-[24px] w-full tablet:w-[48%] tablet:max-w-[550px] mt-[40px] mobile:mt-[64px] tablet:mt-[0px]">
        <ScoreCard imgs={titleImg} />
        <PlayAgain />
      </div>
    </div>
  );
}

function ScoreCard({ imgs }) {
  const title = useSelector((state) => state.quiz.title);
  const score = useSelector((state) => state.quiz.score);

  let finlScore;

  if (score === 0) {
    finlScore = 0;
  } else {
    finlScore = score;
  }

  return (
    <div className="flex gap-[16px] flex-col p-[32px] mobile:p-[48px] w-full items-center justify-center bg-white dark:bg-question shadow-3xl rounded-[12px] mobile:rounded-[20px]">
      <div className="flex gap-[16px] mobile:gap-[24px] items-center">
        <img src={imgs} alt="html" className="w-[40px] mobile:w-[56px]" />
        <p className="text-[18px] mobile:text-[28px] font-medium capitalize ">
          {title}
        </p>
      </div>
      <h1 className="text-[88px] mobile:text-[144px] tablet:text-[128px] font-[500] mobile:pt-[18px] leading-none">
        {finlScore}
      </h1>
      <p className="text-[18px] leading-none mobile:text-[24px] text-italicl dark:text-italicd">
        out of 10
      </p>
    </div>
  );
}

function PlayAgain() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick(){
    dispatch(reset());
    navigate("/");
  }

  return (
    <div>
      <button onClick={handleClick} className="w-full bg-blue hover:bg-italicd p-[12px] mobile:p-[32px] rounded-[12px] mobile:rounded-[20px] text-[16px] exsm:text-[18px] mobile:text-[28px] shadow-3xl tablet:text-[24px] tablet:p-[26px] font-semibold text-white ransition duration-300 ease-in-out">
        Play Again
      </button>
    </div>
  );
}

export default ScorePage;
