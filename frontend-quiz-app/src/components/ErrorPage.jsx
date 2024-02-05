import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="w-full h-full mt-[10vh] text-center flex flex-col items-center justify-center">
      <h1 className="text-[35px] font-[500] exsm:text-[40px] mobile:text-[64px] leading-none mb-[15px]">Oops!</h1>
      <p className="text-[14px] font-[400] exsm:text-[18px] mobile:text-[24px] leading-tight mb-[5px]">Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
