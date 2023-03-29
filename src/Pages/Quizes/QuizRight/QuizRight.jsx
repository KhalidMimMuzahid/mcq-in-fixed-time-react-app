import React from "react";
import { ArrowUturnRightIcon } from "@heroicons/react/24/solid";
const QuizRight = ({
  seenQuizId,
  setSeenQuizId,
  selectedQuiz,
  setSelectedQuiz,
  datas,
  isMarkedQuizId,
  setIsMarkedQuizId,
}) => {
  const handelNextClick = () => {
    if (datas?.length > selectedQuiz?.id) {
      console.log("selectedQuiz: ", selectedQuiz);
      const index = selectedQuiz?.id;
      const newSelectedQuiz = datas[index];
      setSelectedQuiz(newSelectedQuiz);
    }

    if (seenQuizId.findIndex((j) => j === selectedQuiz?.id + 1) === -1) {
      const newseenQuizId = [...seenQuizId, selectedQuiz?.id + 1];
      setSeenQuizId(newseenQuizId);
    }
  };
  const handelMarkClick = () => {
    if (isMarkedQuizId.indexOf(selectedQuiz?.id) !== -1) {
      // do unmark
      // console.log("do unmark");
      const quizIndex = isMarkedQuizId?.indexOf(selectedQuiz?.id);
      // console.log(" quizIndex", quizIndex);
      const newIsMarkedQuizId = [...isMarkedQuizId];
      newIsMarkedQuizId.splice(quizIndex, 1);
      setIsMarkedQuizId(newIsMarkedQuizId);
    } else {
      // do mark
      const newIsMarkedQuizId = [...isMarkedQuizId, selectedQuiz?.id];
      setIsMarkedQuizId(newIsMarkedQuizId);
    }
  };
  return (
    <div className="border border-white">
      {/* mark div */}
      <div
        onClick={handelMarkClick}
        className="border border-white mx-28 my-10 p-3 rounded-xl cursor-pointer hover:bg-slate-200 hover:text-black font-semibold text-lg"
      >
        <p>
          {isMarkedQuizId.indexOf(selectedQuiz?.id) !== -1 ? "Un mark" : "Mark"}
        </p>
      </div>

      {/* {console.log(currentIndex)} */}

      {/* reset div */}
      <div className="border border-white mx-28 my-5 p-3 rounded-xl cursor-pointer hover:bg-slate-200 hover:text-black font-semibold text-lg">
        <p>Reset</p>
      </div>

      <div
        onClick={handelNextClick}
        className="border border-white mx-28 my-10 p-3 rounded-xl cursor-pointer hover:bg-slate-200 hover:text-black font-semibold text-lg"
      >
        <ArrowUturnRightIcon className="h-10 w-10 mx-auto" />
        <p>Next</p>
      </div>
    </div>
  );
};

export default QuizRight;
