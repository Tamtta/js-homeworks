const url = "https://api.first.org/data/v1/countries";

const send = function (url) {
  return fetch(url)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw new Error(`We have error, status code: ${res.status}`);
      }
    })
    .then((data) => data.data);
};

send(url)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
