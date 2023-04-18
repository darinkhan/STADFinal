function cov_1gr3l24mgs() {
  var path = "/Users/darinkhan/Documents/Johns Hopkins/STADFinal/Octave-master/src/actions/artistsActions.js";
  var hash = "26fb2e117c551d8110b66a1a5bd2bb6abe24376b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/darinkhan/Documents/Johns Hopkins/STADFinal/Octave-master/src/actions/artistsActions.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 26
        },
        end: {
          line: 6,
          column: 2
        }
      },
      "1": {
        start: {
          line: 3,
          column: 40
        },
        end: {
          line: 6,
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
            column: 26
          },
          end: {
            line: 3,
            column: 27
          }
        },
        loc: {
          start: {
            line: 3,
            column: 40
          },
          end: {
            line: 6,
            column: 1
          }
        },
        line: 3
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "26fb2e117c551d8110b66a1a5bd2bb6abe24376b"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1gr3l24mgs = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1gr3l24mgs();
import { SET_ARTISTS } from "../constants";
cov_1gr3l24mgs().s[0]++;
export const setArtists = artists => {
  cov_1gr3l24mgs().f[0]++;
  cov_1gr3l24mgs().s[1]++;
  return {
    type: SET_ARTISTS,
    payload: artists
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTRVRfQVJUSVNUUyIsInNldEFydGlzdHMiLCJhcnRpc3RzIiwidHlwZSIsInBheWxvYWQiXSwic291cmNlcyI6WyJhcnRpc3RzQWN0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTRVRfQVJUSVNUUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGNvbnN0IHNldEFydGlzdHMgPSAoYXJ0aXN0cykgPT4gKHtcbiAgdHlwZTogU0VUX0FSVElTVFMsXG4gIHBheWxvYWQ6IGFydGlzdHMsXG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUE7TUFBQTtJQUFBO0VBQUE7RUFBQTtBQUFBO0FBQUE7QUFmWixTQUFTQSxXQUFXLFFBQVEsY0FBYztBQUFDO0FBRTNDLE9BQU8sTUFBTUMsVUFBVSxHQUFJQyxPQUFPLElBQU07RUFBQTtFQUFBO0VBQUE7SUFDdENDLElBQUksRUFBRUgsV0FBVztJQUNqQkksT0FBTyxFQUFFRjtFQUNYLENBQUM7QUFBRCxDQUFFIn0=