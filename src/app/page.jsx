import Image from 'next/image';

import EmailForm from 'components/pages/form/form';
import getMetadata from 'utils/get-metadata';

const Home = () => (
  <section className="font-roboto bg-black">
    <main className="container flex justify-center items-center max-w-[90%]">
      <div className="flex flex-col justify-start mr-6">
        <h1
          style={{ fontSize: '76px', lineHeight: '85px' }}
          className="text-gray-98 font-mono font-normal mb-6"
        >
          Unlock&nbsp;valuable <br /> insights from <br />
          subscription&nbsp;data
        </h1>
        <p className="font-sans text-gray-94 font-light mb-6">
          Analyze your subscription ecosystem for cost optimization and
          <br /> risk management
        </p>
        <EmailForm />
      </div>
      <Image
        src="/images/illustration.png"
        width={716}
        height={797}
        alt="Таблица Acme Corp"
        priority
      />
    </main>
  </section>
);

export default Home;

export async function generateMetadata() {
  // FIXME: Add real data here
  return getMetadata({
    title: 'Home - Next.js Tailwind Starter',
    description: 'Next.js Tailwind Starter',
    pathname: '/',
  });
}
