export async function searchSteamUser(steamId: string): Promise<any | null> {
  const resp = await fetch(`/frontend/getSteamProfile?user=${steamId}`);
  try {
    const data = await resp.json();
    return data;
  } catch (e) {
    return undefined;
  }
}
