import GetLatestPosts from '@/app/components/latest-posts'

export default function Home() {
  return (
    <>
    <main>
      <div>
      <h1>
        Featured Art
      </h1>
      <div>
        Art goes here *3 of them
      </div>
      </div>

      <div>
      <h2>
        Contact
      </h2>
      <div>
        Contact info
      </div>
      </div>

      <div>
      <h2>
        Commission Work
      </h2>
      <div>
        Comission Work * 3 go here
      </div>
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
