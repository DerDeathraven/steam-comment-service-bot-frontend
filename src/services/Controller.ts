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
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      password,
    }),
  });
  const json = await resp.json();
  const code: string = yield json;
  const resp2 = await fetch("/api/steamGuardCode", {
    method: "POST",
    headers: { "Content-Type": "application/json" },

    body: JSON.stringify({
      code,
      botIndex: json.bot,
    }),
  });
  const json2 = await resp2.json();
  yield json2;
}

export async function getCommentFile() {
  const resp = await fetch("/api/commentFile");
  const json = await resp.json();
  return json.file as string;
}

export async function saveCommentFile(file: string) {
  const resp = await fetch("/api/commentFile", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ file }),
  });
  if (resp.status === 200) {
    return true;
  }
  return false;
}
