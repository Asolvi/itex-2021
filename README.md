# ITEX 2021 hackaton with Asolvi and Online NTNU

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Requirements

We highly recommend that you install the requirements before the hackaton, since there will not be much time for this at the event.

### Node.js

The only requirement to run this program is Node.js with npm. If you do not already have npm, you can [download and install from here](https://nodejs.org/en/download/).

### A code editor

Any code editor of your choice will do. VS code, Notepad++, VIM, Emacs, Webstorm, anything will do.\
We tend to use [VS code](https://code.visualstudio.com/download) for React projects.

### The project

You also need to have a downloaded copy of the code. If you have git installed, you can use this command:

#### `git clone https://github.com/Asolvi/itex-2021.git`

If you do not have git installed, is also possible to download a zipped folder. Just click "Code" and "Download ZIP" above.

## Installation

In the project directory, you can run:

#### `npm install`

This will install all necessary packages.

## Running the program

Still in the project directory, run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

**The page will reload if you make edits.**\
You will also see any lint errors in the console.

## The assignment

**Can you help us find patterns in our data sets or improve our application in other ways?**

The assignment is pretty open and you are free do interpret it how you like. In the section below, there are some example tasks, feel free to choose one or more from that list. Or make something up yourself.

Spend your time playing with CSS to make the application prettier and more user friendly. Or find some interesting patterns in the data. If you think our code sucks and you would like to refactor it, do that instead.

The team with the most creative, funny or impressive solution will get a prize. **But the most important part is that you all have fun!**

## Where to find things

### The data

The data for the graphs, maps and real time event view is located in **src/data**.
Both files contain messages sent from fire and security devices and the messages is on the form:

```typescript
interface DeviceState {
  name: string; // e.g. "IR sensor 1"
  deviceType: Device;
  status: Status;
  installed: Date;
  building: string;
  address: string;
  lastAlarm: Date;
  messageGenerated: Date; // when the status message was sent
  latitude: number;
  longitude: number;
}
```

See **src/Types.tsx** for details on the types of devices and valid statuses.

#### Real time stream of events

Located in: **src/data/stream/stream.json**.

Contains 200 iterations through the device list and can be used to analyze patterns in the data, or to simulate a stream of messages from the devices.

#### Snapshot data

Located in: **src/data/data.json**

Status of each device at a specific point in time. The name of the devices will be unique in this file (1 iteration through the device list).

### Dashboard elements (the graphs, maps and event box)

All the dashboard elements (the graphs, maps and the event box) are in the folder **src/dashboardElements/**. They are grouped by what box they are displayed inside. The files in this folder are the only files you really need to edit, unless you also want to do some styling. The stylesheet is found in **src/App.css**-

## Task suggestions

You do not have to follow any of the task suggestions, you are free to choose your solution freely. If React is not a familiar language to you, you are also free to import the data in any language you want.

### Suggestion 1 - Doughnut with device status

File: **src/dashboardElements/static/Doughnuts.jsx**

Finish the function to display the second doughnut that shows us what status the different devices had at the time of the snapshot.

See also: **src/Types.ts**

### Suggestion 2 - Stream event window

File: **src/dashboardElements/stream/Alarms.jsx**

1. Add the stream element to the alarm list and return the new list.

2. The box we display the events in is not very pretty to look at.
   It also overflows when we add too many elements to it.
   Can you improve the design?

3. If the window is already red, we might miss new alarms.
   Expand the functionality to make it e.g. blink when a new alarm arrives,
   and/or play a sound.

See also: **src/App.css**, line 69-87

### Suggestion 3 - Show alarms/failures on map in real time

File: **src/dashboardElements/stream/EventMap.jsx**

1. Store active alarms in the alarm list (initialized on line 8).
   If you are unsure about how to do this, **src/dashboardElements/stream/Alarms.jsx**
   has a similar function.

2. Display the alarms on the map. It can be useful to take a look at the (Leaflet documentation)[https://react-leaflet.js.org/docs/example-vector-layers/] and **src/dashboardElements/static/DeviceMap.jsx**.

3. Repeat all steps for active failures. Bonus: use a different color for the failures.

#### Other ideas:

- Add a small component that displays what each colored mark on the map means.
- How can we tell if there are several alarms in the same building?

### Other suggestions

Need more inspiration?

- Make your own component (for example by editing **src/dashboardElements/otherExamples/GenericGraph.jsx**) and find out if some devices are more likely to fail than others.
- Try to display the number of devices per building in each building in **src/dashboardElements/static/DeviceMap.jsx**, or edit one of the components in **src/dashboardElements/otherExamples/** to display this. All the buildings are in **src/data/buildings.ts**.
- Do a code review on one of the components we made and supporting functions. Did we make any mistakes?
- Choose any component in **src/dashboardElements/** and make design improvements. The stylesheet is in **src/App.css**
- Use Python or Java or something else, import the .json data files and do whatever you want with the data.

## Useful links

- [React documentation](https://reactjs.org/)
- The library used for displaying maps: [Leaflet](https://react-leaflet.js.org/docs/example-popup-marker/)
- The library used to display graphs: [Chart.js](https://reactchartjs.github.io/react-chartjs-2)
