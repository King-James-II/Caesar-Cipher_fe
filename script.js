// Function to perform Caesar cipher encryption
function caesarCipher(string, shift) {
  // Replace each character in the string based on the shift value
  return string.replace(/[a-zA-Z]/g, function(c) {
    // Determine the base ASCII value depending on uppercase or lowercase
    const base = c < 'a' ? 65 : 97;
    // Apply the Caesar cipher algorithm to shift characters
    return String.fromCharCode((c.charCodeAt(0) - base + shift) % 26 + base);
  });
}

// Function to translate plaintext using Caesar cipher and update output
function translate() {
  // Get plaintext and shift value from input fields
  let plaintextValue = document.getElementById("plaintext").value;
  let shiftValue = parseInt(document.getElementById("shift").value);
  // Apply Caesar cipher to plaintext
  let outputValue = caesarCipher(plaintextValue, shiftValue);
  // Update output field with encrypted text
  document.getElementById("output").innerHTML = outputValue;
}

// Initial translation when page loads
translate();

// Event listeners to update translation on input changes
document.getElementById("plaintext").addEventListener("input", translate);
document.getElementById("shift").addEventListener("input", translate);
