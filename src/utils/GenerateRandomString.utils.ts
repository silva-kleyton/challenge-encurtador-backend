/**
 * @param value quantidade de caracteres que serão gerados.
 * @param charParams Cadeia de caracteres que serão gerados. Caso não envie o padrão será [a-zA-Z][0-9]
 */

export default function randomHashString(
  value: number = 5,
  charParams?: string
) {
  const chars =
    charParams ||
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";

  for (let i = 0; i < value; i++) {
    let randomPoz = Math.floor(Math.random() * chars.length);
    randomString += chars.substring(randomPoz, randomPoz + 1);
  }
  return randomString;
}
