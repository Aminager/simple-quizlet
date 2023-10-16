import { useState } from "react";
import { Card } from "./Card";
import questionList from "../questiondkse.json";
import { GPT } from "./GPT";

function App() {
  const [lang, setLang] = useState(true);

  let questions = lang ? questionList["questions"] : questionList["answers"];
  let answers = lang ? questionList["answers"] : questionList["questions"];

  const [question, setQuestion] = useState(questions[0]);
  const [answer, setAnswer] = useState(answers[0]);
  const [text, setText] = useState(question);
  const [selected, setSelected] = useState([]);

  const switchLang = () => {
    setLang((old) => !old);
  };

  const handleReset = () => {
    setSelected([]);
  };

  const getRandNumberThatHasNotBeenSelected = () => {
    let number = Math.floor(Math.random() * questionList["questions"].length);
    while (selected.includes(number)) {
      number = Math.floor(Math.random() * questionList["questions"].length);
    }
    setSelected((old) => [...old, number]);
    return number;
  };

  const handleNext = () => {
    const next = getRandNumberThatHasNotBeenSelected();
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
    <div className="flex flex-row h-screen justify-center items-center gap-4">
      {lang ? <div /> : <GPT word={question} />}
      <div className="flex flex-col h-full w-full justify-center items-center gap-4">
        <span>
          Current language: {lang ? "Dansk -> svenska" : "Svenska -> dansk"}
        </span>
        <button
          onClick={handleReset}
          className="rounded-lg border-black border-2"
        >
          Reset list
        </button>
        <button
          onClick={switchLang}
          className="rounded-lg border-black border-2"
        >
          Switch language
        </button>
        <Card
          question={question}
          answer={answer}
          text={text}
          setText={setText}
        />
        <button
          onClick={handleNext}
          className="rounded-lg border-black border-2 w-1/12"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
