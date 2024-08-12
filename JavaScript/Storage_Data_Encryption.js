document.addEventListener("DOMContentLoaded", () => {
  const password = "mysecretpassword";
  let lastValue = localStorage.getItem("Permenant_Language");

  async function encryptData(password, data) {
    const passwordEncoder = new TextEncoder();
    const passwordBytes = passwordEncoder.encode(password);

    const salt = crypto.getRandomValues(new Uint8Array(16));
    const passwordKey = await crypto.subtle.importKey(
      "raw",
      passwordBytes,
      {
        name: "PBKDF2",
      },
      false,
      ["deriveKey"]
    );

    const key = await crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt: salt,
        iterations: 1000,
        hash: "SHA-256",
      },
      passwordKey,
      {
        name: "AES-CBC",
        length: 256,
      },
      true,
      ["encrypt"]
    );

    const iv = crypto.getRandomValues(new Uint8Array(16));
    const encryptedData = await crypto.subtle.encrypt(
      {
        name: "AES-CBC",
        iv: iv,
      },
      key,
      passwordEncoder.encode(data)
    );

    const encryptedBytes = new Uint8Array(encryptedData);
    const encryptedString = Array.prototype.map
      .call(encryptedBytes, (x) => `00${x.toString(16)}`.slice(-2))
      .join("");

    // Generate two unique padding strings
    const padding1 = crypto.getRandomValues(
      new Uint8Array(encryptedBytes.length)
    );
    const paddingString1 = Array.prototype.map
      .call(padding1, (x) => `00${x.toString(16)}`.slice(-2))
      .join("");

    const padding2 = crypto.getRandomValues(
      new Uint8Array(encryptedBytes.length)
    );
    const paddingString2 = Array.prototype.map
      .call(padding2, (x) => `00${x.toString(16)}`.slice(-2))
      .join("");

    // Concatenate the original encrypted string with the two padding strings
    const paddedEncryptedString =
      encryptedString + paddingString1 + paddingString2;

    // Store the triple-sized encrypted data in localStorage with the key name "Berwetta"
    localStorage.setItem(
      "Berwetta",
      JSON.stringify({
        iv: Array.from(iv),
        salt: Array.from(salt),
        encryptedData: paddedEncryptedString,
      })
    );
    console.log(`Data Before Encryption :: \n\n ${data}`);
    console.log(`Padded Encrypted Data :: \t\n ${paddedEncryptedString}`);
  }

  async function decryptData(password) {
    const passwordEncoder = new TextEncoder();
    const passwordBytes = passwordEncoder.encode(password);

    const encryptedDataString = localStorage.getItem("Berwetta");
    if (!encryptedDataString) {
      console.error('No data found in localStorage with key "Berwetta".');
      return;
    }

    const encryptedData = JSON.parse(encryptedDataString);
    const iv = new Uint8Array(encryptedData.iv);
    const salt = new Uint8Array(encryptedData.salt);
    const paddedEncryptedString = encryptedData.encryptedData;

    const passwordKey = await crypto.subtle.importKey(
      "raw",
      passwordBytes,
      {
        name: "PBKDF2",
      },
      false,
      ["deriveKey"]
    );

    // Remove the two padding strings
    const thirdLength = paddedEncryptedString.length / 3;
    const encryptedString = paddedEncryptedString.slice(0, thirdLength);

    const encryptedBytes = Array.prototype.map.call(
      encryptedString.match(/.{2}/g),
      (x) => parseInt(x, 16)
    );
    const encryptedDataBuffer = new Uint8Array(encryptedBytes);

    const key = await crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt: salt,
        iterations: 1000,
        hash: "SHA-256",
      },
      passwordKey,
      {
        name: "AES-CBC",
        length: 256,
      },
      true,
      ["decrypt"]
    );

    const decryptedData = await crypto.subtle.decrypt(
      {
        name: "AES-CBC",
        iv: iv,
      },
      key,
      encryptedDataBuffer
    );

    const decryptedString = new TextDecoder().decode(decryptedData);
    console.log("Decrypted data:", decryptedString);
  }

  function handleStorageChange() {
    const data = localStorage.getItem("Permenant_Language");
    // if ((data && data !== lastValue) || (performance.navigation.type == performance.navigation.TYPE_RELOAD)) {
      switch (window.performance.getEntriesByType("navigation")[0].type) {
        case "navigate":
          alert("Page Navigated to (First Entry)");
          break;
        case "reload":
          alert("Page Reloaded");
          break;
        case "back_forward":
          alert("Page GONE BACKWARD OR FORWARD");
          break;
        default :
          alert("The Page Is Pre-Rendered");
        break;
      }

    if (
      (data && data !== lastValue) || window.performance.getEntriesByType("navigation")[0].type !== "prerender") {
      lastValue = data;
      encryptData(password, data).then(() => {
        decryptData(password);
      });
    }
  }

  // Monitor localStorage changes from other tabs or windows
  window.addEventListener("storage", (event) => {
    if (event.key === "Permenant_Language") {
      handleStorageChange();
      // performance.navigation.
    }
  });

  // Poll for changes in the same tab or window
  function checkForChanges() {
    const newValue = localStorage.getItem("Permenant_Language");
    if (newValue !== lastValue) {
      lastValue = newValue;
      if (newValue) {
        encryptData(password, newValue).then(() => {
          decryptData(password);
        });
      } else {
        console.log(
          'No data found in localStorage with key "Permenant_Language".'
        );
      }
    }
  }

  // Poll for changes every 2 seconds
  setInterval(checkForChanges, 100);

  // Initial check on page load
  handleStorageChange();
});


  // function navigationType() {
  //   var result;
  //   var p;

  //   if (window.performance.navigation) {
  //     result = window.performance.navigation;
  //     if (result == 255) {
  //       result = 4;
  //     } // 4 is my invention!
  //   }

  //   if (window.performance.getEntriesByType("navigation")) {
  //     p = window.performance.getEntriesByType("navigation")[0].type;

  //     if (p == "navigate") {
  //       result = 0;
  //       alert("Page Navigated to (First Entry)")
  //     }
  //     if (p == "reload") {
  //       result = 1;
  //       alert("Page Reloaded")
  //     }
  //     if (p == "back_forward") {
  //       result = 2;
  //       alert("Page GONE BACKWARD OR FORWARD")
  //     }
  //     if (p == "prerender") {
  //       result = 3;
  //     } //3 is my invention!
  //   }
  //   alert(result);
  // }


  // navigationType()