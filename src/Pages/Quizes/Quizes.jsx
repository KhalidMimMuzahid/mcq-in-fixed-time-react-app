import React, { useEffect, useState } from "react";
import QuizLeft from "./QuizLeft/QuizLeft";
import QuizMain from "./QuizMain/QuizMain";
import QuizRight from "./QuizRight/QuizRight";

const Quizes = () => {
  const [datas, setDatas] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [correctAnsCount, setCorrectAnsCount] = useState(0);
  // const [bgColor, setBgColor] = useState("bg-slate-400");
  const [seenQuizId, setSeenQuizId] = useState([]);
  const [checkedQuizId, setcheckedQuizId] = useState([]);
  const [isMarkedQuizId, setIsMarkedQuizId] = useState([]);

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

  return (
    <div className="grid grid-cols-4 gap-1">
      <QuizLeft
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
        checkedQuizId={checkedQuizId}
        setcheckedQuizId={setcheckedQuizId}
        selectedQuiz={selectedQuiz}
        setCorrectAns={setCorrectAnsCount}
      />
      <QuizRight
        isMarkedQuizId={isMarkedQuizId}
        setIsMarkedQuizId={setIsMarkedQuizId}
        seenQuizId={seenQuizId}
        setSeenQuizId={setSeenQuizId}
        selectedQuiz={selectedQuiz}
        setSelectedQuiz={setSelectedQuiz}
        datas={datas}
      />
    </div>
  );
};

export default Quizes;
