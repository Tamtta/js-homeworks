function readingStatus(books) {
  // for (let i = 0; i < books.length; i++) {
  //   let props = books[i];
  //   // return props;
  //   console.log(
  //     `${props.author} ${props.haveRead ? "have" : "haven't"} read ${
  //       props.title
  //     } book`
  //   );
  // }

  books.forEach((book) =>
    console.log(
      `${book.author} ${book.haveRead ? "have" : "hasn't"} read ${
        book.title
      } book`
    )
  );
}

var Books = [
  {
    author: "Bill",
    title: "The Road Ahead",
    haveRead: true,
    dateOfRead: new Date(2020, 10, 10),
  },
  {
    author: "Steve",
    title: "Walter Isaacson",
    haveRead: true,
    dateOfRead: new Date(2020, 10, 5),
  },
  {
    author: "John",
    title: "The Hunger Games",
    haveRead: false,
    dateOfRead: NaN,
  },
];

readingStatus(Books);
