// const ixhr = require('./XHR/ixhr');

// ixhr({
//     method: 'GET',
//     url: 'https://api.punkapi.com/v2/beers/random'
// }, function onSuccess({status, responseText}) {
//     alert('success');
//
//     const beer = document.createElement('div'),
//         [data] = JSON.parse(responseText);
//
//     beer.classList.add('beer');
//     beer.innerHTML = `
//         <h3>${data.name}</h3>
//         <img src="${data.image_url}"/>
//         <p>${data.description}</p>
//     `;
//
//     document.body.append(beer);
// }, function onError({status, responseText}) {
//     console.log({status, responseText});
// });

// const promiseXHR = require('./XHR/PromiseXHR');
//
// promiseXHR({
//     method: 'GET',
//     url: 'https://api.punkapi.com/v2/beers/random'
// })
//     .then(function(response) {
//         alert('success');
//
//         const {status, responseData} = response;
//         const beer = document.createElement('div'),
//             [data] = responseData;
//
//         beer.classList.add('beer');
//         beer.innerHTML = `
//             <h3>${data.name}</h3>
//             <img src="${data.image_url}"/>
//             <p>${data.description}</p>
//         `;
//
//         document.body.append(beer);
//
//         return true;
//     })
//     .catch(function({status, responseData}) {
//         console.log({status, responseData});
//     });

const iFetch = require('./XHR/iFetch');

iFetch({
    method: 'GET',
    url: 'https://api.punkapi.com/v2/beers/random'
})
    .then(function(data) {
        alert('success');

        const beer = document.createElement('div'),
            [beerData] = data;

        beer.classList.add('beer');
        beer.innerHTML = `
            <h3>${beerData.name}</h3>
            <img src="${beerData.image_url}"/>
            <p>${beerData.description}</p>
        `;

        document.body.append(beer);

        return true;
    })
    .catch(function(response) {
        console.log(response);
    });
