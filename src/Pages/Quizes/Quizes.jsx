import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizLeft from "./QuizLeft/QuizLeft";
import QuizMain from "./QuizMain/QuizMain";
import QuizRight from "./QuizRight/QuizRight";

const Quizes = () => {
  const [datas, setDatas] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [seenQuizId, setSeenQuizId] = useState([]);
  const [checkedQuizId, setcheckedQuizId] = useState([]);
  const [isMarkedQuizId, setIsMarkedQuizId] = useState([]);
  const [chosenAnswers, setChosenAnswers] = useState([]);
  const [remainingTime, setRemainingTime] = useState(0);
  const [submitModalIsOpen, setSubmitModalIsOpen] = useState(false);
  const [submitResultModalIsOpen, setSubmitResultModalIsOpen] = useState(false);
  const [resultScore, setResultScore] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    fetch("/datas.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setDatas(data?.questions);
        setSelectedQuiz(data?.questions[0]);
        setSeenQuizId([data?.questions[0].id]);
      });
  }, []);
  const handleQuizSubmit = (remainingTime) => {
    setSubmitModalIsOpen(true);
    setRemainingTime(remainingTime);
  };
  const handleConfirmSubmit = () => {
    setResultScore({});
    setSubmitResultModalIsOpen(true);
    setTimeout(() => {
      setSubmitModalIsOpen(false);
    }, 10);

    // chosenAnswers
    const currectAnsArray = chosenAnswers?.filter(
      (eachAnswer) => eachAnswer?.isCorrect
    );
    const totalQuestions = datas?.length;
    const timeLeft = remainingTime;
    const totalCorrectAnswer = currectAnsArray?.length;
    const totalWrongAnswer = datas?.length - totalCorrectAnswer;
    const accuracyRate = ((totalCorrectAnswer / datas?.length) * 100).toFixed(
      2
    );
    const newResultScore = {
      timeLeft,
      totalCorrectAnswer,
      totalQuestions,
      totalWrongAnswer,
      accuracyRate,
    };
    setResultScore(newResultScore);
  };
  const handleReStart = () => {
    setSubmitResultModalIsOpen(false);
    setcheckedQuizId([]);
    setIsMarkedQuizId([]);
    setChosenAnswers([]);
    setRemainingTime(0);
    setSubmitModalIsOpen(false);
    setResultScore({});
    setSelectedQuiz(datas[0]);
    setSeenQuizId([datas[0].id]);
    // navigate("/");
  };
  return (
    <div className="grid grid-cols-4 gap-1">
      <QuizLeft
        handleQuizSubmit={handleQuizSubmit}
        checkedQuizId={checkedQuizId}
        datas={datas}
        selectedQuiz={selectedQuiz}
        seenQuizId={seenQuizId}
        setSeenQuizId={setSeenQuizId}
        setSelectedQuiz={setSelectedQuiz}
        isMarkedQuizId={isMarkedQuizId}
        setIsMarkedQuizId={setIsMarkedQuizId}
      />
      <QuizMain
        chosenAnswers={chosenAnswers}
        setChosenAnswers={setChosenAnswers}
        checkedQuizId={checkedQuizId}
        setcheckedQuizId={setcheckedQuizId}
        selectedQuiz={selectedQuiz}
      />
      <QuizRight
        isMarkedQuizId={isMarkedQuizId}
        setIsMarkedQuizId={setIsMarkedQuizId}
        seenQuizId={seenQuizId}
        setSeenQuizId={setSeenQuizId}
        selectedQuiz={selectedQuiz}
        setSelectedQuiz={setSelectedQuiz}
        datas={datas}
        chosenAnswers={chosenAnswers}
        setChosenAnswers={setChosenAnswers}
      />
      {/* confirm-submit-modal start here  */}
      {submitModalIsOpen && (
        <div>
          <input
            type="checkbox"
            id="confirm-submit-modal"
            className="modal-toggle"
          />
          <div className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">
                Are you submitting this task?
              </h3>
              <div className="py-4">
                <h1> total questions: {datas?.length}</h1>
                <h1> You have filled : {chosenAnswers?.length}</h1>
                <h1>
                  {" "}
                  You have Completed in {25 * 30 - remainingTime} seconds
                </h1>
              </div>

              <div className="modal-action">
                <label
                  onClick={handleConfirmSubmit}
                  htmlFor="quiz-result-modal"
                  className="btn"
                >
                  confirm
                </label>
                <label htmlFor="confirm-submit-modal" className="btn">
                  cancel
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* confirm-submit-modal end here  */}
      {/* quiz result-modal start here  */}
      {submitResultModalIsOpen && (
        <div>
          <input
            type="checkbox"
            id="quiz-result-modal"
            className="modal-toggle"
          />
          <div className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Score Board</h3>
              <div>
                {/* resultScore */}
                <h1>
                  You have Obtained{" "}
                  <span className="font-bold text-lg">
                    {resultScore?.totalCorrectAnswer}
                  </span>
                  /{resultScore?.totalQuestions}
                </h1>
                <h1>
                  Wrong Answer :{" "}
                  <span className="font-bold text-red-700">
                    {resultScore?.totalWrongAnswer}
                  </span>
                </h1>
                <h1>Accuracy Rate: {resultScore?.accuracyRate}%</h1>
                <h1>Time Remaaining: {resultScore?.timeLeft} seconds</h1>
              </div>
              <div className="modal-action">
                <label
                  onClick={handleReStart}
                  htmlFor="quiz-result-modal"
                  className="btn"
                >
                  Start Again
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* quiz result-modal ends here  */}
    </div>
  );
};

export default Quizes;
