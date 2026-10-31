// Vehicle Rental Catalog — Cars & Tempo Travellers
// Separate from FLEET_BUSES (our 3 directly-operated intercity coaches).
// This is a private-hire fleet available on request through our verified
// driver-partner network for local, outstation & group trips.
//
// NOTE: `image` fields are representative stock photos of the matching
// model/vehicle type (sourced from Wikimedia Commons) — swap each one for
// an actual photo of your own vehicle before launch, and confirm the
// Commons file's license/attribution requirements if you keep using it.
// Batta (driver daily allowance) figures are indicative only — always
// confirm the final fare, batta & toll/parking actuals with our desk.

export const VEHICLE_CATEGORIES = ["All", "Cars", "Tempo Traveller"];

const IMG_SEDAN = "/vehicle-car-sedan.jpg";
const IMG_SUV_INNOVA = "/vehicle-car-suv-innova.jpg";
const IMG_SUV_FORTUNER = "/vehicle-car-suv-fortuner.jpg";
const IMG_TEMPO = "/vehicle-tempo-traveller.jpg";

export const VEHICLE_RENTAL_FLEET = [
  // ----- CARS: SEDAN -----
  {
    id: "car-swift-dzire",
    name: "Maruti Swift Dzire",
    category: "Cars",
    subType: "Sedan",
    seats: 4,
    bags: 2,
    ac: true,
    minKmPerDay: 250,
    battaPerDay: 300,
    image: IMG_SEDAN,
    description: "A compact, fuel-efficient sedan for city rides, airport runs & short outstation trips.",
    amenities: ["Air Conditioning", "Music System", "Charging Points"],
  },
  {
    id: "car-toyota-etios",
    name: "Toyota Etios",
    category: "Cars",
    subType: "Sedan",
    seats: 4,
    bags: 3,
    ac: true,
    minKmPerDay: 250,
    battaPerDay: 300,
    image: IMG_SEDAN,
    description: "Reliable, air-conditioned sedan best suited for local city drops, airport transfers & short outstation runs.",
    amenities: ["Air Conditioning", "Music System", "Charging Points"],
  },

  // ----- CARS: SUV / MUV -----
  {
    id: "car-maruti-ertiga",
    name: "Maruti Ertiga",
    category: "Cars",
    subType: "SUV",
    seats: 6,
    bags: 3,
    ac: true,
    minKmPerDay: 250,
    battaPerDay: 400,
    image: IMG_SUV_INNOVA,
    description: "A spacious MUV that comfortably seats small families with extra luggage room.",
    amenities: ["Air Conditioning", "Music System", "Charging Points", "Push-back Seats"],
  },
  {
    id: "car-toyota-innova",
    name: "Toyota Innova",
    category: "Cars",
    subType: "SUV",
    seats: 7,
    bags: 4,
    ac: true,
    minKmPerDay: 250,
    battaPerDay: 400,
    image: IMG_SUV_INNOVA,
    description: "A dependable, well-maintained Toyota Innova offering spacious 7-seater comfort for family & group trips.",
    amenities: ["Air Conditioning", "Music System", "Charging Points", "Push-back Seats"],
  },
  {
    id: "car-innova-crysta",
    name: "Toyota Innova Crysta",
    category: "Cars",
    subType: "SUV",
    seats: 7,
    bags: 4,
    ac: true,
    minKmPerDay: 250,
    battaPerDay: 450,
    image: IMG_SUV_INNOVA,
    description: "A premium, more refined step up from the Innova with a quieter, plusher cabin for highway & ghat drives.",
    amenities: ["Air Conditioning", "Music System", "Charging Points", "Push-back Seats", "Individual Rear AC Vents"],
  },
  {
    id: "car-innova-hycross",
    name: "Toyota Innova Hycross",
    category: "Cars",
    subType: "SUV",
    seats: 7,
    bags: 4,
    ac: true,
    minKmPerDay: 250,
    battaPerDay: 450,
    image: IMG_SUV_INNOVA,
    description: "Our newest-generation SUV with a modern cabin, captain seats & smoother, refined suspension.",
    amenities: ["Air Conditioning", "Music System", "Charging Points", "Captain Seats", "Individual Rear AC Vents"],
  },
  {
    id: "car-toyota-fortuner",
    name: "Toyota Fortuner",
    category: "Cars",
    subType: "SUV",
    seats: 7,
    bags: 3,
    ac: true,
    minKmPerDay: 250,
    battaPerDay: 500,
    image: IMG_SUV_FORTUNER,
    description: "Our premium full-size SUV offering a commanding ride, plush captain-style seating & strong AC performance for long highway drives.",
    amenities: ["Air Conditioning", "Music System", "Charging Points", "Captain Seats", "Generous Ground Clearance"],
  },

  // ----- TEMPO TRAVELLERS -----
  {
    id: "tempo-9-seater",
    name: "9 Seater Tempo Traveller",
    category: "Tempo Traveller",
    subType: "Tempo Traveller",
    seats: 9,
    bags: 9,
    ac: true,
    minKmPerDay: 300,
    battaPerDay: 500,
    image: IMG_TEMPO,
    description: "A well-suited group vehicle for small family outings, pilgrimage trips & short group tours.",
    amenities: ["Air Conditioning", "Push-back Seats", "Reading Lights", "Roof Carrier"],
  },
  {
    id: "tempo-12-seater",
    name: "12 Seater Tempo Traveller",
    category: "Tempo Traveller",
    subType: "Tempo Traveller",
    seats: 12,
    bags: 12,
    ac: true,
    minKmPerDay: 300,
    battaPerDay: 600,
    image: IMG_TEMPO,
    description: "A premium 12-seater with captain-style seating, comfortable for group tours & corporate transfers.",
    amenities: ["Air Conditioning", "Captain Seats", "Ambient Cabin Lighting", "Rear Storage"],
  },
  {
    id: "tempo-17-seater",
    name: "17 Seater Tempo Traveller",
    category: "Tempo Traveller",
    subType: "Tempo Traveller",
    seats: 17,
    bags: 17,
    ac: true,
    minKmPerDay: 300,
    battaPerDay: 700,
    image: IMG_TEMPO,
    description: "A comfortable 17-seater with push-back seats, well suited for medium-sized group tours & outstation trips.",
    amenities: ["Air Conditioning", "Push-back Seats", "Reading Lights", "Roof Carrier"],
  },
  {
    id: "tempo-force-urbania",
    name: "Force Urbania",
    category: "Tempo Traveller",
    subType: "Tempo Traveller",
    seats: 17,
    bags: 17,
    ac: true,
    minKmPerDay: 300,
    battaPerDay: 700,
    image: IMG_TEMPO,
    description: "A modern, van-style group vehicle with a smoother ride & contemporary cabin for premium group travel.",
    amenities: ["Air Conditioning", "Push-back Seats", "Reading Lights", "Rear Storage"],
  },
];

export const VEHICLE_RENTAL_TERMS = [
  "Driver batta (daily allowance) is charged per day the vehicle is on duty, in addition to the running fare.",
  "Toll, parking, state permit & interstate taxes are charged extra, as per actuals.",
  "Minimum daily running distance applies for multi-day outstation hires; short-fall KMs may be billed separately.",
  "Final fare, batta & vehicle availability are confirmed by our desk at the time of enquiry.",
];
