import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { Movie } from "../utils/ApiController";
import Swal from "sweetalert2";

interface Props {
  movies: Movie[] | undefined;
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  match: boolean;
  setMatch: Dispatch<SetStateAction<boolean>>;
  word: string[] | undefined;
  setWord: Dispatch<SetStateAction<string[] | undefined>>;
  life: number;
  setLife: Dispatch<SetStateAction<number>>;
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
}

const Toast = Swal.mixin({
  toast: true,
  position: "bottom",
  iconColor: "white",
  customClass: {
    popup: "colored-toast",
  },
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
});

const GuessingForm: React.FC<Props> = ({
  movies,
  index,
  setIndex,
  match,
  setMatch,
  word,
  setWord,
  life,
  setLife,
  score,
  setScore,
}) => {
  const guessRef = useRef<HTMLInputElement>(null);
  const [attemts, setAttempts] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>("");

  const handleGuess = () => {
    const letter: string | false | undefined =
      guessRef.current?.value.trim() === ""
        ? false
        : guessRef.current?.value.toLowerCase();
    if (letter) {
      lookForMatch(letter);
      setAttempts(attemts + 1);
    }
  };

  const lookForMatch = (letter: string | false | undefined) => {
    let isMatches = false;
    let copyArr = word!.slice();
    movies![index].nameArr.map((name: string, j) => {
      for (let i = 0; i < name.length; i++) {
        if (name[i] === letter && copyArr[j][i] === "_") {
          isMatches = !isMatches;
          copyArr[j] =
            word![j].substring(0, i) + letter + word![j].substring(i + 1);
          setMatch(isMatches);
        }
      }
      setWord(copyArr);
      handlePopUp(isMatches);
    });
    checkIfWinRound(copyArr);
  };

  const checkIfWinRound = (copyArr: any) => {
    let isWonRound: boolean = true;
    for (let i = 0; i < copyArr!.length; i++) {
      if (copyArr![i].includes("_")) isWonRound = false;
    }

    if (isWonRound) {
      setIndex(index + 1);
      setScore(score + 1);
    }
  };

  const handlePopUp = (isMatches: boolean) => {
    if (isMatches) {
      Toast.fire({
        icon: "success",
        title: "Correct !",
      });
      setInputValue("");
    } else {
      Toast.fire({
        icon: "error",
        title: "Worng...",
      }).then(() => {
        if (life - 1 === -1) {
          Swal.fire({
            title: "Game Over",
            confirmButtonText: "OK",
            html:
              `<p>Your score: <b>${score}</b></p>` +
              `<p>Number of attempts: <b>${attemts}</b></p>`,
          }).then(() => {
            /* Reload and start a new game by default */
            window.location.reload();
          });
        } else {
          setInputValue("");
          setLife(life - 1);
        }
      });
    }
  };

  useEffect(() => {
    if (match) {
      //pop sucess message
      setMatch(false); //reset match
    }
  }, [match, setMatch]);

  useEffect(() => {
    if (movies!.length > 0)
      //a word with spaces as array
      setWord(movies![index].word);
  }, [index, movies, setWord]);

  return (
    <div className="guessForm">
      <input
        ref={guessRef}
        type="text"
        className="guessLetter"
        maxLength={1}
        placeholder="Enter a letter . . . ⏎"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={handleGuess}
        className="guessButton"
        style={{ width: "100%" }}
      >
        GUESS
      </button>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button className="guessButton">HINT</button>
        <button className="guessButton">STATISTICS</button>
      </div>
    </div>
  );
};

export default GuessingForm;
