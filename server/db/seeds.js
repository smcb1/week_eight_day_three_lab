use rooms;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Simon McBride",
    email: "simon@gmail.com",
    status: false,
  },
  {
    name: "Dave Taylor",
    email: "dave@email.co.uk",
    status: false,
  },
  {
    name: "Susie Dent",
    email: "susie@channel4.com",
    status: true,
  }
]);
