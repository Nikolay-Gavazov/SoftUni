function songs(input) {

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];
    let n = input.shift();
    let typeOfSong = input.pop();

    for (let i = 0; i < n; i++) {
        let [type, name, time] = input[i].split('_');
        let song = new Song(type, name, time);

        songs.push(song);
        if (typeOfSong === 'all') {
            console.log(name);
        } else if (typeOfSong == type) {
            console.log(name);
        }
    }


}
songs([4,

    'favourite_DownTown_3:14',

    'listenLater_Andalouse_3:24',

    'favourite_In To The Night_3:58',

    'favourite_Live It Up_3:48',

    'listenLater'])