function cov_iqm4e86kk() {
  var path = "/Users/anthonyskyng-thow-hing/Documents/SoftwareTesting/STADFinal/Octave-master/src/actions/newReleasesActions.js";
  var hash = "6a967fdec12a89234231c6360b704087524f2074";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/anthonyskyng-thow-hing/Documents/SoftwareTesting/STADFinal/Octave-master/src/actions/newReleasesActions.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 30
        },
        end: {
          line: 6,
          column: 2
        }
      },
      "1": {
        start: {
          line: 3,
          column: 42
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
            column: 30
          },
          end: {
            line: 3,
            column: 31
          }
        },
        loc: {
          start: {
            line: 3,
            column: 42
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
    hash: "6a967fdec12a89234231c6360b704087524f2074"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_iqm4e86kk = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_iqm4e86kk();
import { SET_NEW_RELEASES } from "../constants";
cov_iqm4e86kk().s[0]++;
export const setNewReleases = songs => {
  cov_iqm4e86kk().f[0]++;
  cov_iqm4e86kk().s[1]++;
  return {
    type: SET_NEW_RELEASES,
    payload: songs
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTRVRfTkVXX1JFTEVBU0VTIiwic2V0TmV3UmVsZWFzZXMiLCJzb25ncyIsInR5cGUiLCJwYXlsb2FkIl0sInNvdXJjZXMiOlsibmV3UmVsZWFzZXNBY3Rpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNFVF9ORVdfUkVMRUFTRVMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBzZXROZXdSZWxlYXNlcyA9IChzb25ncykgPT4gKHtcbiAgdHlwZTogU0VUX05FV19SRUxFQVNFUyxcbiAgcGF5bG9hZDogc29uZ3MsXG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUE7TUFBQTtJQUFBO0VBQUE7RUFBQTtBQUFBO0FBQUE7QUFmWixTQUFTQSxnQkFBZ0IsUUFBUSxjQUFjO0FBQUM7QUFFaEQsT0FBTyxNQUFNQyxjQUFjLEdBQUlDLEtBQUssSUFBTTtFQUFBO0VBQUE7RUFBQTtJQUN4Q0MsSUFBSSxFQUFFSCxnQkFBZ0I7SUFDdEJJLE9BQU8sRUFBRUY7RUFDWCxDQUFDO0FBQUQsQ0FBRSJ9