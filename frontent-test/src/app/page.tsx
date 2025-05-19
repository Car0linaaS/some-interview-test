import PostGrid from "./components/PostGrid";
import Header from "./components/Header";

async function fetchPosts() {
  const apiResponse = await fetch(
    "https://bergvik.se/wp-json/wp/v2/posts?_embed"
  );
  return await apiResponse.json();
}

export default async function Home() {
  const data = await fetchPosts();
  return (
    <>
      <Header></Header>
      <div className="m-12 mt-4">
        <PostGrid data={data}></PostGrid>
      </div>
    </>
  );
}
