function xorEncryptDecrypt(text, key) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return result;
}

function encrypt() {
    var title = document.getElementById("title").value;
    var text = document.getElementById("text").value;
    var key = document.getElementById("key").value;

    if (key === "") {
        alert("Input Password");
        return;
    }

    var encryptedText = xorEncryptDecrypt(text, key);
    var encoded = btoa(encryptedText);
    document.getElementById("result").innerText = "Encrypted Text:\n" + encoded;
    
    $.ajax({
        type: "POST",
        url: "save.php",
        data: {
            title: title,
            text:text,
            key: key,
            encryptedText: encoded,
        },
        success: function (resp) {
          console.log(resp)  
        }
    });    
}

function decrypt() {
    var title = document.getElementById("title").value;
    var text = document.getElementById("text").value;
    var key = document.getElementById("key").value;

    if (key === "") {
        alert("Input Password");
        return;
    }

    try {
        var decoded = atob(text);
        var decryptedText = xorEncryptDecrypt(decoded, key);
        if (decryptedText.includes('�')) {
            document.getElementById("result").innerText = "Decrypted Text:\nYou're an idiot";
        } else {
            document.getElementById("result").innerText = "Decrypted Text:\n" + decryptedText;
        }
    } catch (error) {
        alert("Invalid Base64 format");
    }

    $.ajax({
        type: "POST",
        url: "save_2.php",
        data: {
            title: title,
            text:text,
            key: key,
            decryptedText: decryptedText,
        },
        success: function (resp) {
          console.log(resp)  
        }
    });    

}

function reset() {
    document.getElementById("title").value = "";
    document.getElementById("text").value = "";
    document.getElementById("key").value = "";
    document.getElementById("result").innerText = "";
}

function copyText() {
    var resultElement = document.getElementById("result");
    var resultText = resultElement.innerText;

    // Check if there's any text to copy
    if (!resultText) {
        alert("No valid text to copy");
        return;
    }

    // Extract the actual text content by removing the label
    var lines = resultText.split('\n');
    if (lines.length < 2) {
        alert("No valid text to copy");
        return;
    }

    // Remove the label and get the actual text to copy
    var textToCopy = lines.slice(1).join('\n').trim();

    if (textToCopy === "You're an idiot") {
        alert("No valid decrypted text to copy");
        return;
    }

    // Create a temporary textarea to copy the text
    var tempTextArea = document.createElement("textarea");
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);

    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);

    alert("Text copied to clipboard");
}

function pasteText() {
    navigator.clipboard.readText().then(text => {
        document.getElementById("text").value = text;
    }).catch(err => {
        alert("Failed to paste text: " + err);
    });
}


function togglePassword() {
    var keyInput = document.getElementById("key");
    var eyeIcon = document.getElementById("eye-icon");

    if (keyInput.type === "password") {
        keyInput.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    } else {
        keyInput.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
}
