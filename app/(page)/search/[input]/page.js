import SearchResult from "./SearchResult";

const page = async ({ params }) => {
  const query = params.input;
  return <SearchResult query={query} />;
};

export default page;
