const baseUrl = "https://swapi.dev/api";

export const getCharacters = async () => {
    try {
        const response = await fetch(`${baseUrl}/people`);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const responseData = await response.json();
        return responseData.results;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw new Error(
            "The Force is not with you at the moment. Please try again later."
        );
    }   
};
