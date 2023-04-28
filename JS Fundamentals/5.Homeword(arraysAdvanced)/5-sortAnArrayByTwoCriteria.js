function sortAnArrayByTwoCriteria(array) {

    let sortedArray = array.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b)
    });

    console.log(sortedArray.join('\n'));
}
sortAnArrayByTwoCriteria(['vvv', 'bbb', 'ccc', 'aaa', 'George'])