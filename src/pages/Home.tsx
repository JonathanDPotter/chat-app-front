import { useRef } from "react";
import About from "../components/About.tsx";
import Header from "../components/Header.tsx";
import SideTabs from "../components/SideTabs.tsx";

const Home = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Header {...{ dialogRef }} />
      <div className="flex flex-1">
        <div className="w-[33%] border-r-2 border-black pt-1">
          <SideTabs />
        </div>
      </div>
      <dialog ref={dialogRef} className="m-auto h-[80vh] w-[80vw] rounded-lg">
        <About />
      </dialog>
    </div>
  );
};
export default Home;
