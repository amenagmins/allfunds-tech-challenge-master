export async function getProductsList() {
  const response = await fetch(`http://localhost:3000/grocery`);
  return response.json();
}

export async function updateFav(isFav: boolean, id: string) {
  const response = await fetch(`http://localhost:3000/grocery/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ favorite: isFav ? "1" : 0 }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return response.json();
}
