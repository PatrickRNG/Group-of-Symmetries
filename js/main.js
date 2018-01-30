let line = document.getElementById('line-one');
let number = document.getElementById('number');
let space = document.getElementById('space');
let submitBtn = document.getElementById('button-js');

//number.addEventListener('input', (e) => {
//    let arr = [];
//    
//    for (let i  = 0; i < number.value; i++) {
//        arr.push(i + 1);
//        let lineNumber = document.createElement('div');
//        lineNumber.classList.add('line-number');
//        lineNumber.innerHTML = arr[i];
//        
//        line.appendChild(lineNumber);
//        
//        if (number.value.isUndefined == true) {
//            while (line.hasChildNodes()) {
//                line.removeChild(line.lastChild);
//            }
//            arr.splice(0, arr.length);
//        }
//		
//		console.log(typeof(number.value))
//        
//    }
//    
//    console.log(typeof(i));    
//});

submitBtn.addEventListener('click', (e) => {
	e.preventDefault();
	let arr = [];
	
	for (let i = 0; i < number.value; i++) {
		arr.push(i + 1);
		
		let lineNumber = document.createElement('div');
		lineNumber.classList.add('line-number');
		lineNumber.innerHTML = arr[i];
		
		line.appendChild(lineNumber);
	}
	
});