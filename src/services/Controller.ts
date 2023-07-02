import { Bots } from "./RpcHandler";

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

export async function* addBot(name: string, password: string) {
  const resp = await Bots.addBot(name, password);
  const code: string = yield resp;
  const resp2 = await Bots.submitSteamGuardCode(resp, code);
  const json2 = await resp2.json();
  yield json2;
}

export async function getLatestChangelog() {
  const resp = await fetch("/frontend/getLatestChangelog");
  const json = await resp.json();
  return json.file;
}
