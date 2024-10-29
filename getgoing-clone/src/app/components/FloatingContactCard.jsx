export default function FloatingContactCard() {
    return (
      <div className="fixed bottom-[10px] right-[10px] bg-white rounded-2xl flex p-5 items-center justify-between w-[360px]">
        <div className="absolute top-0 right-2.5">
          <a
            style={{
              width: "25px",
              height: "25px",
            }}
            className=""
          >
            <i className="fa fa-times" aria-hidden="true"></i>
          </a>
        </div>
        <div className="flex flex-col w-full">
          <h6 className="font-bold text-[--red]">Hubungi kami</h6>
          <p className="m-0 p-0">melalui IG atau WA</p>
        </div>
        <div className="flex justify-center items-center">
          <a href="https://www.instagram.com/getgoing.co.id/" target="_blank">
            <button
              style={{
                backgroundImage: "url(/img/icon/instagram-button.png)",
                backgroundSize: "cover",
                width: "50px",
                height: "50px",
                backgroundColor: "transparent",
              }}
              className="rounded-full border-0 mr-2"
            ></button>
          </a>
          <a
            href="https://wa.me/6281119190601?text=Hallo,%20Saya%20mau%20berlibur%20ke%20Eropa%20dengan%20Private%20Trip.%20Apakah%20bisa%20dibantu%20?"
            target="_blank"
          >
            <button
              style={{
                backgroundImage: "url(/img/icon/whatsapp-button.png)",
                backgroundSize: "cover",
                width: "50px",
                height: "50px",
                backgroundColor: "transparent",
              }}
              className="rounded-full border-0"
            ></button>
          </a>
        </div>
      </div>
    );
  }
  