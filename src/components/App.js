import React, { useState ,useEffect} from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(res => res.json())
    .then(data=> setQuestions(data))
  }, [])


  function handleAddQuestion(newQuestion){
    setQuestions([...questions, newQuestion])
  }
  function handleDeleteQuestion(deleteId) {
    const updatedQuestions = questions.filter((q) => q.id !== deleteId);
    setQuestions(updatedQuestions);
    console.log(updatedQuestions);
    
  }
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm 
      onAddQuestion={handleAddQuestion}/> 
      : 
      <QuestionList 
      questions={questions} 
      onDelete={handleDeleteQuestion}/>}
    </main>
  );
}

export default App;
