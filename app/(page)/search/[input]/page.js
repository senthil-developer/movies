import SearchResult from "./SearchResult";

export async function generateMetadata({ params }) {
  return {
    title: `${params.input}`,
  };
}

const page = async ({ params }) => {
  const query = params.input;
  return <SearchResult query={query} />;
};

export default page;
