export function predict2min(lat: number, long: number, tk: number, gs: number){
    let long2min: number;
    let lat2min: number;
    let delx:number;
    let dely: number;
    let DX: number;
    let DY: number;
    let predictpos: any;
    let dist=gs*2/60;
    let Rstar=3445;
    if (tk <= 90){
        let rad=tk*3.14/180;
         delx=dist*Math.cos(rad);
         dely=dist*Math.sin(rad);
         DX=(delx*180)/(3.14*Rstar);
         DY=(dely*180)/(3.14*Rstar*Math.cos((lat*3.14/180)));
         lat2min=lat+DY;
         long2min=long+DX;
         predictpos=[lat2min, long2min];
         return predictpos;
    }
    if (tk >90 && tk<=180){
        let rad=(tk-90)*3.14/180;
        delx=dist*Math.sin(rad);
        dely=dist*Math.cos(rad);
        DX=(delx*180)/(3.14*Rstar);
        DY=(dely*180)/(3.14*Rstar*Math.cos((lat*3.14/180)));
        lat2min=lat-DX;
        long2min=long+DY;
        predictpos=[lat2min, long2min];
        return predictpos;
    }
    if (tk >180 && tk<=270){
        let rad=(tk-180)*3.14/180;
        delx=dist*Math.cos(rad);
        dely=dist*Math.sin(rad);
        DX=(delx*180)/(3.14*Rstar);
        DY=(dely*180)/(3.14*Rstar*Math.cos((lat*3.14/180)));
        lat2min=lat-DX;
        long2min=long-DY;
        predictpos=[lat2min, long2min];
        return predictpos;
    }
    if (tk >270){
        let rad=(tk-270)*3.14/180;
        delx=dist*Math.sin(rad);
        dely=dist*Math.cos(rad);
        DX=(delx*180)/(3.14*Rstar);
        DY=(dely*180)/(3.14*Rstar*Math.cos((lat*3.14/180)));
        lat2min=lat+DX;
        long2min=long-DY;
        predictpos=[lat2min, long2min];
        return predictpos;
    }
}
