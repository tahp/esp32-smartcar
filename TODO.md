# ESP32 SmartCar - Development TODO

## ✅ Completed
- [x] Project scaffolding (firmware, wiring, docs, test, ci, web)
- [x] Initial firmware skeleton (main.ino)
- [x] Documentation (project plan, BLE design, power management, relays, security, etc.)
- [x] Web dashboard (index.html, style.css, app.js)
- [x] Mock API for development (mock_api.json)
- [x] Settings page with localStorage persistence
- [x] Git checkpoint branch created (`checkpoint-web-foundation`)

## 🎯 Current Status
**Last Completed:** Settings page with save/load/reset functionality  
**Branch:** master  
**Checkpoint Branch:** checkpoint-web-foundation

## 🚀 Next Steps (Choose Direction)

### Option A: Frontend Integration
- [ ] Wire dashboard to use settings from localStorage
- [ ] Add settings link/button to main dashboard
- [ ] Make relay controls respect settings (delays, timeouts)
- [ ] Add visual feedback for settings-driven behavior

### Option B: Backend/API Development
- [ ] Create ESP32 API endpoints for settings sync
- [ ] Implement WebSocket for real-time status updates
- [ ] Add authentication/security layer
- [ ] Test API with Postman or curl

### Option C: Hardware Integration
- [ ] Flash firmware to ESP32
- [ ] Test BLE pairing with phone
- [ ] Verify relay control circuits
- [ ] Power management testing

## 📋 Future Features
- [ ] OTA firmware updates implementation
- [ ] Event logging to SD card or cloud
- [ ] Geofencing functionality
- [ ] Mobile app (React Native or Flutter)
- [ ] Voice assistant integration (Alexa/Google)
- [ ] Remote diagnostics dashboard

## 🐛 Known Issues
- None yet (knock on wood)

## 💡 Ideas/Notes
- Consider adding a "Debug Mode" toggle in settings
- May need rate limiting on relay commands to prevent abuse
- Think about adding a "Panic Mode" that locks everything down

---
**Last Updated:** 2025-11-17  
**Decision Needed:** Choose Option A, B, or C for next development phase
