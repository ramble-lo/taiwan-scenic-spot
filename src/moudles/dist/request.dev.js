"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScenicSpot = void 0;

var getScenicSpot = function getScenicSpot(city, top, skip) {
  var data;
  return regeneratorRuntime.async(function getScenicSpot$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          try {
            data = fetch('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/NewTaipei?%24top=30&%24format=JSON').then(function (res) {
              return res.json();
            }).then(function (data) {
              console.log(data);
            });
          } catch (err) {
            console.log(console.log('fetch failed', err));
          }

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.getScenicSpot = getScenicSpot;