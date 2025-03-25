import axios from "axios";

export const getDistance = async (origin, destination) => {
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=${process.env.GOOGLE_MAPS_API_KEY}`
  );
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.status === "OK") {
        console.log(data.rows[0].elements[0]);
    } 
    else {
        console.error("Error:", data.error_message);
    }
} catch (error) {
    console.error("Request failed:", error);
}
  // return response.data.rows[0].elements[0].distance.text;

};
getDistance("New York, NY", "Los Angeles, CA");