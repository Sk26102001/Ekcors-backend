import axios from "axios";

async function getLocationFromPincode(pincode) {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_PINCODE_API_URL}/${pincode}`);

        const data = response.data[0];

        if (!data || data.Status !== "Success" || !data.PostOffice?.length) {
            return null;
        }

        const info = data.PostOffice[0];

        return {
            city: info.District,
            state: info.State,
            country: info.Country,
        };
    } catch (error) {
        console.error("Pincode fetch failed:", error);
        return null;
    }
}

export default getLocationFromPincode;
