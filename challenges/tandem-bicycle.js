const tandemBicycle = (redShirtSpeeds, blueShirtSpeeds, fastest) => {
    redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds.sort((a, b) => a - b);

    if (!fastest) redShirtSpeeds.sort((a, b) => b - a);

    let totalSpeed = 0;
    console.log(redShirtSpeeds, blueShirtSpeeds)
    for (let i = 0; i < redShirtSpeeds.length; i++) {
        console.log(redShirtSpeeds[i], blueShirtSpeeds[blueShirtSpeeds.length - i - 1])
        totalSpeed += Math.max(redShirtSpeeds[i], blueShirtSpeeds[blueShirtSpeeds.length - i - 1]);
        console.log(totalSpeed)
    }
    return totalSpeed;
}

const redShirtSpeeds = [5, 5, 3, 9, 2],
    blueShirtSpeeds = [3, 6, 7, 2, 1],
    fastest = false;

console.log(tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest));