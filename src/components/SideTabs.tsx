import { useState } from "react";
import Chats from "./Chats.tsx";
import Contacts from "./Contacts.tsx";

enum Choice {
  chats = "chats",
  contacts = "contacts",
}

const SideTabs = () => {
  const [choice, setChoice] = useState(Choice.chats);

  const bg = "bg-slate-100";

  const chosenStyles = `rounded-t border-black border-t-2 border-l-2 border-r-2 p-1 ${bg}`;
  const unChosenStyles = "border-b-2 border-black p-1";

  return (
    <>
      <div className="flex">
        <div className="w-4 border-b-2 border-black"></div>
        <button
          type="button"
          onClick={() => setChoice(Choice.chats)}
          className={choice === Choice.chats ? chosenStyles : unChosenStyles}
        >
          Chats
        </button>
        <button
          type="button"
          onClick={() => setChoice(Choice.contacts)}
          className={choice === Choice.contacts ? chosenStyles : unChosenStyles}
        >
          Contacts
        </button>
        <div className="w-full border-b-2 border-black"></div>
      </div>
      <div className={`${bg} h-full`}>
        {choice === Choice.chats ? <Chats /> : <Contacts />}
      </div>
    </>
  );
};
export default SideTabs;
