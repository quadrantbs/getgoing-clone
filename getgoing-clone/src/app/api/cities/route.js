import { NextResponse } from "next/server";

export async function GET() {
    const cities = [
    {
      id: 1,
      name: "Paris",
      country: "Prancis",
      image:
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2F5cc12ad5-84cc-4c57-a9b7-8af97998c704?alt=media&token=f4b37f93-42fa-4cf6-830e-2e4d32afaf61",
      link: "/hasil-pencarian/Prancis/Paris",
    },
    {
      id: 2,
      name: "Bern",
      country: "Swiss",
      image:
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2FBern-City(1).png?alt=media&token=4d7ec828-93dd-4a46-89d7-630e349135ea",
      link: "/hasil-pencarian/Swiss/Bern",
    },
    {
      id: 3,
      name: "Amsterdam",
      country: "Belanda",
      image:
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2F82baab12-2d5f-4e42-9ae0-438bcdc1224d?alt=media&token=b8ae1420-250a-4869-b1cc-01fb66a367ae",
      link: "/hasil-pencarian/Belanda/Amsterdam",
    },
    {
      id: 4,
      name: "London",
      country: "Inggris",
      image:
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/tripPlanner%2F1706723624lucas-davies-iP8ElEhqHeY-unsplash.jpg?alt=media&token=c191c6ec-c7d7-4c46-a3ba-7152dc06d3c2",
      link: "/hasil-pencarian/Inggris/London",
    },
    {
      id: 5,
      name: "Roma",
      country: "Italia",
      image:
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2FUntitled%20design%20(19)-min.png?alt=media&token=84487726-2ddc-4ce8-838f-070b8e3d78e7",
      link: "/hasil-pencarian/Italia/Roma",
    },
    {
      id: 6,
      name: "Zurich",
      country: "Swiss",
      image:
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2FGallery%201.png?alt=media&token=05b1d2ee-8140-4dd2-840d-98c5223d7d82",
      link: "/hasil-pencarian/Swiss/zurich",
    },
    {
      id: 7,
      name: "Praha",
      country: "Ceko",
      image:
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2FUntitled%20design%20(21)-min%20(1).png?alt=media&token=97a44f3f-3efd-4d7d-96be-a5764a79b37f",
      link: "/hasil-pencarian/Ceko/Praha",
    },
    {
      id: 8,
      name: "Berlin",
      country: "Jerman",
      image:
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2FUntitled%20design%20(22)-min.png?alt=media&token=671d26df-88cd-4018-9ee4-261085dc4299",
      link: "/hasil-pencarian/jerman/berlin",
    },
    {
      id: 9,
      name: "Liverpool",
      country: "Inggris",
      image:
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/tripPlanner%2F1695136431neil-martin-nFo5hbJTM8A-unsplash.jpg?alt=media&token=a0182101-fa13-4502-9b80-2afdfd813270",
      link: "/hasil-pencarian/Inggris/Liverpool",
    },
    {
      id: 10,
      name: "Istanbul",
      country: "Turki",
      image:
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2F2845db6f-60f5-4cae-8150-eb36790fdb82?alt=media&token=e563b344-e9eb-4e22-8536-24ee73bae5a8",
      link: "/hasil-pencarian/Turki/Istanbul",
    },
  ];

  return NextResponse.json(cities);
}
