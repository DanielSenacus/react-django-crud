const API_URL_USERS = "http://127.0.0.1:8000/usuarios/";
const API_URL_EMAIL = "http://127.0.0.1:8000/login";
const API_URL_COMPANY = "http://127.0.0.1:8000/company";
const API_URL_COMPANY_D = "http://127.0.0.1:8000/company/";
const API_URL_USERS_D = "http://127.0.0.1:8000/usuariosdelete/";
export const listUsers = async () => {
  return await fetch(API_URL_USERS);
};

export const getCompany = async () => {
  return await fetch(API_URL_COMPANY);
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

export const RegisterUser = async (user) => {
  return await fetch(API_URL_USERS, {
    method: "POST",
    headers: {
      "content-Type": "application/Json",
    },
    body: JSON.stringify({
      "email": String(user.email).trim(),
      "password": String(user.password).trim(),
      "company": String(user.company).trim(),
      "address": String(user.address).trim(),
      "roles": String(user.roles).trim(),
      "name": String(user.name).trim(),
      "lastname": String(user.lastname).trim(),
      "phone": parseInt(user.phone),
    }),
  });
};

export const RegisterCompany = async (company) => {
  return await fetch(API_URL_COMPANY, {
    method: "POST",
    headers: {
      "content-Type": "application/Json",
    },
    body: JSON.stringify({
      "email": String(company.email).trim(),
      "nit": parseInt(company.nit),
      "companysName": String(company.companysName).trim(),
      "address": String(company.address).trim(),
      "companysBrandName": String(company.companysBrandName).trim(),
      "webstie": String(company.webstie).trim(),
      "adminUser": parseInt(company.adminUser),
      "phone": parseInt(company.phone),
    }),
  });
};

export const AdminList = async () => {
  return await fetch(API_URL_USERS);
};

export const DeleteUser = async (id) => {
  console.log(`${API_URL_USERS_D}${id}`);
  return await fetch(`${API_URL_USERS_D}${id}`, {
    method: "DELETE",
  });
};

export const DeleteCompany = async (id) => {
  console.log(`${API_URL_COMPANY_D}${id}`);
  return await fetch(`${API_URL_COMPANY_D}${id}`, {
    method: "DELETE",
  });
};
