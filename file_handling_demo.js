var fileReader, fileParts, fileHeader, file;

fileParts = ['Hello, world'];

fileHeader = {type: 'text/html'};

file = new Blob(fileParts, fileHeader);

fileReader = new FileReader();
fileReader.onloadend = function () {
    console.log(this.result);
};
fileReader.readAsBinaryString(file);