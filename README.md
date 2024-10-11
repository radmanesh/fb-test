# Firebase with Create React Project
This project was bootstrapped with [Create React App](npx create-react-app fb-test).


## Firebase Setup

### Firebase Firestore
1. Create a new Firestore database in the Firebase Console.
2. Create a collection called "items".
3. Add a document to the "items" collection with a field called "name".
4. Create a new file in the src folder called firebase.js.

### Firebase Cli and WebApp Setup
1. Install Firebase CLI.

```bash
npm install -g firebase-tools
```

2. Create a new project in Firebase Console.
3. Create firestore and hosting(Add a web app to the project) in the Firebase Console.
4. Login to Firebase in the terminal.
```bash
firebase login
```

5. Initialize Firebase in the project.
    - If you are using React Router, make sure to rewrite all routes to index.html.
    - Add the build folder to the public directory in firebase.json.
    - Select functions and hosting in the Firebase CLI. I selected javascript for the functions.

```bash
firebase init
```

6. Select Firestore, Functions, and Hosting.
    - Item 1
    - Item 2
7. Copy the Firebase config object.
```javascript
// Your web app\'s Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

8. Create a new file in the src folder called firebase.js.
9. Paste the Firebase config object into the firebase.js file.
```javascript
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

export default firebase;
export {firebaseConfig};
```

10. Import firebase into the App.js file.

```javascript
import firebase, {firebaseConfig} from './firebase';
```

11. Initialize Firebase in the App.js file.

```javascript
const app = firebase.initializeApp(firebaseConfig);
```

12. Now App.js should look like this.

```javascript
import React, {useState, useEffect} from 'react';
import firebase, {firebaseConfig} from './firebase';

const app = firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
        <p id="app-text">
          ${app.name} is initialized!
        </p>
    </div>
  );
}

export default App;
```

## Firebase Deployment

1. After doing all the steps above, build the project.
```bash
npm run build
```

2. If it ends successfully, then the project should be ready to deploy to Firebase.
```bash
firebase deploy
```

**You should be able to see the address to the hosted website in the terminal after the deployment is complete.**




