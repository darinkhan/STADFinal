function cov_tcwmhiqvx() {
  var path = "/Users/anthonyskyng-thow-hing/Documents/SoftwareTesting/STADFinal/Octave-master/src/actions/playlistActions.js";
  var hash = "7cd6429af7c939d2c6324c41be0df5759b9c2cbe";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/anthonyskyng-thow-hing/Documents/SoftwareTesting/STADFinal/Octave-master/src/actions/playlistActions.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 28
        },
        end: {
          line: 6,
          column: 2
        }
      },
      "1": {
        start: {
          line: 3,
          column: 44
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
            column: 28
          },
          end: {
            line: 3,
            column: 29
          }
        },
        loc: {
          start: {
            line: 3,
            column: 44
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
    hash: "7cd6429af7c939d2c6324c41be0df5759b9c2cbe"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_tcwmhiqvx = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_tcwmhiqvx();
import { SET_PLAYLISTS } from "../constants";
cov_tcwmhiqvx().s[0]++;
export const setPlaylists = playlists => {
  cov_tcwmhiqvx().f[0]++;
  cov_tcwmhiqvx().s[1]++;
  return {
    type: SET_PLAYLISTS,
    payload: playlists
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTRVRfUExBWUxJU1RTIiwic2V0UGxheWxpc3RzIiwicGxheWxpc3RzIiwidHlwZSIsInBheWxvYWQiXSwic291cmNlcyI6WyJwbGF5bGlzdEFjdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU0VUX1BMQVlMSVNUUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGNvbnN0IHNldFBsYXlsaXN0cyA9IChwbGF5bGlzdHMpID0+ICh7XG4gIHR5cGU6IFNFVF9QTEFZTElTVFMsXG4gIHBheWxvYWQ6IHBsYXlsaXN0cyxcbn0pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQTtNQUFBO0lBQUE7RUFBQTtFQUFBO0FBQUE7QUFBQTtBQWZaLFNBQVNBLGFBQWEsUUFBUSxjQUFjO0FBQUM7QUFFN0MsT0FBTyxNQUFNQyxZQUFZLEdBQUlDLFNBQVMsSUFBTTtFQUFBO0VBQUE7RUFBQTtJQUMxQ0MsSUFBSSxFQUFFSCxhQUFhO0lBQ25CSSxPQUFPLEVBQUVGO0VBQ1gsQ0FBQztBQUFELENBQUUifQ==