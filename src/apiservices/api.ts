import { createUserType } from "@/types/userTypes";
import axios from "axios";

const BASE_URL = "https://iamtrackingbackend.vercel.app/api/";
// const BASE_URL = "http://localhost:3000/api/";

function postAPI(url: string, data: any) {
  return axios(`${BASE_URL}${url}`, {
    method: "POST",
    data,
  });
}

export function imageUplaodAPI(key: string, body: FormData) {
  return axios(`https://api.imgbb.com/1/upload?key=${key}`, {
    method: "POST",
    data: body,
  });
}
export function updateProfileImageAPI(data: { emailId: string; url: string }) {
  return postAPI("uploadprofileimage", data);
}
export function getUserDataAPI(emailId: string) {
  return postAPI("getuser", { emailId });
}
export function setMonthlyAmountAPI(data: { emailId: string; amount: number }) {
  return postAPI("setmonthlimit", data);
}
export function updateDailySpendAmountAPI(data: {
  emailId: string;
  amount: number;
  type: "GROCERY" | "NORMAL";
}) {
  return postAPI("adddailyspend", data);
}

export function sendOtpAPI(data: { emailId: string; method: string }) {
  return postAPI("sendotp", data);
}

export function createUserAPI(data: createUserType) {
  return postAPI("createuser", data);
}

export function loginUserAPI(data: {emailId:string,password:string}) {
  return postAPI("login", data);
}
