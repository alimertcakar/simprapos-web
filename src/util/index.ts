export function formatMoney(money: number | string) {
  return parseInt(money.toString()).toFixed(2);
}
