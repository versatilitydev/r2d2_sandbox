export const API_BASE_URL = "http://127.0.0.1:8000/";

//export const API_BASE_URL = "http://192.168.51.24/";

//export const API_BASE_URL = "https://testcn.ddns.net/";
export const ProfilePhoto = API_BASE_URL + "static/images/man.jpg";
export const ProfilePhotoDefault = "cn_r2d2/static/images/man.jpg";
export const CyberNoesisPhoto = API_BASE_URL + "static/images/cb.png";

export const MAX_IMAGE_SIZE_BYTES = 0.5 * 1024 * 1024; // 500KB

export type AuthUser = {
  user_id: number | null;
  username: string | null;
  is_superuser: boolean | null;
  is_vendor: boolean | null;
  is_tenant: boolean | null;
  email: string | null;
  permissions: string[];
};

export type HashFile = {
  id: number;
  file_name: string;
  file_hash: string;
};

export type AddNotificationData = {
  title: string;
  description: string;
  read: boolean;
  userID: number;
};
