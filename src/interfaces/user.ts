import Credentials from "./credentials.ts";

export default interface User extends Credentials {
  token: string;
  _id: string;
}
