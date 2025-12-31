import React from "react";

export default function Experience() {
  return (
    <>
    <div className="flex flex-col items-center gap-10">
      <div className="text-white flex flex-col items-center gap-5">
        <p className="font-bold text-2xl">Experience</p>
        <p className="italic max-w-[500px] text-center">
          I build web and mobile applications from front-end to back-end,
          solving problems and delivering clean, efficient code.
        </p>
      </div>

      <div className="black-bg max-w-[500px] p-8 rounded-md shadow-md">
        <div className="flex gap-5 items-start">
          <img
            src="/public/case.png"
            alt="case icon"
            className="w-12 h-12 object-contain"
          />
          <div className="flex flex-col text-white">
            <p className="font-bold text-lg">Fullstack Developer</p>
            <p className="green-text font-semibold text-sm">
              Pinnacle Technology Inc.
            </p>
            <p className="text-xs text-gray-400">May 2025 - Present</p>
          </div>
        </div>

        <ul className="mt-4 text-white list-disc list-inside space-y-1 text-sm">
          <li>
            Developed and maintained web applications using Laravel, Bootstrap,
            and jQuery.
          </li>
          <li>
            Handled ticket-based tasks, including bug fixes, hotfixes, and
            feature requests.
          </li>
          <li>
            Built and optimized database queries for clients, ensuring fast and
            accurate data retrieval.
          </li>
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {["Laravel", "Bootstrap", "jQuery", "Docker", "Nginx"].map(
            (tech, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full bg-[#21AE6C]/30 text-green-500 text-xs font-semibold"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>
    </div>
    <div className="flex flex-col items-center gap-10 mt-10">

      <div className="black-bg max-w-[500px] p-8 rounded-md shadow-md">
        <div className="flex gap-5 items-start">
          <img
            src="/public/case.png"
            alt="case icon"
            className="w-12 h-12 object-contain"
          />
          <div className="flex flex-col text-white">
            <p className="font-bold text-lg">Internship - Fullstack Developer</p>
            <p className="green-text font-semibold text-sm">
              Department of Agriculture
            </p>
            <p className="text-xs text-gray-400">April 2024 - June 2024</p>
          </div>
        </div>

        <ul className="mt-4 text-white list-disc list-inside space-y-1 text-sm">
          <li>
            Developed and maintained web applications using Laravel, Bootstrap,
            and jQuery.
          </li>
          <li>
            Handled ticket-based tasks, including bug fixes, hotfixes, and
            feature requests.
          </li>
          <li>
            Built and optimized database queries for clients, ensuring fast and
            accurate data retrieval.
          </li>
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {["Laravel", "Bootstrap", "jQuery", "Docker", "Nginx"].map(
            (tech, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full bg-[#21AE6C]/30 text-green-500 text-xs font-semibold"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>
    </div>
    </>
  );
}
