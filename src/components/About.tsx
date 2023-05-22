import { FC } from "react";

const About: FC = () => {
  return (
    <>
      <form method="dialog" className="flex p-4 justify-between">
        <h2>About</h2>
        <button
          type="submit"
          className="bg-slate-600 h-[2rem] w-[2rem] justify-self-end text-white"
        >
          X
        </button>
      </form>
      <p>This is a chat app.</p>
    </>
  );
};
export default About;
