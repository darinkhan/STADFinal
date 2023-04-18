function cov_172nkwkeet() {
  var path = "/Users/darinkhan/Documents/Johns Hopkins/STADFinal/Octave-master/src/reducers/authReducer.js";
  var hash = "fe4899f7266e3e4b1043a668beaef86f47e03565";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/darinkhan/Documents/Johns Hopkins/STADFinal/Octave-master/src/reducers/authReducer.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 16
        },
        end: {
          line: 14,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 13,
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
          column: 18
        }
      },
      "4": {
        start: {
          line: 12,
          column: 6
        },
        end: {
          line: 12,
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
            line: 14,
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
            line: 13,
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
            column: 18
          }
        }, {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 12,
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
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0],
      "1": [0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "fe4899f7266e3e4b1043a668beaef86f47e03565"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_172nkwkeet = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_172nkwkeet();
import { LOGIN_USER, LOGOUT_USER } from "../constants";
cov_172nkwkeet().s[0]++;
const reducer = (state = (cov_172nkwkeet().b[0][0]++, null), action) => {
  cov_172nkwkeet().f[0]++;
  cov_172nkwkeet().s[1]++;
  switch (action.type) {
    case LOGIN_USER:
      cov_172nkwkeet().b[1][0]++;
      cov_172nkwkeet().s[2]++;
      return action.payload;
    case LOGOUT_USER:
      cov_172nkwkeet().b[1][1]++;
      cov_172nkwkeet().s[3]++;
      return null;
    default:
      cov_172nkwkeet().b[1][2]++;
      cov_172nkwkeet().s[4]++;
      return state;
  }
};
export default reducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJMT0dJTl9VU0VSIiwiTE9HT1VUX1VTRVIiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCJdLCJzb3VyY2VzIjpbImF1dGhSZWR1Y2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExPR0lOX1VTRVIsIExPR09VVF9VU0VSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gbnVsbCwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIExPR0lOX1VTRVI6XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XG5cbiAgICBjYXNlIExPR09VVF9VU0VSOlxuICAgICAgcmV0dXJuIG51bGw7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUE7TUFBQTtJQUFBO0VBQUE7RUFBQTtBQUFBO0FBQUE7QUFmWixTQUFTQSxVQUFVLEVBQUVDLFdBQVcsUUFBUSxjQUFjO0FBQUM7QUFFdkQsTUFBTUMsT0FBTyxHQUFHLENBQUNDLEtBQUssZ0NBQUcsSUFBSSxHQUFFQyxNQUFNLEtBQUs7RUFBQTtFQUFBO0VBQ3hDLFFBQVFBLE1BQU0sQ0FBQ0MsSUFBSTtJQUNqQixLQUFLTCxVQUFVO01BQUE7TUFBQTtNQUNiLE9BQU9JLE1BQU0sQ0FBQ0UsT0FBTztJQUV2QixLQUFLTCxXQUFXO01BQUE7TUFBQTtNQUNkLE9BQU8sSUFBSTtJQUViO01BQUE7TUFBQTtNQUNFLE9BQU9FLEtBQUs7RUFBQztBQUVuQixDQUFDO0FBRUQsZUFBZUQsT0FBTyJ9