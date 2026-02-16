
const districts = [
  "Chennai",
  "Coimbatore",
  "Madurai",
  "Trichy",
  "Salem",
  "Erode",
  "Tirunelveli",
  "Thoothukudi",
  "Vellore",
  "Tiruppur",
  "Kanchipuram",
  "Kanyakumari",
  "Dindigul",
  "Thanjavur",
  "Karur",
  "Namakkal",
  "Krishnagiri",
  "Dharmapuri",
  "Villupuram",
  "Cuddalore",
  "Nagapattinam",
  "Ariyalur",
  "Perambalur",
  "Ramanathapuram",
  "Sivagangai",
  "Virudhunagar",
  "Tenkasi",
  "Ranipet",
  "Tiruvallur",
  "Tiruvannamalai",
  "The Nilgiris",
];



const coreBlogs = [
  {
    slug: "tamil-nadu-tour-packages",
    title: "Top Tamil Nadu Tour Packages for Families & Groups",
    location: "Tamil Nadu",
    description:
      "Explore Tamil Nadu with professional travel planners offering budget and luxury travel packages.",
    content: `
RR Tours & Stays provides customized tour packages across Tamil Nadu including Ooty, Kodaikanal, Chennai and Coimbatore.

Services include:
✔ Family tour packages
✔ Honeymoon tours
✔ Corporate trips
✔ College IV tours
✔ Event management services
`,
  },
];



const districtBlogs = districts.map((district) => ({
  slug: `travel-agency-in-${district.toLowerCase().replace(/\s/g, "-")}`,

  title: `Best Travel Agency in ${district} for Tours & Stays`,

  location: district,

  description: `Looking for a trusted travel agency in ${district}? RR Tours & Stays offers customized travel packages, corporate tours, honeymoon planning and event management services across Tamil Nadu.`,

  content: `
RR Tours & Stays is a professional travel agency in ${district} providing premium tours and travel planning services.

Our Services in ${district}:

✔ Customized tour packages
✔ Family vacation planning
✔ Honeymoon tour packages
✔ College IV tour organizers
✔ Corporate outing planners
✔ Event management services
✔ Cab booking and sightseeing tours

We specialize in Tamil Nadu tour packages, South India travel planning and destination event management.

If you are searching for:

- travel agency in ${district}
- tour operator in ${district}
- honeymoon planners in ${district}
- corporate tour planners in ${district}

Our team provides professional travel solutions with trusted service and premium experiences.
`,
}));


export const blogs = [...coreBlogs, ...districtBlogs];
