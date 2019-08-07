modul.exports = {
  let makeCounter = () => {
    let currentCount = 1;
    return () => {
      return currentCount++;
    };
  };
  let counter = makeCounter();
  counter();
}
