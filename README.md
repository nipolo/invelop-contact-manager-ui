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

### Local

1. Deploy it locally either with Angular CLI or Docker cotainer
1. Go to http://localhost:4200

### BETA EC2 Server

The application is deployed [here](http://63.35.57.109:4200/).

## Notes

- There is no authentication and users as per requirements
- All the fields except Line1 are required
- There is custom validations for:
  - Phone Number - starting with '+' (optional) then digits 0-9 and '-' between them
  - IBAN - Example - AABB-XXXX-XXXX-XXXX-XXXX-XX where A = letter any capital letter A-Z, B - any digit 0-9, X - any cappital letter A-Z or any digit 0-9
- The application is responsive, i.e. is mobile-friendly
