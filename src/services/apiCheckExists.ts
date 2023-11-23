import { API_BASE_URL } from "../settings/constants";
import apiInstance from "../utils/axios";

export async function apiFileExists(fileName: string) {
  try {
    const response = await apiInstance.get(
      `${API_BASE_URL}api/checkIfFileExists/`,
      {
        params: {
          file_name: fileName,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("File does not exist");
  }
}
