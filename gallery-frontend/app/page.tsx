import GetLatestPosts from '@/app/components/latest-posts'
import Features from './featured/page'
import { ContactForm } from './components/form';

export default function Home() {
  return (
    <>
    <main>
      <div>
        <h1 className=' text-3xl font-bold text-center'>
          Welcome!
        </h1>
        <p className=' text-center mx-auto'>
          Thank you for checking out my portfolio, <br></br> I&apos;m excited to share my work with you. If you have any questions or would like to collaborate, please don&apos;t hesitate to reach out
        </p>
      </div>
      <ContactForm/>
      <div>
        <Features/>

      <div>
        <GetLatestPosts/>
      </div>
      </div>
    </main>
    </>
  );
}
