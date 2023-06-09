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

export async function getBots(): Promise<Array<Bot>> {
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

export async function* addBot(name: string, password: string) {
  const resp = await fetch("/api/bots", {
    method: "POST",
    body: JSON.stringify({
      name,
      password,
    }),
  });
  const json = await resp.json();
  const code: number = yield json;
  const resp2 = await fetch("/api/steamGuard", {
    method: "POST",
    body: JSON.stringify({
      code,
      bot: json.bot,
    }),
  });
  const json2 = await resp2.json();
  yield json2;
}
