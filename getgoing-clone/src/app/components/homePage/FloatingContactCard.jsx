"use client";

import { useState } from "react";

export default function FloatingContactCard() {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleCard = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div
      onClick={toggleCard}
      className={`fixed bottom-[10px] z-50 right-[10px] bg-white rounded-2xl ${
        isMinimized
          ? "w-[50px] h-[50px] flex items-center justify-center"
          : "w-[360px] flex p-5 items-center justify-between"
      }`}
    >
      {isMinimized ? (
        <i className="fa fa-info text-lg"></i>
      ) : (
        <>
          <div
            className="absolute top-0 right-2.5"
            onClick={(e) => e.stopPropagation()}
          >
            <a onClick={toggleCard} style={{ width: "25px", height: "25px" }}>
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
        </>
      )}
    </div>
  );
}
