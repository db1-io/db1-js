import fetch from "cross-fetch";

export async function makeHttpRequest(url: string, body: any): Promise<Response> {
    const httpResponse = await fetch(url, {
        method: "POST",
        body,
        headers: { "content-type": "application/octet-stream" },
    });
    return httpResponse;
}
