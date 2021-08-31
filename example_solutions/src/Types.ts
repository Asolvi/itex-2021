export enum Device {
  IR_sensor,
  Inventory_Sensor,
  Smoke_Detector,
  Gas_Detector,
  Intrusion_Sensor,
  Panic_Alarm,
}

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
  messageGenerated: Date;
  latitude: number;
  longitude: number;
}
