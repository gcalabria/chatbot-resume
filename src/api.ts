import axios from "axios";

interface AnswerRequest {
  question: string;
}

interface AnswerResponse {
  answer: string;
}

const axiosInstance = axios.create({
  baseURL: "/api",
  timeout: 60000, // 1 min
  headers: { "Content-Type": "application/json" },
});

async function getAnswer(request: AnswerRequest) {
  try {
    const response = await axiosInstance.post<AnswerResponse>("/answer", {
      question: request.question,
    });
    return response.data.answer;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Handle Axios-specific error
      console.error("Axios error:", error.message);
    } else {
      // Handle unexpected errors
      console.error("Unexpected error:", error);
    }
    throw error;
  }
}

export { getAnswer };
