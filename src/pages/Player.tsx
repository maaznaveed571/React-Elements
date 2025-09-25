import { useEffect, useState } from "react";
import { generateListing } from "../components/player/api";

const Player = () => {
  const [data, setData] = useState<
    {
      name: string;
      image: string;
      avatorId: string;
      voiceId: string;
      llms: string;
    }[]
  >([]);
  const [selected, setSelected] = useState<{
    name: string;
    image: string;
    avatorId: string;
    voiceId: string;
    llms: string;
  } | null>(null);
  const getLsiting = async () => {
    const listing = await generateListing();
    const filtered = listing.filter((item) =>
      Object.values(item).every(
        (val) => val !== "" && val !== null && val !== undefined,
      ),
    );
    setData(filtered);
  };
  useEffect(() => {
    getLsiting();
  }, []);
  return (
    <div className="flex flex-col sm:flex-row gap-3 !p-[1rem]">
      <div className="flex flex-row overflow-x-auto sm:flex-col gap-3 p-2 min-w-[300px]">
        {isValidArray(data) && data?.length > 0
          ? data?.map((item, index) => (
              <ChatItem
                key={index + 1}
                onClick={() => setSelected(item)}
                imageUrl={item?.image}
                title={item?.name}
              />
            ))
          : null}
      </div>
      <InitialLoadingPlayer selected={selected} />
    </div>
  );
};

export default Player;

import React from "react";
import { isValidArray } from "../utils/global-functions";
import InitialLoadingPlayer from "../components/player/InitialLoadingPlayer";

interface ChatItemProps {
  imageUrl: string;
  title: string;
  onClick: () => void;
}

const ChatItem: React.FC<ChatItemProps> = ({ imageUrl, title, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex flex-col sm:flex-row items-center gap-3 p-3 rounded-xl hover:bg-gray-100 cursor-pointer"
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-12 h-12 rounded-full !object-cover border"
      />
      <span className="text-base font-medium text-gray-800">{title}</span>
    </button>
  );
};
