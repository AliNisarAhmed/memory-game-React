
export default ( [ minutes, seconds ]) => {

  minutes = minutes < 10 ? "0" + String(minutes): String(minutes);
  seconds = seconds < 10 ? "0" + String(seconds) : String(seconds);

  return `${minutes}:${seconds}`;
}