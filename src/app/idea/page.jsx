import IdeaCard from "@/component/IdeaCard";


const IdeaPage =  async() => {
    const res = await fetch('http://localhost:5000/ideas')
    const data = await res.json();      
    console.log(data,"form idea page");
    return (
        <div className="container mx-auto px-4 py-8">
            <h1>All Ideas</h1>
        
          

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.map((idea) => (
                  <IdeaCard key={idea._id} idea={idea} />
            ))}
          </div>
        </div>
    );
};

export default IdeaPage;