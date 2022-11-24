// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    const scuber = 42;
    if(block > scuber) 
    return block - scuber;
    else return scuber - block;
}

function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(start, destination) {
    let blocks = 0;
    if(start > destination) {
        blocks = start - destination;
    } else {
        blocks = destination - start;
    }
    return blocks * 264;
}
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    const chargableDistance = distance - 400;


    if(distance <= 400)
    return 0 * chargableDistance;
    else if(distance > 400 && distance <= 2000)
    return 0.02 * chargableDistance;
    else if(distance > 2000 && distance <= 2500)
    return 25;
    else return `cannot travel that far`;
}