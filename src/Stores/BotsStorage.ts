import { defineStore } from "pinia";
import { getBots } from "../services/Controller";

type BotStoreState = {
  bots: Array<any>;
};

export const useBotStore = defineStore("BotStore", {
  state: (): BotStoreState => {
    return {
      bots: [],
    };
  },
  getters: {
    mainBot(): any {
      return this.bots[0];
    },
    slaves(): Array<any> {
      return this.bots.slice(1);
    },
  },
  actions: {
    async updateBots() {
      this.bots = await getBots();
    },
  },
});
