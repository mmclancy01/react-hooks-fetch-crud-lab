import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, setQuestions}) {
  
  function HandleDelete(id) {
    let newQuestionList = questions.filter((item)=> item.id !== id)
    fetch("http://localhost:4000/questions/" + id , {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => setQuestions(newQuestionList));
  
  }
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      
      <ul>{questions.map((question, index)=> ( 
        <QuestionItem question={question} key={index} HandleDelete= {HandleDelete} />
      ))}
      </ul>
    </section>
  );
}

export default QuestionList;
