import { http } from "./httpServices";

export function signupUser(data) {
  return http.post("user/register", data);
}
