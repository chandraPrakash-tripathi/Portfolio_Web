const API_BASE = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") || "";

async function request<T>(path: string, opts: RequestInit = {}): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(opts.headers || {}),
    },
    ...opts,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API error ${res.status}: ${text}`);
  }
  return (await res.json()) as T;
}

export function getProjects() {
  return request("/projects");
}
export function getSkills() {
  return request("/skills");
}
export function postContact(payload: { name: string; email: string; message: string; source?: string }) {
  return request("/contacts", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
