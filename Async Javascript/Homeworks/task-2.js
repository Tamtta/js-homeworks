class Countries {
  constructor(url) {
    this.url = url;

    if (typeof url !== "string") {
      throw new Error("Parameter should be a string!");
    }
  }

  send(region) {
    if (typeof region !== "string") {
      throw new Error("Parameter should be a string!");
    }

    return fetch(`${url}?region=${region}`)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw new Error(`We have error, status code: ${res.status}`);
        }
      })
      .then((data) => data.data);
  }
}

const url = "https://api.first.org/data/v1/countries";
const countries = new Countries(url);

(async () => {
  try {
    const data = await countries.send("asia");
    console.log(data); // Data.
  } catch (error) {
    console.log(error);
  }
})();
