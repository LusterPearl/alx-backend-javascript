function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // You can optionally resolve the Promise immediately
    resolve();
    // Or you can reject the Promise
    // reject(new Error("Failed to get response from API"));
  });
}
export default getResponseFromAPI;