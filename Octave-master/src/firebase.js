function cov_1y8oawmziz() {
  var path = "/Users/darinkhan/Documents/Johns Hopkins/STADFinal/Octave-master/src/firebase.js";
  var hash = "8ba64ad35d7a5f0d7032fbfa040c39bc62bc46a4";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/darinkhan/Documents/Johns Hopkins/STADFinal/Octave-master/src/firebase.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 23
        },
        end: {
          line: 13,
          column: 1
        }
      },
      "1": {
        start: {
          line: 15,
          column: 0
        },
        end: {
          line: 15,
          column: 30
        }
      },
      "2": {
        start: {
          line: 17,
          column: 18
        },
        end: {
          line: 17,
          column: 32
        }
      },
      "3": {
        start: {
          line: 18,
          column: 23
        },
        end: {
          line: 18,
          column: 35
        }
      },
      "4": {
        start: {
          line: 19,
          column: 20
        },
        end: {
          line: 19,
          column: 29
        }
      },
      "5": {
        start: {
          line: 20,
          column: 24
        },
        end: {
          line: 20,
          column: 48
        }
      },
      "6": {
        start: {
          line: 21,
          column: 34
        },
        end: {
          line: 21,
          column: 49
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "8ba64ad35d7a5f0d7032fbfa040c39bc62bc46a4"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1y8oawmziz = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1y8oawmziz();
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = (cov_1y8oawmziz().s[0]++, {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERID,
  appId: process.env.REACT_APP_APP_ID
});
cov_1y8oawmziz().s[1]++;
initializeApp(firebaseConfig);
export const db = (cov_1y8oawmziz().s[2]++, getFirestore());
export const storage = (cov_1y8oawmziz().s[3]++, getStorage());
export const auth = (cov_1y8oawmziz().s[4]++, getAuth());
export const provider = (cov_1y8oawmziz().s[5]++, new GoogleAuthProvider());
export const getServerTimeStamp = (cov_1y8oawmziz().s[6]++, serverTimestamp);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0QXV0aCIsIkdvb2dsZUF1dGhQcm92aWRlciIsImdldEZpcmVzdG9yZSIsInNlcnZlclRpbWVzdGFtcCIsImdldFN0b3JhZ2UiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJSRUFDVF9BUFBfQVBJX0tFWSIsImF1dGhEb21haW4iLCJSRUFDVF9BUFBfQVVUSF9ET01BSU4iLCJwcm9qZWN0SWQiLCJSRUFDVF9BUFBfUFJPSkVDVF9JRCIsInN0b3JhZ2VCdWNrZXQiLCJSRUFDVF9BUFBfU1RPUkFHRV9CVUNLRVQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsIlJFQUNUX0FQUF9NRVNTQUdJTkdfU0VOREVSSUQiLCJhcHBJZCIsIlJFQUNUX0FQUF9BUFBfSUQiLCJkYiIsInN0b3JhZ2UiLCJhdXRoIiwicHJvdmlkZXIiLCJnZXRTZXJ2ZXJUaW1lU3RhbXAiXSwic291cmNlcyI6WyJmaXJlYmFzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IHsgZ2V0QXV0aCwgR29vZ2xlQXV0aFByb3ZpZGVyIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7IGdldEZpcmVzdG9yZSwgc2VydmVyVGltZXN0YW1wIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgZ2V0U3RvcmFnZSB9IGZyb20gXCJmaXJlYmFzZS9zdG9yYWdlXCI7XG5cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9BUElfS0VZLFxuICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfQVVUSF9ET01BSU4sXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1BST0pFQ1RfSUQsXG4gIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9TVE9SQUdFX0JVQ0tFVCxcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9NRVNTQUdJTkdfU0VOREVSSUQsXG4gIGFwcElkOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfQVBQX0lELFxufTtcblxuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG5cbmV4cG9ydCBjb25zdCBkYiA9IGdldEZpcmVzdG9yZSgpO1xuZXhwb3J0IGNvbnN0IHN0b3JhZ2UgPSBnZXRTdG9yYWdlKCk7XG5leHBvcnQgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcbmV4cG9ydCBjb25zdCBwcm92aWRlciA9IG5ldyBHb29nbGVBdXRoUHJvdmlkZXIoKTtcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJUaW1lU3RhbXAgPSBzZXJ2ZXJUaW1lc3RhbXA7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQTtNQUFBO0lBQUE7RUFBQTtFQUFBO0FBQUE7QUFBQTtBQWZaLFNBQVNBLGFBQWEsUUFBUSxjQUFjO0FBQzVDLFNBQVNDLE9BQU8sRUFBRUMsa0JBQWtCLFFBQVEsZUFBZTtBQUMzRCxTQUFTQyxZQUFZLEVBQUVDLGVBQWUsUUFBUSxvQkFBb0I7QUFDbEUsU0FBU0MsVUFBVSxRQUFRLGtCQUFrQjtBQUU3QyxNQUFNQyxjQUFjLDZCQUFHO0VBQ3JCQyxNQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxpQkFBaUI7RUFDckNDLFVBQVUsRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLHFCQUFxQjtFQUM3Q0MsU0FBUyxFQUFFTCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ssb0JBQW9CO0VBQzNDQyxhQUFhLEVBQUVQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTyx3QkFBd0I7RUFDbkRDLGlCQUFpQixFQUFFVCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1MsNEJBQTRCO0VBQzNEQyxLQUFLLEVBQUVYLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVztBQUNyQixDQUFDO0FBQUM7QUFFRnBCLGFBQWEsQ0FBQ00sY0FBYyxDQUFDO0FBRTdCLE9BQU8sTUFBTWUsRUFBRSw2QkFBR2xCLFlBQVksRUFBRTtBQUNoQyxPQUFPLE1BQU1tQixPQUFPLDZCQUFHakIsVUFBVSxFQUFFO0FBQ25DLE9BQU8sTUFBTWtCLElBQUksNkJBQUd0QixPQUFPLEVBQUU7QUFDN0IsT0FBTyxNQUFNdUIsUUFBUSw2QkFBRyxJQUFJdEIsa0JBQWtCLEVBQUU7QUFDaEQsT0FBTyxNQUFNdUIsa0JBQWtCLDZCQUFHckIsZUFBZSJ9