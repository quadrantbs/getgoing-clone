import { NextResponse } from "next/server";

export async function GET() {
  const testimonials = [
    {
      id: 1,
      title: "Keluar negeri pertama kali tanpa rasa khawatir",
      text: "GetGoing bikin liburan keluar negeri tanpa rasa khawatir dan bener-bener kerasa kayak cuma punya kami berdua. Apalagi ada aplikasinya juga yang bisa dipakai untuk mengeksplor kota dengan informasinya yang cukup lengkap. Bintang 5 pokoknya.",
      name: "Herlika & Johan",
      subtitle: "Entrepreneur",
      img: "https://ik.imagekit.io/getgoing/tr:w-500,h-500/v0/b/getgoing-prod.appspot.com/o/CMS%2F171135077820230216_150747-min.jpg?alt=media&token=78f902bb-6967-457e-92cd-1877248b4460",
    },
    {
      id: 2,
      title: "Liburan seperti yang aku mau",
      text: "Best banget segalanya mau aku recokin kapanpun (bahkan tengah malampun ready hahaha ) Bener2 seperti yg ku mau, yakni sistem 'partner trip' bukan 'jasa tour'. Temen2 yg di kirim ke aku buat nemenin jg baik2 n sabar2.. Thankyouuu banyak yah mbaa See you aku recokin di negara2 lain ya mbaaa.",
      name: "Hilda",
      subtitle: "Entrepreneur",
      img: "https://ik.imagekit.io/getgoing/tr:w-500,h-500/v0/b/getgoing-prod.appspot.com/o/CMS%2F1711350675Image_20221216_075245_899%20(1).jpeg?alt=media&token=05ac57ca-86f1-424d-a4f7-8d260f64e9f9",
    },
    {
      id: 3,
      title: "Liburan keluarga yang sangat berkesan dan menyenangkan",
      text: "Sekali lagi, terima kasih semua yg tak terhingga pada All Team GetGoing yang SUPER DUPER KEREN! yang udah gercep pandu kita, gercep belikan tiket reshecedhule kemarin, kasih ide2 get lost yang mantap, kasih hotel yang nyaman dll semua nya yg ga bisa saya sebutkan satu per satu... Alhamdulillah ini liburan keluarga yg sgt berkesan dan menyenangkan, dan bucket list impian ke swiss bisa terwujud... Alhamdulillaaah 🤲🏻🤲🏻 THE BEST BUAT GETGOING TEAM KALIAAAN TERBAIIIIKKKK.",
      name: "Winda & Kiky",
      subtitle: "Banker",
      img: "https://ik.imagekit.io/getgoing/tr:w-500,h-500/v0/b/getgoing-prod.appspot.com/o/CMS%2F1711351458D489AF07-D4B4-47D7-A6C1-966BE41F01F7%20(1)-min.jpg?alt=media&token=8ba3ff45-2dff-4e6d-8af4-073b7623813a",
    },
    {
      id: 4,
      title: "Liburan mengesankan di hari anniversary",
      text: "Liburan kami penuh dengan cerita dan pengalaman yang luar biasa. Dapat kejutan kue Black Forest saat literally di Black Forest di kota Freiburg untuk anniversary kami. Kalau bisa saya dan suami mau kasih sepuluh bintang untuk Tim Getgoing. Terima kasih untuk service yang luar biasa sebelum berangkat, selama liburan bahkan sesudahnya. So, thank you so much dear Tim GetGoing, You guys are the best. Kita doain Tim GetGoing semakin sukses ke depannya.",
      name: "Meta",
      subtitle: "Writer",
      img: "https://ik.imagekit.io/getgoing/tr:w-500,h-500/v0/b/getgoing-prod.appspot.com/o/CMS%2F171135069520230622_174403-min.jpg?alt=media&token=fc0fa5c4-9b99-4344-b91d-b9211429edd7",
    },
    {
      id: 5,
      title: "Perpaduan servis dan kemauan liburan",
      text: "Keputusan kita menggunakan GetGoing sangat tepat karena mereka bisa memadukan servis sesuai dengan kemauan kita dan preferensi kita dan mereka juga siap konsultasi 2 arah dengan kita ! Jadi buat kalian yang mau explore Europe for the first time aku sangat saranin pakai GetGoing. Sukses terus buat GetGoing!",
      name: "Vincent & Aprillia",
      subtitle: "Entrepreneur & Banker",
      img: "https://ik.imagekit.io/getgoing/tr:w-500,h-500/v0/b/getgoing-prod.appspot.com/o/CMS%2F1711350701IMG_2064-min.jpg?alt=media&token=b0036122-135b-40da-84aa-a7f9530b2499",
    },
  ];

  return NextResponse.json(testimonials);
}
