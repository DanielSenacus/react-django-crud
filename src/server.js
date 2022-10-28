const API_URL = "http://127.0.0.1:8000/usuarios";
const API_URL_EMAIL = "http://127.0.0.1:8000/login";

export const listUsers = async () => {
  return await fetch(API_URL);
};

export const checkAccount = async (account) => {
  return await fetch(API_URL_EMAIL, {
    method: "POST",
    headers: {
      "Content-Type": "application/Json",
    },
    body: JSON.stringify({
      "email": String(account.email).trim(),
      "password": String(account.password).trim(),
    }),
  });
};
