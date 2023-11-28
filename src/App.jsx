import "./App.css";
import image from "./assets/PiersonMarks-fjge.png";

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
              href="https://blog.piersonmarks.com/"
              className="text-blue-800 hover:underline"
            >
              blog.piersonmarks.com
            </a>
          </div>
          <div className="text-justify pb-2">
            <div className="my-8">
              <img src={image} alt="Pierson Marks" className="rounded-3xl" />
              <p className="text-gray-400 text-xs italic mx-2 mt-0.5">
                July 11, 2023 - Amazon HQ Spheres (Seattle, Washington)
              </p>
            </div>
            <div className="text-justify pb-2 text-xl font-bold">About Me</div>
            <p className="mb-2">
              I&apos;m a technology enthusiast. And I love building things.
            </p>
            <p className="mb-2">
              I am the CEO & founder of{" "}
              <a
                className="font-semibold text-blue-500 hover:underline"
                href="https://jellypod.ai"
                target="_blank"
                rel="noreferrer"
              >
                Jellypod
              </a>
              , an early-stage startup building a platform to aggregate and
              summarize your personal newsletters into a daily, audio podcast.{" "}
              <span className="italic">
                Check it out here:{" "}
                <a
                  href="https://jellypod.ai/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  https://jellypod.ai/
                </a>
              </span>
            </p>
            <p className="mb-2">
              Prior to Jellypod, I worked at Amazon as a Software Development
              Engineer. My work in the Alexa Voice Service organization focused
              on building world-class out-of-box-experiences for Alexa Built-In
              devices, including frustration-free setup, IoT provisioning, and
              device detection. I&apos;ve been fortunate to directly collaborate
              with several global partners, and have been instrumental in adding
              over a million new Alexa endpoints worldwide.
            </p>
            <p>
              I graduated from the University of California, Los Angeles, and
              have a Bachelor of Science degree in Computer Science.{" "}
              <span className="italic">Go Bruins!</span>
            </p>
          </div>
          <div className="text-gray-700 mt-4">
            <div className="text-justify pb-2 text-xl font-bold">
              Media & Press
            </div>
            <ul className="align-middle list-outside ml-4">
              <li className="list-disc align-middle">
                <a
                  href="https://www.sonos.com/en-us/newsroom/sonos-and-alexa-expand"
                  target="_blank"
                  className="hover:bg-blue-200 hover:underline hover:transition-all duration-150 ease-in"
                >
                  Sonos and Amazon to expand access to voice control with Alexa
                  on Sonos devices
                </a>
              </li>
              <li className="list-disc align-middle">
                <a
                  href="https://developer.amazon.com/en-US/blogs/alexa/device-makers/2021/06/now-available-set-up-alexa-voice-service-devices-through-the-alexa-app"
                  target="_blank"
                  className="hover:bg-blue-200 hover:underline  hover:transition-all duration-150 ease-in"
                >
                  Set Up Alexa Voice Service Devices Through the Alexa App
                </a>
              </li>
            </ul>
          </div>
        </main>
        <div className="fixed sticky w-full">
          <div className="grid text-md text-gray-500 justify-center text-center mx-auto mb-3">
            <span>
              Want to chat? Contact me at{" "}
              <span className="italic">piersonmarks@engineering.ucla.edu</span>
            </span>
          </div>
          <div className="grid text-sm text-gray-500 justify-center mx-auto">
            Copyright © 2023 | Seattle, Washington
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
