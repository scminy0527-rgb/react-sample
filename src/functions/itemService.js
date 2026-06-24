const API_BASE_URL = "http://localhost:8000/api";

export const getItems = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/items/`);
    if (!response.ok) {
      throw new Error(`API 요청 실패: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("상품 데이터 조회 실패:", error);
    throw error;
  }
};
