export const initialState = {

    status: 'checking',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,

}

export const authenticatedState = {

    status: 'authenticated',
    uid: '123ABC',
    email: 'juanignaciobisello@hotmail.com',
    displayName: 'juanib 99',
    photoURL: 'http://demo.jpg',
    errorMessage: null,

}

export const notAuthenticatedState = {

    status: 'not-authenticated',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,

}

export const demoUser = {
    uid: '123ABC',
    email: 'juanignaciobisello@hotmail.com',
    displayName: 'juanib 99',
    photoURL: 'http://demo.jpg',
} 