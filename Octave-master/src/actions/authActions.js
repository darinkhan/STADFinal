function cov_1t3nxu41qt() {
  var path = "/Users/darinkhan/Documents/Johns Hopkins/STADFinal/Octave-master/src/actions/authActions.js";
  var hash = "9b0d9be6f06e26660d491b069ac144ded212db97";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/darinkhan/Documents/Johns Hopkins/STADFinal/Octave-master/src/actions/authActions.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 25
        },
        end: {
          line: 6,
          column: 2
        }
      },
      "1": {
        start: {
          line: 3,
          column: 36
        },
        end: {
          line: 6,
          column: 1
        }
      },
      "2": {
        start: {
          line: 8,
          column: 26
        },
        end: {
          line: 11,
          column: 2
        }
      },
      "3": {
        start: {
          line: 8,
          column: 33
        },
        end: {
          line: 11,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 25
          },
          end: {
            line: 3,
            column: 26
          }
        },
        loc: {
          start: {
            line: 3,
            column: 36
          },
          end: {
            line: 6,
            column: 1
          }
        },
        line: 3
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 8,
            column: 26
          },
          end: {
            line: 8,
            column: 27
          }
        },
        loc: {
          start: {
            line: 8,
            column: 33
          },
          end: {
            line: 11,
            column: 1
          }
        },
        line: 8
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "9b0d9be6f06e26660d491b069ac144ded212db97"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1t3nxu41qt = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1t3nxu41qt();
import { LOGIN_USER, LOGOUT_USER } from "../constants";
cov_1t3nxu41qt().s[0]++;
export const loginUser = user => {
  cov_1t3nxu41qt().f[0]++;
  cov_1t3nxu41qt().s[1]++;
  return {
    type: LOGIN_USER,
    payload: user
  };
};
cov_1t3nxu41qt().s[2]++;
export const logoutUser = () => {
  cov_1t3nxu41qt().f[1]++;
  cov_1t3nxu41qt().s[3]++;
  return {
    type: LOGOUT_USER,
    payload: null
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJMT0dJTl9VU0VSIiwiTE9HT1VUX1VTRVIiLCJsb2dpblVzZXIiLCJ1c2VyIiwidHlwZSIsInBheWxvYWQiLCJsb2dvdXRVc2VyIl0sInNvdXJjZXMiOlsiYXV0aEFjdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTE9HSU5fVVNFUiwgTE9HT1VUX1VTRVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBsb2dpblVzZXIgPSAodXNlcikgPT4gKHtcbiAgdHlwZTogTE9HSU5fVVNFUixcbiAgcGF5bG9hZDogdXNlcixcbn0pO1xuXG5leHBvcnQgY29uc3QgbG9nb3V0VXNlciA9ICgpID0+ICh7XG4gIHR5cGU6IExPR09VVF9VU0VSLFxuICBwYXlsb2FkOiBudWxsLFxufSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUE7TUFBQTtJQUFBO0VBQUE7RUFBQTtBQUFBO0FBQUE7QUFmWixTQUFTQSxVQUFVLEVBQUVDLFdBQVcsUUFBUSxjQUFjO0FBQUM7QUFFdkQsT0FBTyxNQUFNQyxTQUFTLEdBQUlDLElBQUksSUFBTTtFQUFBO0VBQUE7RUFBQTtJQUNsQ0MsSUFBSSxFQUFFSixVQUFVO0lBQ2hCSyxPQUFPLEVBQUVGO0VBQ1gsQ0FBQztBQUFELENBQUU7QUFBQztBQUVILE9BQU8sTUFBTUcsVUFBVSxHQUFHLE1BQU87RUFBQTtFQUFBO0VBQUE7SUFDL0JGLElBQUksRUFBRUgsV0FBVztJQUNqQkksT0FBTyxFQUFFO0VBQ1gsQ0FBQztBQUFELENBQUUifQ==