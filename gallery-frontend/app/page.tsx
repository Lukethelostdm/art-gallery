import GetLatestPosts from '@/app/components/latest-posts'

export default function Home() {
  return (
    <>
    <main>
      <div>
        <h1>
          Welcome!
        </h1>
      </div>
      <div>
      <h2>
        Blog
      </h2>
      <div>
        <GetLatestPosts/>
      </div>
      </div>
    </main>
    </>
  );
}
