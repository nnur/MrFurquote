'use strict';
var request = require('superagent');

module.exports = function(res) {
  let body = {
    cat: 'famous'
  }

  let headers = {
    key: 'Uv8iUA1tASmshTzGLAtCcn8GaHlup1rQ2P9jsnDc2aBHzRrJqv',
    accept: 'application/json',
    content: 'application/x-www-form-urlencoded'
  }

  request.post('https://andruxnet-random-famous-quotes.p.mashape.com/')
    .send(body)
    .set('X-Mashape-Key', headers.key)
    .set('Accept', headers.accept)
    .set('Content-Type', headers.content)
    .end((err, message) => {
      if (err || !message.ok) {
        console.log(err);
        res.send("zzz...I'm taking a nap..zzz");
      } else {
        res.send(message.text);
      }
    });
}