import { API_BASE_URL } from "./constants";

export function modifyPath(path: string) {
  return API_BASE_URL + path.replace("/cn_r2d2/", "");
}
export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
