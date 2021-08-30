import axios from "axios";
export const getAllUsers = () => axios.get("https://api.github.com/users");

export const getFilteredUsers = (data: string) =>
  axios.get("https://api.github.com/search/users", {
    params: {
      q: data,
      per_page: 20,
      page: 1,
    },
  });

// export const getFilteredUsers = async (data: string) =>
//   await axios.get("https://api.github.com/search/users", {
//     params: {
//       q: data,
//       per_page: 20,
//       page: 1,
//     },
//   });
