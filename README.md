# ESP32 Smart Car System

## Overview

This project aims to create a comprehensive, ESP32-based smart car system. It adds modern, convenient features to an older vehicle, such as keyless entry and enhanced security, while retaining all original factory functionality. The system is designed to be modular and adaptable, with a focus on security and power efficiency.

This repository contains all the necessary firmware, wiring documentation, and project plans.

## Key Features

*   **Proximity Keyless Entry:** Automatically lock and unlock the doors based on the proximity of a registered Bluetooth (BLE) device, such as a smartphone.
*   **Soft Immobilizer:** An optional security feature to prevent the engine from starting unless an authorized device is present.
*   **Alarm System:** A multi-zone alarm that monitors doors, hood, trunk, and cabin for unauthorized entry or impact.
*   **Factory Fallback:** Engineered to work in parallel with the factory key and remote systems, ensuring you're never locked out.

## Current Status

The project is in the initial development phase. The core architecture and project plan are defined, and the basic firmware structure is in place.

### Milestones

1.  [ ] Hardware selection
2.  [ ] Wiring diagram and vehicle integration plan
3.  [ ] BLE proximity detection implementation
4.  [ ] Relay control for locks, siren, and immobilizer
5.  [ ] Sensor integration (door, hood, trunk, shock/tilt)
6.  [ ] Power management and deep sleep optimization
7.  [ ] Security model (encryption and authentication)
8.  [ ] Testing and validation
9.  [ ] Final installation and commissioning

## Getting Started

_This section will be updated with instructions on how to flash the firmware, configure the hardware, and install the system in a vehicle._

## Wiring & Installation

Basic wiring notes are located in the `/wiring` directory. These are specific to a 2001 Subaru Outback but can be adapted for other vehicles.

**Disclaimer:** Modifying your vehicle's wiring can be dangerous and may void your warranty. Proceed with caution and at your own risk.

## How to Contribute (the Simple Way)

Want to help out? Awesome! Contributing to a project like this can seem intimidating, but it's easier than you think. Here’s how you can do it, step-by-step.

### Step 1: Find Something to Work On

First, you need an idea. You could:
*   Pick a task from our [Milestones](#milestones) list.
*   Fix a bug you've found.
*   Add a new feature you think would be cool.

If you're not sure, just ask!

### Step 2: Create Your Own "Sandbox" (Branch)

You never want to work directly on the main code. Instead, you create a separate "branch," which is like your own personal sandbox. This way, if you make a mistake, you won't mess up the main project.

1.  Make sure you're on the `main` branch and have the latest code.
    ```bash
    git checkout main
    ```
2.  Create your new branch. Give it a descriptive name, like `feature/add-blinking-led` or `fix/typo-in-docs`.
    ```bash
    git checkout -b name-of-your-new-branch
    ```
Now you're in your sandbox and can start making changes!

### Step 3: Make Your Changes & Test Them

Write your code, update the documentation, or do whatever your contribution is.

As you work, make sure you're not breaking anything. If you're adding a new feature, it's a great idea to also add a test for it. (We're still working on our testing setup, but it's a good habit!)

### Step 4: Save Your Work (Commit)

When you've made a chunk of progress, you should save it. This is called a "commit."

1.  Add the files you've changed:
    ```bash
    git add .
    ```
2.  "Commit" them with a message that explains what you did:
    ```bash
    git commit -m "feat: Add a blinking LED to show the device is on"
    ```
    *   `feat:` is for a new feature.
    *   `fix:` is for a bug fix.
    *   `docs:` is for changes to documentation.

### Step 5: Propose Your Changes (Pull Request)

This is the part where you show your changes to the project maintainers. In a typical project (on a site like GitHub), you would:

1.  Push your branch to your personal copy (a "fork") of the project.
2.  Open a "Pull Request" (PR), which is a formal request to merge your changes into the main project.

The maintainers would then review your work, maybe ask for a few changes, and then merge it in. Your contribution is now part of the project!
