export async function handleRequest(promise) {
  try {
    return [await promise, null];
  } catch (error) {
    return [null, error];
  }
}