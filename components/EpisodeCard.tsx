import { FC } from "react";
import { Episode } from "../redux/Episode/Episode.type";

const EpisodeCard: FC<{episode: Episode}> = ({episode}) => {
    return (
        <div className=" w-full lg:max-w-full lg:flex">
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <p className="text-sm text-gray-600 flex items-center">
                Episode {episode.episode}
              </p>
              <div className="text-gray-900 font-bold text-xl mb-2">
                {episode.title}
              </div>
              <p className="text-gray-700 text-base">
                Season {episode.season}
                <br />
                Air date: {episode.air_date}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              {episode.characters.length === 0 ? (
                <div></div>
              ) : (
                episode.characters.map((char: string) => (
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {char}
                  </span>
                ))
              )}
            </div>
          </div>
        </div>
      );
}

export default EpisodeCard