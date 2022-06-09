import { Character } from "../../../redux/Character/Character.type";

export const generateQuizOptions = (randomCharactors: Character[], allCharactors: Character[]): Character[][] => {
    const allOptions: Character[][] = [];
    randomCharactors.map((ranChar) => {
        const options = [...allCharactors].filter(({char_id}) => char_id !== ranChar.char_id).sort(() => 0.5 - Math.random()).splice(0,4);
        allOptions.push(options);
    })
    return allOptions;
}