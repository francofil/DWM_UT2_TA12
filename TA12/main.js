function getRandomChar(str) {
  return str[Math.floor(Math.random() * str.length)];
}

function generatePassword(tamanio) {
  if (tamanio < 8) {
    return "El tamaño minimo debe ser 8";
  } else {
    const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const numeros = "0123456789";
    const simbolos = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    const todos = mayusculas + minusculas + numeros + simbolos;
    let password = "";
    for (let i = 0; i < tamanio; i++) {
      const randomIndex = Math.floor(Math.random() * todos.length);
      password += getRandomChar(todos);
    }
    return password;
  }
}
console.log(generatePassword(8));
