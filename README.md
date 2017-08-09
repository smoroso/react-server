# To run the code

```
npm install
npm start
```

# To test the code
`npm test`

# To lint the code
`npm run eslint`

# Structure:
- server: server-side code.
  - components: React components server-side rendered.
    - atoms: generic presentation components.
    - molecules: generic container components. They use atoms.
    - organisms: generic container components and high order components. They use molecules.
    - pages: specific individual components for each specific page. They use organisms.
  - routes: contains the routing code.
- public: contains all static content.

Spec files are directly inside the related folder of the code they are testing
