function cov_1bzkppodta() {
  var path = "/Users/anthonyskyng-thow-hing/Documents/SoftwareTesting/STADFinal/Octave-master/src/utils/player-utils.js";
  var hash = "c624768e7f82808247ed5e4ab4a9169d5480c264";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/anthonyskyng-thow-hing/Documents/SoftwareTesting/STADFinal/Octave-master/src/utils/player-utils.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 23
        },
        end: {
          line: 3,
          column: 48
        }
      },
      "1": {
        start: {
          line: 4,
          column: 24
        },
        end: {
          line: 4,
          column: 49
        }
      },
      "2": {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 5,
          column: 68
        }
      },
      "3": {
        start: {
          line: 5,
          column: 28
        },
        end: {
          line: 5,
          column: 68
        }
      },
      "4": {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 6,
          column: 48
        }
      },
      "5": {
        start: {
          line: 11,
          column: 22
        },
        end: {
          line: 11,
          column: 50
        }
      },
      "6": {
        start: {
          line: 12,
          column: 23
        },
        end: {
          line: 12,
          column: 51
        }
      },
      "7": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 15,
          column: 42
        }
      },
      "8": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 42
        }
      },
      "9": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 16,
          column: 46
        }
      }
    },
    fnMap: {
      "0": {
        name: "calculateDurationTime",
        decl: {
          start: {
            line: 2,
            column: 16
          },
          end: {
            line: 2,
            column: 37
          }
        },
        loc: {
          start: {
            line: 2,
            column: 48
          },
          end: {
            line: 7,
            column: 1
          }
        },
        line: 2
      },
      "1": {
        name: "calculateCurrentTime",
        decl: {
          start: {
            line: 10,
            column: 16
          },
          end: {
            line: 10,
            column: 36
          }
        },
        loc: {
          start: {
            line: 10,
            column: 50
          },
          end: {
            line: 17,
            column: 1
          }
        },
        line: 10
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 5,
            column: 2
          },
          end: {
            line: 5,
            column: 68
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 5,
            column: 2
          },
          end: {
            line: 5,
            column: 68
          }
        }, {
          start: {
            line: 5,
            column: 2
          },
          end: {
            line: 5,
            column: 68
          }
        }],
        line: 5
      },
      "1": {
        loc: {
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 15,
            column: 42
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 15,
            column: 42
          }
        }, {
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 15,
            column: 42
          }
        }],
        line: 13
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c624768e7f82808247ed5e4ab4a9169d5480c264"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1bzkppodta = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1bzkppodta();
// calculate Total Duration of a Song and returns in a string format mm:ss
export function calculateDurationTime(duration) {
  cov_1bzkppodta().f[0]++;
  let durationMinute = (cov_1bzkppodta().s[0]++, Math.floor(duration / 60)); // minutes
  let durationSeconds = (cov_1bzkppodta().s[1]++, Math.floor(duration % 60)); // Seconds
  cov_1bzkppodta().s[2]++;
  if (durationSeconds < 10) {
    cov_1bzkppodta().b[0][0]++;
    cov_1bzkppodta().s[3]++;
    durationSeconds = `0${durationSeconds}`;
  } else {
    cov_1bzkppodta().b[0][1]++;
  } // to make 1 as 01
  cov_1bzkppodta().s[4]++;
  return `${durationMinute}:${durationSeconds}`;
}

