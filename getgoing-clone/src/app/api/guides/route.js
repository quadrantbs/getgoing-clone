import { NextResponse } from "next/server";

export async function GET() {
  const guides = [
    {
      id: "9f227f5c-6820-4bb4-a234-71ce9eebeaa9",
      image:
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/avatar%2F1724200976015?alt=media&token=50786cb5-41e5-4353-96ac-c8558febc60c",
      name: "Nuel",
      location: "Paris, Prancis",
    },
    {
      id: "fcb64804-e8d4-44c4-a967-c263abfb1e36",
      image:
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FAgus%20Sandra?alt=media&token=921d2aff-6579-4bb7-a3fc-355ee4145f4f",
      name: "Agus",
      location: "Roma, Italia",
    },
    {
      id: "30003ebd-a2b3-4bc5-82a0-4a046fd88bd1",
      image:
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FStella%20Runia?alt=media&token=1b69c0d0-80d3-4947-8788-a421e2f00774",
      name: "Stella",
      location: "Zurich, Swiss",
    },
    {
      id: "8095985e-b8ec-432d-85a1-a8f935d8b82c",
      image:
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/avatar%2FPHOTO-2018-09-23-16-32-02.jpg?alt=media&token=4ea14f69-6ea5-4c9b-83ac-2e8b3ca107d6",
      name: "Januar",
      location: "Munich, Jerman",
    },
    {
      id: "fc04731a-b5a4-49cf-aa34-c39887a7150a",
      image:
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FIMG_1904.jpeg?alt=media&token=ee183e63-aa7a-452d-99dd-840c885486f6",
      name: "Gio",
      location: "Amsterdam, Belanda",
    },
    {
      id: "854093e7-a28a-4797-8e8e-6c67c43e466c",
      image:
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FE5E046B0-9750-458D-BDCF-C9FE6EF2A763.JPG?alt=media&token=2fb6aae5-b8e2-4437-b592-57b19e022499",
      name: "Hanifa",
      location: "London, Inggris",
    },
    {
      id: "80741a92-ec1e-4898-acb8-1aa17de3a30c",
      image:
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/avatar%2Ff26bcdf5-7032-4ae2-8f34-85238ded215e?alt=media&token=7bffe4e4-171e-4f56-905b-8a15d38d85ee",
      name: "Nada",
      location: "Wina, Austria",
    },
    {
      id: "de481ae1-1904-4055-b460-6ab0905c67fc",
      image:
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2F13210289-75ed-4ac4-8742-873d47ee7137?alt=media&token=902fb4f5-7237-4a88-adc1-fd68985ea63b",
      name: "Maya",
      location: "Liverpool, Inggris",
    },
    {
      id: "8ad73beb-dac7-4ac5-a556-9c22362a2d76",
      image:
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FWhatsApp%20Image%202023-05-08%20at%2010.54.49.jpg?alt=media&token=0c5cbbac-b60d-4175-8c51-89a8370308dd",
      name: "Nabilla",
      location: "Paris, Prancis",
    },
    {
      id: "7a177c23-2053-48a1-acd6-d54b8df19512",
      image:
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2Fc4567268-dbd2-4489-bf6a-ed16f6c065fe?alt=media&token=9420fcec-9a1b-4511-b8b5-44acc07dc020",
      name: "Ifa",
      location: "Wina, Austria",
    },
  ];

  return NextResponse.json(guides);
}
