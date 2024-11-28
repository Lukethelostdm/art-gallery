import Link from 'next/link';
import { getAllPosts } from '../../lib/posts';

export default function LatestPosts() {
    const posts = getAllPosts();

    return (
        <section className="max-w-6xl mx-4 sm:mx-auto py-8">
            <h2 className="text-3xl font-bold mb-4">Latest Blog Pieces</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols">
                { posts.map((post) => (
                    <div key={post.slug} className="bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden transition-shadow duration-300">
                        <Link href={`/posts/${post.slug}`}>
                            <Image 
                            src={post.slug}
                            alt={post.title}
                            width={600}
                            height={400}
                            style={{ width: "100%" , height: "auto"}}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}