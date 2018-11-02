/**
{
  "count": 1,
  "next": null,
  "previous": null,
  "results": [
    {
      "name": "카테고리 이름"
    }
  ]
}
 */
export const getCategories = async (categoryId) => {
  try {
    const response = await fetch(
      `http://localhost:8000/category/${categoryId}`
    );
    const data = await response.json()
    return data;
  } catch (error) {
    return [];
  }
}

export default {
  getCategories,
}
