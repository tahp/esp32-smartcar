// Default settings configuration
const DEFAULT_SETTINGS = {
    ble: {
        timeout: 30,
        range: 10
    },
    relay: {
        delay: 500,
        starterDuration: 3
    },
    power: {
        lowBattery: 11.8,
        sleepTimeout: 30
    },
    security: {
        requirePin: false,
        geofenceEnabled: false
    },
    notifications: {
        unlock: true,
        lowBattery: true
    }
};

// Load settings from localStorage or use defaults
function loadSettings() {
    const saved = localStorage.getItem('smartcar_settings');
    return saved ? JSON.parse(saved) : DEFAULT_SETTINGS;
}

// Save settings to localStorage
function saveSettingsToStorage(settings) {
    localStorage.setItem('smartcar_settings', JSON.stringify(settings));
}

// Populate form fields with current settings
function populateForm() {
    const settings = loadSettings();
    
    // BLE settings
    document.getElementById('ble-timeout').value = settings.ble.timeout;
    document.getElementById('ble-range').value = settings.ble.range;
    
    // Relay settings
    document.getElementById('relay-delay').value = settings.relay.delay;
    document.getElementById('starter-duration').value = settings.relay.starterDuration;
    
    // Power settings
    document.getElementById('low-battery').value = settings.power.lowBattery;
    document.getElementById('sleep-timeout').value = settings.power.sleepTimeout;
    
    // Security settings
    document.getElementById('require-pin').checked = settings.security.requirePin;
    document.getElementById('geofence-enabled').checked = settings.security.geofenceEnabled;
    
    // Notification settings
    document.getElementById('notify-unlock').checked = settings.notifications.unlock;
    document.getElementById('notify-lowbatt').checked = settings.notifications.lowBattery;
}

// Gather settings from form fields
function gatherFormData() {
    return {
        ble: {
            timeout: parseInt(document.getElementById('ble-timeout').value),
            range: parseInt(document.getElementById('ble-range').value)
        },
        relay: {
            delay: parseInt(document.getElementById('relay-delay').value),
            starterDuration: parseInt(document.getElementById('starter-duration').value)
        },
        power: {
            lowBattery: parseFloat(document.getElementById('low-battery').value),
            sleepTimeout: parseInt(document.getElementById('sleep-timeout').value)
        },
        security: {
            requirePin: document.getElementById('require-pin').checked,
            geofenceEnabled: document.getElementById('geofence-enabled').checked
        },
        notifications: {
            unlock: document.getElementById('notify-unlock').checked,
            lowBattery: document.getElementById('notify-lowbatt').checked
        }
    };
}

// Save settings handler
function saveSettings() {
    const settings = gatherFormData();
    
    // Validate settings
    if (settings.ble.timeout < 5 || settings.ble.timeout > 60) {
        showStatus('❌ BLE timeout must be between 5-60 seconds', 'error');
        return;
    }
    
    if (settings.power.lowBattery < 11.0 || settings.power.lowBattery > 12.5) {
        showStatus('❌ Battery threshold must be between 11.0-12.5V', 'error');
        return;
    }
    
    // Save to localStorage
    saveSettingsToStorage(settings);
    
    // TODO: Send to ESP32 via API when backend is ready
    // syncToESP32(settings);
    
    showStatus('✅ Settings saved successfully!', 'success');
    
    console.log('Settings saved:', settings);
}

// Reset to defaults handler
function resetDefaults() {
    if (confirm('Reset all settings to defaults? This cannot be undone.')) {
        saveSettingsToStorage(DEFAULT_SETTINGS);
        populateForm();
        showStatus('🔄 Settings reset to defaults', 'success');
    }
}

// Show status message
function showStatus(message, type) {
    const statusEl = document.getElementById('save-status');
    statusEl.textContent = message;
    statusEl.className = type;
    
    setTimeout(() => {
        statusEl.textContent = '';
        statusEl.className = '';
    }, 3000);
}

// Sync settings to ESP32 (placeholder for future API integration)
async function syncToESP32(settings) {
    try {
        const response = await fetch('/api/settings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(settings)
        });
        
        if (!response.ok) {
            throw new Error('Failed to sync with ESP32');
        }
        
        console.log('Settings synced to ESP32');
    } catch (error) {
        console.warn('ESP32 sync failed (expected in development):', error.message);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    populateForm();
    console.log('Settings page initialized');
});
