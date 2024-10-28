function deleteEntry(id) {
    if (confirm("Are you sure you want to delete this entry?")) {
        fetch(`delete_entry.php?id=${id}`)
            .then(() => location.reload());  // Reloads page after deletion
    }
}

function clearAllHistory() {
    if (confirm("Are you sure you want to clear all history?")) {
        fetch(`clear_history.php`)
            .then(() => location.reload());  // Reloads page after clearing
    }
}
