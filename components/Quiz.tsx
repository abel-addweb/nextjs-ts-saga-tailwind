import { FC } from "react";
import { Character } from "../redux/Character/Character.type";

const QuizItem: FC<{img: string, options: Character[], selected: any, id: number, setSelected: Function}> = ({id, img, options, selected, setSelected}) => {
  return (
    <div className="flex max-w-4xl w-full pt-3">
      <div
        className="flex-auto bg-cover"
        style={{
          backgroundImage: `url(${img})`,
        }}
        title="breaking bad actor"
      ></div>
      <div className="flex-auto border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4">
        <div className="mb-8">
          <ul className="divide-y divide-gray-300">
            {options.map((pro: Character, i: number) => (
              <li
                key={i}
                onClick={() => {
                    setSelected(pro.name);
                }}
                className={`p-4 ${
                  selected.includes(pro.name) ? "bg-gray-300" : ""
                } hover:bg-gray-200 cursor-pointer`}
              >
                {pro.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default QuizItem;