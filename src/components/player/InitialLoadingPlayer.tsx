import { useEffect, useState } from "react";
import AnumAI from "./AnumAi-Player";
import { getSessionToken } from "./api";
import { systemPrompt } from "./types";

const InitialLoadingPlayer = ({
  selected,
}: {
  selected: {
    name: string;
    image: string;
    avatorId: string;
    voiceId: string;
    llms: string;
  } | null;
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  console.log(loading, "loading");
  const [sessionToken, setSessionToken] = useState<string>("");

  const getSessionandManageLoading = async () => {
    if (selected) {
      try {
        setLoading(true);
        const token = await getSessionToken({
          avatorId: selected?.avatorId,
          voiceId: selected?.voiceId,
          brainName: selected?.llms,
          name: selected?.name,
          systemPrompt: systemPrompt,
        });
        if (token) {
          setSessionToken(token);
          setLoading(false);
        }
      } catch (error) {
        console.log(error, "error");
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    getSessionandManageLoading();
  }, [selected]);

  return loading ? (
    <div className="flex items-center gap-3 p-3 rounded-xl flex-1 dark:bg-slate-800 shadow-sm h-[calc(100dvh-2rem)]">
      <img
        className="w-full h-full !object-cover"
        src={selected?.image}
        alt={selected?.name}
      />
    </div>
  ) : (
    <AnumAI sessionToken={sessionToken} />
  );
};

export default InitialLoadingPlayer;
