import Image from "next/image";
import Link from "next/link";
import notFoundImage from "../assest/notfound.png";

const NotFound = () => {
    return (
     <div className="flex flex-col items-center justify-center min-h-screen px-6">
          <Image src={notFoundImage} alt="not found images" width={200} height={200}></Image>
            <div className="text-center space-y-5">
                <h1 className="font-bold text-8xl text-red-500">404</h1>
                <p className="text-5xl text-[#244D3F]">page not found</p>
                <p className="text-[#64748B]">Sorry, we couldn’t find the page you’re looking for. It might have been moved or deleted.</p>
                <Link href={"/"}><button className="btn btn-primary">Back to Home</button></Link>
            </div>
     </div>
    );
};

export default NotFound;
