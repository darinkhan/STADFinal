function cov_mxfqbfmk6() {
  var path = "/Users/anthonyskyng-thow-hing/Documents/SoftwareTesting/STADFinal/Octave-master/src/reducers/newReleasesReducer.js";
  var hash = "c1beb7c8e38141780d54c02b60547f51e407c8f0";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/anthonyskyng-thow-hing/Documents/SoftwareTesting/STADFinal/Octave-master/src/reducers/newReleasesReducer.js",
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
    hash: "c1beb7c8e38141780d54c02b60547f51e407c8f0"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_mxfqbfmk6 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_mxfqbfmk6();
import { SET_NEW_RELEASES } from "../constants";
cov_mxfqbfmk6().s[0]++;
const reducer = (state = (cov_mxfqbfmk6().b[0][0]++, []), action) => {
  cov_mxfqbfmk6().f[0]++;
  cov_mxfqbfmk6().s[1]++;
  switch (action.type) {
    case SET_NEW_RELEASES:
      cov_mxfqbfmk6().b[1][0]++;
      cov_mxfqbfmk6().s[2]++;
      return action.payload;
    default:
      cov_mxfqbfmk6().b[1][1]++;
      cov_mxfqbfmk6().s[3]++;
      return state;
  }
};
export default reducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTRVRfTkVXX1JFTEVBU0VTIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiXSwic291cmNlcyI6WyJuZXdSZWxlYXNlc1JlZHVjZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU0VUX05FV19SRUxFQVNFUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IFtdLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU0VUX05FV19SRUxFQVNFUzpcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUE7TUFBQTtJQUFBO0VBQUE7RUFBQTtBQUFBO0FBQUE7QUFmWixTQUFTQSxnQkFBZ0IsUUFBUSxjQUFjO0FBQUM7QUFFaEQsTUFBTUMsT0FBTyxHQUFHLENBQUNDLEtBQUssK0JBQUcsRUFBRSxHQUFFQyxNQUFNLEtBQUs7RUFBQTtFQUFBO0VBQ3RDLFFBQVFBLE1BQU0sQ0FBQ0MsSUFBSTtJQUNqQixLQUFLSixnQkFBZ0I7TUFBQTtNQUFBO01BQ25CLE9BQU9HLE1BQU0sQ0FBQ0UsT0FBTztJQUV2QjtNQUFBO01BQUE7TUFDRSxPQUFPSCxLQUFLO0VBQUM7QUFFbkIsQ0FBQztBQUVELGVBQWVELE9BQU8ifQ==