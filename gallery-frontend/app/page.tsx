import GetLatestPosts from "@/app/components/latest-posts";
import Features from "./featured/page";

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center px-4">
        <div className="inline-block text-center max-w-2xl mx-auto my-10" >
          <h1 className=" text-6xl font-bold text-center font-Jura my-4 sm:mt-36">
            Welcome!
          </h1>
          <p className=" text-center mx-auto font-Neo mt-20">
            Thank you for checking out my portfolio <br></br> I&apos;m excited
            to share my work with you. If you have any questions or would like
            to collaborate,<br></br> please don&apos;t hesitate to reach out
          </p>

          <a
            href="/images"
            className="inline-block font-Neo mt-6 mx-auto px-6 py-3 bg-nav text-text text-lg font-semibold rounded-lg shadow-md hover:bg-text hover:text-nav transition"
          >
            Explore My Work
          </a>
        </div>

        <div className="w-full mt-10">
          <Features />
        </div>

        <div className="w-full mt-10">
          <GetLatestPosts />
        </div>
      </main>
    </>
  );
}
