# MERN Money Tracker App

The MERN Money Tracker App is a simple web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It helps users track their spending, save money, and gain financial insight.

## Features

- Track your transactions and monitor your balance.
- Display transactions fetched from the MongoDB database.
- Calculate and display balance based on the transactions.
- Positive numbers are displayed with a "+" sign at the start.

## Tutorial

I learned how to build this app by following the tutorial: [Build a MERN Money Tracker App | Simple mern app tutorial for beginners](https://youtu.be/aD1c_YmHsFg?list=PLChiukrA-RMOEB1PRQqB1NITIRsDz9pIN).

## Deployment

The app is deployed on Vercel, and you can access it [here](https://mern-money-tracker-xuanqi.vercel.app/).

## Installation

1. Clone the repository to your local machine:

```
git clone https://github.com/xKeNcHii/MERN-Money_Tracker
```

Navigate to the project directory:

```
cd money-tracker
```

Install dependencies for both the client and server:

```
npm install
```


Set up the environment variables:

1. Create a .env file in the "api" directory.
2. Define the MONGO_URL variable with the MongoDB connection string.
3. Create a .env file in the project directory.
4. Define the REACT_APP_API_URL variable with the backend api url.
   
Start the server:

```
cd api
nodemon index.html
```

Start the React development server:
```
cd money-tracker
npm start
```

Open your web browser and navigate to http://localhost:3000 to access the application.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.
License

This project is licensed under the MIT License - see the LICENSE file for details.
Acknowledgements

Thanks to the tutorial creator for providing a detailed guide on building a MERN Money Tracker App.
