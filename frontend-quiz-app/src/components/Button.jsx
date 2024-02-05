import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTitle } from "./QuizSlice";


function Button({ image, text, value }) {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  function handleClick(){
    dispatch(setTitle(value));
    navigate("/questions")
  }

  return (
    <div>
      <button
        className="flex w-full capitalize gap-[16px] p-[12px] focus:outline focus:outline-[2px] outline-blue mobile:p-[20px] cursor-pointer font-[500] text-[18px] mobile:text-[28px] items-center rounded-[12px] mobile:rounded-[20px] bg-white shadow-3xl dark:shadow-none dark:bg-question"
        value={value}
        onClick={handleClick}
      >
        <img src={image} alt="subject" className="w-[40px] mobile:w-[56px]" />
        <h3>{text}</h3>
      </button>
    </div>
  );
}

export default Button;
