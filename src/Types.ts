/* The enum types get converted to integers when compiling:
 * Device.IR_sensor == 0 //true
 * Device.Inventory_sensor == 1 // true etc. */
export enum Device {
  IR_sensor,
  Inventory_Sensor,
  Smoke_Detector,
  Gas_Detector,
  Intrusion_Sensor,
  Panic_Alarm,
}

/* The enum types get converted to integers when compiling:
 * Status.Off == 0 //true
 * Status.Armed == 1 // true etc. */
export enum Status {
  Off,
  Armed,
  Alarm,
  Failure,
}

export interface DeviceState {
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
