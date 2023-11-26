import { API_BASE_URL, HashFile } from "./constants";

export function modifyPath(path: string) {
  return API_BASE_URL + path.replace("/cn_r2d2/", "");
}
export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
export function filterUsers(file: HashFile[], searchQuery: string) {
  return file.filter((file: HashFile) => {
    return file.file_name.toLowerCase().includes(searchQuery.toLowerCase());
  });
}
