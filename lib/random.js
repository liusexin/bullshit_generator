export function randomInt(min=0,max=100){
  const p = Math.random()
  return Math.floor(min*(1-p)+max*p)
}
export function createRandomPick(arr){
    arr = Array.isArray(arr)? [...arr] : []; //copy数组，以免修改原始数组
    function randomPick(){
        const len = arr.length -1 
        const index = randomInt(0,len)
        const picked = arr[index];
        [arr[index], arr[len]] = [arr[len], arr[index]]
        return picked
    }
    randomPick() // 抛弃第一次选择结果
    return randomPick
}