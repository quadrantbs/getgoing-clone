import BeachIcon from "../svgIcons/BeachIcon";
import GuideIcon from "../svgIcons/GuideIcon";
import InfoIcon from "../svgIcons/InfoIcon";

export default function CarouselSlideTwo() {
  return (
    <div className="flex text-white items-center max-w-[1320px] mx-auto">
      <div className="w-full flex flex-col lg:flex-row items-center px-4">
        <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
          <div className="rounded-lg overflow-hidden lg:w-[600px] lg:h-[350px] h-[350px] w-full">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/webImages%2F1689692183775IMG_1600.JPG?alt=media&token=0da0739c-fc65-4944-80d9-9e6b45d7af11"
              className="object-cover w-full h-full"
              alt="GetGoing Banner"
            />
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-1/2 lg:pl-24 h-full">
          <div className="text-center">
            <p className="text-[16px] font-light tracking-[0.3rem] uppercase mb-3 text-[--gray]">
              Apa yang GetGoing punya?
            </p>

            {[
              {
                Icon: BeachIcon,
                title: "Trip Planner",
                description: "Susun Rute Perjalananmu Sendiri",
              },
              {
                Icon: GuideIcon,
                title: "Guide",
                description: "Tour Guide berbahasa Indonesia",
              },
              {
                Icon: InfoIcon,
                title: "Info",
                description: "Info penting di luar negeri",
              },
            ].map(({ Icon, title, description }, idx) => (
              <div
                key={idx}
                className="feature-item flex mb-10 mx-12 cursor-pointer hover:transform hover:translate-y-[-5px] transition-all duration-300"
              >
                <div className="icon-wrapper rounded-full bg-[--light] p-4 mr-4">
                  <Icon className="text-white" />
                </div>
                <div className="flex flex-col ml-3">
                  <h5 className="text-[--black] text-[20px] leading-[26px] font-bold text-lg mb-1">
                    {title}
                  </h5>
                  <span className="font-bold text-[12px] text-[--dark] p-1 rounded-md bg-[--light]">
                    {description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
