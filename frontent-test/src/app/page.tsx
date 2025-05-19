import PostList from "./components/PostList";

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
        <PostList data={data}></PostList>
      </div>
    </>
  );
}
