import { API_BASE_URL } from "../settings/constants";
import { FileHashResponse } from "../utils/CalculateHash";
import apiInstance from "../utils/axios";
export async function apiGetHashOfFile(
  formData: FormData
): Promise<FileHashResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}api/getHashOfFile/`, {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(
        errorResponse.error || "An error occurred while processing the request"
      );
    }

    const hash = await response.json();
    return hash;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function apigetAllFiles() {
  try {
    const response = await apiInstance.get(`${API_BASE_URL}api/files/`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching Files");
  }
}
