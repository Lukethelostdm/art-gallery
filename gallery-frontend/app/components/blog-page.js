import { getAllPosts } from "../../lib/fullposts";
import Image from "next/Image";
import Link from "next/link";

export default function BlogHome() {
  const posts = getAllPosts();

  return (
    <div className="max-w-6xl mx-auto py-8 my-20">
      <h2 className="text-3xl font-bold text-center mb-8">Blog</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden transition-shadow duration-300"
          >
            {/* IMAGE COMPONENT */}
            <Link href={`/blog/${post.slug}`}>
              <Image
                src={post.img}
                alt={post.title}
                width={600}
                height={400}
                style={{ width: "100%", height: "auto" }}
              />
            </Link>
            {/* CONTENT COMPONENT */}
            <div className="p-4">
              {/* TITLE COMPONENT */}
              <a href={` /posts/${post.slug}`}>
                <h3 className=" text-lg font-bold hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
              </a>

              {/*META DATA COMPONENT*/}
              <p className="text-gray-500 text-xs">
                <span className="font-medium">Author:</span>
                {post.author}
              </p>
              <p className="text-xs text-gray-400">{post.date}</p>

              {/*TAG COMPONENT*/}
              <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold mt-4 py-1 px-3 rounded-full">
                {post.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
