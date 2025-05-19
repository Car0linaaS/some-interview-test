import PostList from "./components/PostList";
import PostGrid from "./components/PostGrid";

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
      <div>
        <PostGrid data={data}></PostGrid>
      </div>
    </>
  );
}
