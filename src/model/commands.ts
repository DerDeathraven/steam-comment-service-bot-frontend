export type CommandDescription = {
  name: string;
  description: string;
  args: CommandArgDescription[];
};
export type CommandArgDescription = {
  name: string;
  description: string;
  type: string;
};
