export const correctionItemName = (itemName: string): string =>
  `${itemName.split(" ").splice(0, 2).join(" ")}..`;
