import PostGrid from "./components/PostGrid";
import Header from "./components/Header";
import { fetchFromAPI } from "./lib/fetchFromAPI";

export default async function Home() {
  const data = await fetchFromAPI("posts");
  return (
    <>
      <Header></Header>
      <div className="m-12 mt-4">
        <PostGrid data={data}></PostGrid>
      </div>
    </>
  );
}
