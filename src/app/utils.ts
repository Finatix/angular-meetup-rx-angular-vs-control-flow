import { LIST_SIZE } from "./constants";

export const createList = (): Array<{ id: number; value: number; }> => Array.from({ length: LIST_SIZE }, (_, i) => ({ id: i + 1, value: 1 + Math.floor(Math.random() * 1000) }));
