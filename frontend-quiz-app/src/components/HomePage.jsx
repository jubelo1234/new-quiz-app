import Button from "./Button";
import icon_css from "../images/icon-css.svg";
import icon_html from "../images/icon-html.svg";
import icon_js from "../images/icon-js.svg";
import icon_accessibility from "../images/icon-accessibility.svg";
import { useDispatch } from "react-redux";
import { reset } from "./QuizSlice";

function Home() {
  const dispatch = useDispatch();

  dispatch(reset());
  return (
    <div className="flex flex-col tablet:flex-row tablet:justify-between">
      <div>
        <h1 className="text-[35px] font-[300] exsm:text-[40px] mobile:text-[64px] leading-none  mb-[8px]">
          Welcome to the
        </h1>
        <h1 className="text-[35px] font-[500] exsm:text-[40px] mobile:text-[64px] leading-none">
          Frontend Quiz!
        </h1>
        <p className="mt-[16px] text-[14px] mobile:text-[20px] text-italicl dark:text-italicd italic">
          Pick a subject to get started.
        </p>
      </div>
      <div className="flex flex-col gap-[12px] mobile:gap-[24px] w-full tablet:w-[48%] mt-[40px] tablet:mt-[0px]">
        <Button image={icon_html} text={"HTML"} value={"HTML"} />
        <Button image={icon_css} text={"CSS"} value={"CSS"} />
        <Button image={icon_js} text={"javascript"} value={"javascript"} />
        <Button
          image={icon_accessibility}
          text={"accessibility"}
          value={"accessibility"}
        />
      </div>
    </div>
  );
}

export default Home;
