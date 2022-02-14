"use strict"; // modular programming (import,export) : ------------------------------------------------

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var human = /*#__PURE__*/function () {
  function human() {
    _classCallCheck(this, human);

    this.name = 'siavash';
  }

  _createClass(human, [{
    key: "run",
    value: function run() {
      console.log(this.name);
    }
  }]);

  return human;
}();

var human1 = new human();
human1.run();
