import { useState } from "react";
import { Card } from "./Card";
import questionList from "../questiondkse.json";

function App() {
  const [lang, setLang] = useState(true);

  let questions = lang ? questionList["questions"] : questionList["answers"];
  let answers = lang ? questionList["answers"] : questionList["questions"];

  const [question, setQuestion] = useState(questions[0]);
  const [answer, setAnswer] = useState(answers[0]);
  const [text, setText] = useState(question);

  const switchLang = () => {
    setLang((old) => !old);
  };

  const handleNext = () => {
    const next = Math.floor(Math.random() * questionList["questions"].length);
    setQuestion(
      lang ? questionList["questions"][next] : questionList["answers"][next]
    );
    setAnswer(
      lang ? questionList["answers"][next] : questionList["questions"][next]
    );
    setText(
      lang ? questionList["questions"][next] : questionList["answers"][next]
    );
  };
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-4">
      <span>
        Current language: {lang ? "Dansk -> svenska" : "Svenska -> dansk"}
      </span>
      <button
        onClick={switchLang}
        className="rounded-lg border-black border-2 w-1/12"
      >
        Switch language
      </button>
      <Card question={question} answer={answer} text={text} setText={setText} />
      <button
        onClick={handleNext}
        className="rounded-lg border-black border-2 w-1/12"
      >
        Next
      </button>
    </div>
  );
}

export default App;
