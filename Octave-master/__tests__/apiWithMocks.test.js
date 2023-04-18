import { addArtist } from '../src/api/artist.js';
import { firestore } from './mocks/firestoreMock.js'
import firebase from 'firebase/app'
firebase.firestore = firestore;


/*
export const addArtist = (data) => {
  data.createdAt = getServerTimeStamp();
  return addDoc(collection(db, "artists"), data);
};
*/

describe("setDocData", () => {
    const mockData = { description: "hey", name: "bob", names: ["bobs"], imageUrl: "sww.wogo.com"};
    beforeEach(() => {
      jest.clearAllMocks();
      addArtist(mockData);
    });
  
    it("writes the correct doc", () => {
      expect(firestore().doc).toHaveBeenCalledWith("docs/fakeDocID");
    });
  
    it("adds a timestamp, and writes it to the doc", () => {
      expect(firestore().doc().set).toHaveBeenCalledWith({
        created: "MOCK_TIME",
        fake: "data"
      });
    });
  });