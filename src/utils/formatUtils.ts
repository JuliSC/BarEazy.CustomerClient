const formatPrice = (price: number) => {
  return price.toLocaleString("da-DK", {
    style: "currency",
    currency: "DKK",
  });
};

export default formatPrice;
