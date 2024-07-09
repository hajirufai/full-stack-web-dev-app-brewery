'use strict';

/**
 * Before running this, change the "main" value to qr-package.js and "type" value to commonjs
 */
var qr = require('qr-image');
 
// var qr_svg = qr.image('I love QR!', { type: 'svg' });
// qr_svg.pipe(require('fs').createWriteStream('i_love_qr.svg'));
 
// var svg_string = qr.imageSync('I love QR!', { type: 'svg' });

const text = "This is my text2";
const ec_level = "This is my ec_level";
const options = "png";
qr.image(text, [ec_level | options])