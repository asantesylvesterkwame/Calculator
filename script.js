// let oneKey = document.getElementById('one');
// let twoKey = document.getElementById('two');
// let threeKey = document.getElementById('three');
// let fourKey = document.getElementById('four');
// let fiveKey = document.getElementById('five');
// let sixKey = document.getElementById('six');
// let sevenKey = document.getElementById('seven');
// let eightKey = document.getElementById('eight');
// let nineKey = document.getElementById('nine');
// let divisionKey = document.getElementById('division');
// let multiplyKey = document.getElementById('multiply');
// let minusKey = document.getElementById('minus');
// let plusKey = document.getElementById('plus');
// let pointKey = document.getElementById('point');

// let numberInputs = document.getElementById('numberInputs');
// numberInputs.style.cssText = 'display: flex; flex-wrap: wrap; justify-content: flex-end;'

// let calcKeys = {
//     oneKey: 1,
//     twoKey: 2,
//     threeKey: 3,
//     fourKey: 4,
//     fiveKey: 5,
//     sixKey:6,
//     sevenKey: 7,
//     eightKey: 8,
//     nineKey: 9,
//     multiplyKey: 'x',
//     divisionKey: '÷',
//     minusKey: '-',
//     plusKey: '+',
//     pointKey: '.', 
// } 

// let clearButton = document.getElementById('clear');
// let cursor = document.getElementById('cursor');
// let deleteButton = document.getElementById('delete');
// let calcSpanId = 1

// deleteButton.addEventListener('click', function () {
//     let newCalcSpan = document.getElementById(calcSpanId);
//     numberInputs.removeChild(newCalcSpan);
//  })

// let oneKeyEvent = oneKey.addEventListener('click', function () {
//     let calcSpan = document.createElement('span');
//     calcSpan.setAttribute('id', calcSpanId += 1)
//     numberInputs.appendChild(calcSpan);
//     let calcOne = calcSpan.innerHTML = calcKeys.oneKey;
//     console.log(calcOne);
    
     
// });
//  twoKey.addEventListener('click', function () {
//     let calcSpanTwo = document.createElement('span');
//     numberInputs.append(calcSpanTwo);
//     calcSpanTwo.innerHTML = calcKeys.twoKey;
//  });
//  threeKey.addEventListener('click', function () {
//     let calcSpanThree = document.createElement('span');
//     numberInputs.append(calcSpanThree);
//     calcSpanThree.innerHTML = calcKeys.threeKey;
//  });
//  fourKey.addEventListener('click', function () {
//     let calcSpanFour = document.createElement('span');
//     numberInputs.append(calcSpanFour);
//     calcSpanFour.innerHTML = calcKeys.fourKey;
//  });
//  fiveKey.addEventListener('click', function () {
//     let calcSpanFive = document.createElement('span');
//     numberInputs.append(calcSpanFive);
//     calcSpanFive.innerHTML = calcKeys.fiveKey;
//  });
//  sixKey.addEventListener('click', function () {
//     let calcSpanSix = document.createElement('span');
//     numberInputs.append(calcSpanSix);
//     calcSpanSix.innerHTML = calcKeys.sixKey;
//  });
//  sevenKey.addEventListener('click', function () {
//     let calcSpanSeven = document.createElement('span');
//     numberInputs.append(calcSpanSeven);
//     calcSpanSeven.innerHTML = calcKeys.sevenKey;
//  });eightKey.addEventListener('click', function () {
//     let calcSpanEight = document.createElement('span');
//     numberInputs.append(calcSpanEight);
//     calcSpanEight.innerHTML = calcKeys.eightKey;
//  });
//  nineKey.addEventListener('click', function () {
//     let calcSpanNine = document.createElement('span');
//     numberInputs.append(calcSpanNine);
//     calcSpanNine.innerHTML = calcKeys.nineKey;
//  });
//  divisionKey.addEventListener('click', function () {
//     let calcSpanDivision = document.createElement('span');
//     numberInputs.append(calcSpanDivision);
//     calcSpanDivision.innerHTML = calcKeys.divisionKey;
//  });
//  multiplyKey.addEventListener('click', function () {
//     let calcSpanMultiply = document.createElement('span');
//     numberInputs.append(calcSpanMultiply);
//     calcSpanMultiply.innerHTML = calcKeys.multiplyKey;
//  });
//  minusKey.addEventListener('click', function () {
//     let calcSpanMinus = document.createElement('span');
//     numberInputs.append(calcSpanMinus);
//     calcSpanMinus.innerHTML = calcKeys.minusKey;
//  });
//  plusKey.addEventListener('click', function () {
//     let calcSpanPlus = document.createElement('span');
//     numberInputs.append(calcSpanPlus);
//     calcSpanPlus.innerHTML = calcKeys.plusKey;
//  });
//  pointKey.addEventListener('click', function () {
//     let calcSpanPoint = document.createElement('span');
//     numberInputs.append(calcSpanPoint);
//    let calcpoint =  calcSpanPoint.innerHTML = calcKeys.pointKey;
//    console.log(calcpoint);
//  });
let inputSeven =document.getElementById('seven')
let inputSevenValue = document.getElementById('seven').value;
let numberInputs = document.getElementById('numberInputs');

 function button(num) {
    numberInputs.value = numberInputs.value+num;
};





