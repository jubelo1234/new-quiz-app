function ProgressBar({cur, len}) {

    return (<div>
    <div className="h-[16px] p-[4px] w-full bg-white rounded-[999px] dark:bg-question">
        <div className="h-full rounded-[999px] bg-blue" style={{
          width: `${(cur / len) * 100}%`,
          transition: 'width 0.5s ease',
        }}></div>
    </div>
  </div>)
}

export default ProgressBar;
