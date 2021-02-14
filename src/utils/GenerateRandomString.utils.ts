/**
 * @param value quantidade de caracteres que serão gerados.
 * @param charParams Cadeia de caracteres que serão gerados. Caso não envie o padrão será [a-zA-Z][0-9]
 */

export default function randomHashString(charParams?: string) {
  const chars =
    charParams ||
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";
  const value = getRandomIntRange();

  for (let i = 0; i < value; i++) {
    let random = Math.floor(Math.random() * chars.length);
    randomString += chars.substring(random, random + 1);
  }
  return randomString;
}

function getRandomIntRange() {
  const min = Math.ceil(
    parseInt(`${process.env.MIN_CHARACTERS_RANDOM_LINK}`) || 5
  );
  const max = Math.floor(
    parseInt(`${process.env.MAX_CHARACTERS_RANDOM_LINK}`) || 10
  );
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
