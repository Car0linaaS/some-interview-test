
// Generic fetch function
export async function fetchFromAPI<T = any>(baseUrl: string, endpoint: string): Promise<T> {
  try {
    const apiResponse = await fetch(`${baseUrl}/${endpoint}?_embed`);

    if (!apiResponse.ok) {
      throw new Error(`Error fetching data: ${apiResponse.status}`);
    }

    return await apiResponse.json();
  } catch (error) {
    console.error("Network or fetch error:", error);
    throw error;
  }
}