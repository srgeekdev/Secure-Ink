function downloadHistoryAsPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF("p", "pt", "a4"); // Use 'pt' for precision

    // Title
    doc.setFontSize(20);
    doc.text("Encryption/Decryption History", 40, 50);

    // Table Headers
    const headers = [["Title", "Message", "Secret Key", "Encrypted/Decrypted Text"]];
    
    // Table Data
    const data = [];
    const table = document.querySelector("table");

    for (const row of table.rows) {
        const rowData = [];
        for (const cell of row.cells) {
            rowData.push(cell.innerText);
        }
        // Avoid the header row
        if (row.rowIndex > 0) {
            data.push(rowData);
        }
    }

    // AutoTable to style the table
    doc.autoTable({
        head: headers,
        body: data,
        startY: 70, // Position below title
        theme: "grid",
        headStyles: { fillColor: [63, 81, 181], textColor: [255, 255, 255], fontSize: 10 },
        bodyStyles: { fontSize: 9, cellPadding: 6, textColor: [0, 0, 0] },
        styles: { cellWidth: "wrap", halign: "center" },
        margin: { top: 80, left: 40, right: 40 }
    });

    // Footer with date and page number
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(10);
        doc.setTextColor(150);
        doc.text(`Page ${i} of ${pageCount}`, doc.internal.pageSize.width - 60, doc.internal.pageSize.height - 30);
        doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 40, doc.internal.pageSize.height - 30);
    }

    // Save the PDF
    doc.save("History.pdf");
}

