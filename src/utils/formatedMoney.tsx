export function moneyFormat(value: number) {
  return value.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
  });
}
