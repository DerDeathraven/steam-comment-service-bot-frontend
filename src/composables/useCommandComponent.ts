import defaultComponent from "../components/commands/default.vue";
import comment from "../components/commands/comment.vue";
export function useCommandComponent(name: string) {
  return name == "comment" ? comment : defaultComponent;
}
