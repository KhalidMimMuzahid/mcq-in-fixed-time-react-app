import { CountdownCircleTimer } from "react-countdown-circle-timer";
import EachQuesNo from "./EachQues/EachQuesNo";

const QuizLeft = ({
  datas,
  setSelectedQuiz,
  setSeenQuizId,
  seenQuizId,
  checkedQuizId,
  isMarkedQuizId,
}) => {
  // const [

  return (
    <div className="mt-4">
      {/* 1st portion */}
      <h3 className="text-orange-500 font-bold text-3xl">Time Left</h3>
      <div className="flex justify-center items-center mt-3">
        <CountdownCircleTimer
          isPlaying
          duration={10 * 60}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[7, 5, 2, 0]}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      </div>

      {/* 2nd portion */}

      <div className="grid grid-cols-3 gap-2 mt-5 mx-3">
        {datas?.map((data, i) => (
          <EachQuesNo
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
    </div>
  );
};

export default QuizLeft;
