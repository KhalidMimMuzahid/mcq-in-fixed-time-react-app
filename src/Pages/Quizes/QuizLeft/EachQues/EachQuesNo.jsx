import React, { useEffect, useState } from "react";
import "./eachQuesNo.css";
const EachQuesNo = ({
  setSelectedQuiz,
  seenQuizId,
  checkedQuizId = { checkedQuizId },
  isMarkedQuizId,
  setSeenQuizId,
  bgColor,
  data,
}) => {
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
      }  text-black border border-white rounded-xl cursor-pointer ${quizStatus}`}
    >
      {/* <p key={i} className='border border-white flex flex-col'> */}
      {data?.id}
      {/* </p> */}
    </span>
  );
};

export default EachQuesNo;
