
        document.addEventListener("DOMContentLoaded", () => {
            setTimeout(() => document.getElementById("splash-screen").classList.add("hidden"), 3000);
        });

        function togglePassword() {
            const keyInput = document.getElementById("key");
            const eyeIcon = document.getElementById("eye-icon");
            keyInput.type = keyInput.type === "password" ? "text" : "password";
            eyeIcon.classList.toggle("fa-eye-slash");
        }

        function storeHistory(title, message, key, result) {
            const historyData = { title, message, key, result };
            let historyList = JSON.parse(localStorage.getItem("history")) || [];
            historyList.push(historyData);
            localStorage.setItem("history", JSON.stringify(historyList));
        }

        function viewHistory() {
            const historyBody = document.getElementById("history-body");
            historyBody.innerHTML = ""; 
            const historyList = JSON.parse(localStorage.getItem("history")) || [];
            if (historyList.length > 0) {
                historyList.forEach(item => {
                    const row = document.createElement("tr");
                    row.innerHTML = `<td>${item.title}</td><td>${item.message}</td><td>${item.key}</td><td>${item.result}</td>`;
                    historyBody.appendChild(row);
                });
            } else alert("No history available.");
        }

        function toggleModal() {
            const modal = document.getElementById("history-modal");
            modal.classList.toggle("active");
            viewHistory();
        }

        function clearHistory() {
            if (confirm("Are you sure you want to clear all history?")) {
                localStorage.removeItem("history");
                // viewHistory(); // Refresh the history table
                alert("History cleared successfully.");
            }
        }

        function encrypt() {
            const title = document.getElementById("title").value;
            const message = document.getElementById("text").value;
            const key = document.getElementById("key").value;
            const result = btoa(message);
            document.getElementById("result").innerText = "Encrypted: " + result;
            storeHistory(title, message, key, "Encrypted: " + result);
        }

        function decrypt() {
            const title = document.getElementById("title").value;
            const message = document.getElementById("text").value;
            const key = document.getElementById("key").value;
            const result = atob(message);
            document.getElementById("result").innerText = "Decrypted: " + result;
            storeHistory(title, message, key, "Decrypted: " + result);
        }

        function reset() {
            document.getElementById("title").value = "";
            document.getElementById("text").value = "";
            document.getElementById("key").value = "";
            document.getElementById("result").innerText = "";
        }

        function copyText() {
            const result = document.getElementById("result").innerText;
            navigator.clipboard.writeText(result);
            alert("Copied to clipboard!");
        }

        function pasteText() {
            navigator.clipboard.readText().then(text => document.getElementById("text").value = text);
        }
