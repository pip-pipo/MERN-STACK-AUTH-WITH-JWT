// const server = "http://localhost:8080/api";

// signUP
const makeSignUp = async (PostRoute, UserData) => {
  const res = await fetch(`${PostRoute}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(UserData),
  });
  res
    .json()
    .then(() => {
      console.log("success");
      alert("successfully user added");
    })
    .catch(() => {
      alert("User Not Added");
      console.log("not");
    });
};

const callAboutPage = async () => {
  try {
    const res = await fetch("/api/about", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await res.json();
 

    if (!res.status === 200) {
      const errror = new Error(res.errror);
      throw errror;
    }

      return data

  } catch (err) {
    return false;
  }
};

export { makeSignUp, callAboutPage };
