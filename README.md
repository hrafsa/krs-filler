# Add KRS Automation Script For Siakad

This script automates the process of adding courses to the KRS (Kartu Rencana Studi) in the SIAKAD system. It fetches the course data from the SIAKAD system and adds the courses to the KRS based on the provided course IDs.

## How to Use

1. First, login to the SIAKAD website at [https://siakad.unj.ac.id](https://siakad.unj.ac.id "SIAKAD UNJ")

2. Open your browser's console. Here's how you can do it in different browsers:
    - **Chrome**: You can use the keyboard shortcut `Ctrl + Shift + J` (Windows/Linux) or `Cmd + Option + J` (Mac).
    - **Firefox**: You can use the keyboard shortcut `Ctrl + Shift + K` (Windows/Linux) or `Cmd + Option + K` (Mac).
    - **Safari**: First, enable the Develop menu in Safari's Advanced preferences. You can use the keyboard shortcut `Cmd + Option + C` (Mac).

3. Copy and paste the following script into the console:

```javascript
fetch("https://raw.githubusercontent.com/hrafsa/krs-filler/main/krs-filler.js")
  .then((res) => res.text())
  .then((t) => eval(t));
```

4. Press Enter to run the script.



## Code Explanation
The script contains a function add_krs(id) that takes a course ID as an argument. It constructs a URL and a button selector based on the course ID, then fetches the course data from the SIAKAD system. If the fetch is successful and the course can be added, it alerts the user with a message and disables the button for that course. If the fetch is unsuccessful or the course cannot be added, it alerts the user with an error message.

The script also contains an array idKrs of course IDs. It iterates over this array, calling the add_krs(id) function for each course ID.

---
> [!IMPORTANT]
> **This script is intended for educational purposes only.**
> 
> Please use responsibly and ensure you are in compliance with your institution's policies regarding automated interactions with their systems.

---
> [!NOTE]
> Last Update : `16 August 2024 `
> 
> Version : `1.2.1`
