function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Resolve the Promise with a specific value
    resolve({ message: 'Success' });
  });
}

export default getResponseFromAPI;