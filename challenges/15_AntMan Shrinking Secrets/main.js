document.getElementById("userInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        let input = this.value.trim().toLowerCase();
        let outputDiv = document.querySelector(".output");

        if (input === "you're the right man for the job") {
            outputDiv.innerHTML += "<p>✅ Access granted! Restoring the suit...</p>";
            setTimeout(() => {
                outputDiv.innerHTML += "<p>📡 Retrieving encrypted SHIELD directive...</p>";
            }, 1000);
            setTimeout(() => {
                outputDiv.innerHTML += "<p>📜 Encrypted Message: <b>ZTAxRFgwTlVSanBCYm5STllXNWZTVzVmVkdobFgwTnZaR1Y5</b></p>";
                outputDiv.innerHTML += "<p>💡 HINT: Sometimes things need to be undone **twice** before they reveal the truth.</p>";
            }, 3000);
        } else {
            outputDiv.innerHTML += "<p>❌ ACCESS DENIED. Try again.</p>";
        }

        this.value = "";
    }
});
