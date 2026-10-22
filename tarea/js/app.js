async function mostrarPosts() {
  const lista = document.querySelector("#posts");
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=1",
    );
    const posts = await res.json();
    lista.innerHTML = posts.map((p) => `<li>${p.title}</li>`).join("");
  } catch (error) {
    lista.innerHTML = "No se pudo cargar la información";
  }
}

mostrarPosts();
