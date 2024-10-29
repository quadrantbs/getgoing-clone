export default function PrivateTripSection() {
  return (
    <div className="container max-w-[1320px] mx-auto">
      <div className="flex flex-col md:flex-row">
        {/* Left Column */}
        <div className="mx-auto w-3/4 md:w-1/2">
          <div className="sm:text-left text-center mb-4">
            <span
              className="text-[40px] leading-[64px] font-medium bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #c00 0%, #f33 40%, #ff9e22 80%)",
              }}
            >
              PRIVATE TRIP
            </span>

            <h1 className="font-bold text-black mt-2 text-shadow text-[40px] leading-[52px]">
              Berangkat <span className="text-[--red]">Kapan Saja</span>
              <br /> Semaumu
            </h1>
          </div>
          <div className="mt-3 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Advantage Items */}
            {[
              "Tentukan tanggal keberangkatan sesukamu",
              "Tidak ada kuota minimum, jadi pasti berangkat",
              "Fleksibel, bebas tentukan destinasi dan aktivitas perjalanan",
              "Liburan jadi lebih exclusive untuk kamu dan keluarga",
            ].map((text, index) => (
              <div key={index} className="flex items-center p-2">
                <div className="mr-2 flex-shrink-0">
                  <img
                    src="/img/icon/check-circle.png"
                    className="w-[20px] h-[20px]"
                    alt="check icon"
                  />
                </div>
                <p className="text-[--gray]">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column with Gradient Background Card */}
        <div className="w-full md:w-1/2">
          <div className="bg-gradient-to-r from-[--red] via-[#FF3333] to-[#FF9E22] rounded-l-lg p-5">
            <div className="grid grid-cols-2 gap-4">
              {/* Card Items */}
              {[
                {
                  title: "Konsultasi GRATIS",
                  desc: "Curhatin aja semuanya!",
                  icon: "support-gradient.png",
                },
                {
                  title: "Local Guide",
                  desc: "Biar ada temen!",
                  icon: "person-pin-gradient.png",
                },
                {
                  title: "Transportasi",
                  desc: "Bebas pilih transportasi apa",
                  icon: "commute-gradient.png",
                },
                {
                  title: "Lengkap Pokoknya",
                  desc: "Hotel, Asuransi, Visa, Wifi dll",
                  icon: "star-gradient.png",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-opacity-25 bg-white rounded-lg p-3 flex flex-col items-center"
                >
                  <div className="w-14 h-14 flex items-center justify-center bg-white rounded-lg mb-2">
                    <img
                      src={`/img/servis-kami/${item.icon}`}
                      className="h-10 w-10"
                      alt={item.title}
                    />
                  </div>
                  <h6 className="text-white font-semibold">{item.title}</h6>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
