import { userState } from "../atoms/userAtom";
import { selector } from "recoil";
export const userLoginState = selector({
key:"userLoginState",
get: ({get}) => {
    const user = get(userState);
    return user.isLoggedIn;
}
})