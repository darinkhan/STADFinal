function cov_1e53c43mcj() {
  var path = "/Users/anthonyskyng-thow-hing/Documents/SoftwareTesting/STADFinal/Octave-master/src/reducers/index.js";
  var hash = "7dc7b2ab5a15786df4abfd662e99e7c6d2ece7a6";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/anthonyskyng-thow-hing/Documents/SoftwareTesting/STADFinal/Octave-master/src/reducers/index.js",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 20
        },
        end: {
          line: 15,
          column: 2
        }
      },
      "1": {
        start: {
          line: 17,
          column: 20
        },
        end: {
          line: 23,
          column: 1
        }
      },
      "2": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 20,
          column: 3
        }
      },
      "3": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 42
        }
      },
      "4": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 22,
          column: 36
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 17,
            column: 20
          },
          end: {
            line: 17,
            column: 21
          }
        },
        loc: {
          start: {
            line: 17,
            column: 39
          },
          end: {
            line: 23,
            column: 1
          }
        },
        line: 17
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 18,
            column: 2
          },
          end: {
            line: 20,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 18,
            column: 2
          },
          end: {
            line: 20,
            column: 3
          }
        }, {
          start: {
            line: 18,
            column: 2
          },
          end: {
            line: 20,
            column: 3
          }
        }],
        line: 18
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
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7dc7b2ab5a15786df4abfd662e99e7c6d2ece7a6"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1e53c43mcj = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1e53c43mcj();
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import newReleasesReducer from "./newReleasesReducer";
import artistsReducer from "./artistsReducer";
import currentSessionReducer from "./currentSessionReducer";
import playListReducer from "./playListReducer";
import { LOGOUT_USER } from "../constants";
const allReducers = (cov_1e53c43mcj().s[0]++, combineReducers({
  user: authReducer,
  newReleases: newReleasesReducer,
  artists: artistsReducer,
  currentSession: currentSessionReducer,
  playlists: playListReducer
}));
cov_1e53c43mcj().s[1]++;
const rootReducer = (state, action) => {
  cov_1e53c43mcj().f[0]++;
  cov_1e53c43mcj().s[2]++;
  if (action.type === LOGOUT_USER) {
    cov_1e53c43mcj().b[0][0]++;
    cov_1e53c43mcj().s[3]++;
    return allReducers(undefined, action);
  } else {
    cov_1e53c43mcj().b[0][1]++;
  }
  cov_1e53c43mcj().s[4]++;
  return allReducers(state, action);
};
export default rootReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb21iaW5lUmVkdWNlcnMiLCJhdXRoUmVkdWNlciIsIm5ld1JlbGVhc2VzUmVkdWNlciIsImFydGlzdHNSZWR1Y2VyIiwiY3VycmVudFNlc3Npb25SZWR1Y2VyIiwicGxheUxpc3RSZWR1Y2VyIiwiTE9HT1VUX1VTRVIiLCJhbGxSZWR1Y2VycyIsInVzZXIiLCJuZXdSZWxlYXNlcyIsImFydGlzdHMiLCJjdXJyZW50U2Vzc2lvbiIsInBsYXlsaXN0cyIsInJvb3RSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwidW5kZWZpbmVkIl0sInNvdXJjZXMiOlsiaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgYXV0aFJlZHVjZXIgZnJvbSBcIi4vYXV0aFJlZHVjZXJcIjtcbmltcG9ydCBuZXdSZWxlYXNlc1JlZHVjZXIgZnJvbSBcIi4vbmV3UmVsZWFzZXNSZWR1Y2VyXCI7XG5pbXBvcnQgYXJ0aXN0c1JlZHVjZXIgZnJvbSBcIi4vYXJ0aXN0c1JlZHVjZXJcIjtcbmltcG9ydCBjdXJyZW50U2Vzc2lvblJlZHVjZXIgZnJvbSBcIi4vY3VycmVudFNlc3Npb25SZWR1Y2VyXCI7XG5pbXBvcnQgcGxheUxpc3RSZWR1Y2VyIGZyb20gXCIuL3BsYXlMaXN0UmVkdWNlclwiO1xuaW1wb3J0IHsgTE9HT1VUX1VTRVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IGFsbFJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcbiAgdXNlcjogYXV0aFJlZHVjZXIsXG4gIG5ld1JlbGVhc2VzOiBuZXdSZWxlYXNlc1JlZHVjZXIsXG4gIGFydGlzdHM6IGFydGlzdHNSZWR1Y2VyLFxuICBjdXJyZW50U2Vzc2lvbjogY3VycmVudFNlc3Npb25SZWR1Y2VyLFxuICBwbGF5bGlzdHM6IHBsYXlMaXN0UmVkdWNlcixcbn0pO1xuXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGlmIChhY3Rpb24udHlwZSA9PT0gTE9HT1VUX1VTRVIpIHtcbiAgICByZXR1cm4gYWxsUmVkdWNlcnModW5kZWZpbmVkLCBhY3Rpb24pO1xuICB9XG5cbiAgcmV0dXJuIGFsbFJlZHVjZXJzKHN0YXRlLCBhY3Rpb24pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBO01BQUE7SUFBQTtFQUFBO0VBQUE7QUFBQTtBQUFBO0FBZlosU0FBU0EsZUFBZSxRQUFRLE9BQU87QUFDdkMsT0FBT0MsV0FBVyxNQUFNLGVBQWU7QUFDdkMsT0FBT0Msa0JBQWtCLE1BQU0sc0JBQXNCO0FBQ3JELE9BQU9DLGNBQWMsTUFBTSxrQkFBa0I7QUFDN0MsT0FBT0MscUJBQXFCLE1BQU0seUJBQXlCO0FBQzNELE9BQU9DLGVBQWUsTUFBTSxtQkFBbUI7QUFDL0MsU0FBU0MsV0FBVyxRQUFRLGNBQWM7QUFFMUMsTUFBTUMsV0FBVyw2QkFBR1AsZUFBZSxDQUFDO0VBQ2xDUSxJQUFJLEVBQUVQLFdBQVc7RUFDakJRLFdBQVcsRUFBRVAsa0JBQWtCO0VBQy9CUSxPQUFPLEVBQUVQLGNBQWM7RUFDdkJRLGNBQWMsRUFBRVAscUJBQXFCO0VBQ3JDUSxTQUFTLEVBQUVQO0FBQ2IsQ0FBQyxDQUFDO0FBQUM7QUFFSCxNQUFNUSxXQUFXLEdBQUcsQ0FBQ0MsS0FBSyxFQUFFQyxNQUFNLEtBQUs7RUFBQTtFQUFBO0VBQ3JDLElBQUlBLE1BQU0sQ0FBQ0MsSUFBSSxLQUFLVixXQUFXLEVBQUU7SUFBQTtJQUFBO0lBQy9CLE9BQU9DLFdBQVcsQ0FBQ1UsU0FBUyxFQUFFRixNQUFNLENBQUM7RUFDdkMsQ0FBQztJQUFBO0VBQUE7RUFBQTtFQUVELE9BQU9SLFdBQVcsQ0FBQ08sS0FBSyxFQUFFQyxNQUFNLENBQUM7QUFDbkMsQ0FBQztBQUVELGVBQWVGLFdBQVcifQ==