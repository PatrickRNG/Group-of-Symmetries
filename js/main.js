let line = document.getElementById('line-one');
let number = document.getElementById('number');
let space = document.getElementById('space');

number.addEventListener('input', () => {
    let arr = [];
    
    for (let i  = 0; i < number.value; i++) {
        arr.push(i + 1);
        let lineNumber = document.createElement('div');
        lineNumber.classList.add('line-number');
        lineNumber.innerHTML = arr[i];
        
        line.appendChild(lineNumber);
        
        if (i == undefined) {
            while (line.hasChildNodes()) {
                line.removeChild(line.lastChild);
            }
            arr.splice(0, arr.length);
        }
        
    }
    
    console.log(typeof(i));    
});