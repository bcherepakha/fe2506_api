(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/** Метод fetch – это XMLHttpRequest нового поколения.
 * Он предоставляет улучшенный интерфейс для осуществления запросов к серверу:
 * как по части возможностей и контроля над происходящим,
 * так и по синтаксису, так как построен на промисах.
 *
 * @param   Object      params              request params
 * @param   String      params.method       HTTP-метод. GET/POST/TRACE/DELETE/PUT и т.п.
 * @param   String      params.url          адрес запроса. http/https/ftp/file.
 * @param   Object      params.headers      request headers
 * @param   FormData    params.body         request body
 * @param   String      params.mode         в каком режиме кросс-доменности предполагается делать запрос
 *                                          'same-origin', 'no-cors', 'cors'
 * @param   String      params.credentials  указывает, пересылать ли куки и заголовки авторизации вместе с запросом
 *                                          'omit', 'same-origin', 'include'
 * @param   String      params.cache        указывает, как кешировать запрос
 *                                          'default', 'no-store', 'reload', 'no-cache', 'force-cache', 'only-if-cached'
 * @param   String      params.redirect     можно поставить 'follow' для обычного поведения
 *                                              при коде 30x (следовать редиректу) или
 *                                              'error' для интерпретации редиректа как ошибки.
 */
module.exports = function iFetch(params) {
    const {url, ...options} = params;

    return fetch(url, options)
            .then(response => {
                console.log('data', response.status, {response});

                return response.json();
            });
}

},{}],2:[function(require,module,exports){
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

},{"./XHR/iFetch":1}]},{},[2]);
