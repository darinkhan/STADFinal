function cov_2daoqslbf3() {
  var path = "/Users/anthonyskyng-thow-hing/Documents/SoftwareTesting/STADFinal/Octave-master/src/reducers/playListReducer.js";
  var hash = "4fd4d803ce633d8341f697cf9a9069893627cec4";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/anthonyskyng-thow-hing/Documents/SoftwareTesting/STADFinal/Octave-master/src/reducers/playListReducer.js",
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
            column: 42
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
            column: 29
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
            column: 29
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
    hash: "4fd4d803ce633d8341f697cf9a9069893627cec4"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2daoqslbf3 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2daoqslbf3();
import { SET_PLAYLISTS } from "../constants";
cov_2daoqslbf3().s[0]++;
const reducer = (state = (cov_2daoqslbf3().b[0][0]++, null), action) => {
  cov_2daoqslbf3().f[0]++;
  cov_2daoqslbf3().s[1]++;
  switch (action.type) {
    case SET_PLAYLISTS:
      cov_2daoqslbf3().b[1][0]++;
      cov_2daoqslbf3().s[2]++;
      return action.payload;
    default:
      cov_2daoqslbf3().b[1][1]++;
      cov_2daoqslbf3().s[3]++;
      return state;
  }
};
export default reducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTRVRfUExBWUxJU1RTIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiXSwic291cmNlcyI6WyJwbGF5TGlzdFJlZHVjZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU0VUX1BMQVlMSVNUUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IG51bGwsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRfUExBWUxJU1RTOlxuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQTtNQUFBO0lBQUE7RUFBQTtFQUFBO0FBQUE7QUFBQTtBQWZaLFNBQVNBLGFBQWEsUUFBUSxjQUFjO0FBQUM7QUFFN0MsTUFBTUMsT0FBTyxHQUFHLENBQUNDLEtBQUssZ0NBQUcsSUFBSSxHQUFFQyxNQUFNLEtBQUs7RUFBQTtFQUFBO0VBQ3hDLFFBQVFBLE1BQU0sQ0FBQ0MsSUFBSTtJQUNqQixLQUFLSixhQUFhO01BQUE7TUFBQTtNQUNoQixPQUFPRyxNQUFNLENBQUNFLE9BQU87SUFFdkI7TUFBQTtNQUFBO01BQ0UsT0FBT0gsS0FBSztFQUFDO0FBRW5CLENBQUM7QUFFRCxlQUFlRCxPQUFPIn0=