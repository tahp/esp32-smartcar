#include <Arduino.h>

// === Pin Definitions ===
const int lockRelayPin = 12;
const int unlockRelayPin = 13;
const int sirenRelayPin = 14;

// === Setup ===
void setup() {
  Serial.begin(115200);

  pinMode(lockRelayPin, OUTPUT);
  pinMode(unlockRelayPin, OUTPUT);
  pinMode(sirenRelayPin, OUTPUT);

  // Ensure relays start off
  digitalWrite(lockRelayPin, LOW);
  digitalWrite(unlockRelayPin, LOW);
  digitalWrite(sirenRelayPin, LOW);

  // TODO: Initialize BLE, sensors, secure element
}

// === Main Loop ===
void loop() {
  // TODO: Read sensors (door, hood, trunk, tamper, shock)
  // TODO: BLE presence detection & authentication
  // TODO: Actuate relays for lock/unlock/siren
  // TODO: Implement power management and sleep cycles

  delay(100); // Basic loop delay
}
