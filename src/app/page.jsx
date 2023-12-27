import Image from 'next/image';

import EmailForm from 'components/pages/form/form';
import getMetadata from 'utils/get-metadata';

const Home = () => (
  <section className="font-roboto bg-black">
    <main className="container flex flex-col justify-center items-center max-w-[90%]">
      <div className="flex justify-center items-center mb-20">
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
      </div>
      <div className="flex justify-around items-center w-[100%]">
        <div className="flex flex-col justify-start items-cstart">
          <Image src="/images/3x.svg" width={134} height={136} alt="Three times faster icon" />
          <h3 className="text-2xl leading-6 text-gray-98 font-normal mt-6 mb-8">
            Faster Analysis Cycles
          </h3>
          <div className="w-full h-[1px] bg-white/30 mb-6" />
          <p className="text-gray-94 font-light text-lg">
            Stop the tedium of manual subscription
            <br /> data review. Quickly access essential
            <br /> information from all subscriptions.
          </p>
        </div>
        <div className="flex flex-col justify-start items-cstart">
          <Image src="/images/10.svg" width={279} height={136} alt="Ten percent icon" />
          <h3 className="text-2xl leading-6 text-gray-98 font-normal mt-6 mb-8">
            Savings on Costs
          </h3>
          <div className="w-full h-[1px] bg-white/30 mb-6" />
          <p className="text-gray-94 font-light text-lg">
            Insights into both subscription data and
            <br /> expenditure lead to rapid, smart cost-
            <br />
            cutting strategies.
          </p>
        </div>
        <div className="flex flex-col justify-start items-cstart">
          <Image src="/images/30.svg" width={156} height={136} alt="Three times faster icon" />
          <h3 className="text-2xl leading-6 text-gray-98 font-normal mt-6 mb-6">Day Setup</h3>
          <div className="w-full h-[1px] bg-white/30 mb-6" />
          <p className="text-gray-94 font-light text-lg">
            Implement swiftly with straightforward,
            <br /> no-code processes and ready-to-use
            <br /> integrations.
          </p>
        </div>
      </div>
    </main>
  </section>
);

export default Home;

export async function generateMetadata() {
  return getMetadata({
    title: 'Subscription Optimizer - Manage and Optimize Your Subscriptions',
    description:
      "Discover a smarter way to manage subscriptions with Subscription Optimizer. Our innovative service analyzes all your subscriptions, helping to identify unused or redundant services. We offer tailored recommendations to optimize your subscription expenses, ensuring cost savings and simplifying monthly budget planning. Whether it's entertainment services, software subscriptions, or online courses – Subscription Optimizer helps you make the most of every subscription.",
    pathname: '/',
  });
}
