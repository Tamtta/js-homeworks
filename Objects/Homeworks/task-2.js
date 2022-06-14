function readingStatus(books) {
  books.forEach((book) =>
    console.log(
      `${book.author} ${book.haveRead ? "has" : "hasn't"} read ${
        book.title
      } book ${book.daysAgo ? `${book.daysAgo} days ago` : "yet"}`
    )
  );
}

var Books = [
  {
    author: "Bill",
    title: "The Road Ahead",
    haveRead: true,
    dateOfRead: new Date(2020, 10, 10),
    get daysAgo() {
      let today = new Date();
      let daysBetween = Math.round(
        Math.abs((this.dateOfRead - today) / (1000 * 3600 * 24))
      );
      return daysBetween;
    },
  },
  {
    author: "Steve",
    title: "Walter Isaacson",
    haveRead: true,
    dateOfRead: new Date(2020, 10, 5),
    get daysAgo() {
      let today = new Date();
      let daysBetween = Math.round(
        Math.abs((this.dateOfRead - today) / (1000 * 3600 * 24))
      );
      return daysBetween;
    },
  },
  {
    author: "John",
    title: "The Hunger Games",
    haveRead: false,
    dateOfRead: NaN,
    get daysAgo() {
      let today = new Date();
      let daysBetween = Math.round(
        Math.abs((this.dateOfRead - today) / (1000 * 3600 * 24))
      );
      return daysBetween;
    },
  },
];

readingStatus(Books);
// console.log(Books);
