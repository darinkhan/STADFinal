import { getArtists, addArtist } from "../src/api/artist.js";

test('t1', async () => {
    console.log('starting this test')
    const res = await getArtists((snapshot) => {
        
        const artists = [];
        snapshot.forEach((doc) => {
            artists.push(doc.data().name);
        });
        console.log(artists);
    });
    console.log(res);
},50000);


// Testing the APIs related to Artist
// describe('Artist', () => {
//     it('123', async() => {
//         const data = { description: "hey", name: "bob", names: ["bobs"], imageUrl: "sww.wogo.com"};
//         await addArtist(data).catch(handleError);
//     })
//     it('get', async () => {
//         const data = { description: "hey", name: "bob", names: ["bobs"], imageUrl: "sww.wogo.com"};
//         const res2 =  await addArtist(data);
//         console.log("addArtist res" + res2);
//         const res = await getArtists((snapshot) => {
//             const artists = [];
//             snapshot.forEach((doc) => {
//                 artists.push(doc.data().name);
//             });
//             console.log(artists);
//         });
//             // expect(data.entity.name).toEqual('Koen van Gilst')
//         console.log('res' + res);
//     });
// });





// test('t2', async () => {
//     const q = query(collection(db, "artists"), orderBy("name"));
//     return onSnapshot(q, (snapshot) => {
//         const artists = [];
//         snapshot.forEach((doc) => {
//             artists.push(doc.data().name);
//             console.log(doc.data())
//         });
//     });
// },50000);