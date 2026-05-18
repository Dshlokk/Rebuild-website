export type Review = {
  name: string;
  rating: number;
  date: string;
  body: string;
  avatar?: string;
};

export const reviews: Review[] = [
  {
    name: "Aditya Sharma",
    rating: 5,
    date: "2 months ago",
    body: "The lakefront view is absolutely breathtaking. EarthAroma is one of the few projects that actually delivers on the 'green' promise. Highly recommended for anyone looking for peace and luxury.",
  },
  {
    name: "Priya Nair",
    rating: 5,
    date: "4 months ago",
    body: "Beautifully planned community. The clubhouse and the lakeside gazebo are my favorite spots. It's rare to find such a low-density project in Bengaluru.",
  },
  {
    name: "Vikram Reddy",
    rating: 5,
    date: "1 month ago",
    body: "Excellent location near the airport yet so calm. The biophilic design of the villas is unique and very well executed. A great investment for the future.",
  },
  {
    name: "Sandeep Rao",
    rating: 5,
    date: "3 months ago",
    body: "The attention to detail in the infrastructure—stamped concrete roads, underground piping—is impressive. Truly a premium experience.",
  },
];
