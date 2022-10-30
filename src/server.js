const API_URL_USERS = "http://127.0.0.1:8000/usuarios";
const API_URL_EMAIL = "http://127.0.0.1:8000/login";

export const listUsers = async () => {
    return await fetch(API_URL_USERS);
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

export const createUser = async (user) => {
    return await fetch(API_URL_USERS, {
        method: "POST",
        headers: {
            "content-Type": "application/Json",
            body: JSON.stringify({
                "email": String(user.email).trim(),
                "password": String(user.password).trim(),
                "company": String(user.company).trim(),
                "address": String(user.address).trim(),
                "roles": String(user.roles).trim(),
                "name": String(user.name).trim(),
                "lastname": String(user.lastname).trim(),
                "phone": parseInt(user.phone).trim(),
            }),
        },
    });
};
