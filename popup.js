// Restore toggle state from local storage
document.addEventListener('DOMContentLoaded', function() {
  chrome.storage.local.get('autoRefreshEnabled', function(data) {
    document.getElementById('toggleRefresh').checked = data.autoRefreshEnabled || false;
  });
});

// Save toggle state to local storage
document.getElementById('toggleRefresh').addEventListener('change', function() {
  chrome.storage.local.set({ 'autoRefreshEnabled': this.checked });
});