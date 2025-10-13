export async function apiClient(url, params = {}) {
  const query = new URLSearchParams(params).toString();
  const fullUrl = query ? `${url}?${query}` : url;

  try {
    const res = await fetch(fullUrl);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error("API Error:", err);
    throw err;
  }
}
