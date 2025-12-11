export async function SignUp(username, email, password) {
  const url =
    "https://movies2cbackend-production.up.railway.app/api/auth/create";
  try {
    const jsonBody = {
      email: email,
      userName: username,
      password: password,
    };
    const reqHeaders = new Headers();
    reqHeaders.append("Content-Type", "application/json");
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(jsonBody),
      headers: reqHeaders,
    });
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function Login(email, password) {
  const url =
    "https://movies2cbackend-production.up.railway.app/api/auth/login";

  try {
    const jsonBody = {
      email: email,
      password: password,
    };
    const reqHeaders = new Headers();
    reqHeaders.append("Content-Type", "application/json");
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(jsonBody),
      headers: reqHeaders,
    });
    const token = await response.text();
    console.log(token);
    localStorage.setItem("access_token", token);
    return token;
  } catch (error) {
    console.log(error.message);
  }
}
