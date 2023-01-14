function extractFile(text) {

    const textArr = text.split('\\');
    const fileAndExtension = textArr.pop();
    const index = fileAndExtension.lastIndexOf('.');

    const file = fileAndExtension.substring(0, index);
    const extension = fileAndExtension.substring(index + 1)

    console.log(`File name: ${file}`);
    console.log(`File extension: ${extension}`);


}
extractFile('C:\\Internal\\training-internal\\Template.pptx')