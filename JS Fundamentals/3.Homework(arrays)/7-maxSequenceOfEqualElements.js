function maxSequenceOfEqualElements(array) {

    let result = [];
    let length = array.length

    for (let i = 0; i < length; i++) {
        let currentElement = Number(array[i]);
        let currentSequence = [currentElement];


        for (let j = i + 1; j < length; j++) {
            let nextElement = Number(array[j]);

            if (nextElement === currentElement) {
                currentSequence.push(nextElement)
            } else {
                break;
            }

        }

        if (currentSequence.length > result.length) {
            result = [];
            for (let j = 0; j < currentSequence.length; j++) {
                result.push(currentSequence[j]);
            }
        }
    }
    console.log(result.join(' '));
}

maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3])