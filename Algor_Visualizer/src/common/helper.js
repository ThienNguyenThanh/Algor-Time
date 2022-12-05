export function setDelay(time){
    return new Promise((resolve) => setTimeout(resolve, time))
}