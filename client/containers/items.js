const items = [
    // track 1
    {
        album: {
            images: ['img src here'], // always access this as images[0]
            name: 'Album1'
        },
        // for loop to get all artist names, use spread operator, convert to string
        artists: [{ name: 'Rihanna'}, { name: 'JAY-Z' }],
        id: '1',
        name: 'Umbrella' // -> setTrack(items[i].name)
    },
    // track 2
    {
        album: {
            images: ['img src here2'], 
            name: 'Album2'
        },
        artists: [{ name: 'Rihanna' }],
        id: '2',
        name: 'Umbrella and Rain'
    },
    // track 3
    { 
        album: {
            images: ['img src here3'],
            name: 'Album3'
        },
        artists: [{ name: 'Daniel' }],
        id: '3',
        name: 'Get You'
    },
    // track 4
    {
        album: {
            images: ['img src here4'],
            name: 'Album4'
        },
        artists: [{ name: 'Doja Cat' }],
        id: '4',
        name: 'Say So'
    },
    // track 5
    {
        album: {
            images: ['img src here4'],
            name: 'Album5'
        },
        artists: [{ name: 'Doja' }],
        id: '5',
        name: 'Say'
    }
]

module.exports = items;