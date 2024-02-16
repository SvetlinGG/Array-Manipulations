function arrayManipulations(input){
    let arr = input.shift().split(' ').map(Number);
    for ( let row of input){
        let [command, firstNum, secondNum] = row.split(' ');
        switch ( command ){
            case 'Add':
                arr.push(firstNum);
            break;
            case 'Remove':
               arr = arr.filter(num => num !==Number(firstNum));
            break;
            case 'RemoveAt':
                arr.splice(Number(firstNum),1);
            break;
            case 'Insert':
                arr.splice(Number(secondNum),0,Number(firstNum),);
            break;
        }
    }
    console.log(arr.join(' '));

}
arrayManipulations(['4 19 2 53 6 43',
                     'Add 3',
                     'Remove 2',
                     'RemoveAt 1',
                     'Insert 8 3']);