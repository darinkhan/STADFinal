function cov_1w8rjmd5jv() {
  var path = "/Users/anthonyskyng-thow-hing/Documents/SoftwareTesting/STADFinal/Octave-master/src/reducers/artistsReducer.js";
  var hash = "c64dc7b13cae042fcd4aa2b9feb4e7d81104af81";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/anthonyskyng-thow-hing/Documents/SoftwareTesting/STADFinal/Octave-master/src/reducers/artistsReducer.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 16
        },
        end: {
          line: 11,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 10,
          column: 3
        }
      },
      "2": {
        start: {
          line: 6,
          column: 6
        },
        end: {
          line: 6,
          column: 28
        }
      },
      "3": {
        start: {
          line: 9,
          column: 6
        },
        end: {
          line: 9,
          column: 19
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 16
          },
          end: {
            line: 3,
            column: 17
          }
        },
        loc: {
          start: {
            line: 3,
            column: 40
          },
          end: {
            line: 11,
            column: 1
          }
        },
        line: 3
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 3,
            column: 17
          },
          end: {
            line: 3,
            column: 27
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 3,
            column: 25
          },
          end: {
            line: 3,
            column: 27
          }
        }],
        line: 3
      },
      "1": {
        loc: {
          start: {
            line: 4,
            column: 2
          },
          end: {
            line: 10,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 5,
            column: 4
          },
          end: {
            line: 6,
            column: 28
          }
        }, {
          start: {
            line: 8,
            column: 4
          },
          end: {
            line: 9,
            column: 19
          }
        }],
        line: 4
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c64dc7b13cae042fcd4aa2b9feb4e7d81104af81"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1w8rjmd5jv = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1w8rjmd5jv();
import { SET_ARTISTS } from "../constants";
cov_1w8rjmd5jv().s[0]++;
const reducer = (state = (cov_1w8rjmd5jv().b[0][0]++, []), action) => {
  cov_1w8rjmd5jv().f[0]++;
  cov_1w8rjmd5jv().s[1]++;
  switch (action.type) {
    case SET_ARTISTS:
      cov_1w8rjmd5jv().b[1][0]++;
      cov_1w8rjmd5jv().s[2]++;
      return action.payload;
    default:
      cov_1w8rjmd5jv().b[1][1]++;
      cov_1w8rjmd5jv().s[3]++;
      return state;
  }
};
export default reducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTRVRfQVJUSVNUUyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIl0sInNvdXJjZXMiOlsiYXJ0aXN0c1JlZHVjZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU0VUX0FSVElTVFMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9BUlRJU1RTOlxuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQTtNQUFBO0lBQUE7RUFBQTtFQUFBO0FBQUE7QUFBQTtBQWZaLFNBQVNBLFdBQVcsUUFBUSxjQUFjO0FBQUM7QUFFM0MsTUFBTUMsT0FBTyxHQUFHLENBQUNDLEtBQUssZ0NBQUcsRUFBRSxHQUFFQyxNQUFNLEtBQUs7RUFBQTtFQUFBO0VBQ3RDLFFBQVFBLE1BQU0sQ0FBQ0MsSUFBSTtJQUNqQixLQUFLSixXQUFXO01BQUE7TUFBQTtNQUNkLE9BQU9HLE1BQU0sQ0FBQ0UsT0FBTztJQUV2QjtNQUFBO01BQUE7TUFDRSxPQUFPSCxLQUFLO0VBQUM7QUFFbkIsQ0FBQztBQUVELGVBQWVELE9BQU8ifQ==