const songs = [
    {
        title: "Perfect",
        artist: "Ed Sheeran",
        genre: "Pop",
        duration: 240
    },
    {
        title: "Backburner",
        artist: "Niki",
        genre: "Pop",
        duration: 570
    },
    {
        title: "Maestro",
        artist: "Seventeen",
        genre: "Kpop",
        duration: 240
    },
    {
        title: "London Boy",
        artist: "Taylor Swift",
        genre: "Pop",
        duration: 820
    },
    {
        title: "Love Story",
        artist: "Taylor Swift",
        genre: "Country Pop",
        duration: 235
    },
    {
        title: "Jatuh Suka",
        artist: "Raisa",
        genre: "Indo Pop",
        duration: 503
    },
    {
        title: "Ocean",
        artist: "Niki",
        genre: "Pop",
        duration: 760
    },
];

function getFormattedSongs() {
    return songs.map(({ title, artist, genre, duration }) => ({
        title,
        artist,
        genre,
        duration: duration + " seconds"
    }));
}

function groupSongsByArtist() {
    return songs.reduce((groupedSongs, song) => ({
        ...groupedSongs,
        [song.artist]: [...(groupedSongs[song.artist] ?? []), song],
    }), {});
}

function groupSongsByGenre() {
    return songs.reduce((groupedSongs, song) => ({
        ...groupedSongs,
        [song.genre]: [...(groupedSongs[song.genre] ?? []), song],
    }), {});
}

function groupSongsLessThanOneHour() {
    const shuffled = [...songs].sort(() => Math.random() - 0.5);

    return shuffled.reduce(({ playlist, totalDuration }, song) => {
        if (totalDuration + song.duration < 3600) {
            return {
                playlist: [...playlist, song],
                totalDuration: totalDuration + song.duration,
            };
        }
        return { playlist, totalDuration };
    }, { playlist: [], totalDuration: 0 }).playlist;
}

function displayGroupByArtist() {
    console.log("\n========================== GROUP BY ARTIST ==========================");

    const groupedSongs = groupSongsByArtist();

    Object.entries(groupedSongs).forEach(([artist, songs]) => {
        console.log("Artist:", artist);

        songs.forEach(({ title }) => {
            console.log("- " + title);
        });

        console.log("");
    });
}

function displayGroupByGenre() {
    console.log("\n========================== GROUP BY GENRE ==========================");

    const groupedSongs = groupSongsByGenre();

    Object.entries(groupedSongs).forEach(([genre, songs]) => {
        console.log("Genre:", genre);

        songs.forEach(({ title }) => {
            console.log("- " + title);
        });

        console.log("");
    });
}

function displayGroupLessThanOneHour() {
    console.log("\n========================== PLAYLIST LESS THAN 1 HOUR ==========================");

    const groupedSongs = groupSongsLessThanOneHour();

    groupedSongs.forEach(({ title, duration }) => {
        console.log(title + " | Duration: " + duration + " seconds");
    });

    const totalDuration = groupedSongs.reduce(
        (total, songs) => total + songs.duration, 0);

    console.log("\nTotal Duration:", totalDuration, "seconds");
    console.log("Less Than One Hour:", totalDuration < 3600);
}

const songListArray = getFormattedSongs();
console.log("\n========================== SONG LIST ARRAY ==========================");
console.log(songListArray);

displayGroupByArtist();
displayGroupByGenre();
displayGroupLessThanOneHour();
