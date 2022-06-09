import { NextPage } from "next";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Loading from "../../components/Loading";
import QuizItem from "../../components/Quiz";
import {
  fetchAllCharacters,
  fetchAllRandomCharacters,
} from "../../redux/Character/Character.action";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { generateQuizOptions } from "./util/quiz.util";

const Quiz: NextPage = ({}) => {
  const dispatch = useAppDispatch();
  const { characters } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(fetchAllCharacters());
    dispatch(fetchAllRandomCharacters());
  }, []);
  

  const [choosen, setChoosen] = useState<any[]>([]);
  const [success, setSuccess] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [message, setMessage] = useState("");
  const [selectedd] = useState(["", "", "", "", ""]);

  const handleCheck = () => {
    if (choosen.length === 5) {
      const correctNames = characters.fetchAllRandom.payload.map(
        (char: any) => char.name
      );
      const correctness = correctNames.map((c: any, i: number) => {
        if (c === choosen[i]) {
          return true;
        } else {
          return false;
        }
      });
      const correct = correctness.filter((c: any) => c === true).length;
      const incorrect = correctness.filter((c: any) => c === false).length;
      setAnswered(true);
      setCorrect(correct);
      setIncorrect(incorrect);
    } else {
      setSuccess(false);
      setMessage("Missed some questions");
    }
  };


  console.log("selected >>>   ", selectedd);


  return (
    <Layout>
      <h1 className="text-2xl pt-5 pl-10">Match the image with the name:</h1>
      <div className="pt-5 pl-10">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
          onClick={handleCheck}
        >
          Submit
        </button>
      </div>
      <div className="pt-5 pl-10">
        {success === false ? <p>${message}</p> : ``}
        {answered
          ? `Correct : ${correct}
              Incorrect: ${incorrect}`
          : ""}
        {characters.fetchAll.isLoading ||
          (characters.fetchAllRandom.isLoading && <Loading />)}

        {characters.fetchAll.isLoaded && characters.fetchAllRandom.isLoaded ? (
          <div>
            <div className="p-10">
              {characters.fetchAllRandom.payload.map(
                (character: any, index: number) => {
                  return (
                    <QuizItem
                      img={character.img}
                      key={index}
                      id={index}
                      selected={choosen}
                      setSelected={(char: any) => {
                        selectedd[index] = char;
                        setChoosen([...selectedd]);
                      }}
                      options={generateQuizOptions(characters.fetchAllRandom.payload, characters.fetchAll.payload)[index]}
                    />
                  )
                }
              )}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </Layout>
  );
};

export default Quiz;
