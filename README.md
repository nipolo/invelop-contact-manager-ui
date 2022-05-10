# Contact manager UI

## Requirements

Create a simple web app for managing personal contacts. CRUD operations over contacts are supported.

Required data:

- first name
- surname
- D.O.B
- address
  - line1
  - line2
  - postcode
  - city
  - country
- phone number
- IBAN

Angular frontend:

- ngrx Store
- PrimeNG components
- cypress e2e test (1 is enough)

## Initial setup

### Angular CLI

Run **npm run start**

### Docker

Execute these commands:

1. **npm run docker:build:dev**
1. **npm run docker:run:dev**

## Test the project

### Automated testing

1. Start the application locally in one of the ways listed in the **Initial setup** section
1. Run the command **npm run test:e2e:run** (_npm run test:e2e:beta:run_ for BETA EC2 Server) to execute the e2e test of the application. There is now only tests for the CRUD operations
1. If you want to run manually any e2e tests and observe the testflow then run **npm run test:e2e:debug** (_npm run test:e2e:beta:debug_ for BETA EC2 Server)

### Manual testing - Local

1. Deploy it locally either with Angular CLI or Docker cotainer
1. Go to http://localhost:4200

### Manual testing - BETA EC2 Server

The application is deployed [here](http://63.35.57.109:4200/).

## Notes

- There is no authentication and users as per requirements
- All the fields except Line1 are required
- There is custom validations for:
  - Phone Number - starting with '+' (optional) then digits 0-9 and '-' between them
  - IBAN - Example - AABB-XXXX-XXXX-XXXX-XXXX-XX where A = letter any capital letter A-Z, B = any digit 0-9, X = any cappital letter A-Z or any digit 0-9
- The application is responsive, i.e. is mobile-friendly
