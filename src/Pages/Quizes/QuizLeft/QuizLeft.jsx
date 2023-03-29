import { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import EachQuesNo from "./EachQues/EachQuesNo";

const QuizLeft = ({
  datas,
  selectedQuiz,
  setSelectedQuiz,
  setSeenQuizId,
  seenQuizId,
  checkedQuizId,
  isMarkedQuizId,
  handleQuizSubmit,
}) => {
  const [remainingTime, setRemainingTime] = useState(25 * 60);
  const children = (remainingTime) => {
    setRemainingTime(remainingTime);
  };
  return (
    <div className="mt-4">
      {/* 1st portion */}
      <h3 className="text-orange-500 font-bold text-3xl">Time Left</h3>
      <div className="flex justify-center items-center mt-3">
        <CountdownCircleTimer
          isPlaying
          duration={25 * 30}
          colors="#A30000"
          strokeWidth="24"
          onUpdate={(remainingTime) => children(remainingTime)}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      </div>
      {/* 2nd portion */}

      <div className="grid grid-cols-3 gap-2 mt-5 mx-3">
        {datas?.map((data, i) => (
          <EachQuesNo
            selectedQuiz={selectedQuiz}
            key={data?.id}
            setSelectedQuiz={setSelectedQuiz}
            seenQuizId={seenQuizId}
            checkedQuizId={checkedQuizId}
            setSeenQuizId={setSeenQuizId}
            data={data}
            isMarkedQuizId={isMarkedQuizId}
          />
        ))}
      </div>
      <div className="mt-12">
        <label
          onClick={() => handleQuizSubmit(remainingTime)}
          htmlFor="confirm-submit-modal"
          className=" font-bold mx-12  bg-slate-600 text-white px-12 py-4 rounded-3xl hover:bg-slate-800 hover:cursor-pointer"
        >
          Finish Test
        </label>
      </div>
    </div>
  );
};

export default QuizLeft;
