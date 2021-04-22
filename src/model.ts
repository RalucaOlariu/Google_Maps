import {AircraftType, CoordinateType} from "./types.js";
export class Coordinate implements  CoordinateType {
    Latitude: number;
    Longitude: number;
    constructor(Latitude: number, Longitude: number) {
        this.Latitude = Latitude;
        this.Longitude = Longitude;
    }
}
export class Aircraft implements AircraftType {
    Manufacturer: String;
    GS: number;
    TK: number;
    constructor(Manufacturer: String, GS: number, TK: number) {
        this.Manufacturer = Manufacturer;
        this.GS = GS;
        this.TK = TK;
    }
}