
export async function fetchFromAPI<T = any>(endpoint: string): Promise<T> {
    const baseUrl = "https://bergvik.se/wp-json/wp/v2";
    const apiResponse = await fetch(`${baseUrl}/${endpoint}?_embed`);
  
    return apiResponse.json();
}