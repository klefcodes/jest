const axios = require("axios");
const functions = {
  sum: (a, b) => a + b,
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = { name: "Abraham Ugbeshe", age: 19 };
    return user;
  },
  fetchUser: () => {
    return axios
      .get("https://api.github.com/users/klefcodes")
      .then((res) => res.data)
      .catch((err) => "Error");
  },
};

module.exports = functions;
