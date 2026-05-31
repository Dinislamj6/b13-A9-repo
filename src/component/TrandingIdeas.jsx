import IdeaCard from "./IdeaCard";

const TrandingIdeas = async () => {
  const res = await fetch("http://localhost:5000/ideas", {
    cache: "no-store",
  });

  const ideas = await res.json();

  // Top 6 ideas by likes
  const trendingIdeas = ideas
    .sort((a, b) => (b.likes || 0) - (a.likes || 0))
    .slice(0, 6);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">
            Trending Ideas
          </h2>

          <p className="text-gray-500 mt-3">
            Discover the most popular startup ideas shared by our community.
          </p>
        </div>

        {/* Ideas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingIdeas.map((idea) => (
            <IdeaCard
              key={idea._id}
              idea={idea}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrandingIdeas;