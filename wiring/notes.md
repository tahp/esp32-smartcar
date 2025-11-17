# Wiring Notes — ESP32 Smart Car System

## Vehicle: 2001 Subaru Outback L.L. Bean Edition

## Lock/Unlock Wiring
- TODO: Identify lock wire color + location
- TODO: Identify unlock wire color + location
- Suggestion: Use parallel relay taps to keep factory system intact.

## Starter (optional immobilizer)
- TODO: Identify starter wire and safe cut point
- TODO: Add bypass toggle switch for failsafe

## Power
- 12V -> Buck converter -> 5V to ESP32
- Add inline fuse (1A recommended)
- Add ground reference point

## Sensors
- Door switch input
- Hood switch
- Trunk switch
- Shock/tilt sensor
- Tamper switch for the module enclosure

Update this file each time you discover something in the vehicle.
