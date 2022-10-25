const price = (price) => {
  Number.prototype.format = function (n, x) {
    var re = "\\d(?=(\\d{" + (x || 3) + "})+" + (n > 0 ? "\\." : "$") + ")";
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, "g"), "$&,");
  };
  return price.format();
};
const agents = [
  {
    id: 1,
    name: "Kevin Caster",
    email: "kevinn@gmail.com",
    phone: "+919206789510",
    address: "P.O BOX 245106 Mumbai",
    county: "mumbai",
    town: "Mumbai",
    photo: "agent2.jpg",

    about:
      "Hi i am a broker Call me for any queries.",
    social: {
      facebook: "https://www.facebook.com/kevin.caster.96510510/",
      instagram: "https://www.facebook.com/kevin.caster.96510510/",
      twitter: "https://www.facebook.com/kevin.caster.96510510/",
      linkedin: "https://www.facebook.com/kevin.caster.96510510/",
    },
    featured: true,
    listings: [
      {
        id: 1,
        title: "Apartment for rent",
        slug: "apartment-for-rent",
        price: price(3510000),
        location: "Bangalore",
        description:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        images: ["image2.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
        amenities: [
          "Air Conditioning",
          "Security System",
          "Parking Space",
          "Gym Room",
          "Free WIFI",
          "Fire Place",
        ],
        agent: {
          name: "Elizabeth Keen",
          image: "agent1.jpg",
        },
        features: {
          bedrooms: 3,
          status: true,
          garage: 1,
          elevator: true,
          kitchen: true,
        },
        address: {
          address: "Mumbai Westlands",
          county: "Mumbai",
          city: "Mumbai",
          street: "Tengecha St",
          area: "Mumbai",
        },

        featured: true,
        type: "rental",
        listedIn: "rentals",
        category: "Apartments",
      },
      {
        id: 2,
        title: "House for Sell",
        slug: "house-for-sell",
        price: price(3510000),
        location: "New Delhi",
        description:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        images: ["image8.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
        amenities: [
          "Air Conditioning",
          "Security System",
          "Parking Space",
          "Gym Room",
          "Free WIFI",
          "Fire Place",
        ],
        agent: {
          name: "Kevin Caster",
          image: "agent3.jpg",
        },
        features: {
          bedrooms: 3,
          status: true,
          garage: 1,
          elevator: true,
          kitchen: true,
        },
        address: {
          address: "Mumbai Westlands",
          county: "Mumbai",
          city: "Mumbai",
          street: "Tengecha St",
          area: "Mumbai",
        },
        featured: true,
        type: "rental",
        listedIn: "rentals",
        category: "Houses",
      },
    ],
  },
  {
    id: 2,
    name: "Priscilla Frankson",
    email: "priscilla@gmail.com",
    phone: "+919206789510",
    address: "P.O BOX 245106 Mumbai",
    county: "Pune",
    town: "Pune",
    about:
      "Hi i am a broker Call me for any queries.",
    social: {
      facebook: "https://www.facebook.com/kevin.caster.96510510/",
      instagram: "https://www.facebook.com/kevin.caster.96510510/",
      twitter: "https://www.facebook.com/kevin.caster.96510510/",
      linkedin: "https://www.facebook.com/kevin.caster.96510510/",
    },
    featured: true,
    photo: "agent4.jpg",
    listings: [
      {
        id: 1,
        title: "Apartment for rent",
        slug: "apartment-for-rent",
        price: price(3510000),
        location: "Bangalore",
        description:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        images: ["image2.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
        amenities: [
          "Air Conditioning",
          "Security System",
          "Parking Space",
          "Gym Room",
          "Free WIFI",
          "Fire Place",
        ],
        agent: {
          name: "Elizabeth Keen",
          image: "agent1.jpg",
        },
        features: {
          bedrooms: 3,
          status: true,
          garage: 1,
          elevator: true,
          kitchen: true,
        },
        address: {
          address: "Mumbai Westlands",
          county: "Mumbai",
          city: "Mumbai",
          street: "Tengecha St",
          area: "Mumbai",
        },

        featured: true,
        type: "rental",
        listedIn: "rentals",
        category: "Apartments",
      },
      {
        id: 2,
        title: "House for Sell",
        slug: "house-for-sell",
        price: price(3510000),
        location: "New Delhi",
        description:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        images: ["image8.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
        amenities: [
          "Air Conditioning",
          "Security System",
          "Parking Space",
          "Gym Room",
          "Free WIFI",
          "Fire Place",
        ],
        agent: {
          name: "Kevin Caster",
          image: "agent3.jpg",
        },
        features: {
          bedrooms: 3,
          status: true,
          garage: 1,
          elevator: true,
          kitchen: true,
        },
        address: {
          address: "Mumbai Westlands",
          county: "Mumbai",
          city: "Mumbai",
          street: "Tengecha St",
          area: "Mumbai",
        },
        featured: true,
        type: "rental",
        listedIn: "rentals",
        category: "Houses",
      },
    ],
  },
  {
    id: 3,
    name: "Joram Davies",
    email: "joram@gmail.com",
    phone: "+919206789510",
    address: "P.O BOX 245106 Mumbai",
    county: "mumbai",
    town: "Mumbai",
    about:
      "Hi i am a broker Call me for any queries.",
    social: {
      facebook: "https://www.facebook.com/kevin.caster.96510510/",
      instagram: "https://www.facebook.com/kevin.caster.96510510/",
      twitter: "https://www.facebook.com/kevin.caster.96510510/",
      linkedin: "https://www.facebook.com/kevin.caster.96510510/",
    },
    photo: "agent3.jpg",
    featured: true,
    listings: [
      {
        id: 1,
        title: "Apartment for rent",
        slug: "apartment-for-rent",
        price: price(3510000),
        location: "Bangalore",
        description:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        images: ["image2.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
        amenities: [
          "Air Conditioning",
          "Security System",
          "Parking Space",
          "Gym Room",
          "Free WIFI",
          "Fire Place",
        ],
        agent: {
          name: "Elizabeth Keen",
          image: "agent1.jpg",
        },
        features: {
          bedrooms: 3,
          status: true,
          garage: 1,
          elevator: true,
          kitchen: true,
        },
        address: {
          address: "Mumbai Westlands",
          county: "Mumbai",
          city: "Mumbai",
          street: "Tengecha St",
          area: "Mumbai",
        },

        featured: true,
        type: "rental",
        listedIn: "rentals",
        category: "Apartments",
      },
      {
        id: 2,
        title: "House for Sell",
        slug: "house-for-sell",
        price: price(3510000),
        location: "New Delhi",
        description:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        images: ["image8.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
        amenities: [
          "Air Conditioning",
          "Security System",
          "Parking Space",
          "Gym Room",
          "Free WIFI",
          "Fire Place",
        ],
        agent: {
          name: "Kevin Caster",
          image: "agent3.jpg",
        },
        features: {
          bedrooms: 3,
          status: true,
          garage: 1,
          elevator: true,
          kitchen: true,
        },
        address: {
          address: "Mumbai Westlands",
          county: "Mumbai",
          city: "Mumbai",
          street: "Tengecha St",
          area: "Mumbai",
        },
        featured: true,
        type: "rental",
        listedIn: "rentals",
        category: "Apartments",
      },
    ],
  },
];

export default agents;
