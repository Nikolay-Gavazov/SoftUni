function gramophone(band, album, song) {

    const rotationTime = 2.5;
    let songDuration = (album.length * band.length) * song.length / 2;

    let rotations = Math.ceil(songDuration / rotationTime);

    console.log(`The plate was rotated ${rotations} times.`);

}
gramophone('Rammstein', 'Sehnsucht',

    'Engel')