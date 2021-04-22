export interface CoordinateType{
    Latitude:number;
    Longitude:number;
}
export interface AircraftType{
    Manufacturer: String;
    GS: number;
    TK: number;
}
export interface ButtonType{
    name: String;
    className: String;
    tagName: String;
    createButton(): any;
}