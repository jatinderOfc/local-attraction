const attractions = [
  {
    id: 1,
    name: "Red Fort",
    category: "Historical Monument",
    image: "./assets/images/red-fort.jpg",
    description:
      "The Red Fort (Lal Qila) is a historic fortification in Old Delhi. Built by Mughal Emperor Shah Jahan in 1639, it served as the main residence of the Mughal emperors. The fort's massive red sandstone walls are a UNESCO World Heritage Site and a symbol of India's independence.",
    details: {
      timings: "9:30 AM - 4:30 PM (Closed Mondays)",
      entryFee: "₹35 (Indians), ₹500 (Foreigners)",
      bestTime: "October to March",
      location: "Netaji Subhash Marg, Old Delhi",
    },
  },
  {
    id: 2,
    name: "India Gate",
    category: "War Memorial",
    image: "./assets/images/india-gate.jpg",
    description:
      "India Gate is a war memorial dedicated to the 74,187 soldiers of the British Indian Army who died between 1914 and 1921 in World War I and the Third Anglo-Afghan War. Designed by Sir Edwin Lutyens, it's a popular spot for evening walks and picnics.",
    details: {
      timings: "Open 24 hours",
      entryFee: "Free",
      bestTime: "Evening (5 PM - 9 PM)",
      location: "Rajpath, New Delhi",
    },
  },
  {
    id: 3,
    name: "Qutub Minar",
    category: "Historical Monument",
    image: "./assets/images/qutub-minar.jpg",
    description:
      "Qutub Minar is a 72.5-meter tall minaret built in 1199 CE by Qutbuddin Aibak. It's the tallest brick minaret in the world and a UNESCO World Heritage Site. The complex also includes ancient ruins and the famous Iron Pillar.",
    details: {
      timings: "7:00 AM - 5:00 PM",
      entryFee: "₹30 (Indians), ₹500 (Foreigners)",
      bestTime: "October to March",
      location: "Mehrauli, South Delhi",
    },
  },
  {
    id: 4,
    name: "Lotus Temple",
    category: "Religious Site",
    image: "./assets/images/lotus-temple.jpg",
    description:
      "The Lotus Temple is a Bahá'í House of Worship known for its distinctive lotus flower shape. Made of white marble, it's open to people of all faiths and is one of the most visited buildings in the world, welcoming over 4.5 million visitors annually.",
    details: {
      timings: "9:00 AM - 7:00 PM (Summer), 9:30 AM - 5:30 PM (Winter)",
      entryFee: "Free",
      bestTime: "Early morning or evening",
      location: "Kalkaji, South Delhi",
    },
  },
  {
    id: 5,
    name: "Humayun's Tomb",
    category: "Historical Monument",
    image: "./assets/images/humayun-tomb.jpg",
    description:
      "Humayun's Tomb is the tomb of the Mughal Emperor Humayun, built in 1569-70 by his widow Hamida Banu Begum. It's a UNESCO World Heritage Site and is considered a precursor to the Taj Mahal. The beautiful Persian-style garden and architecture make it a must-visit.",
    details: {
      timings: "6:00 AM - 6:00 PM",
      entryFee: "₹30 (Indians), ₹500 (Foreigners)",
      bestTime: "Early morning or late afternoon",
      location: "Nizamuddin, East Delhi",
    },
  },
  {
    id: 6,
    name: "Akshardham Temple",
    category: "Religious Site",
    image: "./assets/images/akshardham-temple.jpg",
    description:
      "Akshardham is a stunning Hindu temple complex showcasing Indian culture, spirituality, and architecture. Inaugurated in 2005, the temple features intricate carvings, exhibitions, and a musical fountain show. It's one of the largest Hindu temples in the world.",
    details: {
      timings: "10:00 AM - 8:00 PM (Closed Mondays)",
      entryFee: "₹170 (Adults), ₹100 (Children)",
      bestTime: "Morning or evening",
      location: "Noida Mor, East Delhi",
    },
  },
  {
    id: 7,
    name: "Chandni Chowk",
    category: "Market & Food",
    image: "./assets/images/chandni-chowk.jpg",
    description:
      "Chandni Chowk is one of the oldest and busiest markets in Old Delhi, established in the 17th century. Famous for its narrow lanes, street food, traditional shops, and vibrant atmosphere. A paradise for food lovers and shoppers seeking authentic Indian experiences.",
    details: {
      timings: "10:00 AM - 8:00 PM",
      entryFee: "Free",
      bestTime: "Morning or evening",
      location: "Old Delhi",
    },
  },
  {
    id: 8,
    name: "Jama Masjid",
    category: "Religious Site",
    image: "./assets/images/jama-masjid.jpg",
    description:
      "Jama Masjid is one of the largest mosques in India, built by Shah Jahan between 1644 and 1656. It can accommodate 25,000 worshippers and offers a stunning view of Old Delhi from its minarets. The mosque is made of red sandstone and white marble.",
    details: {
      timings: "7:00 AM - 12:00 PM, 1:30 PM - 6:30 PM",
      entryFee: "Free (₹300 for camera)",
      bestTime: "Early morning or evening",
      location: "Old Delhi",
    },
  },
  {
    id: 9,
    name: "Lodi Gardens",
    category: "Park & Nature",
    image: "./assets/images/lodi-gardens.jpg",
    description:
      "Lodi Gardens is a beautiful 90-acre city park featuring 15th and 16th-century tombs and monuments from the Sayyid and Lodi dynasties. It's a perfect place for morning walks, jogging, and picnics amidst historical architecture and lush greenery.",
    details: {
      timings: "6:00 AM - 8:00 PM",
      entryFee: "Free",
      bestTime: "Early morning or evening",
      location: "Lodi Estate, South Delhi",
    },
  },
  {
    id: 10,
    name: "National Museum",
    category: "Museum",
    image: "./assets/images/national-museum.jpg",
    description:
      "The National Museum is the largest museum in India, housing over 200,000 works of art covering 5,000 years of Indian history. Established in 1949, it includes artifacts from the Indus Valley Civilization to modern art, making it a treasure trove of Indian heritage.",
    details: {
      timings: "10:00 AM - 6:00 PM (Closed Mondays)",
      entryFee: "₹20 (Indians), ₹650 (Foreigners)",
      bestTime: "Morning",
      location: "Janpath, Central Delhi",
    },
  },
];
