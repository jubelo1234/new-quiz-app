import { Link } from "react-router-dom"

function TimeOut() {
    return (
        <div className=" w-full h-full min-h-[40vh] flex items-center flex-col  justify-center">
            <h2 className="text-[18px] exsm:text-[24px] mobile:text-[28px] pb-3">Your session has timed out.</h2>
            <Link to={"/"} className="w-fit hover:bg-italicd transition duration-300 ease-in-out bg-blue text-white py-2  font-semibold text-[16px] exsm:text-[18px] mobile:text-[24px] rounded-[5px] px-6 capitalize">Go Back Home</Link>
        </div>
    )
}

export default TimeOut
