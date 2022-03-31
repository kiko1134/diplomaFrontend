function parseJwt(token) {
  if (!token) { return; }
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
}



export default function authHeader() {

  let {sub} = parseJwt(sessionStorage.getItem("token"));

  if (sub && sessionStorage.getItem("token")) {
    return { Authorization: "Bearer " + sessionStorage.getItem("token") };
  } else {
    return {};
  }
}
