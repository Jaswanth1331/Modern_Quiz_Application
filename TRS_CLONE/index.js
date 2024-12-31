    // let inactivityTimer, dialogTimer;

    // const inactivityTime = 60000; // 1 minute for testing
    // const dialogDisplayTime = 15000; // 15 seconds

    // const dialog = document.getElementById("inactivityDialog");
    // const overlay = document.getElementById("dialogOverlay");

    // // Reset inactivity timer
    // const resetInactivityTimer = () => {
    //   clearTimeout(inactivityTimer);
    //   clearTimeout(dialogTimer);
    //   hideDialog();
    //   inactivityTimer = setTimeout(showDialog, inactivityTime);
    // };

    // // Show dialog
    // const showDialog = () => {
    //   dialog.style.display = "block";
    //   overlay.style.display = "block";
    //   dialogTimer = setTimeout(() => {
    //     redirectToErrorPage();
    //   }, dialogDisplayTime);
    // };

    // // Hide dialog
    // const hideDialog = () => {
    //   dialog.style.display = "none";
    //   overlay.style.display = "none";
    // };

    // // Redirect to error page
    // const redirectToErrorPage = () => {
    //   window.location.href = "/error.html"; // Replace with your error page path
    // };

    // // Event listeners for activity
    // document.addEventListener("mousemove", resetInactivityTimer);
    // document.addEventListener("keydown", resetInactivityTimer);
    // document.addEventListener("touchstart", resetInactivityTimer);

    // // Event listener for dialog close button
    // document.getElementById("closeDialog").addEventListener("click", () => {
    //   hideDialog();
    //   resetInactivityTimer();
    // });

    // // Initialize inactivity timer
    // resetInactivityTimer();



    let inactivityTimer, dialogTimer;
let isDialogVisible = false; // Track dialog visibility

const inactivityTime = 60000; // 1 minute for testing
const dialogDisplayTime = 15000; // 15 seconds

const dialog = document.getElementById("inactivityDialog");
const overlay = document.getElementById("dialogOverlay");

// Reset inactivity timer if dialog is not visible
const resetInactivityTimer = () => {
  if (isDialogVisible) return; // Do nothing if the dialog is visible
  clearTimeout(inactivityTimer);
  clearTimeout(dialogTimer);
  hideDialog();
  inactivityTimer = setTimeout(showDialog, inactivityTime);
};

// Show dialog
const showDialog = () => {
  isDialogVisible = true;
  dialog.style.display = "block";
  overlay.style.display = "block";
  dialogTimer = setTimeout(() => {
    redirectToErrorPage();
  }, dialogDisplayTime);
};

// Hide dialog
const hideDialog = () => {
  isDialogVisible = false;
  dialog.style.display = "none";
  overlay.style.display = "none";
};

// Redirect to error page
const redirectToErrorPage = () => {
  window.location.href = "/error.html"; // Replace with your error page path
};

// Event listener for dialog close button
document.getElementById("closeDialog").addEventListener("click", () => {
  hideDialog();
  resetInactivityTimer();
});

// Initialize inactivity timer
resetInactivityTimer();

// Event listeners for activity (only work if dialog is not visible)
document.addEventListener("mousemove", resetInactivityTimer);
document.addEventListener("keydown", resetInactivityTimer);
document.addEventListener("touchstart", resetInactivityTimer);
