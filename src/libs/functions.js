export const backend_URL = "https://roomatch-backend.herokuapp.com";

export function capitalizeFirstLetter(string) {
  string = string.toLocaleLowerCase();
  return string.charAt(0).toUpperCase() + string.slice(1);
}
