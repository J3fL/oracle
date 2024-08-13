let encryptedText = "";

function encryptText() {
    let text = document.getElementById("inputText").value;
    encryptedText = text.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 3)).join('');
    document.getElementById("result").innerText = "Encrypted: " + encryptedText;
}

function decryptText() {
    let decryptedText = encryptedText.split('').map(char => String.fromCharCode(char.charCodeAt(0) - 3)).join('');
    document.getElementById("result").innerText = "Decrypted: " + decryptedText;
}