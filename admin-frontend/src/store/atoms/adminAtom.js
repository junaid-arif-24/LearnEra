import { atom } from "recoil";

export const adminState = atom({
  key: "adminState",
  default: {
    email: "",
    password: "",
    isLoggedIn: localStorage.getItem("isLoggedIn") !== null,
  },
});

export const openState = atom({
  key:'openState',
  default:false,
});