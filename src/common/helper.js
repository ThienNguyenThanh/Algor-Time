export function convertInputToArrayString(string) {
  string = string.replaceAll(/\s/g, "");
  string = string.replaceAll(/\d{4}/g, "");
  string = string.replaceAll(/\s\s/g, " ");
  string = string.replaceAll(/\s,/g, ",");
  string = string.replaceAll(/,,/g, ",");
  string = string.replaceAll(/[^0-9,\s]/g, "");
  return string;
}

export function convertArrayStringToArray(string) {
  return string
    .split(",")
    .filter((v) => v !== "")
    .map((v) => +v);
}

function randomIntFromInterval(min,max)
{
    return Math.floor( Math.random()*  ( max - min + 1 ) + min );
}

export function getRandomArray(length = generateRandomNumberInRange(5, 30)) {
  const randomArr = []
    for(var i = 0; i < 8;i++){
        randomArr.push(randomIntFromInterval(5, 100))
    }
    return randomArr
}

export function getScreenWidth(){
  return window.innerWidth;
}

export function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function generateRandomNumberInRange(lowerLimit = 0, upperLimit = 999) {
  return lowerLimit + Math.floor(Math.random() * upperLimit);
}