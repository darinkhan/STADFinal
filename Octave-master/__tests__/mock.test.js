/**
 * @jest-environment jsdom
 */

import firebaseAuth from 'firebase/auth';
import * as authApi from '../src/api/auth';
import * as firebaseConfigs from '../src/firebase'

// mocks strings
const mockUsername = 'mockUser'
const mockPassword = 'mockPassword'

// mocks a UserCredential
const mockUserCredentials = {
    user: {
        sendEmailVerification: jest.fn(),
    },
};

// mock all the functions that should be used from firebase/auth module
jest.mock('firebase/auth', () => {
    return {
        signOut: jest.fn(),
        signInWithPopup: jest.fn()
            .mockImplementationOnce(
                () => Promise.resolve({ user: { displayName: mockUsername } })
            ).mockImplementationOnce(
                () => Promise.reject(new Error("reject 1"))
            ),
        signInWithEmailAndPassword: jest.fn(),
        createUserWithEmailAndPassword: jest.fn(),
        sendPasswordResetEmail: jest.fn(),
        updateProfile: jest.fn(),
        onAuthStateChanged: jest.fn(),
        getAuth: jest.fn(),
        GoogleAuthProvider: jest.fn().mockImplementation(() => { return {} })
    };
});

// mock the firebase credentials as well
jest.mock('../src/firebase', () => {
    return {
        auth: jest.fn()
    };
});

let consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => { });



describe('auth.js mocks', () => {
    afterAll(() => {
        consoleSpy.mockRestore();
    })

    it('signUp is called with email and password', () => {
        authApi.signUp(mockUsername, mockPassword);
        expect(firebaseAuth.createUserWithEmailAndPassword).toHaveBeenCalledWith(firebaseConfigs.auth, mockUsername, mockPassword);
    });

    it('signIn is called with email and password', () => {
        authApi.signIn(mockUsername, mockPassword);
        expect(firebaseAuth.signInWithEmailAndPassword).toHaveBeenCalledWith(firebaseConfigs.auth, mockUsername, mockPassword);
    });

    it('signOut calls signOut from firebase/auth', async () => {
        await authApi.signOut();
        expect(firebaseAuth.signOut).toBeCalled();
    });

    // TODO: doule check this
    it('signInWithGoogle calls signInWithPopup from firebase/auth', () => {
        authApi.signInWithGoogle();
        expect(firebaseAuth.signInWithPopup).toBeCalled();
        jest.spyOn(window, 'alert').mockImplementation((text) => { console.log(text) });
        authApi.signInWithGoogle();
        window.alert.mockClear();
    });

    it('handleAuthStateChanged calls onAuthStateChanged from firease/auth', () => {
        authApi.handleAuthStateChanged(() => { });
        expect(firebaseAuth.onAuthStateChanged).toBeCalled();
    });

    it('updateUserDetail calls updateProfile from firease/auth', () => {
        const name = 'newName';
        const url = 'newUrl'
        authApi.updateUserDetails(mockUserCredentials, name, url);
        expect(firebaseAuth.updateProfile).toHaveBeenCalledWith(mockUserCredentials.user, { displayName: name, photoURL: url })

        // default to ui-avatars when url is not provided
        authApi.updateUserDetails(mockUserCredentials, name);
        expect(firebaseAuth.updateProfile).toHaveBeenCalledWith(mockUserCredentials.user, { displayName: name, photoURL: `https://ui-avatars.com/api/?name=${name}` })
    });

    it('resetPassword calls sendPasswordResetEmail from firease/auth', () => {
        const mockEmail = 'em@gmail.com'
        const logSpy = jest.spyOn(console, 'log');
        authApi.resetPassword(mockEmail);
        expect(firebaseAuth.sendPasswordResetEmail).toBeCalledWith(firebaseConfigs.auth, mockEmail);
        expect(logSpy).toHaveBeenCalled();
        logSpy.mockRestore();
    })
});
