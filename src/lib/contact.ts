export interface ContactPayload {
  email: string;
  name: string;
  idea: string;
}

/**
 * Sends the contact form to the configured backend.
 * Throws on missing configuration or a non-2xx response so the caller can show an error.
 */
export const saveContact = async (data: ContactPayload): Promise<Response> => {
  // NEXT_PUBLIC_* variables are inlined at build time, so they must be referenced literally.
  const url = process.env.NEXT_PUBLIC_URL_BASE_CONTACT;
  const endpoint = process.env.NEXT_PUBLIC_ENDPOINT_CONTACT;

  if (!url || !endpoint) {
    throw new Error(
      "Missing environment variables: NEXT_PUBLIC_URL_BASE_CONTACT or NEXT_PUBLIC_ENDPOINT_CONTACT"
    );
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

  return response;
};
