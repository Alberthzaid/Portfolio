export const saveContact = async (data: any): Promise<Response | void> => {
    try {
        const url = import.meta.env.VITE_URL_BASE_CONTACT; 
        const endpoint = import.meta.env.VITE_ENDPOINT_CONTACT;

        if (!url || !endpoint) {
            throw new Error("Missing environment variables: VITE_URL_BASE_CONTACT or VITE_ENDPOINT_CONTACT");
        }

        const response = await fetch(`${url}/${endpoint}`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Error saving data: ${response.status} - ${response.statusText}`);
        }

        console.log("✅ Data saved successfully");
        return response;
    } catch (error) {
        console.error("❌ Error in saveContact:", error);
    }
};
