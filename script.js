function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // pegar a tag img
  const img = document.querySelector("#profile img")

  // alterar img
  if (html.classList.contains("light")) {
    // se estiver no lightmode adicionar light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se nao estiver em lightmode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
