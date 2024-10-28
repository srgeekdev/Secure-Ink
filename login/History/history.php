<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>History</title>
    <link rel="stylesheet" href="history.css">
    <link rel="stylesheet" href="pdf.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.13/jspdf.plugin.autotable.min.js"></script> <!-- Add jsPDF autoTable -->
</head>
<body>
    <div class="container">
    <button id="downloadPDFBtn" class="btn-download" onclick="downloadHistoryAsPDF()" 
        style="position: absolute; top: 20px; right: 20px; background: none; border: none;">
    <img src="pdf.png" alt="Download PDF" style="width: 50px; height: 50px;">
</button>


        <h1>Encryption/Decryption History</h1>
        <button id="clearHistoryBtn" class="btn-clear" onclick="clearAllHistory()">Clear All History</button>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Message</th>
                    <th>Secret Key</th>
                    <th>Encrypted/Decrypted Text</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <?php
                include 'fetch_data.php';  // Include the script that fetches data
                ?>
            </tbody>
        </table>
    </div>

    <script src="delete.js"></script>
    <script src="pdf.js"></script> <!-- Ensure this file is included -->
</body>
</html>
