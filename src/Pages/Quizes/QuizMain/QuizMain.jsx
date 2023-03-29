import React, { useEffect, useState } from "react";
import EachOption from "./EachOption/EachOption";

const QuizMain = ({
  selectedQuiz,
  checkedQuizId,
  setcheckedQuizId,
  chosenAnswers,
  setChosenAnswers,
}) => {
  const handelSelect = (option) => {
    // console.log(option);
    const isCorrect = selectedQuiz?.correctAnswer === option;
    const isAlreadyClicked = chosenAnswers.findIndex(
      (eachAnswer) => eachAnswer?.questionId === selectedQuiz?.id
    );
    if (isAlreadyClicked === -1) {
      // todo for first time option clicked
      // console.log("first clicked");
      const answeer = {
        questionId: selectedQuiz?.id,
        selectedOption: option,
        isCorrect,
      };
      const newChosenAnswers = [...chosenAnswers, answeer];
      setChosenAnswers(newChosenAnswers);
    } else {
      // todo for   re-clicked
      // console.log("re-clicked");
      let newChosenAnswers = chosenAnswers.map((eachAnswer) => {
        if (eachAnswer?.questionId === selectedQuiz?.id) {
          const answer = { ...eachAnswer };
          answer.selectedOption = option;
          return answer;
        } else {
          return eachAnswer;
        }
      });
      setChosenAnswers(newChosenAnswers);
    }
    if (
      checkedQuizId.findIndex((eachId) => eachId === selectedQuiz?.id) === -1
    ) {
      const newCheckedQuizId = [...checkedQuizId, selectedQuiz?.id];
      setcheckedQuizId(newCheckedQuizId);
    }
  };

  return (
    <div className="border-l border-white h-screen col-span-2 pt-4">
      <h1 className="text-orange-500 font-bold text-3xl ">Question</h1>
      <h3 className="text-xl p-3 font-semibold mt-3">
        {selectedQuiz?.id}
        {`. `} {selectedQuiz?.question.slice(3, -4)}
      </h3>
      {/* {console.log(selectedQuiz?.options)} */}

      <div>
        {selectedQuiz?.options?.map((option, i) => (
          <EachOption
            key={i}
            option={option}
            handelSelect={handelSelect}
            chosenAnswers={chosenAnswers}
            selectedQuiz={selectedQuiz}
          />
        ))}
      </div>
    </div>
  );
};

export default QuizMain;
