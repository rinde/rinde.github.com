import { NextPage } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin, faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import Head from "next/head";

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <div className="w-full flex justify-center">
    <Head>
      <title>Rinde van Lon</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="flex-none flex flex-grow-0 justify-top flex-col flex-wrap m-8 max-w-4xl rounded overflow-hidden bg-gray-100 shadow-lg">
      <div className="bg-indigo-600 text-yellow-100 w-full text-center px-12 pb-10 pt-10 flex flex-wrap flex-col flex-grow-0 tracking-wider">
        <div className="text-6xl font-bold uppercase">Rinde van Lon, PhD</div>
        <div className="text-xl uppercase flex flex-col tracking-widest">
          <div>Software Developer, Entrepreneur,</div>
          <div>Computer Scientist, Mentor</div>
        </div>
      </div>
      <div className="flex flex-row flex-grow w-full justify-center text-gray-900">
        <div className="bg-indigo-300 w-1/3 pl-2 pr-2 py-2 flex flex-col">
          <div className="w-48 h-48 rounded-full overflow-hidden self-center m-5 shadow-lg">
            <img className="object-contain" src="./rinde-headshot.jpg" />
          </div>
          <div className="mt-10">
            <div className="font-bold uppercase pb-2">Experience - highlights</div>

            <ul className="list-disc list-outside text-sm pl-5">
              <li className="mb-3">2019-present - Founder, PlanRising</li>
              <li className="mb-3">2018-present - Freelancer, Toptal</li>
              <li className="mb-3">2018-2019 - Lead developer, Chorefree, Canada</li>
              <li className="mb-3">2010-2017 - Researcher, KU Leuven, Belgium</li>
              <li className="mb-3">2008-2010 - MSc Computer Science, TU Delft, The Netherlands</li>
              <li className="mb-3">
                2004-2009 - Software engineer, Floorplanner.com, The Netherlands
              </li>
              <li className="mb-3">2004-2008 - BSc Computer Science, TU Delft, The Netherlands</li>
            </ul>
          </div>
        </div>
        <div className="w-2/3 p-8 bg-yellow-100">
          <div className="mb-5 tracking-wide">
            Rinde is a full-stack developer specializing in reliable, high-quality applications. He
            has robust software design and analytical skills, as demonstrated in his Ph.D. research
            on optimization and genetic programming. In the past few years, Rinde's been passionate
            about developing serverless REST applications and mentoring other programmers.
          </div>
          <div>
            <div className="uppercase text-lg font-bold divide-y-2 divide-gray-200 pb-2">
              Offerings
            </div>
            <hr className="border-black mb-4" />
            <div className="uppercase text-indigo-600">Code mentoring</div>
            <div className="text-sm">
              Are you looking for someone to help you grow as a software developer? You've found the
              right person! With over 17 years of programming experience and more than 6 years of
              experience with teaching and guiding students, Rinde is well qualified to guide you
              towards programming excellency.
              <p className="mt-2" />
              Services include:
              <ul className="list-disc list-outside pl-5">
                <li>Code review</li>
                <li>Pair programming</li>
                <li>Debugging</li>
                <li>Technology advice</li>
                <li>Theory (software design, algorithms, data structures, research methodology)</li>
                <li>Advanced concepts (genetic programming, multi-agent systems, optimization)</li>
                <li>Scientific writing</li>
              </ul>
              <p className="mt-2" />
              <FontAwesomeIcon icon={faEnvelope} swapOpacity /> Contact Rinde now to{" "}
              <a
                className="underline text-indigo-600"
                target="_blank"
                href="mailto:rindevanlon@gmail.com"
              >
                schedule your first session
              </a>
              .
            </div>
            <div className="uppercase mt-5 text-indigo-600">Software consultancy / freelancing</div>
            <div className="text-sm">
              Do you need someone to build a REST backend for you? Need help with your AWS setup?
              Would you like a Shopify store? Are you in need of a (React) web application?
              <p className="mt-2" />
              Experience includes:
              <ul className="list-disc list-outside pl-5">
                <li>Languages: Java, TypeScript, JavaScript, Python, Rust, Dart, and R</li>
                <li>AWS: DynamoDB, Lambda, API Gateway, Cognito, and CloudFront</li>
                <li>Frameworks: Next.js, Tailwind CSS and Flutter</li>
              </ul>
              <p className="mt-2" />
              <FontAwesomeIcon icon={faEnvelope} swapOpacity /> Contact Rinde now to{" "}
              <a
                className="underline text-indigo-600"
                target="_blank"
                href="mailto:rindevanlon@gmail.com"
              >
                discuss your needs
              </a>
              , or view his{" "}
              <a
                className="underline text-indigo-600"
                target="_blank"
                href="https://www.toptal.com/resume/rinde-van-lon"
              >
                Toptal profile
              </a>
              .
            </div>
          </div>

          <div className="uppercase text-lg font-bold divide-y-2 divide-gray-200 pt-4 pb-2">
            Contact
          </div>
          <hr className="border-black mb-4" />
          <div className="text-3xl flex justify-left space-x-5">
            <a href="mailto:rindevanlon@gmail.com" target="_blank">
              <FontAwesomeIcon icon={faEnvelopeSquare} />
            </a>
            <a href="https://github.com/rinde" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://linkedin.com/in/rinde" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="http://stackoverflow.com/users/1554154/rinde" target="_blank">
              <FontAwesomeIcon icon={faStackOverflow} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent;
  return { userAgent };
};

export default Home;