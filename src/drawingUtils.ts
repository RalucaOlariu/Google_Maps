export function addMarker(location:google.maps.LatLng, map: google.maps.Map){
    return new google.maps.Marker({
        position: location,
        map: map,
    })
}