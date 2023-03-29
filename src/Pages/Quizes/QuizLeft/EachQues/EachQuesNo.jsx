import React, { useEffect, useState } from "react";
import "./eachQuesNo.css";
const EachQuesNo = ({
  setSelectedQuiz,
  seenQuizId,
  checkedQuizId = { checkedQuizId },
  isMarkedQuizId,
  selectedQuiz,
  setSeenQuizId,
  bgColor,
  data,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    if (selectedQuiz?.id === data?.id) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [selectedQuiz, data]);
  const [quizStatus, setQuizStatus] = useState("unSeenUnMarked");
  //   seenUnMarked
  //   seenMarked
  //   checkedUnMarked
  //   unCheckedMarked

  const handelClick = (data) => {
    // console.log(a)
    setSelectedQuiz(data);
    // setBgColor("bg-pink-300");
    if (seenQuizId.findIndex((j) => j === data?.id) === -1) {
      const newseenQuizId = [...seenQuizId, data?.id];
      setSeenQuizId(newseenQuizId);
    }
  };
  useEffect(() => {
    // console.log(
    //   "seenQuizId: ",
    //   seenQuizId,
    //   "\ncheckedQuizId: ",
    //   checkedQuizId,
    //   "\nisMarkedQuizId: ",
    //   isMarkedQuizId
    // );
    if (checkedQuizId.indexOf(data?.id) !== -1) {
      if (isMarkedQuizId.indexOf(data?.id) !== -1) {
        setQuizStatus("checkedMarked");
      } else {
        setQuizStatus("checkedUnMarked");
      }
    } else if (seenQuizId.indexOf(data?.id) !== -1) {
      if (isMarkedQuizId.indexOf(data?.id) !== -1) {
        setQuizStatus("seenMarked");
      } else {
        setQuizStatus("seenUnMarked");
      }
    } else {
      setQuizStatus("unSeenUnMarked");
    }
  }, [seenQuizId, checkedQuizId, isMarkedQuizId]);

  //   TODO: now set css ClassName in This classname
  return (
    <span
      onClick={() => {
        return handelClick(data);
      }}
      className={`${
        seenQuizId.findIndex((j) => j === data?.id) !== -1 && bgColor
      }  text-black border border-white cursor-pointer ${quizStatus} ${
        isSelected && "border-4 border-black"
      }`}
    >
      {/* <p key={i} className='border border-white flex flex-col'> */}
      {data?.id}
      {/* </p> */}
    </span>
  );
};

export default EachQuesNo;
