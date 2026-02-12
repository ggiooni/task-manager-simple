// Task Manager - Notification Logic
console.log("Task Manager loaded");

// Listen for Complete Task button click
document.getElementById("completeBtn").addEventListener("click", function() {
    alert("Task completed! Notification sent.");
    document.getElementById("message").innerText = "Task completed! Notification sent.";
});
