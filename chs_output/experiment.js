(function(){var s=document.createElement('style');s.textContent="/*!*************************************************************************************************************!*\\\n  !*** css ../../node_modules/css-loader/dist/cjs.js!../../node_modules/@fontsource/open-sans/400-italic.css ***!\n  \\*************************************************************************************************************/\n/* open-sans-cyrillic-ext-400-italic*/\n\n/* open-sans-cyrillic-400-italic*/\n\n/* open-sans-greek-ext-400-italic*/\n\n/* open-sans-greek-400-italic*/\n\n/* open-sans-hebrew-400-italic*/\n\n/* open-sans-vietnamese-400-italic*/\n\n/* open-sans-latin-ext-400-italic*/\n\n/* open-sans-latin-400-italic*/\n\n\n/*!*************************************************************************************************************!*\\\n  !*** css ../../node_modules/css-loader/dist/cjs.js!../../node_modules/@fontsource/open-sans/700-italic.css ***!\n  \\*************************************************************************************************************/\n/* open-sans-cyrillic-ext-700-italic*/\n\n/* open-sans-cyrillic-700-italic*/\n\n/* open-sans-greek-ext-700-italic*/\n\n/* open-sans-greek-700-italic*/\n\n/* open-sans-hebrew-700-italic*/\n\n/* open-sans-vietnamese-700-italic*/\n\n/* open-sans-latin-ext-700-italic*/\n\n/* open-sans-latin-700-italic*/\n\n\n/*!******************************************************************************************************!*\\\n  !*** css ../../node_modules/css-loader/dist/cjs.js!../../node_modules/@fontsource/open-sans/400.css ***!\n  \\******************************************************************************************************/\n/* open-sans-cyrillic-ext-400-normal*/\n\n/* open-sans-cyrillic-400-normal*/\n\n/* open-sans-greek-ext-400-normal*/\n\n/* open-sans-greek-400-normal*/\n\n/* open-sans-hebrew-400-normal*/\n\n/* open-sans-vietnamese-400-normal*/\n\n/* open-sans-latin-ext-400-normal*/\n\n/* open-sans-latin-400-normal*/\n\n\n/*!******************************************************************************************************!*\\\n  !*** css ../../node_modules/css-loader/dist/cjs.js!../../node_modules/@fontsource/open-sans/700.css ***!\n  \\******************************************************************************************************/\n/* open-sans-cyrillic-ext-700-normal*/\n\n/* open-sans-cyrillic-700-normal*/\n\n/* open-sans-greek-ext-700-normal*/\n\n/* open-sans-greek-700-normal*/\n\n/* open-sans-hebrew-700-normal*/\n\n/* open-sans-vietnamese-700-normal*/\n\n/* open-sans-latin-ext-700-normal*/\n\n/* open-sans-latin-700-normal*/\n\n\n/*!*****************************************************************************************************************!*\\\n  !*** css ../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!\n  \\*****************************************************************************************************************/\n/*\n * CSS for jsPsych experiments.\n *\n * This stylesheet provides minimal styling to make jsPsych\n * experiments look polished without any additional styles.\n */\n/* Container holding jsPsych content */\n.study-active .jspsych-display-element{\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n}\n\n.study-active .jspsych-display-element:focus{\n  outline: none;\n}\n\n.study-active .jspsych-content-wrapper{\n  display: flex;\n  margin: auto;\n  flex: 1 1 100%;\n  width: 100%;\n}\n\n.study-active .jspsych-content{\n  max-width: 95%; /* this is mainly an IE 10-11 fix */\n  text-align: center;\n  margin: auto; /* this is for overflowing content */\n}\n\n.study-active .jspsych-top{\n  align-items: flex-start;\n}\n\n.study-active .jspsych-middle{\n  align-items: center;\n}\n\n/* fonts and type */\n.study-active .jspsych-display-element{\n  font-family: \"Open Sans\", \"Arial\", sans-serif;\n  font-size: 18px;\n  line-height: 1.6em;\n}\n\n/* Form elements like input fields and buttons */\n.study-active .jspsych-display-element input[type=text]{\n  font-family: \"Open Sans\", \"Arial\", sans-serif;\n  font-size: 14px;\n}\n\n/* borrowing Bootstrap style for btn elements, but combining styles a bit */\n.study-active .jspsych-btn{\n  display: inline-block;\n  padding: 6px 12px;\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 400;\n  font-family: \"Open Sans\", \"Arial\", sans-serif;\n  cursor: pointer;\n  line-height: 1.4;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  color: #333;\n  background-color: #fff;\n  border-color: #ccc;\n}\n\n/* only apply the hover style on devices with a mouse/pointer that can hover - issue #977 */\n@media (hover: hover) {\n  .study-active .jspsych-btn:hover{\n    background-color: #ddd;\n    border-color: #aaa;\n  }\n}\n.study-active .jspsych-btn:active{\n  background-color: #ddd;\n  border-color: #000000;\n}\n\n.study-active .jspsych-btn:disabled{\n  background-color: #eee;\n  color: #aaa;\n  border-color: #ccc;\n  cursor: not-allowed;\n}\n\n/* custom style for input[type=\"range] (slider) to improve alignment between positions and labels */\n.study-active .jspsych-slider{\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  width: 100%;\n  background: transparent;\n}\n\n.study-active .jspsych-slider:focus{\n  outline: none;\n}\n\n/* track */\n.study-active .jspsych-slider::-webkit-slider-runnable-track{\n  appearance: none;\n  -webkit-appearance: none;\n  width: 100%;\n  height: 8px;\n  cursor: pointer;\n  background: #eee;\n  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\n  border-radius: 2px;\n  border: 1px solid #aaa;\n}\n\n.study-active .jspsych-slider::-moz-range-track{\n  appearance: none;\n  width: 100%;\n  height: 8px;\n  cursor: pointer;\n  background: #eee;\n  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\n  border-radius: 2px;\n  border: 1px solid #aaa;\n}\n\n.study-active .jspsych-slider::-ms-track{\n  appearance: none;\n  width: 99%;\n  height: 14px;\n  cursor: pointer;\n  background: #eee;\n  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\n  border-radius: 2px;\n  border: 1px solid #aaa;\n}\n\n/* thumb */\n.study-active .jspsych-slider::-webkit-slider-thumb{\n  border: 1px solid #666;\n  height: 24px;\n  width: 15px;\n  border-radius: 5px;\n  background: #ffffff;\n  cursor: pointer;\n  -webkit-appearance: none;\n  margin-top: -9px;\n}\n\n.study-active .jspsych-slider::-moz-range-thumb{\n  border: 1px solid #666;\n  height: 24px;\n  width: 15px;\n  border-radius: 5px;\n  background: #ffffff;\n  cursor: pointer;\n}\n\n.study-active .jspsych-slider::-ms-thumb{\n  border: 1px solid #666;\n  height: 20px;\n  width: 15px;\n  border-radius: 5px;\n  background: #ffffff;\n  cursor: pointer;\n  margin-top: -2px;\n}\n\n/* jsPsych progress bar */\n.study-active #jspsych-progressbar-container{\n  color: #555;\n  border-bottom: 1px solid #dedede;\n  background-color: #f9f9f9;\n  margin-bottom: 1em;\n  text-align: center;\n  padding: 8px 0px;\n  width: 100%;\n  line-height: 1em;\n}\n\n.study-active #jspsych-progressbar-container span{\n  font-size: 14px;\n  padding-right: 14px;\n}\n\n.study-active #jspsych-progressbar-outer{\n  background-color: #eee;\n  width: 50%;\n  margin: auto;\n  height: 14px;\n  display: inline-block;\n  vertical-align: middle;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n\n.study-active #jspsych-progressbar-inner{\n  background-color: #aaa;\n  width: 0%;\n  height: 100%;\n}\n\n/* Control appearance of jsPsych.data.displayData() */\n.study-active #jspsych-data-display{\n  text-align: left;\n}\n\n.study-active #progress-bar{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:stretch;justify-content:center;gap:4px;background:#fff;border-bottom:2px solid #e5e7eb;padding:8px 24px 0;font-family:\"Open Sans\",\"Arial\",sans-serif}.study-active .progress-zone{flex:1;max-width:180px;display:flex;flex-direction:column;align-items:center;gap:6px;font-size:14px;font-weight:500;color:#9ca3af}.study-active .progress-zone::after{content:\"\";display:block;width:100%;height:4px;border-radius:2px 2px 0 0;background:#e5e7eb;margin-top:auto}.study-active .progress-zone.active{color:#1e40af;font-weight:700}.study-active .progress-zone.active::after{background:#3b82f6}.study-active .progress-zone.done{color:#15803d}.study-active .progress-zone.done::after{background:#4ade80}body.study-active{background:#eef4ff;margin:0}.study-active .jspsych-display-element{background:#eef4ff;align-items:center;min-height:100vh;padding-top:60px;box-sizing:border-box}.study-active .jspsych-content-wrapper{display:block;flex:0 0 auto;background:linear-gradient(135deg, #f97316, #facc15, #4ade80, #38bdf8, #a78bfa);border-radius:22px;padding:6px;margin:32px auto;max-width:1160px;width:calc(100% - 48px)}.study-active .jspsych-content{background:#fff;border-radius:17px;padding:48px;box-sizing:border-box;text-align:center;max-width:100%;margin:0}.study-active .jspsych-btn{background-color:#3b82f6;color:#fff;border:none;border-radius:10px;padding:12px 36px;font-size:18px;font-weight:600;cursor:pointer;margin-top:16px;transition:background-color .15s}.study-active .jspsych-btn:hover{background-color:#2563eb;border-color:rgba(0,0,0,0)}.study-active .jspsych-btn:active{background-color:#1d4ed8;border-color:rgba(0,0,0,0)}.study-active .jspsych-btn:disabled{background-color:#93c5fd;cursor:not-allowed}.study-active h2{color:#1e40af}.study-active #status{font-size:20px;min-height:64px;padding-bottom:12px}.study-active #feedback{font-size:26px;min-height:140px}.study-active .feedback-error{color:#dc2626;font-weight:bold}.study-active .feedback-redo{color:#d97706;font-weight:bold}.study-active .img-credit{font-size:.7em;color:#888;margin-top:6px;min-height:1.4em}.study-active .study-control-btn{background-color:#e5e7eb;color:#374151;border:none;border-radius:8px;padding:8px 18px;font-size:15px;font-weight:600;cursor:pointer;transition:background-color .15s}.study-active .study-control-btn:hover{background-color:#d1d5db}.study-active #pause-btn{margin-left:auto;margin-right:8px;align-self:center}.study-active #stop-btn{align-self:center}.study-active .study-overlay{position:fixed;inset:0;z-index:9999;background:rgba(255,255,255,.97);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;font-family:\"Open Sans\",\"Arial\",sans-serif;text-align:center;padding:32px}.study-active .study-overlay h2{color:#1e40af;margin:0}.study-active .study-overlay p{font-size:18px;margin:0}.study-active .study-control-btn--stop{background-color:#fca5a5;color:#7f1d1d}.study-active .study-control-btn--stop:hover{background-color:#f87171}\n";document.head.appendChild(s);})();
(() => {
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });

  // experiment/node_modules/jspsych/dist/index.js
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  var MigrationError = class extends Error {
    constructor(message = "The global `jsPsych` variable is no longer available in jsPsych v7.") {
      super(`${message} Please follow the migration guide at https://www.jspsych.org/7.0/support/migration-v7/ to update your experiment.`);
      this.name = "MigrationError";
    }
  };
  window.jsPsych = {
    get init() {
      throw new MigrationError("`jsPsych.init()` was replaced by `initJsPsych()` in jsPsych v7.");
    },
    get data() {
      throw new MigrationError();
    },
    get randomization() {
      throw new MigrationError();
    },
    get turk() {
      throw new MigrationError();
    },
    get pluginAPI() {
      throw new MigrationError();
    },
    get ALL_KEYS() {
      throw new MigrationError('jsPsych.ALL_KEYS was replaced by the "ALL_KEYS" string in jsPsych v7.');
    },
    get NO_KEYS() {
      throw new MigrationError('jsPsych.NO_KEYS was replaced by the "NO_KEYS" string in jsPsych v7.');
    }
  };
  var ParameterType;
  (function(ParameterType2) {
    ParameterType2[ParameterType2["BOOL"] = 0] = "BOOL";
    ParameterType2[ParameterType2["STRING"] = 1] = "STRING";
    ParameterType2[ParameterType2["INT"] = 2] = "INT";
    ParameterType2[ParameterType2["FLOAT"] = 3] = "FLOAT";
    ParameterType2[ParameterType2["FUNCTION"] = 4] = "FUNCTION";
    ParameterType2[ParameterType2["KEY"] = 5] = "KEY";
    ParameterType2[ParameterType2["KEYS"] = 6] = "KEYS";
    ParameterType2[ParameterType2["SELECT"] = 7] = "SELECT";
    ParameterType2[ParameterType2["HTML_STRING"] = 8] = "HTML_STRING";
    ParameterType2[ParameterType2["IMAGE"] = 9] = "IMAGE";
    ParameterType2[ParameterType2["AUDIO"] = 10] = "AUDIO";
    ParameterType2[ParameterType2["VIDEO"] = 11] = "VIDEO";
    ParameterType2[ParameterType2["OBJECT"] = 12] = "OBJECT";
    ParameterType2[ParameterType2["COMPLEX"] = 13] = "COMPLEX";
    ParameterType2[ParameterType2["TIMELINE"] = 14] = "TIMELINE";
  })(ParameterType || (ParameterType = {}));
  var universalPluginParameters = {
    /**
     * Data to add to this trial (key-value pairs)
     */
    data: {
      type: ParameterType.OBJECT,
      pretty_name: "Data",
      default: {}
    },
    /**
     * Function to execute when trial begins
     */
    on_start: {
      type: ParameterType.FUNCTION,
      pretty_name: "On start",
      default: function() {
        return;
      }
    },
    /**
     * Function to execute when trial is finished
     */
    on_finish: {
      type: ParameterType.FUNCTION,
      pretty_name: "On finish",
      default: function() {
        return;
      }
    },
    /**
     * Function to execute after the trial has loaded
     */
    on_load: {
      type: ParameterType.FUNCTION,
      pretty_name: "On load",
      default: function() {
        return;
      }
    },
    /**
     * Length of gap between the end of this trial and the start of the next trial
     */
    post_trial_gap: {
      type: ParameterType.INT,
      pretty_name: "Post trial gap",
      default: null
    },
    /**
     * A list of CSS classes to add to the jsPsych display element for the duration of this trial
     */
    css_classes: {
      type: ParameterType.STRING,
      pretty_name: "Custom CSS classes",
      default: null
    },
    /**
     * Options to control simulation mode for the trial.
     */
    simulation_options: {
      type: ParameterType.COMPLEX,
      default: null
    }
  };
  var preloadParameterTypes = [
    ParameterType.AUDIO,
    ParameterType.IMAGE,
    ParameterType.VIDEO
  ];
  var alea$1 = { exports: {} };
  alea$1.exports;
  (function(module) {
    (function(global2, module2, define) {
      function Alea(seed) {
        var me = this, mash = Mash();
        me.next = function() {
          var t = 2091639 * me.s0 + me.c * 23283064365386963e-26;
          me.s0 = me.s1;
          me.s1 = me.s2;
          return me.s2 = t - (me.c = t | 0);
        };
        me.c = 1;
        me.s0 = mash(" ");
        me.s1 = mash(" ");
        me.s2 = mash(" ");
        me.s0 -= mash(seed);
        if (me.s0 < 0) {
          me.s0 += 1;
        }
        me.s1 -= mash(seed);
        if (me.s1 < 0) {
          me.s1 += 1;
        }
        me.s2 -= mash(seed);
        if (me.s2 < 0) {
          me.s2 += 1;
        }
        mash = null;
      }
      function copy(f, t) {
        t.c = f.c;
        t.s0 = f.s0;
        t.s1 = f.s1;
        t.s2 = f.s2;
        return t;
      }
      function impl(seed, opts) {
        var xg = new Alea(seed), state = opts && opts.state, prng = xg.next;
        prng.int32 = function() {
          return xg.next() * 4294967296 | 0;
        };
        prng.double = function() {
          return prng() + (prng() * 2097152 | 0) * 11102230246251565e-32;
        };
        prng.quick = prng;
        if (state) {
          if (typeof state == "object") copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      function Mash() {
        var n = 4022871197;
        var mash = function(data) {
          data = String(data);
          for (var i = 0; i < data.length; i++) {
            n += data.charCodeAt(i);
            var h = 0.02519603282416938 * n;
            n = h >>> 0;
            h -= n;
            h *= n;
            n = h >>> 0;
            h -= n;
            n += h * 4294967296;
          }
          return (n >>> 0) * 23283064365386963e-26;
        };
        return mash;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define && define.amd) {
        define(function() {
          return impl;
        });
      } else {
        this.alea = impl;
      }
    })(
      commonjsGlobal,
      module,
      // present in node.js
      false
      // present with an AMD loader
    );
  })(alea$1);
  var aleaExports = alea$1.exports;
  var xor128$1 = { exports: {} };
  xor128$1.exports;
  (function(module) {
    (function(global2, module2, define) {
      function XorGen(seed) {
        var me = this, strseed = "";
        me.x = 0;
        me.y = 0;
        me.z = 0;
        me.w = 0;
        me.next = function() {
          var t = me.x ^ me.x << 11;
          me.x = me.y;
          me.y = me.z;
          me.z = me.w;
          return me.w ^= me.w >>> 19 ^ t ^ t >>> 8;
        };
        if (seed === (seed | 0)) {
          me.x = seed;
        } else {
          strseed += seed;
        }
        for (var k = 0; k < strseed.length + 64; k++) {
          me.x ^= strseed.charCodeAt(k) | 0;
          me.next();
        }
      }
      function copy(f, t) {
        t.x = f.x;
        t.y = f.y;
        t.z = f.z;
        t.w = f.w;
        return t;
      }
      function impl(seed, opts) {
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (typeof state == "object") copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define && define.amd) {
        define(function() {
          return impl;
        });
      } else {
        this.xor128 = impl;
      }
    })(
      commonjsGlobal,
      module,
      // present in node.js
      false
      // present with an AMD loader
    );
  })(xor128$1);
  var xor128Exports = xor128$1.exports;
  var xorwow$1 = { exports: {} };
  xorwow$1.exports;
  (function(module) {
    (function(global2, module2, define) {
      function XorGen(seed) {
        var me = this, strseed = "";
        me.next = function() {
          var t = me.x ^ me.x >>> 2;
          me.x = me.y;
          me.y = me.z;
          me.z = me.w;
          me.w = me.v;
          return (me.d = me.d + 362437 | 0) + (me.v = me.v ^ me.v << 4 ^ (t ^ t << 1)) | 0;
        };
        me.x = 0;
        me.y = 0;
        me.z = 0;
        me.w = 0;
        me.v = 0;
        if (seed === (seed | 0)) {
          me.x = seed;
        } else {
          strseed += seed;
        }
        for (var k = 0; k < strseed.length + 64; k++) {
          me.x ^= strseed.charCodeAt(k) | 0;
          if (k == strseed.length) {
            me.d = me.x << 10 ^ me.x >>> 4;
          }
          me.next();
        }
      }
      function copy(f, t) {
        t.x = f.x;
        t.y = f.y;
        t.z = f.z;
        t.w = f.w;
        t.v = f.v;
        t.d = f.d;
        return t;
      }
      function impl(seed, opts) {
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (typeof state == "object") copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define && define.amd) {
        define(function() {
          return impl;
        });
      } else {
        this.xorwow = impl;
      }
    })(
      commonjsGlobal,
      module,
      // present in node.js
      false
      // present with an AMD loader
    );
  })(xorwow$1);
  var xorwowExports = xorwow$1.exports;
  var xorshift7$1 = { exports: {} };
  xorshift7$1.exports;
  (function(module) {
    (function(global2, module2, define) {
      function XorGen(seed) {
        var me = this;
        me.next = function() {
          var X = me.x, i = me.i, t, v;
          t = X[i];
          t ^= t >>> 7;
          v = t ^ t << 24;
          t = X[i + 1 & 7];
          v ^= t ^ t >>> 10;
          t = X[i + 3 & 7];
          v ^= t ^ t >>> 3;
          t = X[i + 4 & 7];
          v ^= t ^ t << 7;
          t = X[i + 7 & 7];
          t = t ^ t << 13;
          v ^= t ^ t << 9;
          X[i] = v;
          me.i = i + 1 & 7;
          return v;
        };
        function init(me2, seed2) {
          var j, X = [];
          if (seed2 === (seed2 | 0)) {
            X[0] = seed2;
          } else {
            seed2 = "" + seed2;
            for (j = 0; j < seed2.length; ++j) {
              X[j & 7] = X[j & 7] << 15 ^ seed2.charCodeAt(j) + X[j + 1 & 7] << 13;
            }
          }
          while (X.length < 8) X.push(0);
          for (j = 0; j < 8 && X[j] === 0; ++j) ;
          if (j == 8) X[7] = -1;
          else X[j];
          me2.x = X;
          me2.i = 0;
          for (j = 256; j > 0; --j) {
            me2.next();
          }
        }
        init(me, seed);
      }
      function copy(f, t) {
        t.x = f.x.slice();
        t.i = f.i;
        return t;
      }
      function impl(seed, opts) {
        if (seed == null) seed = +/* @__PURE__ */ new Date();
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (state.x) copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define && define.amd) {
        define(function() {
          return impl;
        });
      } else {
        this.xorshift7 = impl;
      }
    })(
      commonjsGlobal,
      module,
      // present in node.js
      false
      // present with an AMD loader
    );
  })(xorshift7$1);
  var xorshift7Exports = xorshift7$1.exports;
  var xor4096$1 = { exports: {} };
  xor4096$1.exports;
  (function(module) {
    (function(global2, module2, define) {
      function XorGen(seed) {
        var me = this;
        me.next = function() {
          var w = me.w, X = me.X, i = me.i, t, v;
          me.w = w = w + 1640531527 | 0;
          v = X[i + 34 & 127];
          t = X[i = i + 1 & 127];
          v ^= v << 13;
          t ^= t << 17;
          v ^= v >>> 15;
          t ^= t >>> 12;
          v = X[i] = v ^ t;
          me.i = i;
          return v + (w ^ w >>> 16) | 0;
        };
        function init(me2, seed2) {
          var t, v, i, j, w, X = [], limit = 128;
          if (seed2 === (seed2 | 0)) {
            v = seed2;
            seed2 = null;
          } else {
            seed2 = seed2 + "\0";
            v = 0;
            limit = Math.max(limit, seed2.length);
          }
          for (i = 0, j = -32; j < limit; ++j) {
            if (seed2) v ^= seed2.charCodeAt((j + 32) % seed2.length);
            if (j === 0) w = v;
            v ^= v << 10;
            v ^= v >>> 15;
            v ^= v << 4;
            v ^= v >>> 13;
            if (j >= 0) {
              w = w + 1640531527 | 0;
              t = X[j & 127] ^= v + w;
              i = 0 == t ? i + 1 : 0;
            }
          }
          if (i >= 128) {
            X[(seed2 && seed2.length || 0) & 127] = -1;
          }
          i = 127;
          for (j = 4 * 128; j > 0; --j) {
            v = X[i + 34 & 127];
            t = X[i = i + 1 & 127];
            v ^= v << 13;
            t ^= t << 17;
            v ^= v >>> 15;
            t ^= t >>> 12;
            X[i] = v ^ t;
          }
          me2.w = w;
          me2.X = X;
          me2.i = i;
        }
        init(me, seed);
      }
      function copy(f, t) {
        t.i = f.i;
        t.w = f.w;
        t.X = f.X.slice();
        return t;
      }
      function impl(seed, opts) {
        if (seed == null) seed = +/* @__PURE__ */ new Date();
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (state.X) copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define && define.amd) {
        define(function() {
          return impl;
        });
      } else {
        this.xor4096 = impl;
      }
    })(
      commonjsGlobal,
      // window object or global
      module,
      // present in node.js
      false
      // present with an AMD loader
    );
  })(xor4096$1);
  var xor4096Exports = xor4096$1.exports;
  var tychei$1 = { exports: {} };
  tychei$1.exports;
  (function(module) {
    (function(global2, module2, define) {
      function XorGen(seed) {
        var me = this, strseed = "";
        me.next = function() {
          var b = me.b, c = me.c, d = me.d, a = me.a;
          b = b << 25 ^ b >>> 7 ^ c;
          c = c - d | 0;
          d = d << 24 ^ d >>> 8 ^ a;
          a = a - b | 0;
          me.b = b = b << 20 ^ b >>> 12 ^ c;
          me.c = c = c - d | 0;
          me.d = d << 16 ^ c >>> 16 ^ a;
          return me.a = a - b | 0;
        };
        me.a = 0;
        me.b = 0;
        me.c = 2654435769 | 0;
        me.d = 1367130551;
        if (seed === Math.floor(seed)) {
          me.a = seed / 4294967296 | 0;
          me.b = seed | 0;
        } else {
          strseed += seed;
        }
        for (var k = 0; k < strseed.length + 20; k++) {
          me.b ^= strseed.charCodeAt(k) | 0;
          me.next();
        }
      }
      function copy(f, t) {
        t.a = f.a;
        t.b = f.b;
        t.c = f.c;
        t.d = f.d;
        return t;
      }
      function impl(seed, opts) {
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (typeof state == "object") copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define && define.amd) {
        define(function() {
          return impl;
        });
      } else {
        this.tychei = impl;
      }
    })(
      commonjsGlobal,
      module,
      // present in node.js
      false
      // present with an AMD loader
    );
  })(tychei$1);
  var tycheiExports = tychei$1.exports;
  var seedrandom$2 = { exports: {} };
  (function(module) {
    (function(global2, pool, math) {
      var width = 256, chunks = 6, digits = 52, rngname = "random", startdenom = math.pow(width, chunks), significance = math.pow(2, digits), overflow = significance * 2, mask = width - 1, nodecrypto;
      function seedrandom2(seed, options, callback) {
        var key = [];
        options = options == true ? { entropy: true } : options || {};
        var shortseed = mixkey(flatten(
          options.entropy ? [seed, tostring(pool)] : seed == null ? autoseed() : seed,
          3
        ), key);
        var arc4 = new ARC4(key);
        var prng = function() {
          var n = arc4.g(chunks), d = startdenom, x = 0;
          while (n < significance) {
            n = (n + x) * width;
            d *= width;
            x = arc4.g(1);
          }
          while (n >= overflow) {
            n /= 2;
            d /= 2;
            x >>>= 1;
          }
          return (n + x) / d;
        };
        prng.int32 = function() {
          return arc4.g(4) | 0;
        };
        prng.quick = function() {
          return arc4.g(4) / 4294967296;
        };
        prng.double = prng;
        mixkey(tostring(arc4.S), pool);
        return (options.pass || callback || function(prng2, seed2, is_math_call, state) {
          if (state) {
            if (state.S) {
              copy(state, arc4);
            }
            prng2.state = function() {
              return copy(arc4, {});
            };
          }
          if (is_math_call) {
            math[rngname] = prng2;
            return seed2;
          } else return prng2;
        })(
          prng,
          shortseed,
          "global" in options ? options.global : this == math,
          options.state
        );
      }
      function ARC4(key) {
        var t, keylen = key.length, me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];
        if (!keylen) {
          key = [keylen++];
        }
        while (i < width) {
          s[i] = i++;
        }
        for (i = 0; i < width; i++) {
          s[i] = s[j = mask & j + key[i % keylen] + (t = s[i])];
          s[j] = t;
        }
        (me.g = function(count) {
          var t2, r = 0, i2 = me.i, j2 = me.j, s2 = me.S;
          while (count--) {
            t2 = s2[i2 = mask & i2 + 1];
            r = r * width + s2[mask & (s2[i2] = s2[j2 = mask & j2 + t2]) + (s2[j2] = t2)];
          }
          me.i = i2;
          me.j = j2;
          return r;
        })(width);
      }
      function copy(f, t) {
        t.i = f.i;
        t.j = f.j;
        t.S = f.S.slice();
        return t;
      }
      function flatten(obj, depth) {
        var result = [], typ = typeof obj, prop;
        if (depth && typ == "object") {
          for (prop in obj) {
            try {
              result.push(flatten(obj[prop], depth - 1));
            } catch (e) {
            }
          }
        }
        return result.length ? result : typ == "string" ? obj : obj + "\0";
      }
      function mixkey(seed, key) {
        var stringseed = seed + "", smear, j = 0;
        while (j < stringseed.length) {
          key[mask & j] = mask & (smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++);
        }
        return tostring(key);
      }
      function autoseed() {
        try {
          var out;
          if (nodecrypto && (out = nodecrypto.randomBytes)) {
            out = out(width);
          } else {
            out = new Uint8Array(width);
            (global2.crypto || global2.msCrypto).getRandomValues(out);
          }
          return tostring(out);
        } catch (e) {
          var browser = global2.navigator, plugins = browser && browser.plugins;
          return [+/* @__PURE__ */ new Date(), global2, plugins, global2.screen, tostring(pool)];
        }
      }
      function tostring(a) {
        return String.fromCharCode.apply(0, a);
      }
      mixkey(math.random(), pool);
      if (module.exports) {
        module.exports = seedrandom2;
        try {
          nodecrypto = __require("crypto");
        } catch (ex) {
        }
      } else {
        math["seed" + rngname] = seedrandom2;
      }
    })(
      // global: `self` in browsers (including strict mode and web workers),
      // otherwise `this` in Node and other environments
      typeof self !== "undefined" ? self : commonjsGlobal,
      [],
      // pool: entropy pool starts empty
      Math
      // math: package containing random, pow, and seedrandom
    );
  })(seedrandom$2);
  var seedrandomExports = seedrandom$2.exports;
  var alea = aleaExports;
  var xor128 = xor128Exports;
  var xorwow = xorwowExports;
  var xorshift7 = xorshift7Exports;
  var xor4096 = xor4096Exports;
  var tychei = tycheiExports;
  var sr = seedrandomExports;
  sr.alea = alea;
  sr.xor128 = xor128;
  sr.xorwow = xorwow;
  sr.xorshift7 = xorshift7;
  sr.xor4096 = xor4096;
  sr.tychei = tychei;
  var seedrandom$1 = sr;
  var seedrandom = seedrandom$1;
  var wordList = [
    // Borrowed from xkcd password generator which borrowed it from wherever
    "ability",
    "able",
    "aboard",
    "about",
    "above",
    "accept",
    "accident",
    "according",
    "account",
    "accurate",
    "acres",
    "across",
    "act",
    "action",
    "active",
    "activity",
    "actual",
    "actually",
    "add",
    "addition",
    "additional",
    "adjective",
    "adult",
    "adventure",
    "advice",
    "affect",
    "afraid",
    "after",
    "afternoon",
    "again",
    "against",
    "age",
    "ago",
    "agree",
    "ahead",
    "aid",
    "air",
    "airplane",
    "alike",
    "alive",
    "all",
    "allow",
    "almost",
    "alone",
    "along",
    "aloud",
    "alphabet",
    "already",
    "also",
    "although",
    "am",
    "among",
    "amount",
    "ancient",
    "angle",
    "angry",
    "animal",
    "announced",
    "another",
    "answer",
    "ants",
    "any",
    "anybody",
    "anyone",
    "anything",
    "anyway",
    "anywhere",
    "apart",
    "apartment",
    "appearance",
    "apple",
    "applied",
    "appropriate",
    "are",
    "area",
    "arm",
    "army",
    "around",
    "arrange",
    "arrangement",
    "arrive",
    "arrow",
    "art",
    "article",
    "as",
    "aside",
    "ask",
    "asleep",
    "at",
    "ate",
    "atmosphere",
    "atom",
    "atomic",
    "attached",
    "attack",
    "attempt",
    "attention",
    "audience",
    "author",
    "automobile",
    "available",
    "average",
    "avoid",
    "aware",
    "away",
    "baby",
    "back",
    "bad",
    "badly",
    "bag",
    "balance",
    "ball",
    "balloon",
    "band",
    "bank",
    "bar",
    "bare",
    "bark",
    "barn",
    "base",
    "baseball",
    "basic",
    "basis",
    "basket",
    "bat",
    "battle",
    "be",
    "bean",
    "bear",
    "beat",
    "beautiful",
    "beauty",
    "became",
    "because",
    "become",
    "becoming",
    "bee",
    "been",
    "before",
    "began",
    "beginning",
    "begun",
    "behavior",
    "behind",
    "being",
    "believed",
    "bell",
    "belong",
    "below",
    "belt",
    "bend",
    "beneath",
    "bent",
    "beside",
    "best",
    "bet",
    "better",
    "between",
    "beyond",
    "bicycle",
    "bigger",
    "biggest",
    "bill",
    "birds",
    "birth",
    "birthday",
    "bit",
    "bite",
    "black",
    "blank",
    "blanket",
    "blew",
    "blind",
    "block",
    "blood",
    "blow",
    "blue",
    "board",
    "boat",
    "body",
    "bone",
    "book",
    "border",
    "born",
    "both",
    "bottle",
    "bottom",
    "bound",
    "bow",
    "bowl",
    "box",
    "boy",
    "brain",
    "branch",
    "brass",
    "brave",
    "bread",
    "break",
    "breakfast",
    "breath",
    "breathe",
    "breathing",
    "breeze",
    "brick",
    "bridge",
    "brief",
    "bright",
    "bring",
    "broad",
    "broke",
    "broken",
    "brother",
    "brought",
    "brown",
    "brush",
    "buffalo",
    "build",
    "building",
    "built",
    "buried",
    "burn",
    "burst",
    "bus",
    "bush",
    "business",
    "busy",
    "but",
    "butter",
    "buy",
    "by",
    "cabin",
    "cage",
    "cake",
    "call",
    "calm",
    "came",
    "camera",
    "camp",
    "can",
    "canal",
    "cannot",
    "cap",
    "capital",
    "captain",
    "captured",
    "car",
    "carbon",
    "card",
    "care",
    "careful",
    "carefully",
    "carried",
    "carry",
    "case",
    "cast",
    "castle",
    "cat",
    "catch",
    "cattle",
    "caught",
    "cause",
    "cave",
    "cell",
    "cent",
    "center",
    "central",
    "century",
    "certain",
    "certainly",
    "chain",
    "chair",
    "chamber",
    "chance",
    "change",
    "changing",
    "chapter",
    "character",
    "characteristic",
    "charge",
    "chart",
    "check",
    "cheese",
    "chemical",
    "chest",
    "chicken",
    "chief",
    "child",
    "children",
    "choice",
    "choose",
    "chose",
    "chosen",
    "church",
    "circle",
    "circus",
    "citizen",
    "city",
    "class",
    "classroom",
    "claws",
    "clay",
    "clean",
    "clear",
    "clearly",
    "climate",
    "climb",
    "clock",
    "close",
    "closely",
    "closer",
    "cloth",
    "clothes",
    "clothing",
    "cloud",
    "club",
    "coach",
    "coal",
    "coast",
    "coat",
    "coffee",
    "cold",
    "collect",
    "college",
    "colony",
    "color",
    "column",
    "combination",
    "combine",
    "come",
    "comfortable",
    "coming",
    "command",
    "common",
    "community",
    "company",
    "compare",
    "compass",
    "complete",
    "completely",
    "complex",
    "composed",
    "composition",
    "compound",
    "concerned",
    "condition",
    "congress",
    "connected",
    "consider",
    "consist",
    "consonant",
    "constantly",
    "construction",
    "contain",
    "continent",
    "continued",
    "contrast",
    "control",
    "conversation",
    "cook",
    "cookies",
    "cool",
    "copper",
    "copy",
    "corn",
    "corner",
    "correct",
    "correctly",
    "cost",
    "cotton",
    "could",
    "count",
    "country",
    "couple",
    "courage",
    "course",
    "court",
    "cover",
    "cow",
    "cowboy",
    "crack",
    "cream",
    "create",
    "creature",
    "crew",
    "crop",
    "cross",
    "crowd",
    "cry",
    "cup",
    "curious",
    "current",
    "curve",
    "customs",
    "cut",
    "cutting",
    "daily",
    "damage",
    "dance",
    "danger",
    "dangerous",
    "dark",
    "darkness",
    "date",
    "daughter",
    "dawn",
    "day",
    "dead",
    "deal",
    "dear",
    "death",
    "decide",
    "declared",
    "deep",
    "deeply",
    "deer",
    "definition",
    "degree",
    "depend",
    "depth",
    "describe",
    "desert",
    "design",
    "desk",
    "detail",
    "determine",
    "develop",
    "development",
    "diagram",
    "diameter",
    "did",
    "die",
    "differ",
    "difference",
    "different",
    "difficult",
    "difficulty",
    "dig",
    "dinner",
    "direct",
    "direction",
    "directly",
    "dirt",
    "dirty",
    "disappear",
    "discover",
    "discovery",
    "discuss",
    "discussion",
    "disease",
    "dish",
    "distance",
    "distant",
    "divide",
    "division",
    "do",
    "doctor",
    "does",
    "dog",
    "doing",
    "doll",
    "dollar",
    "done",
    "donkey",
    "door",
    "dot",
    "double",
    "doubt",
    "down",
    "dozen",
    "draw",
    "drawn",
    "dream",
    "dress",
    "drew",
    "dried",
    "drink",
    "drive",
    "driven",
    "driver",
    "driving",
    "drop",
    "dropped",
    "drove",
    "dry",
    "duck",
    "due",
    "dug",
    "dull",
    "during",
    "dust",
    "duty",
    "each",
    "eager",
    "ear",
    "earlier",
    "early",
    "earn",
    "earth",
    "easier",
    "easily",
    "east",
    "easy",
    "eat",
    "eaten",
    "edge",
    "education",
    "effect",
    "effort",
    "egg",
    "eight",
    "either",
    "electric",
    "electricity",
    "element",
    "elephant",
    "eleven",
    "else",
    "empty",
    "end",
    "enemy",
    "energy",
    "engine",
    "engineer",
    "enjoy",
    "enough",
    "enter",
    "entire",
    "entirely",
    "environment",
    "equal",
    "equally",
    "equator",
    "equipment",
    "escape",
    "especially",
    "essential",
    "establish",
    "even",
    "evening",
    "event",
    "eventually",
    "ever",
    "every",
    "everybody",
    "everyone",
    "everything",
    "everywhere",
    "evidence",
    "exact",
    "exactly",
    "examine",
    "example",
    "excellent",
    "except",
    "exchange",
    "excited",
    "excitement",
    "exciting",
    "exclaimed",
    "exercise",
    "exist",
    "expect",
    "experience",
    "experiment",
    "explain",
    "explanation",
    "explore",
    "express",
    "expression",
    "extra",
    "eye",
    "face",
    "facing",
    "fact",
    "factor",
    "factory",
    "failed",
    "fair",
    "fairly",
    "fall",
    "fallen",
    "familiar",
    "family",
    "famous",
    "far",
    "farm",
    "farmer",
    "farther",
    "fast",
    "fastened",
    "faster",
    "fat",
    "father",
    "favorite",
    "fear",
    "feathers",
    "feature",
    "fed",
    "feed",
    "feel",
    "feet",
    "fell",
    "fellow",
    "felt",
    "fence",
    "few",
    "fewer",
    "field",
    "fierce",
    "fifteen",
    "fifth",
    "fifty",
    "fight",
    "fighting",
    "figure",
    "fill",
    "film",
    "final",
    "finally",
    "find",
    "fine",
    "finest",
    "finger",
    "finish",
    "fire",
    "fireplace",
    "firm",
    "first",
    "fish",
    "five",
    "fix",
    "flag",
    "flame",
    "flat",
    "flew",
    "flies",
    "flight",
    "floating",
    "floor",
    "flow",
    "flower",
    "fly",
    "fog",
    "folks",
    "follow",
    "food",
    "foot",
    "football",
    "for",
    "force",
    "foreign",
    "forest",
    "forget",
    "forgot",
    "forgotten",
    "form",
    "former",
    "fort",
    "forth",
    "forty",
    "forward",
    "fought",
    "found",
    "four",
    "fourth",
    "fox",
    "frame",
    "free",
    "freedom",
    "frequently",
    "fresh",
    "friend",
    "friendly",
    "frighten",
    "frog",
    "from",
    "front",
    "frozen",
    "fruit",
    "fuel",
    "full",
    "fully",
    "fun",
    "function",
    "funny",
    "fur",
    "furniture",
    "further",
    "future",
    "gain",
    "game",
    "garage",
    "garden",
    "gas",
    "gasoline",
    "gate",
    "gather",
    "gave",
    "general",
    "generally",
    "gentle",
    "gently",
    "get",
    "getting",
    "giant",
    "gift",
    "girl",
    "give",
    "given",
    "giving",
    "glad",
    "glass",
    "globe",
    "go",
    "goes",
    "gold",
    "golden",
    "gone",
    "good",
    "goose",
    "got",
    "government",
    "grabbed",
    "grade",
    "gradually",
    "grain",
    "grandfather",
    "grandmother",
    "graph",
    "grass",
    "gravity",
    "gray",
    "great",
    "greater",
    "greatest",
    "greatly",
    "green",
    "grew",
    "ground",
    "group",
    "grow",
    "grown",
    "growth",
    "guard",
    "guess",
    "guide",
    "gulf",
    "gun",
    "habit",
    "had",
    "hair",
    "half",
    "halfway",
    "hall",
    "hand",
    "handle",
    "handsome",
    "hang",
    "happen",
    "happened",
    "happily",
    "happy",
    "harbor",
    "hard",
    "harder",
    "hardly",
    "has",
    "hat",
    "have",
    "having",
    "hay",
    "he",
    "headed",
    "heading",
    "health",
    "heard",
    "hearing",
    "heart",
    "heat",
    "heavy",
    "height",
    "held",
    "hello",
    "help",
    "helpful",
    "her",
    "herd",
    "here",
    "herself",
    "hidden",
    "hide",
    "high",
    "higher",
    "highest",
    "highway",
    "hill",
    "him",
    "himself",
    "his",
    "history",
    "hit",
    "hold",
    "hole",
    "hollow",
    "home",
    "honor",
    "hope",
    "horn",
    "horse",
    "hospital",
    "hot",
    "hour",
    "house",
    "how",
    "however",
    "huge",
    "human",
    "hundred",
    "hung",
    "hungry",
    "hunt",
    "hunter",
    "hurried",
    "hurry",
    "hurt",
    "husband",
    "ice",
    "idea",
    "identity",
    "if",
    "ill",
    "image",
    "imagine",
    "immediately",
    "importance",
    "important",
    "impossible",
    "improve",
    "in",
    "inch",
    "include",
    "including",
    "income",
    "increase",
    "indeed",
    "independent",
    "indicate",
    "individual",
    "industrial",
    "industry",
    "influence",
    "information",
    "inside",
    "instance",
    "instant",
    "instead",
    "instrument",
    "interest",
    "interior",
    "into",
    "introduced",
    "invented",
    "involved",
    "iron",
    "is",
    "island",
    "it",
    "its",
    "itself",
    "jack",
    "jar",
    "jet",
    "job",
    "join",
    "joined",
    "journey",
    "joy",
    "judge",
    "jump",
    "jungle",
    "just",
    "keep",
    "kept",
    "key",
    "kids",
    "kill",
    "kind",
    "kitchen",
    "knew",
    "knife",
    "know",
    "knowledge",
    "known",
    "label",
    "labor",
    "lack",
    "lady",
    "laid",
    "lake",
    "lamp",
    "land",
    "language",
    "large",
    "larger",
    "largest",
    "last",
    "late",
    "later",
    "laugh",
    "law",
    "lay",
    "layers",
    "lead",
    "leader",
    "leaf",
    "learn",
    "least",
    "leather",
    "leave",
    "leaving",
    "led",
    "left",
    "leg",
    "length",
    "lesson",
    "let",
    "letter",
    "level",
    "library",
    "lie",
    "life",
    "lift",
    "light",
    "like",
    "likely",
    "limited",
    "line",
    "lion",
    "lips",
    "liquid",
    "list",
    "listen",
    "little",
    "live",
    "living",
    "load",
    "local",
    "locate",
    "location",
    "log",
    "lonely",
    "long",
    "longer",
    "look",
    "loose",
    "lose",
    "loss",
    "lost",
    "lot",
    "loud",
    "love",
    "lovely",
    "low",
    "lower",
    "luck",
    "lucky",
    "lunch",
    "lungs",
    "lying",
    "machine",
    "machinery",
    "mad",
    "made",
    "magic",
    "magnet",
    "mail",
    "main",
    "mainly",
    "major",
    "make",
    "making",
    "man",
    "managed",
    "manner",
    "manufacturing",
    "many",
    "map",
    "mark",
    "market",
    "married",
    "mass",
    "massage",
    "master",
    "material",
    "mathematics",
    "matter",
    "may",
    "maybe",
    "me",
    "meal",
    "mean",
    "means",
    "meant",
    "measure",
    "meat",
    "medicine",
    "meet",
    "melted",
    "member",
    "memory",
    "men",
    "mental",
    "merely",
    "met",
    "metal",
    "method",
    "mice",
    "middle",
    "might",
    "mighty",
    "mile",
    "military",
    "milk",
    "mill",
    "mind",
    "mine",
    "minerals",
    "minute",
    "mirror",
    "missing",
    "mission",
    "mistake",
    "mix",
    "mixture",
    "model",
    "modern",
    "molecular",
    "moment",
    "money",
    "monkey",
    "month",
    "mood",
    "moon",
    "more",
    "morning",
    "most",
    "mostly",
    "mother",
    "motion",
    "motor",
    "mountain",
    "mouse",
    "mouth",
    "move",
    "movement",
    "movie",
    "moving",
    "mud",
    "muscle",
    "music",
    "musical",
    "must",
    "my",
    "myself",
    "mysterious",
    "nails",
    "name",
    "nation",
    "national",
    "native",
    "natural",
    "naturally",
    "nature",
    "near",
    "nearby",
    "nearer",
    "nearest",
    "nearly",
    "necessary",
    "neck",
    "needed",
    "needle",
    "needs",
    "negative",
    "neighbor",
    "neighborhood",
    "nervous",
    "nest",
    "never",
    "new",
    "news",
    "newspaper",
    "next",
    "nice",
    "night",
    "nine",
    "no",
    "nobody",
    "nodded",
    "noise",
    "none",
    "noon",
    "nor",
    "north",
    "nose",
    "not",
    "note",
    "noted",
    "nothing",
    "notice",
    "noun",
    "now",
    "number",
    "numeral",
    "nuts",
    "object",
    "observe",
    "obtain",
    "occasionally",
    "occur",
    "ocean",
    "of",
    "off",
    "offer",
    "office",
    "officer",
    "official",
    "oil",
    "old",
    "older",
    "oldest",
    "on",
    "once",
    "one",
    "only",
    "onto",
    "open",
    "operation",
    "opinion",
    "opportunity",
    "opposite",
    "or",
    "orange",
    "orbit",
    "order",
    "ordinary",
    "organization",
    "organized",
    "origin",
    "original",
    "other",
    "ought",
    "our",
    "ourselves",
    "out",
    "outer",
    "outline",
    "outside",
    "over",
    "own",
    "owner",
    "oxygen",
    "pack",
    "package",
    "page",
    "paid",
    "pain",
    "paint",
    "pair",
    "palace",
    "pale",
    "pan",
    "paper",
    "paragraph",
    "parallel",
    "parent",
    "park",
    "part",
    "particles",
    "particular",
    "particularly",
    "partly",
    "parts",
    "party",
    "pass",
    "passage",
    "past",
    "path",
    "pattern",
    "pay",
    "peace",
    "pen",
    "pencil",
    "people",
    "per",
    "percent",
    "perfect",
    "perfectly",
    "perhaps",
    "period",
    "person",
    "personal",
    "pet",
    "phrase",
    "physical",
    "piano",
    "pick",
    "picture",
    "pictured",
    "pie",
    "piece",
    "pig",
    "pile",
    "pilot",
    "pine",
    "pink",
    "pipe",
    "pitch",
    "place",
    "plain",
    "plan",
    "plane",
    "planet",
    "planned",
    "planning",
    "plant",
    "plastic",
    "plate",
    "plates",
    "play",
    "pleasant",
    "please",
    "pleasure",
    "plenty",
    "plural",
    "plus",
    "pocket",
    "poem",
    "poet",
    "poetry",
    "point",
    "pole",
    "police",
    "policeman",
    "political",
    "pond",
    "pony",
    "pool",
    "poor",
    "popular",
    "population",
    "porch",
    "port",
    "position",
    "positive",
    "possible",
    "possibly",
    "post",
    "pot",
    "potatoes",
    "pound",
    "pour",
    "powder",
    "power",
    "powerful",
    "practical",
    "practice",
    "prepare",
    "present",
    "president",
    "press",
    "pressure",
    "pretty",
    "prevent",
    "previous",
    "price",
    "pride",
    "primitive",
    "principal",
    "principle",
    "printed",
    "private",
    "prize",
    "probably",
    "problem",
    "process",
    "produce",
    "product",
    "production",
    "program",
    "progress",
    "promised",
    "proper",
    "properly",
    "property",
    "protection",
    "proud",
    "prove",
    "provide",
    "public",
    "pull",
    "pupil",
    "pure",
    "purple",
    "purpose",
    "push",
    "put",
    "putting",
    "quarter",
    "queen",
    "question",
    "quick",
    "quickly",
    "quiet",
    "quietly",
    "quite",
    "rabbit",
    "race",
    "radio",
    "railroad",
    "rain",
    "raise",
    "ran",
    "ranch",
    "range",
    "rapidly",
    "rate",
    "rather",
    "raw",
    "rays",
    "reach",
    "read",
    "reader",
    "ready",
    "real",
    "realize",
    "rear",
    "reason",
    "recall",
    "receive",
    "recent",
    "recently",
    "recognize",
    "record",
    "red",
    "refer",
    "refused",
    "region",
    "regular",
    "related",
    "relationship",
    "religious",
    "remain",
    "remarkable",
    "remember",
    "remove",
    "repeat",
    "replace",
    "replied",
    "report",
    "represent",
    "require",
    "research",
    "respect",
    "rest",
    "result",
    "return",
    "review",
    "rhyme",
    "rhythm",
    "rice",
    "rich",
    "ride",
    "riding",
    "right",
    "ring",
    "rise",
    "rising",
    "river",
    "road",
    "roar",
    "rock",
    "rocket",
    "rocky",
    "rod",
    "roll",
    "roof",
    "room",
    "root",
    "rope",
    "rose",
    "rough",
    "round",
    "route",
    "row",
    "rubbed",
    "rubber",
    "rule",
    "ruler",
    "run",
    "running",
    "rush",
    "sad",
    "saddle",
    "safe",
    "safety",
    "said",
    "sail",
    "sale",
    "salmon",
    "salt",
    "same",
    "sand",
    "sang",
    "sat",
    "satellites",
    "satisfied",
    "save",
    "saved",
    "saw",
    "say",
    "scale",
    "scared",
    "scene",
    "school",
    "science",
    "scientific",
    "scientist",
    "score",
    "screen",
    "sea",
    "search",
    "season",
    "seat",
    "second",
    "secret",
    "section",
    "see",
    "seed",
    "seeing",
    "seems",
    "seen",
    "seldom",
    "select",
    "selection",
    "sell",
    "send",
    "sense",
    "sent",
    "sentence",
    "separate",
    "series",
    "serious",
    "serve",
    "service",
    "sets",
    "setting",
    "settle",
    "settlers",
    "seven",
    "several",
    "shade",
    "shadow",
    "shake",
    "shaking",
    "shall",
    "shallow",
    "shape",
    "share",
    "sharp",
    "she",
    "sheep",
    "sheet",
    "shelf",
    "shells",
    "shelter",
    "shine",
    "shinning",
    "ship",
    "shirt",
    "shoe",
    "shoot",
    "shop",
    "shore",
    "short",
    "shorter",
    "shot",
    "should",
    "shoulder",
    "shout",
    "show",
    "shown",
    "shut",
    "sick",
    "sides",
    "sight",
    "sign",
    "signal",
    "silence",
    "silent",
    "silk",
    "silly",
    "silver",
    "similar",
    "simple",
    "simplest",
    "simply",
    "since",
    "sing",
    "single",
    "sink",
    "sister",
    "sit",
    "sitting",
    "situation",
    "six",
    "size",
    "skill",
    "skin",
    "sky",
    "slabs",
    "slave",
    "sleep",
    "slept",
    "slide",
    "slight",
    "slightly",
    "slip",
    "slipped",
    "slope",
    "slow",
    "slowly",
    "small",
    "smaller",
    "smallest",
    "smell",
    "smile",
    "smoke",
    "smooth",
    "snake",
    "snow",
    "so",
    "soap",
    "social",
    "society",
    "soft",
    "softly",
    "soil",
    "solar",
    "sold",
    "soldier",
    "solid",
    "solution",
    "solve",
    "some",
    "somebody",
    "somehow",
    "someone",
    "something",
    "sometime",
    "somewhere",
    "son",
    "song",
    "soon",
    "sort",
    "sound",
    "source",
    "south",
    "southern",
    "space",
    "speak",
    "special",
    "species",
    "specific",
    "speech",
    "speed",
    "spell",
    "spend",
    "spent",
    "spider",
    "spin",
    "spirit",
    "spite",
    "split",
    "spoken",
    "sport",
    "spread",
    "spring",
    "square",
    "stage",
    "stairs",
    "stand",
    "standard",
    "star",
    "stared",
    "start",
    "state",
    "statement",
    "station",
    "stay",
    "steady",
    "steam",
    "steel",
    "steep",
    "stems",
    "step",
    "stepped",
    "stick",
    "stiff",
    "still",
    "stock",
    "stomach",
    "stone",
    "stood",
    "stop",
    "stopped",
    "store",
    "storm",
    "story",
    "stove",
    "straight",
    "strange",
    "stranger",
    "straw",
    "stream",
    "street",
    "strength",
    "stretch",
    "strike",
    "string",
    "strip",
    "strong",
    "stronger",
    "struck",
    "structure",
    "struggle",
    "stuck",
    "student",
    "studied",
    "studying",
    "subject",
    "substance",
    "success",
    "successful",
    "such",
    "sudden",
    "suddenly",
    "sugar",
    "suggest",
    "suit",
    "sum",
    "summer",
    "sun",
    "sunlight",
    "supper",
    "supply",
    "support",
    "suppose",
    "sure",
    "surface",
    "surprise",
    "surrounded",
    "swam",
    "sweet",
    "swept",
    "swim",
    "swimming",
    "swing",
    "swung",
    "syllable",
    "symbol",
    "system",
    "table",
    "tail",
    "take",
    "taken",
    "tales",
    "talk",
    "tall",
    "tank",
    "tape",
    "task",
    "taste",
    "taught",
    "tax",
    "tea",
    "teach",
    "teacher",
    "team",
    "tears",
    "teeth",
    "telephone",
    "television",
    "tell",
    "temperature",
    "ten",
    "tent",
    "term",
    "terrible",
    "test",
    "than",
    "thank",
    "that",
    "thee",
    "them",
    "themselves",
    "then",
    "theory",
    "there",
    "therefore",
    "these",
    "they",
    "thick",
    "thin",
    "thing",
    "think",
    "third",
    "thirty",
    "this",
    "those",
    "thou",
    "though",
    "thought",
    "thousand",
    "thread",
    "three",
    "threw",
    "throat",
    "through",
    "throughout",
    "throw",
    "thrown",
    "thumb",
    "thus",
    "thy",
    "tide",
    "tie",
    "tight",
    "tightly",
    "till",
    "time",
    "tin",
    "tiny",
    "tip",
    "tired",
    "title",
    "to",
    "tobacco",
    "today",
    "together",
    "told",
    "tomorrow",
    "tone",
    "tongue",
    "tonight",
    "too",
    "took",
    "tool",
    "top",
    "topic",
    "torn",
    "total",
    "touch",
    "toward",
    "tower",
    "town",
    "toy",
    "trace",
    "track",
    "trade",
    "traffic",
    "trail",
    "train",
    "transportation",
    "trap",
    "travel",
    "treated",
    "tree",
    "triangle",
    "tribe",
    "trick",
    "tried",
    "trip",
    "troops",
    "tropical",
    "trouble",
    "truck",
    "trunk",
    "truth",
    "try",
    "tube",
    "tune",
    "turn",
    "twelve",
    "twenty",
    "twice",
    "two",
    "type",
    "typical",
    "uncle",
    "under",
    "underline",
    "understanding",
    "unhappy",
    "union",
    "unit",
    "universe",
    "unknown",
    "unless",
    "until",
    "unusual",
    "up",
    "upon",
    "upper",
    "upward",
    "us",
    "use",
    "useful",
    "using",
    "usual",
    "usually",
    "valley",
    "valuable",
    "value",
    "vapor",
    "variety",
    "various",
    "vast",
    "vegetable",
    "verb",
    "vertical",
    "very",
    "vessels",
    "victory",
    "view",
    "village",
    "visit",
    "visitor",
    "voice",
    "volume",
    "vote",
    "vowel",
    "voyage",
    "wagon",
    "wait",
    "walk",
    "wall",
    "want",
    "war",
    "warm",
    "warn",
    "was",
    "wash",
    "waste",
    "watch",
    "water",
    "wave",
    "way",
    "we",
    "weak",
    "wealth",
    "wear",
    "weather",
    "week",
    "weigh",
    "weight",
    "welcome",
    "well",
    "went",
    "were",
    "west",
    "western",
    "wet",
    "whale",
    "what",
    "whatever",
    "wheat",
    "wheel",
    "when",
    "whenever",
    "where",
    "wherever",
    "whether",
    "which",
    "while",
    "whispered",
    "whistle",
    "white",
    "who",
    "whole",
    "whom",
    "whose",
    "why",
    "wide",
    "widely",
    "wife",
    "wild",
    "will",
    "willing",
    "win",
    "wind",
    "window",
    "wing",
    "winter",
    "wire",
    "wise",
    "wish",
    "with",
    "within",
    "without",
    "wolf",
    "women",
    "won",
    "wonder",
    "wonderful",
    "wood",
    "wooden",
    "wool",
    "word",
    "wore",
    "work",
    "worker",
    "world",
    "worried",
    "worry",
    "worse",
    "worth",
    "would",
    "wrapped",
    "write",
    "writer",
    "writing",
    "written",
    "wrong",
    "wrote",
    "yard",
    "year",
    "yellow",
    "yes",
    "yesterday",
    "yet",
    "you",
    "young",
    "younger",
    "your",
    "yourself",
    "youth",
    "zero",
    "zebra",
    "zipper",
    "zoo",
    "zulu"
  ];
  function words(options) {
    const random = options?.seed ? new seedrandom(options.seed) : null;
    function word() {
      if (options && options.maxLength > 1) {
        return generateWordWithMaxLength();
      } else {
        return generateRandomWord();
      }
    }
    function generateWordWithMaxLength() {
      var rightSize = false;
      var wordUsed;
      while (!rightSize) {
        wordUsed = generateRandomWord();
        if (wordUsed.length <= options.maxLength) {
          rightSize = true;
        }
      }
      return wordUsed;
    }
    function generateRandomWord() {
      return wordList[randInt(wordList.length)];
    }
    function randInt(lessThan) {
      const r = random ? random() : Math.random();
      return Math.floor(r * lessThan);
    }
    if (typeof options === "undefined") {
      return word();
    }
    if (typeof options === "number") {
      options = { exactly: options };
    }
    if (options.exactly) {
      options.min = options.exactly;
      options.max = options.exactly;
    }
    if (typeof options.wordsPerString !== "number") {
      options.wordsPerString = 1;
    }
    if (typeof options.formatter !== "function") {
      options.formatter = (word2) => word2;
    }
    if (typeof options.separator !== "string") {
      options.separator = " ";
    }
    var total = options.min + randInt(options.max + 1 - options.min);
    var results = [];
    var token = "";
    var relativeIndex = 0;
    for (var i = 0; i < total * options.wordsPerString; i++) {
      if (relativeIndex === options.wordsPerString - 1) {
        token += options.formatter(word(), relativeIndex);
      } else {
        token += options.formatter(word(), relativeIndex) + options.separator;
      }
      relativeIndex++;
      if ((i + 1) % options.wordsPerString === 0) {
        results.push(token);
        token = "";
        relativeIndex = 0;
      }
    }
    if (typeof options.join === "string") {
      results = results.join(options.join);
    }
    return results;
  }
  words.wordList = wordList;
  if (typeof window !== "undefined" && window.hasOwnProperty("webkitAudioContext") && !window.hasOwnProperty("AudioContext")) {
    window.AudioContext = webkitAudioContext;
  }

  // experiment/node_modules/@jspsych/plugin-html-button-response/dist/index.js
  var info = {
    name: "html-button-response",
    parameters: {
      /** The HTML string to be displayed */
      stimulus: {
        type: ParameterType.HTML_STRING,
        pretty_name: "Stimulus",
        default: void 0
      },
      /** Array containing the label(s) for the button(s). */
      choices: {
        type: ParameterType.STRING,
        pretty_name: "Choices",
        default: void 0,
        array: true
      },
      /** The HTML for creating button. Can create own style. Use the "%choice%" string to indicate where the label from the choices parameter should be inserted. */
      button_html: {
        type: ParameterType.HTML_STRING,
        pretty_name: "Button HTML",
        default: '<button class="jspsych-btn">%choice%</button>',
        array: true
      },
      /** Any content here will be displayed under the button(s). */
      prompt: {
        type: ParameterType.HTML_STRING,
        pretty_name: "Prompt",
        default: null
      },
      /** How long to show the stimulus. */
      stimulus_duration: {
        type: ParameterType.INT,
        pretty_name: "Stimulus duration",
        default: null
      },
      /** How long to show the trial. */
      trial_duration: {
        type: ParameterType.INT,
        pretty_name: "Trial duration",
        default: null
      },
      /** The vertical margin of the button. */
      margin_vertical: {
        type: ParameterType.STRING,
        pretty_name: "Margin vertical",
        default: "0px"
      },
      /** The horizontal margin of the button. */
      margin_horizontal: {
        type: ParameterType.STRING,
        pretty_name: "Margin horizontal",
        default: "8px"
      },
      /** If true, then trial will end when user responds. */
      response_ends_trial: {
        type: ParameterType.BOOL,
        pretty_name: "Response ends trial",
        default: true
      },
      /** The delay of enabling button */
      enable_button_after: {
        type: ParameterType.INT,
        pretty_name: "Enable button after",
        default: 0
      }
    }
  };
  var HtmlButtonResponsePlugin = class {
    constructor(jsPsych) {
      this.jsPsych = jsPsych;
    }
    trial(display_element, trial) {
      var html = '<div id="jspsych-html-button-response-stimulus">' + trial.stimulus + "</div>";
      var buttons = [];
      if (Array.isArray(trial.button_html)) {
        if (trial.button_html.length == trial.choices.length) {
          buttons = trial.button_html;
        } else {
          console.error("Error in html-button-response plugin. The length of the button_html array does not equal the length of the choices array");
        }
      } else {
        for (var i = 0; i < trial.choices.length; i++) {
          buttons.push(trial.button_html);
        }
      }
      html += '<div id="jspsych-html-button-response-btngroup">';
      for (var i = 0; i < trial.choices.length; i++) {
        var str = buttons[i].replace(/%choice%/g, trial.choices[i]);
        html += '<div class="jspsych-html-button-response-button" style="display: inline-block; margin:' + trial.margin_vertical + " " + trial.margin_horizontal + '" id="jspsych-html-button-response-button-' + i + '" data-choice="' + i + '">' + str + "</div>";
      }
      html += "</div>";
      if (trial.prompt !== null) {
        html += trial.prompt;
      }
      display_element.innerHTML = html;
      var start_time = performance.now();
      for (var i = 0; i < trial.choices.length; i++) {
        display_element.querySelector("#jspsych-html-button-response-button-" + i).addEventListener("click", (e) => {
          var btn_el = e.currentTarget;
          var choice = btn_el.getAttribute("data-choice");
          after_response(choice);
        });
      }
      var response = {
        rt: null,
        button: null
      };
      const end_trial = () => {
        this.jsPsych.pluginAPI.clearAllTimeouts();
        var trial_data = {
          rt: response.rt,
          stimulus: trial.stimulus,
          response: response.button
        };
        display_element.innerHTML = "";
        this.jsPsych.finishTrial(trial_data);
      };
      function after_response(choice) {
        var end_time = performance.now();
        var rt = Math.round(end_time - start_time);
        response.button = parseInt(choice);
        response.rt = rt;
        display_element.querySelector("#jspsych-html-button-response-stimulus").className += " responded";
        var btns2 = document.querySelectorAll(".jspsych-html-button-response-button button");
        for (var i2 = 0; i2 < btns2.length; i2++) {
          btns2[i2].setAttribute("disabled", "disabled");
        }
        if (trial.response_ends_trial) {
          end_trial();
        }
      }
      if (trial.stimulus_duration !== null) {
        this.jsPsych.pluginAPI.setTimeout(() => {
          display_element.querySelector("#jspsych-html-button-response-stimulus").style.visibility = "hidden";
        }, trial.stimulus_duration);
      }
      if (trial.enable_button_after > 0) {
        var btns = document.querySelectorAll(".jspsych-html-button-response-button button");
        for (var i = 0; i < btns.length; i++) {
          btns[i].setAttribute("disabled", "disabled");
        }
        this.jsPsych.pluginAPI.setTimeout(() => {
          var btns2 = document.querySelectorAll(".jspsych-html-button-response-button button");
          for (var i2 = 0; i2 < btns2.length; i2++) {
            btns2[i2].removeAttribute("disabled");
          }
        }, trial.enable_button_after);
      }
      if (trial.trial_duration !== null) {
        this.jsPsych.pluginAPI.setTimeout(end_trial, trial.trial_duration);
      }
    }
    simulate(trial, simulation_mode, simulation_options, load_callback) {
      if (simulation_mode == "data-only") {
        load_callback();
        this.simulate_data_only(trial, simulation_options);
      }
      if (simulation_mode == "visual") {
        this.simulate_visual(trial, simulation_options, load_callback);
      }
    }
    create_simulation_data(trial, simulation_options) {
      const default_data = {
        stimulus: trial.stimulus,
        rt: this.jsPsych.randomization.sampleExGaussian(500, 50, 1 / 150, true) + trial.enable_button_after,
        response: this.jsPsych.randomization.randomInt(0, trial.choices.length - 1)
      };
      const data = this.jsPsych.pluginAPI.mergeSimulationData(default_data, simulation_options);
      this.jsPsych.pluginAPI.ensureSimulationDataConsistency(trial, data);
      return data;
    }
    simulate_data_only(trial, simulation_options) {
      const data = this.create_simulation_data(trial, simulation_options);
      this.jsPsych.finishTrial(data);
    }
    simulate_visual(trial, simulation_options, load_callback) {
      const data = this.create_simulation_data(trial, simulation_options);
      const display_element = this.jsPsych.getDisplayElement();
      this.trial(display_element, trial);
      load_callback();
      if (data.rt !== null) {
        this.jsPsych.pluginAPI.clickTarget(display_element.querySelector(`div[data-choice="${data.response}"] button`), data.rt);
      }
    }
  };
  HtmlButtonResponsePlugin.info = info;

  // experiment/src/passages.js
  var passages = [
    {
      title: "T. rex's Tiny Arms",
      sentences: [
        { "num": 1, "sent": "Tyrannosaurus rex is one of the most famous dinosaurs ever.", "distractor": "--- pies vote meet mike idea touch clubs throttle feels.", "img": "trex_recon.jpg", "credit": "by Nobu Tamura (CC-BY-SA)" },
        { "num": 2, "sent": "For such a huge, powerful hunter, it had surprisingly tiny arms.", "distractor": "--- worth soon onto, symptoms replies, hour link bibliography josh wrote.", "img": null, "credit": null },
        { "num": 3, "sent": "T-rex was about forty feet long and could weigh as much as nine tons.", "distractor": "--- nice feet joke china wife fund songs polo sale page lady wish harry.", "img": null, "credit": null },
        { "num": 4, "sent": "Its arms were only about three feet long.", "distractor": "--- roman peter smith song lose enjoy users.", "img": "trex_forelimb.jpeg", "credit": "By Eduard Sol\xE0 (CC-BY)" },
        { "num": 5, "sent": "With arms that short, it couldn't even reach its own mouth.", "distractor": "--- dean civil senate, whom purchase terms prices lot none miller.", "img": null, "credit": null },
        { "num": 6, "sent": "Why would such a fierce predator have arms that seem almost useless?", "distractor": "--- larger march yes chords funerals funny tower plays tea happens basics?", "img": "trex_skeleton_2.jpg", "credit": "by AbstractionBlue (CC-BY)" },
        { "num": 7, "sent": "Scientists have known for decades that T-rex isn't the only dinosaur like this.", "distractor": "--- door board glad handled fifth Canyon award west heard swearing notes apply.", "img": null, "credit": null },
        { "num": 8, "sent": "Fossils from several other dinosaur families show the same pattern.", "distractor": "--- peace accept anyway hangover sentence boys kid knows realize.", "img": "Carnotaurus_skeleton.jpg", "credit": "by https://www.flickr.com/photos/23992608@N06/ (CC-BY)" },
        { "num": 9, "sent": "They too had tiny arms, giant bodies, and huge heads with powerful jaws.", "distractor": "--- week laws robin theme, poem session, unit route edited owner elsewhere juror.", "img": null, "credit": null },
        { "num": 10, "sent": "These groups were only distantly related, yet these same features evolved independently multiple times.", "distractor": "--- anymore queen dude melodrama victory, guy option beach tomorrow losers firefighters chocolate sure.", "img": null, "credit": null },
        { "num": 11, "sent": "What could have driven dinosaurs to separately develop small arms so many times?", "distractor": "--- minute goal nearest midlands role countdown savings nobody yep lord legal signed?", "img": "Carnotaurus.png", "credit": "by Fred Wierum (CC-BY-SA)" },
        { "num": 12, "sent": "To understand why, scientists measured skull sizes alongside arm sizes across many different species.", "distractor": "--- happening hill, federation commons prank papa ignorance lock filed august yeah received somebody.", "img": "fossil.jpg", "credit": "" },
        { "num": 13, "sent": "A clear pattern emerged.", "distractor": "--- ever tigers selfie.", "img": null, "credit": null },
        { "num": 14, "sent": "Where skulls grew bigger and more robust, the arms tended to get shorter and the overall body size increased.", "distractor": "--- azalea ford invest shop view jockey, tour via bowler born fans titans hate lake directed aware enemy identify.", "img": "trex_skull.jpg", "credit": "" },
        { "num": 15, "sent": "One idea is that as the prey animals got bigger and tougher, a powerful bite became more and more important.", "distractor": "--- hurt buy miles hall gave sally purposes says smile seat shaming, list sessions derby mention coach ran sea chairman.", "img": "Stegosaurus_TD.png", "credit": "by TotalDino (CC-BY)" },
        { "num": 16, "sent": "Over millions of years, skulls grew larger and jaws grew more powerful.", "distractor": "--- rangers dad decide, cologne bye cares cash vans walks ride comments.", "img": null, "credit": null },
        { "num": 17, "sent": "As the skull became the main tool for catching prey, the arms were no longer needed.", "distractor": "--- park classy driving luck ago twice wow excuses grove, deal lets hotel news google program.", "img": "trex_head.jpg", "credit": "" },
        { "num": 18, "sent": "Growing large arms takes energy, so gradually the arms got smaller and smaller.", "distractor": "--- okay saved author posted, sad sentenced girl frank son speaks sit actress.", "img": null, "credit": null },
        { "num": 19, "sent": "Not all dinosaurs followed this path.", "distractor": "--- fell maverick attorney miss funds.", "img": null, "credit": null },
        { "num": 20, "sent": "Plant-eating dinosaurs kept their smaller heads and longer arms.", "distractor": "--- portrays navy county realized sudden hey agent guest.", "img": "herbivore.png", "credit": "" },
        { "num": 21, "sent": "So did dinosaurs that hunted in different ways.", "distractor": "--- eyes preferring views baseman note employees write.", "img": "Compsognathus_BW.jpeg", "credit": "by Nobu Tamura (CC-BY-SA)" },
        { "num": 22, "sent": "T-rex's tiny arms may look strange, but they weren't a flaw.", "distractor": "--- aids tony soul ways managers, rate party avenue film airs.", "img": null, "credit": null },
        { "num": 23, "sent": "By that point, T-rex's jaws had simply taken over the job.", "distractor": "--- dance losing, Ninjas dyer lots discuss review rules else came.", "img": "trex_skull.jpg", "credit": "" },
        { "num": 24, "sent": "The tiny arms were a consequence of the skull becoming T-rex's main weapon.", "distractor": "--- owned puts worse rule whatsoever cars join belle promote Replays rates alright.", "img": null, "credit": null },
        { "num": 25, "sent": "It was becoming one of the most powerful predators on Earth.", "distractor": "--- ice regions uses runs hear nor democrats acquitted gift Hours.", "img": "trex_recon.jpg", "credit": "by Nobu Tamura (CC-BY-SA)" }
      ]
    },
    {
      title: "Whale Culture",
      sentences: [
        { "num": 1, "sent": "Humpback whales are known for their complex songs and exciting jumps out of the water.", "distractor": "--- worldly real choose felt winner replaced stayed guys candidate grail name own told choice.", "img": "humpback_sing.jpg", "credit": "" },
        { "num": 2, "sent": "They are also some of the most creative hunters in the ocean.", "distractor": "--- eye jack push fit gain doubt yesterday tribune trip gone assume.", "img": null, "credit": null },
        { "num": 3, "sent": "These whales use bubbles to trap and catch fish, in a hunting technique called bubble net feeding.", "distractor": "--- hostess firm disliked wait ugh seem agreed voted, city sold scores musicians floor thrones dear citizen.", "img": "humpback_bubble_4.jpg", "credit": "" },
        { "num": 4, "sent": "Here's how it works.", "distractor": "--- knew lack charge.", "img": null, "credit": null },
        { "num": 5, "sent": "A whale dives below a school of fish.", "distractor": "--- welsh levied judge paid ideas mind costs.", "img": null, "credit": null },
        { "num": 6, "sent": "It swims in a slow upward spiral, blowing air through its blowhole.", "distractor": "--- plaid card term votes halls midland, handbook site website bet partake.", "img": null, "credit": null },
        { "num": 7, "sent": "The bubbles rise to the surface and form a curtain.", "distractor": "--- coaster honor van did somehow fact books eat puppies.", "img": "humpback_bubble_3.jpg", "credit": "" },
        { "num": 8, "sent": "It is like a net made of air, and the fish trapped inside can't escape.", "distractor": "--- army gets rise thus areas cent went, mark date loans duchess wedding basis rated.", "img": null, "credit": null },
        { "num": 9, "sent": "Then the whale lunges up through the middle with its mouth open wide.", "distractor": "--- gold spree twister jobs thinks died served proud goes phase law fees.", "img": "humpback_bubble_2.jpg", "credit": "" },
        { "num": 10, "sent": "It swallows an enormous mouthful of fish in one gulp.", "distractor": "--- sidekick move gentlemen fittings mom event send lie studs.", "img": null, "credit": null },
        { "num": 11, "sent": "Some humpback whales do this alone, but others hunt in teams.", "distractor": "--- pinball taxed late meant cities, rose edition metro draw ending.", "img": "humpback_bubble_1.jpg", "credit": "" },
        { "num": 12, "sent": "When they work together, they take on different roles.", "distractor": "--- river ones opinion, metal huge star consider cried.", "img": null, "credit": null },
        { "num": 13, "sent": "Some whales produce the bubbles, and others herd the fish toward the center.", "distractor": "--- reborn premier gets aspire, job library evils ask chair critics took alone.", "img": "humpback_bubble_6.jpg", "credit": "" },
        { "num": 14, "sent": "Some even make loud calls that may help herd the fish tighter.", "distractor": "--- apart least inch prove spend east wants shire cup hello smoothie.", "img": null, "credit": null },
        { "num": 15, "sent": "Each whale has a role, and the whole team has to coordinate for the hunt to succeed.", "distractor": "--- nanny fair oh evil, fan town moved today low stop espionage age bill sucks poor argued.", "img": "humpback_bubble_7.jpg", "credit": "" },
        { "num": 16, "sent": "Scientists tracked hundreds of individual humpback whales in British Columbia, Canada, over twenty years.", "distractor": "--- ottoman enjoyed sell appointed concierge mansion book Bought Copyright, Happen, worry forgive save.", "img": null, "credit": null },
        { "num": 17, "sent": "Humpback whales have distinctive tail markings which scientists used to tell individual whales apart.", "distractor": "--- curator voice inauguration hoped deleting faith believing bed bus plus delivered lighten ticket.", "img": "humpback_tail.jpg", "credit": "" },
        { "num": 18, "sent": "The scientists tracked which whales spent time together.", "distractor": "--- everybody grandpa sorry rejoice office named authority.", "img": null, "credit": null },
        { "num": 19, "sent": "They also noted which whales knew how to bubble net feed and when they fed alone or together.", "distractor": "--- royal doors estate craze weird wide club denies ward scope main wrong walk maps stated pop version.", "img": "three_humpbacks.jpg", "credit": "" },
        { "num": 20, "sent": "They found strong evidence that the bubble net technique spreads through social contact.", "distractor": "--- degree finish seriously dream die turner sake lieutenant barracks telling please tonight.", "img": null, "credit": null },
        { "num": 21, "sent": "Whales that spent more time together were far more likely to both use it.", "distractor": "--- items adding thank begin ability stone size issue earlier boy words till give.", "img": "humpback_bubble_5.jpg", "credit": "" },
        { "num": 22, "sent": "This suggests that bubble net feeding is not something whales are born knowing or that they invent on their own.", "distractor": "--- donated lived brooks bike forehead tell box secretary phoebe him stay offices red road broke rouge kept done used.", "img": "humpback_calf.jpg", "credit": "" },
        { "num": 23, "sent": "It is a skill that is learned by watching and copying other whales.", "distractor": "--- skin tree lions gas drop pounds see announced find sculptor avoid reprint.", "img": null, "credit": null },
        { "num": 24, "sent": "This is similar to how you might learn how to cook by watching family members in the kitchen.", "distractor": "--- rich officers sent held shut nation south hit camp seats band released united century male upon assuming.", "img": "humpback_bubble_8.jpg", "credit": "" }
      ]
    }
  ];

  // experiment/src/practice_distractors.js
  var PRACTICE_DISTRACTORS = [
    "--- earn vary help goes take.",
    "--- wake stardom sun sort outputs.",
    "--- rocked carol carefree same ballots."
  ];

  // experiment/src/stimuli.js
  var IMAGE_BASE_URL = "https://raw.githubusercontent.com/vboyce/kid-maze-passages/main/experiment/assets/images/";
  var PRACTICE_SENTENCES = [
    {
      level: 1,
      sent: "The cat sat on the mat.",
      distractor: PRACTICE_DISTRACTORS[0],
      order: [0, 0, 1, 0, 0, 1],
      img: "cat.jpg",
      credit: "by Elisa (https://www.flickr.com/photos/37996605603@N01/, CC-BY-NC)",
      // TODO: finalize kid-friendly instruction text and word tips
      instruction: `<h2>Let's try it together first!</h2><p>You'll see two words at a time. One belongs in the sentence \u2014 pick it!</p><p>Press <b>E</b> for the word on the left, <b>I</b> for the word on the right.</p><img src="${IMAGE_BASE_URL}keyboard_hand.jpg" alt="Hands on a keyboard with E and I highlighted" style="width:70%;max-height:40vh;display:block;margin:16px auto;">`,
      word_tips: [
        "The sentence starts with <b>The</b> \u2014 find it!",
        "Great! Now what makes sense after 'The' ... how about <b>cat</b>.",
        "Awesome! Now we have 'The cat', so what belongs next -- vary or <b>sat</b>?",
        "What word comes next -- <b>on</b> or help?",
        "What word belongs here -- the or goes?",
        "What word finishes the sentence?"
      ]
    },
    {
      level: 2,
      sent: "The dog barked at a squirrel.",
      distractor: PRACTICE_DISTRACTORS[1],
      order: [0, 0, 1, 0, 0, 0],
      img: "dog.jpg",
      credit: "by Mark Robinson (https://www.flickr.com/photos/66176388@N00/, CC-BY-NC)",
      // TODO: finalize kid-friendly instruction text
      instruction: "<h2>Your turn!</h2><p>Now you try it \u2014 pick the words that fit the sentence.</p><p>If you need a hint, you can watch the sentence build up at the top as you go!</p>"
    },
    {
      level: 3,
      sent: "The bunny rabbit nibbled a carrot.",
      distractor: PRACTICE_DISTRACTORS[2],
      order: [0, 0, 0, 0, 1, 0],
      img: "bunny.jpg",
      credit: "by sunnyelou (https://www.flickr.com/photos/sunnyelou/, CC-BY-NC)",
      // TODO: finalize kid-friendly instruction text
      instruction: "<h2>One more time \u2014 on your own!</h2><p>This time, the sentence won't build up at the top. Just pick the words that belong. You've got this!</p>"
    }
  ];
  var PRACTICE_IMAGES = PRACTICE_SENTENCES.map((s) => s.img).filter(Boolean).map((f) => IMAGE_BASE_URL + f);
  var PASSAGE_IMAGES = passages.flatMap((p) => p.sentences).map((s) => s.img).filter(Boolean).map((f) => IMAGE_BASE_URL + f);

  // experiment/src/helper.js
  function shuffle(arr) {
    let i = arr.length, j, temp;
    while (--i > 0) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
  }

  // experiment/src/instructions.js
  var IMAGE_BASE_URL2 = "https://raw.githubusercontent.com/vboyce/kid-maze-passages/main/experiment/assets/images/";
  var INSTRUCTIONS = `<h2>Let's read some stories!</h2><p>We have a fun way to read. You'll see <b>two words</b> on the screen at a time, but only one of them belongs in the sentence.</p><p>Your job is to pick the word that fits!</p><p>Press <b>E</b> for the word on the left, <b>I</b> for the word on the right.</p><img src="${IMAGE_BASE_URL2}keyboard_hand.jpg" alt="Hands on a keyboard with E and I highlighted" style="width:70%;max-height:40vh;display:block;margin:16px auto;">`;
  var PRE_STORIES = `<h2>Great practice!</h2><p>Now it's time for the real stories. Remember:</p><p>Pick the word that fits the story.</p><p>Press <b>E</b> for the word on the left, <b>I</b> for the right.</p><img src="${IMAGE_BASE_URL2}keyboard_hand.jpg" alt="Hands on a keyboard with E and I highlighted" style="width:70%;max-height:40vh;display:block;margin:16px auto;"><p>Try to go fast, but it's okay if you make a mistake \u2014 you can try again!</p><p>Ready? Let's go!</p>`;
  var BETWEEN_PASSAGES = `<h2>Great job!</h2><img src="${IMAGE_BASE_URL2}Owl_circling_its_head_repeatedly.gif" alt="A baby owl bobbing its head" style="width:60%;max-height:40vh;display:block;margin:16px auto;"><p>You finished the first story! Ready for the next one?</p>`;
  var INSTRUCTION_IMAGES = [
    "keyboard_hand.jpg",
    "Owl_circling_its_head_repeatedly.gif"
  ].map((f) => IMAGE_BASE_URL2 + f);
  var ERROR_MESSAGE = "<p class='feedback-error'>Oops! That's not it!</p>";
  var REDO_MESSAGE = "<p class='feedback-redo'>Try again!</p>";
  var REDO_MESSAGE_PRACTICE = "<p>Try choosing the other word!</p>";

  // experiment/src/maze_helper.js
  function createGroups(text, re) {
    return text.split(re).filter(function(word) {
      return word != "";
    });
  }
  function groupText(text, groupingString) {
    let stimulus = text;
    let groups;
    if (groupingString) {
      let grouping_re = RegExp(groupingString, "ug");
      groups = createGroups(stimulus, grouping_re);
    } else {
      groups = createGroups(stimulus, RegExp("\\s", "u"));
    }
    return groups;
  }

  // experiment/src/maze.js
  var info2 = {
    name: "maze",
    parameters: {
      correct: {
        type: ParameterType.STRING,
        pretty_name: "Stimulus",
        default: void 0,
        description: "The string to be displayed in Maze style"
      },
      distractor: {
        type: ParameterType.STRING,
        pretty_name: "Stimulus",
        default: void 0,
        description: "The string to be displayed in Maze style"
      },
      prompt: {
        type: ParameterType.STRING,
        pretty_name: "Prompt",
        default: void 0,
        description: "html for the top"
      },
      order: {
        type: ParameterType.ARRAY,
        pretty_name: "Order",
        default: null,
        description: "Array of 0/1 controlling left/right placement of correct word per position"
      },
      redo: {
        type: ParameterType.BOOL,
        pretty_name: "Redo",
        default: true,
        description: "Whether to allow retrying after a wrong answer"
      },
      delay: {
        type: ParameterType.FLOAT,
        pretty_name: "Delay",
        default: 500,
        description: "Time to wait after a mistake before registering next keypress"
      },
      normal_message: {
        type: ParameterType.STRING,
        pretty_name: "Normal message",
        default: "",
        description: "What to display normally"
      },
      error_message: {
        type: ParameterType.STRING,
        pretty_name: "Error message",
        default: "<p>Oops! Just a second...</p>",
        description: "What to display on mistakes during delay"
      },
      redo_message: {
        type: ParameterType.STRING,
        pretty_name: "Redo message",
        default: "<p>Try again!</p>",
        description: "What to display post mistake once keypresses will record"
      },
      on_word_wrong: {
        type: ParameterType.FUNCTION,
        pretty_name: "On word wrong",
        default: null,
        description: "Called on each wrong selection with {wordIndex, wordsSelected}. Return HTML to replace the redo message, or null/undefined to use the default."
      },
      trial_duration: {
        type: ParameterType.FLOAT,
        pretty_name: "The maximum stimulus duration",
        default: -1,
        description: "The maximum amount of time a trial lasts."
      },
      choice_left: {
        type: ParameterType.KEYCODE,
        pretty_name: "Choice Left",
        default: ["e"],
        description: "The keys that select the left-side word."
      },
      choice_right: {
        type: ParameterType.KEYCODE,
        pretty_name: "Choice Right",
        default: ["i"],
        description: "The keys that select the right-side word."
      },
      background_color: {
        type: ParameterType.STRING,
        pretty_name: "Background color",
        default: "rgb(255,255,255)",
        description: 'Background color, e.g. "rgb(230,230,230)" or "gray"'
      },
      font_color: {
        type: ParameterType.STRING,
        pretty_name: "Font color",
        default: "rgb(0,0,0)",
        description: 'Text color, e.g. "rgb(0,0,0)"'
      },
      font_family: {
        type: ParameterType.STRING,
        pretty_name: "Font family",
        default: "Times New Roman",
        description: "Font family for word display"
      },
      font_size: {
        type: ParameterType.INT,
        pretty_name: "Font size",
        default: 60,
        description: "Base font size in pixels (auto-scaled down for long words)"
      },
      width: {
        type: ParameterType.INT,
        pretty_name: "Width",
        default: 1e3,
        description: "Width of the word display container in pixels; also controls gap between words."
      },
      height: {
        type: ParameterType.INT,
        pretty_name: "Height",
        default: 100,
        description: "Height of the word display container in pixels."
      },
      grouping_string: {
        type: ParameterType.STRING,
        pretty_name: "Grouping string",
        default: null,
        description: "Regex pattern to split stimulus into multi-word groups. If null, splits on whitespace."
      },
      on_word_correct: {
        type: ParameterType.FUNCTION,
        pretty_name: "On word correct",
        default: null,
        description: "Called after each correct word selection with {wordIndex, wordsSelected}. Return HTML to replace the status area, or null/undefined to leave it unchanged."
      },
      show_key_labels: {
        type: ParameterType.BOOL,
        pretty_name: "Show key labels",
        default: false,
        description: "When true, shows E / I key badges below the word choices."
      }
    }
  };
  function createTextArea(display_element) {
    let div = document.createElement("div");
    display_element.appendChild(div);
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.id = "feedback";
    return div;
  }
  function createKeyLabels(display_element, trial_pars) {
    const bar = document.createElement("div");
    bar.style.display = "flex";
    bar.style.width = `min(${trial_pars.width}px, 100%)`;
    bar.style.gap = "10%";
    bar.style.margin = "6px auto 0";
    function badge(letter, align) {
      const cell = document.createElement("div");
      cell.style.flex = "1";
      cell.style.textAlign = align;
      cell.style.fontSize = "20px";
      cell.style.fontFamily = "sans-serif";
      cell.style.color = "#444";
      cell.innerHTML = `<kbd style="border:1px solid #bbb;border-radius:4px;padding:2px 10px;background:#f5f5f5;box-shadow:0 2px 0 #ccc">${letter}</kbd>`;
      return cell;
    }
    bar.appendChild(badge("E", "right"));
    bar.appendChild(badge("I", "left"));
    display_element.appendChild(bar);
  }
  function createWordDisplay(display_element, trial_pars) {
    let container = document.createElement("div");
    container.id = "maze-word-container";
    container.style.display = "flex";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";
    container.style.gap = "10%";
    container.style.fontFamily = trial_pars.font_family;
    container.style.fontSize = trial_pars.font_size + "px";
    container.style.color = trial_pars.font_color;
    container.style.backgroundColor = trial_pars.background_color;
    container.style.width = `min(${trial_pars.width}px, 100%)`;
    container.style.height = trial_pars.height + "px";
    container.style.margin = "0 auto";
    let leftWord = document.createElement("span");
    leftWord.id = "maze-left-word";
    leftWord.style.flex = "1";
    leftWord.style.textAlign = "right";
    container.appendChild(leftWord);
    let rightWord = document.createElement("span");
    rightWord.id = "maze-right-word";
    rightWord.style.flex = "1";
    rightWord.style.textAlign = "left";
    container.appendChild(rightWord);
    display_element.appendChild(container);
    return { leftWordEl: leftWord, rightWordEl: rightWord };
  }
  var MazePlugin = class {
    static info = info2;
    constructor(jsPsych) {
      this.jsPsych = jsPsych;
    }
    trial(display_element, trial_pars) {
      let group_index = 0;
      let first = true;
      let reactiontimes = [];
      let cumulative_rts = [];
      let cumulative_rt = 0;
      let responses = [];
      const old_html = display_element.innerHTML;
      const font_size = trial_pars.font_size;
      const valid_keys = trial_pars.choice_left.concat(trial_pars.choice_right);
      const left_keys = trial_pars.choice_left;
      const right_keys = trial_pars.choice_right;
      const error_message = trial_pars.error_message;
      const redo_message = trial_pars.redo_message;
      const normal_message = trial_pars.normal_message;
      const redo = trial_pars.redo;
      const delay = trial_pars.delay;
      if (trial_pars.correct == null) throw new Error("MazePlugin: 'correct' is null \u2014 has the distractor generator been run?");
      if (trial_pars.distractor == null) throw new Error("MazePlugin: 'distractor' is null \u2014 has the distractor generator been run?");
      const correct = groupText(trial_pars.correct, trial_pars.grouping_string);
      const distractor = groupText(trial_pars.distractor, trial_pars.grouping_string);
      console.assert(
        correct.length === distractor.length,
        "Correct and distractor do not have the same length"
      );
      let order;
      if (trial_pars.order === null) {
        order = correct.map(() => Math.round(Math.random()));
      } else {
        order = trial_pars.order;
      }
      console.assert(
        correct.length === order.length,
        "Order is not the same length as correct and distractor"
      );
      display_element.innerHTML = "<div id='status'>" + trial_pars.prompt + "</div>";
      const { leftWordEl, rightWordEl } = createWordDisplay(display_element, trial_pars);
      if (trial_pars.show_key_labels) createKeyLabels(display_element, trial_pars);
      const feedbackDiv = createTextArea(display_element);
      feedbackDiv.innerHTML = normal_message;
      function scaledFontSize(word) {
        if (word.length > 12) {
          return Math.floor(font_size * 12 / word.length) + "px";
        }
        return font_size + "px";
      }
      function drawStimulus(idx) {
        let leftWord, rightWord;
        if (order[idx] === 0) {
          leftWord = correct[idx];
          rightWord = distractor[idx];
        } else {
          leftWord = distractor[idx];
          rightWord = correct[idx];
        }
        leftWordEl.textContent = leftWord;
        leftWordEl.style.fontSize = scaledFontSize(leftWord);
        rightWordEl.textContent = rightWord;
        rightWordEl.style.fontSize = scaledFontSize(rightWord);
      }
      const trial_data = {
        rt: [],
        cumrt: [],
        correct: [],
        words: [],
        distractors: [],
        order: []
      };
      const end_trial = () => {
        this.jsPsych.pluginAPI.clearAllTimeouts();
        this.jsPsych.pluginAPI.cancelAllKeyboardResponses();
        display_element.innerHTML = old_html;
        trial_data.rt = reactiontimes;
        trial_data.cumrt = cumulative_rts;
        trial_data.correct = responses;
        trial_data.words = correct;
        trial_data.distractors = distractor;
        trial_data.order = order;
        console.log(trial_data);
        this.jsPsych.finishTrial(trial_data);
      };
      const installResponse = () => {
        this.jsPsych.pluginAPI.getKeyboardResponse({
          callback_function: afterResponse,
          valid_responses: valid_keys,
          rt_method: "performance",
          persist: false,
          allow_held_key: false
        });
      };
      let currentRedoMsg = redo_message;
      const handleMistake = () => {
        const div = display_element.querySelector("#feedback");
        div.innerHTML = currentRedoMsg;
        installResponse();
      };
      const afterResponse = (info5) => {
        function mapKey(letter) {
          if (left_keys.includes(letter)) return 0;
          if (right_keys.includes(letter)) return 1;
        }
        const selection = mapKey(info5.key);
        if (first) {
          reactiontimes.push(info5.rt);
          responses.push(order[group_index] === selection ? 1 : 0);
        }
        cumulative_rt += info5.rt;
        if (order[group_index] === selection) {
          cumulative_rts.push(cumulative_rt);
          const completedIndex = group_index;
          group_index++;
          cumulative_rt = 0;
          first = true;
          if (typeof trial_pars.on_word_correct === "function") {
            const newHtml = trial_pars.on_word_correct({
              wordIndex: completedIndex,
              wordsSelected: correct.slice(0, group_index)
            });
            if (newHtml != null) {
              display_element.querySelector("#status").innerHTML = newHtml;
            }
          }
          if (group_index >= order.length) {
            end_trial();
          } else {
            const div = display_element.querySelector("#feedback");
            div.innerHTML = normal_message;
            installResponse();
            drawStimulus(group_index);
          }
        } else {
          first = false;
          currentRedoMsg = redo_message;
          if (typeof trial_pars.on_word_wrong === "function") {
            const newHtml = trial_pars.on_word_wrong({
              wordIndex: group_index,
              wordsSelected: correct.slice(0, group_index)
            });
            if (newHtml != null) currentRedoMsg = newHtml;
          }
          if (redo === false) {
            end_trial();
          } else {
            if (delay === null) {
              handleMistake();
            } else {
              cumulative_rt += delay;
              const div = display_element.querySelector("#feedback");
              div.innerHTML = error_message;
              this.jsPsych.pluginAPI.setTimeout(handleMistake, delay);
            }
          }
        }
      };
      installResponse();
      drawStimulus(group_index);
    }
  };
  var maze_default = MazePlugin;

  // experiment/node_modules/@jspsych/plugin-html-keyboard-response/dist/index.js
  var version = "2.1.0";
  var info3 = {
    name: "html-keyboard-response",
    version,
    parameters: {
      /**
       * The string to be displayed.
       */
      stimulus: {
        type: ParameterType.HTML_STRING,
        default: void 0
      },
      /**
       * This array contains the key(s) that the participant is allowed to press in order to respond
       * to the stimulus. Keys should be specified as characters (e.g., `'a'`, `'q'`, `' '`, `'Enter'`, `'ArrowDown'`) - see
       * {@link https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values this page}
       * and
       * {@link https://www.freecodecamp.org/news/javascript-keycode-list-keypress-event-key-codes/ this page (event.key column)}
       * for more examples. Any key presses that are not listed in the
       * array will be ignored. The default value of `"ALL_KEYS"` means that all keys will be accepted as valid responses.
       * Specifying `"NO_KEYS"` will mean that no responses are allowed.
       */
      choices: {
        type: ParameterType.KEYS,
        default: "ALL_KEYS"
      },
      /**
       * This string can contain HTML markup. Any content here will be displayed below the stimulus.
       * The intention is that it can be used to provide a reminder about the action the participant
       * is supposed to take (e.g., which key to press).
       */
      prompt: {
        type: ParameterType.HTML_STRING,
        default: null
      },
      /**
       * How long to display the stimulus in milliseconds. The visibility CSS property of the stimulus
       * will be set to `hidden` after this time has elapsed. If this is null, then the stimulus will
       * remain visible until the trial ends.
       */
      stimulus_duration: {
        type: ParameterType.INT,
        default: null
      },
      /**
       * How long to wait for the participant to make a response before ending the trial in milliseconds.
       * If the participant fails to make a response before this timer is reached, the participant's response
       * will be recorded as null for the trial and the trial will end. If the value of this parameter is null,
       * then the trial will wait for a response indefinitely.
       */
      trial_duration: {
        type: ParameterType.INT,
        default: null
      },
      /**
       * If true, then the trial will end whenever the participant makes a response (assuming they make their
       * response before the cutoff specified by the trial_duration parameter). If false, then the trial will
       * continue until the value for trial_duration is reached. You can set this parameter to false to force
       * the participant to view a stimulus for a fixed amount of time, even if they respond before the time is complete.
       */
      response_ends_trial: {
        type: ParameterType.BOOL,
        default: true
      }
    },
    data: {
      /** Indicates which key the participant pressed. */
      response: {
        type: ParameterType.STRING
      },
      /** The response time in milliseconds for the participant to make a response. The time is measured from when the stimulus first appears on the screen until the participant's response. */
      rt: {
        type: ParameterType.INT
      },
      /** The HTML content that was displayed on the screen. */
      stimulus: {
        type: ParameterType.STRING
      }
    },
    // prettier-ignore
    citations: {
      "apa": "de Leeuw, J. R., Gilbert, R. A., & Luchterhandt, B. (2023). jsPsych: Enabling an Open-Source Collaborative Ecosystem of Behavioral Experiments. Journal of Open Source Software, 8(85), 5351. https://doi.org/10.21105/joss.05351 ",
      "bibtex": '@article{Leeuw2023jsPsych, 	author = {de Leeuw, Joshua R. and Gilbert, Rebecca A. and Luchterhandt, Bj{\\" o}rn}, 	journal = {Journal of Open Source Software}, 	doi = {10.21105/joss.05351}, 	issn = {2475-9066}, 	number = {85}, 	year = {2023}, 	month = {may 11}, 	pages = {5351}, 	publisher = {Open Journals}, 	title = {jsPsych: Enabling an {Open}-{Source} {Collaborative} {Ecosystem} of {Behavioral} {Experiments}}, 	url = {https://joss.theoj.org/papers/10.21105/joss.05351}, 	volume = {8}, }  '
    }
  };
  var HtmlKeyboardResponsePlugin = class {
    constructor(jsPsych) {
      this.jsPsych = jsPsych;
    }
    static {
      this.info = info3;
    }
    trial(display_element, trial) {
      var new_html = '<div id="jspsych-html-keyboard-response-stimulus">' + trial.stimulus + "</div>";
      if (trial.prompt !== null) {
        new_html += trial.prompt;
      }
      display_element.innerHTML = new_html;
      var response = {
        rt: null,
        key: null
      };
      const end_trial = () => {
        if (typeof keyboardListener !== "undefined") {
          this.jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
        }
        var trial_data = {
          rt: response.rt,
          stimulus: trial.stimulus,
          response: response.key
        };
        this.jsPsych.finishTrial(trial_data);
      };
      var after_response = (info22) => {
        display_element.querySelector("#jspsych-html-keyboard-response-stimulus").className += " responded";
        if (response.key == null) {
          response = info22;
        }
        if (trial.response_ends_trial) {
          end_trial();
        }
      };
      if (trial.choices != "NO_KEYS") {
        var keyboardListener = this.jsPsych.pluginAPI.getKeyboardResponse({
          callback_function: after_response,
          valid_responses: trial.choices,
          rt_method: "performance",
          persist: false,
          allow_held_key: false
        });
      }
      if (trial.stimulus_duration !== null) {
        this.jsPsych.pluginAPI.setTimeout(() => {
          display_element.querySelector(
            "#jspsych-html-keyboard-response-stimulus"
          ).style.visibility = "hidden";
        }, trial.stimulus_duration);
      }
      if (trial.trial_duration !== null) {
        this.jsPsych.pluginAPI.setTimeout(end_trial, trial.trial_duration);
      }
    }
    simulate(trial, simulation_mode, simulation_options, load_callback) {
      if (simulation_mode == "data-only") {
        load_callback();
        this.simulate_data_only(trial, simulation_options);
      }
      if (simulation_mode == "visual") {
        this.simulate_visual(trial, simulation_options, load_callback);
      }
    }
    create_simulation_data(trial, simulation_options) {
      const default_data = {
        stimulus: trial.stimulus,
        rt: this.jsPsych.randomization.sampleExGaussian(500, 50, 1 / 150, true),
        response: this.jsPsych.pluginAPI.getValidKey(trial.choices)
      };
      const data = this.jsPsych.pluginAPI.mergeSimulationData(default_data, simulation_options);
      this.jsPsych.pluginAPI.ensureSimulationDataConsistency(trial, data);
      return data;
    }
    simulate_data_only(trial, simulation_options) {
      const data = this.create_simulation_data(trial, simulation_options);
      this.jsPsych.finishTrial(data);
    }
    simulate_visual(trial, simulation_options, load_callback) {
      const data = this.create_simulation_data(trial, simulation_options);
      const display_element = this.jsPsych.getDisplayElement();
      this.trial(display_element, trial);
      load_callback();
      if (data.rt !== null) {
        this.jsPsych.pluginAPI.pressKey(data.response, data.rt);
      }
    }
  };

  // experiment/src/timeline.js
  var IMAGE_BASE_URL3 = "https://raw.githubusercontent.com/vboyce/kid-maze-passages/main/experiment/assets/images/";
  function imageTrial(img, credit, aboveText = null) {
    return {
      type: HtmlKeyboardResponsePlugin,
      stimulus: (aboveText ? `<h2>${aboveText}</h2>` : "") + `<img src="${IMAGE_BASE_URL3}${img}" alt="" style="width:75%;max-height:55vh;display:block;margin:0 auto;"><p class="img-credit">${credit ?? ""}</p><p class="continue-hint">Press spacebar to continue</p>`,
      choices: [" "]
    };
  }
  function buildPassageTimeline(passage, passageIndex, numPassages) {
    const items = [];
    const passageNum = passageIndex + 1;
    for (let s = 0; s < passage.sentences.length; s++) {
      const sent = passage.sentences[s];
      items.push({
        type: maze_default,
        correct: sent.sent,
        distractor: sent.distractor,
        prompt: "",
        error_message: ERROR_MESSAGE,
        redo_message: REDO_MESSAGE,
        show_key_labels: true,
        data: { passage: passageNum, sentence: sent.num }
      });
      if (sent.img != null) {
        items.push(imageTrial(sent.img, sent.credit));
      }
    }
    return items;
  }
  function buildPracticeTimeline(practiceSentences) {
    const items = [];
    for (const sent of practiceSentences) {
      items.push({
        type: HtmlButtonResponsePlugin,
        stimulus: sent.instruction,
        choices: ["Try it!"],
        button_html: ['<button class="jspsych-btn">%choice%</button>']
      });
      const mazeItem = {
        type: maze_default,
        correct: sent.sent,
        distractor: sent.distractor,
        order: sent.order ?? null,
        prompt: sent.level === 1 ? `<p>${sent.word_tips[0]}</p>` : "",
        error_message: ERROR_MESSAGE,
        redo_message: sent.level === 3 ? REDO_MESSAGE : REDO_MESSAGE_PRACTICE,
        show_key_labels: true
      };
      if (sent.level === 1) {
        mazeItem.on_word_correct = ({ wordIndex, wordsSelected }) => {
          const sentSoFar = wordsSelected.join(" ");
          const tip = sent.word_tips[wordIndex + 1] ?? "";
          return `<p>${sentSoFar} \u2192</p><p>${tip}</p>`;
        };
      } else if (sent.level === 2) {
        mazeItem.on_word_correct = ({ wordsSelected }) => `<p>${wordsSelected.join(" ")} \u2192</p>`;
      }
      items.push(mazeItem);
      if (sent.img != null) {
        items.push(imageTrial(sent.img, sent.credit, "Great job!"));
      }
    }
    return items;
  }

  // experiment/node_modules/@jspsych/plugin-survey-text/dist/index.js
  var version2 = "2.1.0";
  var info4 = {
    name: "survey-text",
    version: version2,
    parameters: {
      /**
       * An array of objects, each object represents a question that appears on the screen. Each object contains a prompt,
       * options, required, and horizontal parameter that will be applied to the question. See examples below for further
       * clarification.`prompt`: Type string, default value is *undefined*. The string is prompt/question that will be
       * associated with a group of options (radio buttons). All questions will get presented on the same page (trial).
       * `options`: Type array, defualt value is *undefined*. An array of strings. The array contains a set of options to
       * display for an individual question.`required`: Type boolean, default value is null. The boolean value indicates
       * if a question is required('true') or not ('false'), using the HTML5 `required` attribute. If this parameter is
       * undefined, the question will be optional. `horizontal`:Type boolean, default value is false. If true, then the
       * question is centered and the options are displayed horizontally. `name`: Name of the question. Used for storing
       * data. If left undefined then default names (`Q0`, `Q1`, `...`) will be used for the questions.
       */
      questions: {
        type: ParameterType.COMPLEX,
        array: true,
        default: void 0,
        nested: {
          /** Question prompt. */
          prompt: {
            type: ParameterType.HTML_STRING,
            default: void 0
          },
          /** Placeholder text in the response text box. */
          placeholder: {
            type: ParameterType.STRING,
            default: ""
          },
          /** The number of rows for the response text box. */
          rows: {
            type: ParameterType.INT,
            default: 1
          },
          /** The number of columns for the response text box. */
          columns: {
            type: ParameterType.INT,
            default: 40
          },
          /** Whether or not a response to this question must be given in order to continue. */
          required: {
            type: ParameterType.BOOL,
            default: false
          },
          /** Name of the question in the trial data. If no name is given, the questions are named Q0, Q1, etc. */
          name: {
            type: ParameterType.STRING,
            default: ""
          }
        }
      },
      /**
       * If true, the display order of `questions` is randomly determined at the start of the trial. In the data
       * object, `Q0` will still refer to the first question in the array, regardless of where it was presented
       * visually.
       */
      randomize_question_order: {
        type: ParameterType.BOOL,
        default: false
      },
      /** HTML formatted string to display at the top of the page above all the questions. */
      preamble: {
        type: ParameterType.HTML_STRING,
        default: null
      },
      /** Label of the button to submit responses. */
      button_label: {
        type: ParameterType.STRING,
        default: "Continue"
      },
      /** Setting this to true will enable browser auto-complete or auto-fill for the form. */
      autocomplete: {
        type: ParameterType.BOOL,
        default: false
      }
    },
    data: {
      /** An object containing the response for each question. The object will have a separate key (variable) for each question, with the first question in the trial being recorded in `Q0`, the second in `Q1`, and so on. The responses are recorded as integers, representing the position selected on the likert scale for that question. If the `name` parameter is defined for the question, then the response object will use the value of `name` as the key for each question. This will be encoded as a JSON string when data is saved using the `.json()` or `.csv()` functions. */
      response: {
        type: ParameterType.OBJECT
      },
      /** The response time in milliseconds for the participant to make a response. The time is measured from when the questions first appear on the screen until the participant's response(s) are submitted. */
      rt: {
        type: ParameterType.INT
      },
      /** An array with the order of questions. For example `[2,0,1]` would indicate that the first question was `trial.questions[2]` (the third item in the `questions` parameter), the second question was `trial.questions[0]`, and the final question was `trial.questions[1]`. This will be encoded as a JSON string when data is saved using the `.json()` or `.csv()` functions. */
      question_order: {
        type: ParameterType.INT,
        array: true
      }
    },
    // prettier-ignore
    citations: {
      "apa": "de Leeuw, J. R., Gilbert, R. A., & Luchterhandt, B. (2023). jsPsych: Enabling an Open-Source Collaborative Ecosystem of Behavioral Experiments. Journal of Open Source Software, 8(85), 5351. https://doi.org/10.21105/joss.05351 ",
      "bibtex": '@article{Leeuw2023jsPsych, 	author = {de Leeuw, Joshua R. and Gilbert, Rebecca A. and Luchterhandt, Bj{\\" o}rn}, 	journal = {Journal of Open Source Software}, 	doi = {10.21105/joss.05351}, 	issn = {2475-9066}, 	number = {85}, 	year = {2023}, 	month = {may 11}, 	pages = {5351}, 	publisher = {Open Journals}, 	title = {jsPsych: Enabling an {Open}-{Source} {Collaborative} {Ecosystem} of {Behavioral} {Experiments}}, 	url = {https://joss.theoj.org/papers/10.21105/joss.05351}, 	volume = {8}, }  '
    }
  };
  var SurveyTextPlugin = class {
    constructor(jsPsych) {
      this.jsPsych = jsPsych;
    }
    static {
      this.info = info4;
    }
    trial(display_element, trial) {
      for (var i = 0; i < trial.questions.length; i++) {
        if (typeof trial.questions[i].rows == "undefined") {
          trial.questions[i].rows = 1;
        }
      }
      for (var i = 0; i < trial.questions.length; i++) {
        if (typeof trial.questions[i].columns == "undefined") {
          trial.questions[i].columns = 40;
        }
      }
      for (var i = 0; i < trial.questions.length; i++) {
        if (typeof trial.questions[i].value == "undefined") {
          trial.questions[i].value = "";
        }
      }
      var html = "";
      if (trial.preamble !== null) {
        html += '<div id="jspsych-survey-text-preamble" class="jspsych-survey-text-preamble">' + trial.preamble + "</div>";
      }
      if (trial.autocomplete) {
        html += '<form id="jspsych-survey-text-form">';
      } else {
        html += '<form id="jspsych-survey-text-form" autocomplete="off">';
      }
      var question_order = [];
      for (var i = 0; i < trial.questions.length; i++) {
        question_order.push(i);
      }
      if (trial.randomize_question_order) {
        question_order = this.jsPsych.randomization.shuffle(question_order);
      }
      for (var i = 0; i < trial.questions.length; i++) {
        var question = trial.questions[question_order[i]];
        var question_index = question_order[i];
        html += '<div id="jspsych-survey-text-' + question_index + '" class="jspsych-survey-text-question" style="margin: 2em 0em;">';
        html += '<p class="jspsych-survey-text">' + question.prompt + "</p>";
        var autofocus = i == 0 ? "autofocus" : "";
        var req = question.required ? "required" : "";
        if (question.rows == 1) {
          html += '<input type="text" id="input-' + question_index + '"  name="#jspsych-survey-text-response-' + question_index + '" data-name="' + question.name + '" size="' + question.columns + '" ' + autofocus + " " + req + ' placeholder="' + question.placeholder + '"></input>';
        } else {
          html += '<textarea id="input-' + question_index + '" name="#jspsych-survey-text-response-' + question_index + '" data-name="' + question.name + '" cols="' + question.columns + '" rows="' + question.rows + '" ' + autofocus + " " + req + ' placeholder="' + question.placeholder + '"></textarea>';
        }
        html += "</div>";
      }
      html += '<input type="submit" id="jspsych-survey-text-next" class="jspsych-btn jspsych-survey-text" value="' + trial.button_label + '"></input>';
      html += "</form>";
      display_element.innerHTML = html;
      display_element.querySelector("#input-" + question_order[0]).focus();
      display_element.querySelector("#jspsych-survey-text-form").addEventListener("submit", (e) => {
        e.preventDefault();
        var endTime = performance.now();
        var response_time = Math.round(endTime - startTime);
        var question_data = {};
        for (var index = 0; index < trial.questions.length; index++) {
          var id = "Q" + index;
          var q_element = document.querySelector("#jspsych-survey-text-" + index).querySelector("textarea, input");
          var val = q_element.value;
          var name = q_element.attributes["data-name"].value;
          if (name == "") {
            name = id;
          }
          var obje = {};
          obje[name] = val;
          Object.assign(question_data, obje);
        }
        var trialdata = {
          rt: response_time,
          response: question_data
        };
        this.jsPsych.finishTrial(trialdata);
      });
      var startTime = performance.now();
    }
    simulate(trial, simulation_mode, simulation_options, load_callback) {
      if (simulation_mode == "data-only") {
        load_callback();
        this.simulate_data_only(trial, simulation_options);
      }
      if (simulation_mode == "visual") {
        this.simulate_visual(trial, simulation_options, load_callback);
      }
    }
    create_simulation_data(trial, simulation_options) {
      const question_data = {};
      let rt = 1e3;
      for (const q of trial.questions) {
        const name = q.name ? q.name : `Q${trial.questions.indexOf(q)}`;
        const ans_words = q.rows == 1 ? this.jsPsych.randomization.sampleExponential(0.25) : this.jsPsych.randomization.randomInt(1, 10) * q.rows;
        question_data[name] = this.jsPsych.randomization.randomWords({
          exactly: ans_words,
          join: " "
        });
        rt += this.jsPsych.randomization.sampleExGaussian(2e3, 400, 4e-3, true);
      }
      const default_data = {
        response: question_data,
        rt
      };
      const data = this.jsPsych.pluginAPI.mergeSimulationData(default_data, simulation_options);
      this.jsPsych.pluginAPI.ensureSimulationDataConsistency(trial, data);
      return data;
    }
    simulate_data_only(trial, simulation_options) {
      const data = this.create_simulation_data(trial, simulation_options);
      this.jsPsych.finishTrial(data);
    }
    simulate_visual(trial, simulation_options, load_callback) {
      const data = this.create_simulation_data(trial, simulation_options);
      const display_element = this.jsPsych.getDisplayElement();
      this.trial(display_element, trial);
      load_callback();
      const answers = Object.entries(data.response).map((x) => {
        return x[1];
      });
      for (let i = 0; i < answers.length; i++) {
        this.jsPsych.pluginAPI.fillTextInput(
          display_element.querySelector(`#input-${i}`),
          answers[i],
          (data.rt - 1e3) / answers.length * (i + 1)
        );
      }
      this.jsPsych.pluginAPI.clickTarget(
        display_element.querySelector("#jspsych-survey-text-next"),
        data.rt
      );
    }
  };

  // experiment/src/survey.js
  function buildDebriefTrial() {
    return {
      type: HtmlButtonResponsePlugin,
      stimulus: `<h2>Thanks for reading!</h2><img src="https://raw.githubusercontent.com/vboyce/kid-maze-passages/main/experiment/assets/images/115176-703930484_tiny-ezgif.com-video-to-gif-converter.gif" alt="Penguins celebrating" style="width:40%;max-height:25vh;display:block;margin:8px auto;">`,
      choices: ["Continue"],
      button_html: ['<button class="jspsych-btn">%choice%</button>']
    };
  }
  function buildExitSurvey() {
    return {
      type: SurveyTextPlugin,
      preamble: "<h2>Before you go, we have a few quick questions!</h2> Your responses will help us make our next study better.",
      questions: [
        {
          prompt: "Was there anything confusing or tricky?",
          rows: 3,
          required: false
        },
        {
          prompt: "How was the length of the study? Would you prefer one longer story or more shorter stories?",
          rows: 2,
          required: false
        },
        {
          prompt: "What topics would you like to read about in a future study?",
          rows: 3,
          required: false
        },
        {
          prompt: "Is there anything that would make this study better or more fun?",
          rows: 3,
          required: false
        },
        {
          prompt: "Any other comments?",
          rows: 3,
          required: false
        }
      ],
      data: { survey: "exit" }
    };
  }
  function buildFinalPage() {
    return {
      type: HtmlButtonResponsePlugin,
      stimulus: `<h2>You're all done!</h2><img src="https://raw.githubusercontent.com/vboyce/kid-maze-passages/main/experiment/assets/images/330px-Wikipedia20_animated_Confetti.gif" alt="Confetti celebration" style="width:30%;max-height:20vh;display:block;margin:16px auto;"><p>Thank you for participating in this study!</p><p>This study is about when words are harder or easier to read, and how that might change as kids grow up. Adults take longer to read words like porcupine compared to words like dog, because dog is a more common word. Adults also take longer to read words that don't fit the context -- like barked in 'The cat barked' compared to barked in 'The dog barked'.</p><p>In this study, we're exploring whether kids show the same patterns, so we can learn more about how language and reading skills develop over time!</p><p>If you have any questions, your parent can contact us via the Children Helping Science website.</p>`,
      choices: ["Done!"],
      button_html: ['<button class="jspsych-btn">%choice%</button>']
    };
  }
  function buildParentDebrief() {
    const body = "<h2>Thanks for participating in our study!</h2><p><b>Purpose: </b> This study was about when words are harder or easier to read, and how that might change as kids grow up. Adults take longer to read words that are less common (like porcupine) or that don't fit the context (like barked in 'The cat barked'). These patterns suggest that adults are building expectations about what the next word is as they read. We want to know if children are doing the same thing, and how this might change as they get older. so we're measuring how children's reading times vary based on how common or predictable words are. This is an early study using this task, and the results will also help us design studies for a wider range of ages. </p><p><b>What happened in the study: </b>In this study, your child read some sentences in a way where they saw two words at a time and picked which one continues the sentence. We use this because it slows down reading so we can carefully measure how long your child spent on each word. </p><p><b><i>This wasn't a test!</i></b> Sometimes sentences are harder and sometimes they are easier. We want to know when it was faster and easier to choose the right word and when it was harder. We're interested in when it takes children longer to find the right word because it helps us understand how their language and reading skills are developing, and how children's reading might be different than adults'. </p><p><b>Compensation: </b>We'll email you a $5 Amazon gift card within one week to thank you for your time. To be eligible for compensation, (1) your child must be in the age range for this study, (2) you need to submit a valid consent video, and (3) your child must be visible in the consent recording. Each child is eligible for compensation only once.</p><p>If you have questions, you can contact us via the Children Helping Science website.</p>";
    return {
      type: HtmlButtonResponsePlugin,
      stimulus: `<div style="max-width:620px;margin:0 auto;padding:0 24px;font-size:1.05em;line-height:1.7;text-align:left">${body}</div>`,
      choices: ["Continue"],
      button_html: ['<button style="padding:12px 36px;font-size:1.1em;border-radius:8px;background:#4a7fcb;color:white;border:none;cursor:pointer;margin-top:8px">%choice%</button>']
    };
  }

  // experiment/src/controls.js
  function createOverlay(id, contentHtml) {
    const overlay = document.createElement("div");
    overlay.id = id;
    overlay.className = "study-overlay";
    overlay.innerHTML = contentHtml;
    document.body.appendChild(overlay);
    return overlay;
  }
  function createPauseButton(jsPsych, container = document.body) {
    const btn = document.createElement("button");
    btn.id = "pause-btn";
    btn.className = "study-control-btn";
    btn.textContent = "Pause";
    container.appendChild(btn);
    btn.addEventListener("click", () => {
      jsPsych.pauseExperiment();
      const overlay = createOverlay(
        "pause-overlay",
        "<h2>Paused</h2><p>Take a break! Press Resume when you're ready.</p><button id='resume-btn' class='study-control-btn'>Resume</button>"
      );
      overlay.querySelector("#resume-btn").addEventListener("click", () => {
        overlay.remove();
        jsPsych.resumeExperiment();
      });
    });
    return {
      hide: () => {
        btn.style.display = "none";
      },
      show: () => {
        btn.style.display = "";
      }
    };
  }
  function createStopButton(jsPsych, container = document.body) {
    const btn = document.createElement("button");
    btn.id = "stop-btn";
    btn.className = "study-control-btn";
    btn.textContent = "Stop study";
    container.appendChild(btn);
    btn.addEventListener("click", () => {
      const overlay = createOverlay(
        "stop-overlay",
        "<h2>Stop study?</h2><p>Are you sure you want to stop? Your progress will be saved.</p><button id='stop-keep-going' class='study-control-btn'>Keep going</button><button id='stop-confirm' class='study-control-btn study-control-btn--stop'>Yes, stop</button>"
      );
      overlay.querySelector("#stop-keep-going").addEventListener("click", () => {
        overlay.remove();
      });
      overlay.querySelector("#stop-confirm").addEventListener("click", () => {
        overlay.remove();
        jsPsych.endExperiment();
      });
    });
    return {
      hide: () => {
        btn.style.display = "none";
      },
      show: () => {
        btn.style.display = "";
      }
    };
  }

  // experiment/src/consent.js
  var IMAGE_BASE_URL4 = "https://raw.githubusercontent.com/vboyce/kid-maze-passages/main/experiment/assets/images/";
  function assentStimulus(html) {
    return `<div style="max-width:520px;margin:0 auto;font-size:1.1em;line-height:1.6">${html}</div>`;
  }
  var CONSENT_PARAMS = {
    PIName: "Roger Levy",
    institution: "Massachusetts Institute of Technology",
    PIContact: "Veronica Boyce at vboyce@mit.edu",
    purpose: "This is a research study. We are researchers studying how people understand language as they hear and read it. Our research is about how children process words to understand the meaning of sentences.",
    procedures: "During this study, your child will read some sentences in a way where they see two words at a time and pick which one continues the sentence.",
    payment: "There are no direct benefits to you or your child from taking part in this research study. After you participate, we'll email you a $5 Amazon gift card within one week to thank you for your time. To be eligible for compensation, (1) your child must be in the age range for this study, (2) you need to submit a valid consent video, and (3) your child must be visible in the consent recording. Your child does not need to finish the entire study to be eligible. Each child is eligible for compensation only once.",
    risk_statement: "There are no known risks to participation.",
    datause: "We are interested in your child's reading times and key presses as they read sentences. Your child's responses will be recorded for data analysis.",
    research_rights_statement: "You are not waiving any legal claims, rights or remedies because of your participation in this research study. If you feel you have been treated unfairly, or you have questions regarding your rights as a study participant, you may contact the Chairman of the Committee on the Use of Humans as Experimental Subjects, M.I.T., Room E25-143B, 77 Massachusetts Ave, Cambridge, MA 02139, phone 1-617-253-6787.",
    template: "consent-recording-only"
  };
  var IMG = (file, style) => `<img src='${IMAGE_BASE_URL4}${file}' alt='' style='${style}'>`;
  var ASSENT_PAGES = [
    {
      stimulus: assentStimulus(
        IMG("assent_1.png", "max-height:180px;display:block;margin:0 auto 12px") + "<p>We are asking you to take part in a research study! We are scientists who are trying to learn more about how kids read and understand language.</p>"
      ),
      show_webcam: false
    },
    {
      stimulus: assentStimulus(
        `<img src='${IMAGE_BASE_URL4}vboyce.jpg' alt='Veronica Boyce' style='width:140px;height:140px;object-fit:cover;border-radius:50%;display:block;margin:0 auto 12px'><p>I'm Veronica Boyce, a researcher at MIT. I study how people understand language \u2014 like what makes some sentences easy to understand and others harder.</p>`
      ),
      show_webcam: false
    },
    {
      stimulus: assentStimulus(
        `<img src='${IMAGE_BASE_URL4}assent_3_maze.png' alt='Example of the maze task' style='max-height:180px;display:block;margin:0 auto 12px'><p>In this study, you will read sentences in a funny way \u2014 you'll see two words at a time and pick which one continues the sentence.</p><p>If you decide to do this study, we'll give you step-by-step instructions!</p>`
      ),
      show_webcam: false
    },
    {
      stimulus: assentStimulus(
        IMG("assent_4.png", "max-height:180px;display:block;margin:0 auto 12px") + "<p>This isn't a test! We just want to learn more about how kids read and think.<br>There are no right or wrong answers.<br>There will be places to take a break if you need one.</p>"
      ),
      show_webcam: false
    },
    {
      stimulus: assentStimulus(
        IMG("assent_5.png", "max-height:180px;display:block;margin:0 auto 12px") + "<p>Participation is voluntary.<br>If you don't want to do this study, just press &ldquo;no&rdquo; below \u2014 that's totally fine.<br>If you start and then want to stop, you can do that too \u2013 just tell your parent or close the experiment window.</p>"
      ),
      show_webcam: false
    },
    {
      stimulus: assentStimulus(
        IMG("assent_6.png", "max-height:180px;display:block;margin:0 auto 12px") + "<p>There are no known risks to being in this study. There are no direct benefits to you personally, but you'll be helping us understand how kids learn to read!</p><p>If you have questions about this study, ask your parent, send us a message on Children Helping Science, or email Veronica Boyce at vboyce@mit.edu.</p><p>If you feel you have been treated unfairly, or you have questions regarding your rights as a study participant, you can contact MIT's research committee (COUHES) at 617-253-6787.</p>"
      ),
      show_webcam: false
    }
  ];
  var CONSENT_IMAGES = [
    "assent_1.png",
    "vboyce.jpg",
    "assent_3_maze.png",
    "assent_4.png",
    "assent_5.png",
    "assent_6.png"
  ].map((f) => IMAGE_BASE_URL4 + f);
  var MIN_AGE_TO_ASSENT = 7;
  function buildConsentTimeline(chsRecord, jsPsych = null) {
    const clearDisplay = jsPsych ? () => {
      jsPsych.getDisplayElement().innerHTML = "";
    } : () => {
    };
    if (!chsRecord) {
      const consentFields = Object.entries(CONSENT_PARAMS).filter(([k]) => !["template", "additional_segments"].includes(k)).map(([k, v]) => `<p><b>${k}:</b> ${v}</p>`).join("");
      const assentContent = ASSENT_PAGES.map((p) => p.stimulus).join("");
      return [
        {
          type: HtmlButtonResponsePlugin,
          stimulus: "<h2>Parent/Guardian Consent</h2>" + consentFields,
          choices: ["I consent"],
          data: { trial_type: "consent-dev" }
        },
        {
          type: HtmlButtonResponsePlugin,
          stimulus: "<h2>Child Assent</h2>" + assentContent,
          choices: ["I agree to participate"],
          data: { trial_type: "assent-dev" }
        }
      ];
    }
    const { VideoConfigPlugin, VideoConsentPlugin, VideoAssentPlugin } = chsRecord;
    return [
      { type: VideoConfigPlugin },
      { type: VideoConsentPlugin, ...CONSENT_PARAMS, on_start: clearDisplay },
      {
        type: VideoAssentPlugin,
        pages: ASSENT_PAGES,
        min_age_to_assent: MIN_AGE_TO_ASSENT,
        on_start: clearDisplay
      }
    ];
  }

  // experiment/src/experiment_chs.js
  [...CONSENT_IMAGES, ...PRACTICE_IMAGES, ...PASSAGE_IMAGES].forEach((src) => {
    new Image().src = src;
  });
  var SECTIONS = ["learn-how", "story-1", "story-2", "wrap-up"];
  function createProgressBar() {
    const labels = {
      "learn-how": "Learn how",
      "story-1": "Story 1",
      "story-2": "Story 2",
      "wrap-up": "Wrap-up"
    };
    const nav = document.createElement("nav");
    nav.id = "progress-bar";
    SECTIONS.forEach((key) => {
      const zone = document.createElement("div");
      zone.className = "progress-zone";
      zone.dataset.section = key;
      zone.textContent = labels[key];
      nav.appendChild(zone);
    });
    nav.style.display = "none";
    document.body.insertBefore(nav, document.body.firstChild);
    setSection("learn-how");
  }
  function setSection(key) {
    const idx = SECTIONS.indexOf(key);
    document.querySelectorAll(".progress-zone").forEach((el, i) => {
      el.classList.toggle("active", i === idx);
      el.classList.toggle("done", i < idx);
    });
  }
  function hideChrome() {
    const bar = document.querySelector("#progress-bar");
    if (bar) bar.style.display = "none";
    const container = document.querySelector("#jspsych-container");
    if (container) container.style.display = "none";
  }
  (async function() {
    createProgressBar();
    const jsPsychContainer = document.createElement("div");
    jsPsychContainer.id = "jspsych-container";
    document.body.appendChild(jsPsychContainer);
    const jsPsych = window.initJsPsych({
      display_element: jsPsychContainer,
      on_finish: hideChrome
    });
    const progressBar = document.querySelector("#progress-bar");
    const pauseControl = createPauseButton(jsPsych, progressBar);
    const stopControl = createStopButton(jsPsych, progressBar);
    const chsExitSurveyTrial = () => {
      const chsSurvey = window.chsSurvey ?? null;
      if (!chsSurvey) return null;
      return {
        type: chsSurvey.ExitSurveyPlugin,
        show_databrary_options: false,
        include_withdrawal_example: true,
        private_level_only: true,
        on_start: () => {
          document.body.classList.remove("study-active");
          document.querySelector("#progress-bar").style.display = "none";
          document.querySelector("#jspsych-container").style.display = "";
        }
      };
    };
    const chsRecord = window.chsRecord ?? null;
    const timeline = [];
    timeline.push(...buildConsentTimeline(chsRecord, jsPsych));
    timeline.push({
      type: HtmlButtonResponsePlugin,
      stimulus: INSTRUCTIONS,
      choices: ["Continue"],
      button_html: ['<button class="jspsych-btn">%choice%</button>'],
      on_start: () => {
        document.body.classList.add("study-active");
        document.querySelector("#progress-bar").style.display = "";
      }
    });
    timeline.push(...buildPracticeTimeline(PRACTICE_SENTENCES));
    if (true) {
      timeline.push({
        type: HtmlButtonResponsePlugin,
        stimulus: PRE_STORIES,
        choices: ["Let's go!"],
        button_html: ['<button class="jspsych-btn">%choice%</button>'],
        on_start: () => setSection("story-1")
      });
      const orderedPassages = [...passages];
      shuffle(orderedPassages);
      for (let p = 0; p < orderedPassages.length; p++) {
        if (p > 0) {
          timeline.push({
            type: HtmlButtonResponsePlugin,
            stimulus: BETWEEN_PASSAGES,
            choices: ["Start next story"],
            button_html: ['<button class="jspsych-btn">%choice%</button>'],
            on_start: () => setSection(`story-${p + 1}`)
          });
        }
        timeline.push(...buildPassageTimeline(orderedPassages[p], p, orderedPassages.length));
      }
    }
    const debriefTrial = buildDebriefTrial();
    debriefTrial.on_start = () => {
      setSection("wrap-up");
      pauseControl.hide();
      stopControl.hide();
    };
    timeline.push(debriefTrial);
    timeline.push(buildExitSurvey());
    timeline.push(buildFinalPage());
    const exitTrial = chsExitSurveyTrial();
    if (exitTrial) timeline.push(exitTrial);
    timeline.push(buildParentDebrief());
    await jsPsych.run(timeline);
  })();
})();
