import Link from "next/link";
import { FC } from "react";
import { Character } from "../redux/Character/Character.type";

const CharacterCard: FC<{ character: Character }> = ({ character }) => {
    return <div className="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
        <img
            className="w-full h-56 object-cover object-center"
            src={character.img}
            alt="avatar"
        />
        <div className="flex items-center px-6 py-3 bg-gray-900">
            <h1 className="mx-3 text-white font-semibold text-lg">
                {character.status}
            </h1>
        </div>
        <div className="py-4 px-6">
            <h1 className="text-2xl font-semibold text-gray-800">
                {character.name}
            </h1>
            <p className="py-2 text-md text-gray-700">
                Occupation: {character.occupation.join(",")}
            </p>
            <p className="py-2 text-md text-gray-700">
                Nick Name: {character.nickname}
            </p>
            <Link href={`characters/${character.char_id}`}><a>Detail</a></Link>
        </div>
        
    </div>
};

export default CharacterCard