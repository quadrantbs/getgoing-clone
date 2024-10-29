export default function CarouselSlideOne() {
  return (
    <div className="flex text-white items-center max-w-[1320px] mx-auto">
      <div className="w-full flex flex-col lg:flex-row items-center px-4 h-full">
        <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
          <div className="rounded-lg overflow-hidden lg:w-[600px] lg:h-[350px] h-[350px] w-full">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/webImages%2F1689692364277swiss%202%20(1)-min.JPG?alt=media&token=e4b0843f-875b-4bbe-b8bc-642318848bca"
              className="object-cover w-full h-full"
              alt="Banner Image"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full lg:w-1/2 p-6 lg:pl-12 h-full">
          <div className="text-center mx-5">
            <p className="text-[16px] font-light tracking-[0.3rem] uppercase mb-3 text-[--gray] leading-[26px]">
              Eksplor dan nikmati mudah liburan ke luar negeri dengan
            </p>
            <h2 className="text-[--black] font-bold text-3xl mb-3">
              Aplikasi GetGoing
            </h2>
            <p className="text-[16px] font-light tracking-[0.3rem] uppercase mb-3 text-[--gray] leading-[26px]">
              Dapat didownload di:
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <a
                href="https://apps.apple.com/us/app/getgoing/id1602015694"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/svg/AppStore.svg"
                  className="h-20 mr-2"
                  alt="App Store"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.getgoing.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/svg/GooglePlay.svg"
                  className="h-20 mr-2"
                  alt="Google Play"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
