export function filterProducts(
  item: any,
  minPrice: number,
  maxPrice: number,
  forRent: boolean,
  manId: number | null,
  catId: number | null
): boolean {
  const meetsPriceCriteria = item.price > minPrice && item.price < maxPrice;

  if (forRent && manId && catId) {
    return (
      meetsPriceCriteria &&
      item.for_rent &&
      item.man_id === manId &&
      item.cat_id === catId
    );
  }
  if (forRent && manId) {
    return meetsPriceCriteria && item.for_rent && item.man_id === manId;
  }
  if (forRent && catId) {
    return meetsPriceCriteria && item.for_rent && item.cat_id === catId;
  }
  if (manId && catId) {
    return meetsPriceCriteria && item.man_id === manId && item.cat_id === catId;
  }
  if (forRent) {
    return meetsPriceCriteria && item.for_rent;
  }
  if (manId) {
    return meetsPriceCriteria && item.man_id === manId;
  }
  if (catId) {
    return meetsPriceCriteria && item.cat_id === catId;
  }

  return meetsPriceCriteria && !item.for_rent;
}
