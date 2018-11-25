export default (timer) => {
  let [ minutes, seconds ] = [...timer];
  if (seconds === 59) {
    minutes++;
    seconds = 0;
  } else {
    seconds++;
  }
  return [minutes, seconds];
}