// ----------------------- current cart item -----------------//
export function currentLocalStorage() {
  const productInfo = localStorage.getItem("cart");

  if (productInfo === null) {
    return [];
  } else {
    return JSON.parse(productInfo);
  }
}

// |------------------- storing user data to localstorage  ------------------|
function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function saveUser(user) {
  saveToStorage("user", user);
}
export function saveToken(token) {
  saveToStorage("token", token);
}

//  |----------------GET user out from storage  --------------------|

function getFromStorage(key) {
  const value = localStorage.getItem(key);
  if (!value) {
    return null;
  }
  return JSON.parse(value);
}

export function getToken() {
  return getFromStorage("token");
}

export function getUsername() {
  const user = getFromStorage("user");

  if (user) {
    return user.username;
  }
  return null;
}
