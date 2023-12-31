import Image from 'next/image';

import EmailForm from 'components/pages/form/form';
import getMetadata from 'utils/get-metadata';

const Home = () => (
  <section className="font-roboto bg-black">
    <main className="container flex flex-col justify-center items-center">
      <div className="flex justify-center items-center mb-20 md:flex-wrap">
        <div className="flex flex-col justify-start mr-6 md:mt-14">
          <h1 className="text-gray-98 font-mono font-normal leading-none mb-6 text-[76px] xl:!text-[68px] lg:!text-[54px]">
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
          height={796}
          alt="Таблица Acme Corp"
          priority
        />
      </div>
      <div className="flex justify-around items-center w-[90%] lg:!justify-between lg:!w-[100%] md:flex-wrap md:gap-10 md:!justify-center">
        <div className="flex flex-col justify-start items-start">
          <div className="w-[134px] h-[126px] relative">
            <Image src="/images/3x.svg" alt="Three times faster icon" className="" fill />
          </div>
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
        <div className="flex flex-col justify-start items-start">
          <div className="relative w-[279px] h-[136px]">
            <Image src="/images/10.svg" alt="Ten percent icon" className="w-[136px] h-auto" fill />
          </div>
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
        <div className="flex flex-col justify-start items-start">
          <div className="relative w-[156px] h-[136px]">
            <Image
              src="/images/30.svg"
              alt="Three times faster icon"
              className="w-[136px] h-auto"
              fill
            />
          </div>
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
