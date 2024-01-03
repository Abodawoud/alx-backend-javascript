export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      const errorMessage = 'The fake API is not working currently';
      reject(new Error(errorMessage));
    }
  });
}
