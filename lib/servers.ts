import type { Server } from "./types";

export async function getServers(): Promise<Server[]> {
  const serversUrl = process.env.SERVERS_URL?.trim();
  if (!serversUrl) return [];

  try {
    const res = await fetch(serversUrl, { next: { revalidate: 10 } });
    if (!res.ok) return [];

    const data: unknown = await res.json();
    if (!Array.isArray(data)) return [];

    return data as Server[];
  } catch {
    return [];
  }
}
