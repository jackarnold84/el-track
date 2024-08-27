const endpointUrl = "https://w2blpi2104.execute-api.us-east-2.amazonaws.com/Prod/el-track";

export async function fetchArrivalData(transitType, routes, arrival, departure) {
  const routesParam = routes.join(',');
  const url = `${endpointUrl}/track-arrivals?transit=${transitType}&routes=${routesParam}&arrival=${arrival}&departure=${departure}`;

  try {
    console.log(`fetching from: ${url}`);
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      console.error(`Error response: ${data}`);
    }
    const data = await response.json();
    const arrivals = data.arrivals;
    return arrivals;
  } catch (error) {
    console.error("Error fetching arrival data:", error);
  }
}