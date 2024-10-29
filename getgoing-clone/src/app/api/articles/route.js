import { NextResponse } from "next/server";

export async function GET() {
  const articles = [
    {
      id: 1,
      title:
        "Mengungkap Hidden Gem di Eropa Timur Tips dan Trik dari Seorang Traveler Sejati",
      date: "10 Nov 2023",
      img: "https://ik.imagekit.io/getgoing/tr:w-1000,h-1000/v0/b/getgoing-prod.appspot.com/o/blogImage%2Ff3ff7427-7ff1-43d0-8e2c-e83aeed10eb5?alt=media&token=d2d22163-5138-46d8-84d6-a90cf84b3af3",
    },
    {
      id: 2,
      title: "Siapa Kami ? - Bahtiar Pandu Prasojo",
      date: "9 Jun 2021",
      img: "https://ik.imagekit.io/getgoing/tr:w-1000,h-1000/v0/b/getgoing-prod.appspot.com/o/blogImage%2FPandu.png?alt=media&token=fe3f043d-ccfd-4e39-81dd-c8f12f4e298a",
    },
    {
      id: 3,
      title: "Menikmati Liburan Musim Dingin di Swiss",
      date: "14 Jun 2023",
      img: "https://ik.imagekit.io/getgoing/tr:w-1000,h-1000/v0/b/getgoing-prod.appspot.com/o/blogImage%2F2141d99d-11d4-43d5-91f4-6b4256e3b8ca?alt=media&token=dcee7881-1f7b-42fc-bef1-d4cb5d370bb6",
    },
    {
      id: 4,
      title: "Rekomendasi Destinasi Terbaik di Eropa untuk Liburan Musim Panas",
      date: "10 Jun 2024",
      img: "https://ik.imagekit.io/getgoing/tr:w-1000,h-1000/v0/b/getgoing-prod.appspot.com/o/tripPlanner%2F17180037271.png?alt=media&token=ecf1d2b5-0583-4734-ae59-c5baa602c598",
    },
    {
      id: 5,
      title: "Siapa Kami ? - Iga Debra M. Makainas",
      date: "31 Mar 2021",
      img: "https://ik.imagekit.io/getgoing/tr:w-1000,h-1000/v0/b/getgoing-prod.appspot.com/o/blogImage%2FIga%20Blog-min.png?alt=media&token=18ef692c-54f5-465a-80d8-95905fe09a1d",
    },
    {
      id: 6,
      title:
        "Menikmati Keajaiban Midnight Sun Pengalaman Liburan yang Tidak Terlupakan",
      date: "12 Jul 2024",
      img: "https://ik.imagekit.io/getgoing/tr:w-1000,h-1000/v0/b/getgoing-prod.appspot.com/o/tripPlanner%2F17207791691.png?alt=media&token=de7feb8a-eb38-4413-9c67-eb9c2fa49205",
    },
    {
      id: 7,
      title: "Menjelajahi Keindahan Hamburg dengan Beragam Wisatanya",
      date: "7 Mar 2024",
      img: "https://ik.imagekit.io/getgoing/tr:w-1000,h-1000/v0/b/getgoing-prod.appspot.com/o/tripPlanner%2F17097845771.png?alt=media&token=b2c3f7d4-de2f-49e5-95c9-79f5f4f1efc1",
    },
    {
      id: 8,
      title: "Alsace Membuka Petualangan Baru di Destinasi yang Seru",
      date: "20 Mar 2024",
      img: "https://ik.imagekit.io/getgoing/tr:w-1000,h-1000/v0/b/getgoing-prod.appspot.com/o/tripPlanner%2F17109152231.png?alt=media&token=7250dc3a-67cf-4676-88d7-129a95c9d80e",
    },
    {
      id: 9,
      title: "Innsbruck, Austria Eksplorasi Epik di Antara Pegunungan",
      date: "13 Mar 2024",
      img: "https://ik.imagekit.io/getgoing/tr:w-1000,h-1000/v0/b/getgoing-prod.appspot.com/o/tripPlanner%2F17103046981.png?alt=media&token=3ab544ad-fb5c-4d0c-8a42-1d2e4e48bdc0",
    },
    {
      id: 10,
      title:
        "Menghindari Kesalahan Umum Saat Pertama Kali Berpetualang di Eropa",
      date: "1 Okt 2023",
      img: "https://ik.imagekit.io/getgoing/tr:w-1000,h-1000/v0/b/getgoing-prod.appspot.com/o/blogImage%2Fcfa487c2-3cce-43d7-adfa-258e002472f5?alt=media&token=ce898a27-e89e-4dfa-aec8-811ce085f97a",
    },
    {
      id: 11,
      title:
        "Menelusuri Keajaiban Warisan Dunia di Eropa Memahami Kekayaan Budaya dan Sejarah",
      date: "14 Agu 2023",
      img: "https://ik.imagekit.io/getgoing/tr:w-1000,h-1000/v0/b/getgoing-prod.appspot.com/o/blogImage%2F67139f0f-f276-4a41-ba63-6de9589f3d81?alt=media&token=88814dd1-dd13-47d6-8972-a6bda412dd26",
    },
    {
      id: 12,
      title: "Menyegarkan Perjalanan Liburan di Eropa dengan Minum Air Keran",
      date: "11 Des 2023",
      img: "https://ik.imagekit.io/getgoing/tr:w-1000,h-1000/v0/b/getgoing-prod.appspot.com/o/blogImage%2F74f8a50e-187a-4aca-adfb-534a80fcb624?alt=media&token=6294195d-8274-4ac5-a557-7f0c423f6a5b",
    },
    {
      id: 13,
      title: "Jelajah Seru di Eropa dengan Bucketlist yang Bikin Gemes.",
      date: "9 Sep 2023",
      img: "https://ik.imagekit.io/getgoing/tr:w-1000,h-1000/v0/b/getgoing-prod.appspot.com/o/blogImage%2Fa3ad4c3e-91f2-49b8-b4c5-a858adb0a772?alt=media&token=185c3cd3-7cac-4b51-9a1c-8fea178699c2",
    },
  ];

  return NextResponse.json(articles);
}
