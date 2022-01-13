const classPhotos = (redShirtHeights, blueShirtHeights) => {
    redShirtHeights.sort((a, b) => b - a);
    blueShirtHeights.sort((a, b) => b - a);

    colorInFirstRow = redShirtHeights[0] < blueShirtHeights[0] ? 'RED' : 'BLUE';

    for (let i = 0; i < redShirtHeights.length; i++) {
        if (colorInFirstRow === 'RED') {
            if (redShirtHeights[i] >= blueShirtHeights[i]) return false;
        } else {
            if (blueShirtHeights[i] >= redShirtHeights[i]) return false;
        }
    }
    return true;
}

const redShirtHeights = [5, 8, 1, 3, 4],
    blueShirtHeights = [6, 9, 2, 4, 5];

console.log(classPhotos(redShirtHeights, blueShirtHeights));