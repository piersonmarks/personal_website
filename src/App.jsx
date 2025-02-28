import "./App.css";

function App() {
  return (
    <div className="flex min-h-screen body-bg font-sans text-slate-700 bg-orange-50 pt-6 md:pt-10 pb-6 px-2 md:px-0">
      <div className="m-auto w-full">
        <main className="m-auto max-w-4xl p-8 md:p-8">
          <div className="text-3xl sm:text-4xl font-bold text-center pb-2">
            Pierson Marks
          </div>
          <div className="text-sm italic text-center pb-8">
            Looking for my blog? Check it out here:{" "}
            <a
              href="https://piersonmarks.substack.com/"
              className="text-blue-800 hover:underline"
            >
              piersonmarks.substack.com
            </a>
          </div>
          <div className="text-justify pb-2">
            <div className="font-semibold mb-2 text-lg">
              In the age of abundant intelligence, agency and focus set people apart.
            </div>
            <div className="text-gray-700 mt-6">
              <p className="mb-2">
                I am the CEO & co-founder of{" "}
                <a
                  className="font-semibold text-blue-500 hover:underline"
                  href="https://jellypod.ai"
                  target="_blank"
                  rel="noreferrer"
                >
                  Jellypod
                </a>
                , the AI Podcast Studio.</p>
            </div>
            <p className="mb-2">
              Outside of work, catch me playing beach tennis, hitting the gym, or writing music and playing piano. I also <a href="https://x.com/piersonmarks" target="_blank" rel="noreferrer" className="font-semibold text-blue-500 hover:underline">tweet</a> (post?) occasionally.
            </p>
          </div>
          <div className="text-gray-700 mt-4">
            <div className="text-justify pb-1 text-xl font-bold">
              Previous Experience
            </div>
            <ul className="align-middle list-outside ml-4"></ul>
            <li className="list-disc align-middle">
              <span className="font-semibold">
                [Amazon - Alexa Voice Services]
              </span>
              <span className="">
                {" "}
                Software Engineer
              </span>
            </li>
          </div>
          <div className="text-gray-700 mt-4">
            <div className="text-justify pb-1 text-xl font-bold">Education</div>
            <ul className="align-middle list-outside ml-4"></ul>
            <li className="list-disc align-middle">
              <span className="font-semibold">
                [University of California, Los Angeles]
              </span>
              <span className="">{' '}B.S. Computer Science, Samueli School of Engineering</span>
            </li>
          </div>
          <div className="text-gray-700 mt-4">
            <div className="text-justify pb-1 text-xl font-bold">
              Links
            </div>
            <ul className="align-middle list-outside ml-4">
              <li className="list-disc align-middle">
                <a
                  href="https://www.forbes.com/sites/rogerdooley/2024/11/17/which-ai-podcast-creator-is-bestjellypod-or-notebooklm/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm hover:bg-blue-200 hover:underline hover:transition-all duration-150 ease-in"
                >
                  <strong>[Forbes]</strong> Which AI Podcast Creator Is Best - Jellypod Or NotebookLM?
                </a>
              </li>
              <li className="list-disc align-middle">
                <a
                  href="https://www.geekwire.com/2024/too-many-newsletters-in-your-inbox-former-alexa-engineer-uses-ai-to-turn-content-into-daily-podcasts/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm hover:bg-blue-200 hover:underline hover:transition-all duration-150 ease-in"
                >
                  <strong>[GeekWire]</strong> Too many newsletters in your inbox?
                  Former Alexa engineer uses AI to turn content into daily
                  podcasts.
                </a>
              </li>
              <li className="list-disc align-middle">
                <a
                  href="https://www.iseedvc.com/#iseed-portfolio"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm hover:bg-blue-200 hover:underline hover:transition-all duration-150 ease-in"
                >
                  <strong>[iSeed VC]</strong> Jellypod added as iSeedVC's newest portfolio company
                </a>
              </li>
              <li className="list-disc align-middle">
                <a
                  href="https://youtu.be/YSmfkxjaGG0?si=o8PCavm3Xqtlj_zC&t=808"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm hover:bg-blue-200 hover:underline hover:transition-all duration-150 ease-in"
                >
                  <strong>[This Week in Startups]</strong> Pierson, CEO of Jellypod, asks Jason Calancanis about building a business as a solo-founder
                </a>
              </li>
              <li className="list-disc align-middle">
                <a
                  href="https://kern.al/post-event/pitch-day"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm hover:bg-blue-200 hover:underline hover:transition-all duration-150 ease-in"
                >
                  <strong>[Kernal - Hosted by Haley Bryant from Hustle Fund]</strong>
                  {' '}The Best F***ing Pitch Event on the Internet
                </a>
              </li>
              <li className="list-disc align-middle">
                <a
                  href="https://www.sonos.com/en-us/newsroom/sonos-and-alexa-expand"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm hover:bg-blue-200 hover:underline hover:transition-all duration-150 ease-in"
                >
                  <strong>[Amazon Alexa]</strong> Sonos and Amazon to expand access to voice control with Alexa
                  on Sonos devices
                </a>
              </li>
              <li className="list-disc align-middle">
                <a
                  href="https://developer.amazon.com/en-US/blogs/alexa/device-makers/2021/06/now-available-set-up-alexa-voice-service-devices-through-the-alexa-app"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm hover:bg-blue-200 hover:underline  hover:transition-all duration-150 ease-in"
                >
                  <strong>[Amazon]</strong> Set Up Alexa Voice Service Devices Through the Alexa App
                </a>
              </li>
            </ul>
          </div>
        </main>
        <div className="fixed sticky w-full">
          <div className="grid text-sm text-gray-500 justify-center text-center mx-auto mb-3">
            <span>
              Want to chat? Contact me at{" "}
              <span className="italic">pierson@jellypod.ai</span>
            </span>
          </div>
          <div className="grid text-xs text-gray-500 justify-center mx-auto">
            Copyright © {new Date().getFullYear()} | Los Angeles, California
          </div>
          <div className="grid-cols-2 mx-auto font-medium mt-3 text-center mb-1">
            <a
              className="inline-flex flex-col px-2 group footer-link icon items-center"
              href="https://github.com/piersonmarks"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <svg
                className="fill-gray-500 hover:fill-blue-800"
                width="18"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a
              className="inline-flex flex-col px-2 group footer-link icon items-center"
              href="https://www.linkedin.com/in/piersonmarks/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                className="fill-gray-500 hover:fill-blue-800"
                width="18"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>LinkedIn</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              className="inline-flex flex-col px-2 group footer-link icon items-center"
              href="https://twitter.com/piersonmarks"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <svg
                className="fill-gray-500 hover:fill-blue-800"
                width="18"
                role="img"
                viewBox="0 0 300 300"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Twitter (X)</title>
                <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
