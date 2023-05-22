import { FC, RefObject } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks.ts";
import { logOut } from "../store/authSlice.ts";
import chat from "../../public/chat.svg";

interface Props {
  dialogRef: RefObject<HTMLDialogElement>;
}

const Header: FC<Props> = ({ dialogRef }) => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  return (
    <header className="bg-slate-600 h-20 px-2 text-white">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={chat} alt="logo" className="h-10" />
          <h1 className="text-3xl">Chat App</h1>
        </div>
        <button type="button" onClick={() => dialogRef.current?.showModal()}>
          About
        </button>
      </div>
      <div className="flex gap-4 items-center">
        {user !== null && (
          <>
            <p>Logged in as {user.username}</p>
            <button
              type="button"
              onClick={() => dispatch(logOut())}
              className="bg-white rounded text-black p-1"
            >
              Log Out
            </button>
          </>
        )}
      </div>
    </header>
  );
};
export default Header;
