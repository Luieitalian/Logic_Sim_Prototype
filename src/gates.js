export function AND(...inputs) {
  alert(inputs.reduce((r, c) => {
    return r + c;
  }));
}
