export const addProductToCart = (cartList, product) => {
  const existingProductInCart = cartList.find((e) => e.id === product.id);

  if (existingProductInCart) {
    return cartList.map((item) =>
      item.id === existingProductInCart.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartList, { ...product, quantity: 1 }];
};

export const removeProductFromCart = (cartList, product) => {
  const existingProductInCart = cartList.find((e) => e.id === product.id);

  if (existingProductInCart.quantity > 1) {
    return cartList.map((item) =>
      item.id === existingProductInCart.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }
  let confirm = window.confirm("¿Desea eliminar éste producto del carrito?");
  if (confirm) {
    return cartList.filter(
      (product) => product.id !== existingProductInCart.id
    );
  }
  return [...cartList];
};
