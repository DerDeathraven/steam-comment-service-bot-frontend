enum PluginState {
  NOT_LOADED,
  LOADING,
  LOADED,
}

export async function getState(): Promise<PluginState> {
  const resp = await fetch("/api/state");
  const json = await resp.json();
  return json.state;
}

export async function getBots(): Promise<Array<any>> {
  const resp = await fetch("/api/bots");
  const json = await resp.json();
  return json.bots;
}

export async function callCommentFunction(
  steamAccount: string,
  amount: number
) {
  const resp = await fetch("/api/comments", {
    method: "POST",
    body: JSON.stringify({
      steamAccount,
      amount,
    }),
  });
}