// calculate Current Time of a Song and returns in a string format mm:ss
export function calculateCurrentTime(currentTime) {
  cov_1bzkppodta().f[1]++;
  let currentMinute = (cov_1bzkppodta().s[5]++, Math.floor(currentTime / 60)); // minutes
  let currentSeconds = (cov_1bzkppodta().s[6]++, Math.floor(currentTime % 60)); // seconds
  cov_1bzkppodta().s[7]++;
  if (currentSeconds < 10) {
    cov_1bzkppodta().b[1][0]++;
    cov_1bzkppodta().s[8]++;
    // to make 1 as 01
    currentSeconds = `0${currentSeconds}`;
  } else {
    cov_1bzkppodta().b[1][1]++;
  }
  cov_1bzkppodta().s[9]++;
  return `${currentMinute}:${currentSeconds}`;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjYWxjdWxhdGVEdXJhdGlvblRpbWUiLCJkdXJhdGlvbiIsImR1cmF0aW9uTWludXRlIiwiTWF0aCIsImZsb29yIiwiZHVyYXRpb25TZWNvbmRzIiwiY2FsY3VsYXRlQ3VycmVudFRpbWUiLCJjdXJyZW50VGltZSIsImN1cnJlbnRNaW51dGUiLCJjdXJyZW50U2Vjb25kcyJdLCJzb3VyY2VzIjpbInBsYXllci11dGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjYWxjdWxhdGUgVG90YWwgRHVyYXRpb24gb2YgYSBTb25nIGFuZCByZXR1cm5zIGluIGEgc3RyaW5nIGZvcm1hdCBtbTpzc1xuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUR1cmF0aW9uVGltZShkdXJhdGlvbikge1xuICBsZXQgZHVyYXRpb25NaW51dGUgPSBNYXRoLmZsb29yKGR1cmF0aW9uIC8gNjApOyAvLyBtaW51dGVzXG4gIGxldCBkdXJhdGlvblNlY29uZHMgPSBNYXRoLmZsb29yKGR1cmF0aW9uICUgNjApOyAvLyBTZWNvbmRzXG4gIGlmIChkdXJhdGlvblNlY29uZHMgPCAxMCkgZHVyYXRpb25TZWNvbmRzID0gYDAke2R1cmF0aW9uU2Vjb25kc31gOyAvLyB0byBtYWtlIDEgYXMgMDFcbiAgcmV0dXJuIGAke2R1cmF0aW9uTWludXRlfToke2R1cmF0aW9uU2Vjb25kc31gO1xufVxuXG4vLyBjYWxjdWxhdGUgQ3VycmVudCBUaW1lIG9mIGEgU29uZyBhbmQgcmV0dXJucyBpbiBhIHN0cmluZyBmb3JtYXQgbW06c3NcbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVDdXJyZW50VGltZShjdXJyZW50VGltZSkge1xuICBsZXQgY3VycmVudE1pbnV0ZSA9IE1hdGguZmxvb3IoY3VycmVudFRpbWUgLyA2MCk7IC8vIG1pbnV0ZXNcbiAgbGV0IGN1cnJlbnRTZWNvbmRzID0gTWF0aC5mbG9vcihjdXJyZW50VGltZSAlIDYwKTsgLy8gc2Vjb25kc1xuICBpZiAoY3VycmVudFNlY29uZHMgPCAxMClcbiAgICAvLyB0byBtYWtlIDEgYXMgMDFcbiAgICBjdXJyZW50U2Vjb25kcyA9IGAwJHtjdXJyZW50U2Vjb25kc31gO1xuICByZXR1cm4gYCR7Y3VycmVudE1pbnV0ZX06JHtjdXJyZW50U2Vjb25kc31gO1xufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQTtNQUFBO0lBQUE7RUFBQTtFQUFBO0FBQUE7QUFBQTtBQWZaO0FBQ0EsT0FBTyxTQUFTQSxxQkFBcUIsQ0FBQ0MsUUFBUSxFQUFFO0VBQUE7RUFDOUMsSUFBSUMsY0FBYyw2QkFBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNILFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBQyxDQUFDO0VBQ2hELElBQUlJLGVBQWUsNkJBQUdGLElBQUksQ0FBQ0MsS0FBSyxDQUFDSCxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUMsQ0FBQztFQUFBO0VBQ2pELElBQUlJLGVBQWUsR0FBRyxFQUFFLEVBQUU7SUFBQTtJQUFBO0lBQUFBLGVBQWUsR0FBSSxJQUFHQSxlQUFnQixFQUFDO0VBQUEsQ0FBQztJQUFBO0VBQUEsRUFBQztFQUFBO0VBQ25FLE9BQVEsR0FBRUgsY0FBZSxJQUFHRyxlQUFnQixFQUFDO0FBQy9DOztBQUVBO0FBQ0EsT0FBTyxTQUFTQyxvQkFBb0IsQ0FBQ0MsV0FBVyxFQUFFO0VBQUE7RUFDaEQsSUFBSUMsYUFBYSw2QkFBR0wsSUFBSSxDQUFDQyxLQUFLLENBQUNHLFdBQVcsR0FBRyxFQUFFLENBQUMsRUFBQyxDQUFDO0VBQ2xELElBQUlFLGNBQWMsNkJBQUdOLElBQUksQ0FBQ0MsS0FBSyxDQUFDRyxXQUFXLEdBQUcsRUFBRSxDQUFDLEVBQUMsQ0FBQztFQUFBO0VBQ25ELElBQUlFLGNBQWMsR0FBRyxFQUFFLEVBRXJCO0lBQUE7SUFBQTtJQURBO0lBQ0FBLGNBQWMsR0FBSSxJQUFHQSxjQUFlLEVBQUM7RUFBQSxDQUFDO0lBQUE7RUFBQTtFQUFBO0VBQ3hDLE9BQVEsR0FBRUQsYUFBYyxJQUFHQyxjQUFlLEVBQUM7QUFDN0MifQ==