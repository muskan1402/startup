import SearchForm from "@/components/Searchform";
import "../globals.css";

export default async function Home({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  const query = searchParams.query || "";

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup <br />
          Connect with people
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit ideas, Vote on Pitches, and Get Noticed in virtual competitions
        </p>
        <SearchForm query={query} />
      </section>
    </>
  );
}
