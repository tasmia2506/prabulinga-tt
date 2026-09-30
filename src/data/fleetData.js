// Fleet Data — Exactly 3 Buses operated by Prabhuling Travel Agency
export const FLEET_BUSES = [
  {
    id: "bus-1",
    busNumber: "KA-01-F-7001",
    name: "Prabhuling Royal Sleeper",
    category: "Non-AC Leyland Sleeper (2+1)",
    capacity: 30,
    type: "Sleeper Non-AC",
    specLine: "2+1, Leyland Sleeper, Non-AC, Non-Video (30 Seats)",
    rating: 4.9,
    reviewsCount: 142,
    startingPrice: 850,
    featured: true,
    primaryRoute: "Bengaluru ↔ Goa (via Hubballi / Dharwad)",
    schedule: "Daily Departure: 8:45 PM | Arrival: 7:30 AM",
    image: "/bus-royal-sleeper.jpg",
    amenities: [],
    seatLayout: {
      type: "2+1 Sleeper, Non-Video",
      totalSeats: 30,
      upperDeck: 15,
      lowerDeck: 15
    },
    description: "Our flagship long-distance Leyland Non-AC sleeper coach designed for smooth overnight interstate travel with premium suspension."
  },
  {
    id: "bus-2",
    busNumber: "KA-01-F-7002",
    name: "Prabhuling Express Seater",
    category: "Non-AC Sleeper Coach (2+1)",
    capacity: 34,
    type: "Sleeper Non-AC",
    specLine: "Sleeper Non A/C (2+1) 34 Seats",
    rating: 4.8,
    reviewsCount: 118,
    startingPrice: 450,
    featured: true,
    primaryRoute: "Bengaluru ↔ Mysuru Express Way",
    schedule: "3 Trips Daily: 6:00 AM, 11:30 AM, 5:00 PM",
    image: "/bus-sleeper-coach-8.jpg",
    amenities: ["AC", "Reclining Seats", "Mobile Charging", "Music & Entertainment", "Leg Rests", "Luggage Storage"],
    seatLayout: {
      type: "2+1 Non-AC Sleeper",
      totalSeats: 34
    },
    description: "High-frequency day service coach connecting Bengaluru & Mysuru with high comfort & punctual schedules."
  },
  {
    id: "bus-3",
    busNumber: "KA-01-F-7003",
    name: "Prabhuling Star Sleeper",
    category: "Non-AC Sleeper Super Bus",
    capacity: 36,
    type: "Sleeper Non-AC",
    specLine: "NON A/C SLEEPER SUPER BUS 36 Seats",
    rating: 4.7,
    reviewsCount: 96,
    startingPrice: 650,
    primaryRoute: "Bengaluru ↔ Mangaluru (via Hassan / Sakleshpur)",
    schedule: "Daily Departure: 9:30 PM | Arrival: 6:15 AM",
    image: "/bus-star-sleeper.jpg",
    amenities: ["Spacious Berths", "Charging Ports", "Curtains for Privacy", "Fresh Bedding", "First Aid Kit", "Emergency Exit"],
    seatLayout: {
      type: "Non-AC Sleeper Super Bus",
      totalSeats: 36
    },
    description: "Budget-friendly, highly ventilated overnight sleeper servicing coastal routes with experienced western ghat drivers."
  },
];

export const FLEET = FLEET_BUSES;

