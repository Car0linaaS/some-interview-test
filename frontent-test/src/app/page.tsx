import PostGrid from "./components/PostGrid";
import Header from "./components/Header";
import ErrorMsg from "./components/ErrorMsg";
import { fetchFromAPI } from "./lib/fetchFromAPI";

export default async function Home() {
  try {
    const baseUrl = "https://bergvik.se/wp-json/wp/v2";
    const data = await fetchFromAPI(baseUrl, "posts");
    return (
      <>
        <Header></Header>
        <div className="m-12 mt-4">
          <PostGrid data={data}></PostGrid>
        </div>
      </>
    );
  } catch (error) {
    // Simple error handling with a message to the user
    return (
      <>
        <Header></Header>
        <ErrorMsg></ErrorMsg>
      </>
    );
  }
}
