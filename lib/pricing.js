// Tek kampanya indirimi (0.3 = %30)
export const DISCOUNT_RATE = 0.3;

export function getDiscountedPrice(price) {
  return price * (1 - DISCOUNT_RATE);
}

export function formatPrice(value) {
  return `€${value.toFixed(2)}`;
}
