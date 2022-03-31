const fetcher = async (...args: Parameters<typeof fetch>) => {
  const response = await fetch(...args);
  try {
    if (response.status === 204) {
      return null;
    }
  } catch (e) {
    return new Error("Something went wrong");
  }
  if (!response.ok) {
    return new Error(response.statusText);
  } else {
    return response.json();
  }
};
export default fetcher;
