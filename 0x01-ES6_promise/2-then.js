export default function handleResponseFromAPI(promise) {
  promise
    .then(() => ({ status: 200, body: 'Success' }))
    .catch((err) => err);
  console.log('Got a response from the API');
}
