import Image from 'next/image';

import Input from 'components/pages/input/input';
import Button from 'components/shared/button/button';
import getMetadata from 'utils/get-metadata';

const Home = () => (
  <section className="font-roboto bg-black">
    <main className="container flex justify-center items-center">
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

        <div
          style={{ width: '504px' }}
          className="relative justify-center items-center max-w-full flex"
        >
          <Input size="lg" theme="primary" placeholder="Your business email..." />
          <Button size="lg" theme="primary" className="absolute top-50% right-2">
            Free Treal
          </Button>
        </div>
      </div>
      <Image src="/images/illustration.png" width={716} height={797} alt="Таблица Acme Corp" />
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
