function stopwatch(){
    let cnt = 0;
    return function(){
        cnt++;
        return cnt;
    }
}
const firstServer = stopwatch();
console.log(firstServer())