

function convertBin2Dec() {
    let binaryInput = document.getElementById('binary').value;
    let decimalOutput = 0;
    let exponentCounter = 0;
        for (let i = (binaryInput.length - 1); i >= 0; i--) {
            if(binaryInput[i] == 1){
                decimalOutput += 1 * (2 ** exponentCounter)
            }else if(binaryInput[i] != 1 && binaryInput[i] != 0){
                console.log('invalid');
                decimalOutput = 0;
                document.getElementById('alert').innerText = "INVALID PLEASE ENTER BINARY"
                break;
            }

            exponentCounter++;
            }

            document.getElementById('output').innerText = decimalOutput;

}

document.getElementById("convertClick").addEventListener("click", convertBin2Dec());
