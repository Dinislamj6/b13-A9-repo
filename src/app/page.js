import Banner from "@/component/Banner";
import TrandingIdeas from "@/component/TrandingIdeas";
export const metadata = {
  title: "Home - IdeaVault",
  description: "Discover and Share Innovative Startup Ideas on IdeaVault",
};

export default function Home() {
  return (
     <div>
       <Banner></Banner>
        <TrandingIdeas></TrandingIdeas> 
     </div>
  );
}
