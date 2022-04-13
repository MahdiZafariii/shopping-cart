import { http } from "./httpServices";

export function loginUser(data) {
  return http.post("user/login", data);
}
