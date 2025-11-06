import Image from "next/image";
import { dataScienceAICourseData } from "./data";

export default function Reviews() {
  const stories = dataScienceAICourseData.reviews;
  return (
    <section className="bg-[#1b0944] text-white py-16 px-6">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">
        Success Stories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {stories.map((story, index) => (
          <div
            key={index}
            /* fixed height so all cards match */
            className="bg-white text-gray-900 rounded-xl shadow-lg overflow-hidden flex flex-col h-[400px]"
          >
            {/* Top: Profile */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <Image
                  src={story.profile}
                  alt={story.name}
                  width={56}
                  height={56}
                  className="object-cover rounded-md"
                />
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-lg">{story.name}</h3>
                  <Image
                    src="/linkedin.png"
                    alt="LinkedIn"
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Mid Section (Institutes/Companies) */}
            <div className="flex items-center justify-between px-6 py-6">
              <div className="flex flex-col items-start text-sm">
                {/* FROM logo: taller / larger */}
                 <div className="mb-2">
                 <Image
  src={story.fromLogo}
  alt={story.from}
  width={88}
  height={64}
  className="object-contain h-[64px]"
/>

                </div>
                {/* <span className="font-semibold text-[#ffb300]">
                  {story.role}
                </span>
                <span className="text-gray-700">{story.from}</span> */}
              </div>

              {/* simple black arrow */}
              <div className="text-black text-2xl font-bold">→</div>

              <div className="flex flex-col items-end text-sm">
                {/* COMPANY logo: smaller */}
                <div className="mb-2">
                  <Image
  src={story.companyLogo}
  alt={story.company}
  width={56}
  height={28}
  className="object-contain h-[28px]"
/>

                </div>
                <span className="font-semibold text-black">{story.company}</span>
                <span className="text-gray-700 whitespace-nowrap">{story.title}</span>
              </div>
            </div>

            {/* Review Box: fixed equal height for all cards */}
            <div className="bg-gray-100 p-5 h-[150px]">
              <p className="text-gray-800 text-sm leading-relaxed overflow-hidden">
                {story.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
