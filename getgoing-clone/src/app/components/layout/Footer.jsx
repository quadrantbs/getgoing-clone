import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[--red] text-[--white] pt-5">
      <div className="px-[15px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="col-span-1 mb-5">
            <div className="font-bold text-uppercase  mb-3">
              INFORMASI KONTAK
            </div>
            <ul className="list-none">
              <li className="flex items-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 flex items-start"
                >
                  <span className="footer-address-text relative">
                    <img
                      src="/img/icon/pin.png"
                      alt="Location"
                      className="absolute w-[30px] h-[30px] left-0 top-0"
                    />
                    <span className="pl-[40px]">
                      BSD Green Office Park 1, 6th Floor, BSD City, Tangerang,
                      Banten 15345
                    </span>
                  </span>
                </a>
              </li>
              <li className="flex items-center">
                <img
                  src="/img/icon/clock.png"
                  alt="Clock"
                  className="size-[30px]"
                />
                <a target="_blank" rel="noopener noreferrer" className="ml-2 ">
                  <span className="footer-address-text">24/7 - Online</span>
                </a>
              </li>
              <li className="flex items-center">
                <img
                  src="/img/icon/email.png"
                  alt="Email"
                  className="size-[30px]"
                />
                <a
                  href="mailto:lets@getgoing.co.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 "
                >
                  <span className="footer-address-text">
                    lets@getgoing.co.id
                  </span>
                </a>
              </li>
              <li className="flex items-center">
                <img
                  src="/img/icon/instagram.png"
                  alt="Instagram"
                  className="size-[30px]"
                />
                <a
                  href="https://www.instagram.com/getgoing.co.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 "
                >
                  <span className="footer-address-text">@getgoing.co.id</span>
                </a>
              </li>
              <li className="flex items-center">
                <img
                  src="/img/icon/facebook.png"
                  alt="Facebook"
                  className="size-[30px]"
                />
                <a
                  href="https://www.facebook.com/getgoing.co.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 "
                >
                  <span className="footer-address-text">@getgoing.co.id</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1 mb-5">
            <img src="/img/MockupApp.png" alt="Mockup Aplikasi" height="300" />
          </div>

          <div className="col-span-1 mb-5">
            <div className="font-bold text-uppercase  mb-3">DOWNLOAD DI</div>
            <ul className="inline">
              <li>
                <a
                  href="https://apps.apple.com/us/app/getgoing/id1602015694"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/svg/AppStore.svg" alt="App Store" width={170} />
                </a>
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.getgoing.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/svg/GooglePlay.svg"
                    alt="Google Play"
                    width={170}
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1 mb-5">
            <div className="font-bold text-uppercase  mb-3">LAINNYA</div>
            <ul className="list-none">
              <li>
                <a className="" href="/syarat-ketentuan">
                  Syarat dan Ketentuan
                </a>
              </li>
              <li>
                <a className="" href="/kebijakan-privasi">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a className="" href="/dokumentasi">
                  Dokumentasi
                </a>
              </li>
              <li>
                <a className="" href="/penghargaan">
                  Penghargaan
                </a>
              </li>
              <li>
                <a className="" href="/login">
                  Login
                </a>
              </li>
              <li>
                <a className="" href="/press">
                  Press
                </a>
              </li>
              <li>
                <a className="" href="/faq">
                  F.A.Q
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-4 bg-black text-gray-300">
        <div className="px-[15px]">
          <div className="flex justify-between items-center">
            <div className="text-center text-md-left">
              <p className="text-sm mb-0">
                © 2024 - PT. Gue Eksplorasi Terus. All rights reserved.
              </p>
            </div>
            <div>
              <ul className="list-inline mb-0 text-center">
                <li className="list-inline-item">
                  <a
                    href="https://www.instagram.com/getgoing.co.id/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.facebook.com/getgoing.co.id"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
