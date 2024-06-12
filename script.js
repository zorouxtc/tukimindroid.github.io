function encodeBase64() {
  let inputText = document.getElementById('inputText').value;
  let utf8EncodedText = new TextEncoder().encode(inputText); // Encode text to UTF-8
  let base64EncodedText = btoa(String.fromCharCode(...utf8EncodedText)); // Convert UTF-8 to Base64
  document.getElementById('outputText').value = base64EncodedText;
}

function decodeBase64() {
  let encodedText = document.getElementById('outputText').value;
  let binaryString = atob(encodedText);
  let bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  let decodedText = new TextDecoder().decode(bytes);
  document.getElementById('decodedText').value = decodedText;
}

function copyToClipboard() {
  let copyText = document.getElementById('outputText');
  copyText.select();
  document.execCommand('copy');
}

function clearText() {
  document.getElementById('inputText').value = '';
  document.getElementById('outputText').value = '';
  document.getElementById('decodedText').value = '';
}

function encodeFile() {
  let fileInput = document.getElementById('fileInput').files[0];
  if (fileInput) {
    let reader = new FileReader();
    reader.onload = function (event) {
      let binaryString = event.target.result;
      let utf8EncodedText = new TextEncoder().encode(binaryString);
      let base64EncodedText = btoa(String.fromCharCode(...utf8EncodedText));
      document.getElementById('outputText').value = base64EncodedText;
    };
    reader.readAsText(fileInput);
  }
}
