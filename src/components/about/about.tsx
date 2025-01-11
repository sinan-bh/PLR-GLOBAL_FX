import Image from "next/image";

export const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <div className="flex flex-col justify-center items-center sm:flex-row">
        
        <div>
          <div className="text-center text-5xl font-bold">About Us</div>
          <div className="text-center sm:text-start px-2 py-10 max-w-2xl text-slate-400">
            We are a team of experienced traders and developers who are
            passionate about building a better trading experience. Our goal is
            to provide a platform that is easy to use, transparent, and fair.
          </div>
        </div>
        <div>
          <Image
            src="/images/stockmarket.jpg"
            objectFit="cover"
            alt="logo"
            width={500}
            height={500}
            className="border-none pt-4 w-[400] sm:pt-0 "
          />
        </div>
      </div>
    </div>
  );
};
