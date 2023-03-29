import React, { useEffect, useState } from "react";

const EachOption = ({ handelSelect, option, chosenAnswers, selectedQuiz }) => {
  const [shouldChecked, setShouldChecked] = useState(false);
  useEffect(() => {
    const thisAnswer = chosenAnswers.find(
      (eachAnswer) => eachAnswer.questionId === selectedQuiz?.id
    );
    if (thisAnswer?.selectedOption === option) {
      setShouldChecked(true);
    } else {
      setShouldChecked(false);
    }
  }, [chosenAnswers, selectedQuiz, option]);
  return (
    <label className="text-left ml-10 flex gap-3">
      <input
        onChange={() => handelSelect(option)}
        type="radio"
        name="agroup"
        id=""
        className="cursor-pointer p-3"
        checked={shouldChecked}
      />
      <p className="text-xl cursor-pointer">{option}</p>
    </label>
  );
};

export default EachOption;
