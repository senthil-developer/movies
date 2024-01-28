import SearchResult from "./SearchResult";

export async function generateMetadata({ params }) {
  const query = params.input;
  const input = query.replace(/%20/, "+");
  return {
    title: `${input}`,
  };
}

const page = async ({ params }) => {
  const query = params.input;
  return <SearchResult query={query} />;
};

export default page;
