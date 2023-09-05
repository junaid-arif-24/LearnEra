import { adminState } from "../atoms/adminAtom";
import { selector } from "recoil";
export const userLoginState = selector({
key:"userLoginState",
get: ({get}) => {
    const admin = get(adminState);
    return admin.isLoggedIn;
}
})