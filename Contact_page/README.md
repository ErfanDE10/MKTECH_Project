# MKTEC - Contact and Quick Consultation Form

This is a Node.js application that allows users to submit contact forms and quick consultation requests. It uses MongoDB for storing form submissions and EJS for rendering the frontend. The backend is built using Express.js, and the database connection is handled by Mongoose.

## Features

- Contact form submission.
- Quick consultation form submission.
- Data persistence using MongoDB.
- Frontend rendering using EJS templates.
- Error handling and form validation.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database.
- **Mongoose**: MongoDB object modeling for Node.js.
- **EJS**: Embedded JavaScript templating engine.

## Prerequisites

Make sure you have the following installed on your machine:

- Node.js (v14 or later)
- MongoDB (local or Atlas)
- Git (optional)

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/mktec-contact-form.git
    ```

2. Navigate into the project directory:

    ```bash
    cd mktec-contact-form
    ```

3. Install the required dependencies:

    ```bash
    npm install
    ```

4. Set up your environment variables. In this project, MongoDB connection string is hardcoded, but for best practices, you should create a `.env` file and store sensitive data like your MongoDB URI. Example `.env` file:

    ```
    MONGODB_URI=mongodb+srv://----:-----@nodecourse.uj3xb.mongodb.net/MKtec?retryWrites=true&w=majority&appName=Nodecourse
    ```

5. Start the application:

    ```bash
    npx nodemon ./Server.js
    ```

6. Open the application in your browser at `http://localhost:3000`.

## Project Structure

```
MKTEC/
│
├── Model/
│   ├── contact.js           
│   └── QuickConsultation.js   
│
├── public/
│   └── ...                   
│
├── views/
│   ├── index.ejs            
│   └── ...                   
│
├── Server.js                 
├── README.md                 
└── package.json              
```

## Usage

- **Submit a Contact Form**: Fill out the contact form on the homepage and hit "Submit".
- **Submit a Quick Consultation**: Enter your name and email in the quick consultation form and hit "Submit".

Once submitted, the data will be saved in your MongoDB collection and you'll see a success message on the frontend.

## Screenshot

![Screenshot 2024-10-19 235759](https://github.com/user-attachments/assets/272ff0f8-22a5-4d3a-9194-932db2518463)
![Screenshot 2024-10-19 235843](https://github.com/user-attachments/assets/857def95-7599-4633-9334-932de728e24b)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Troubleshooting

- **Error: Cannot find module 'ejs'**: Make sure to run `npm install ejs` if EJS is not installed.
- **MongoDB Connection Issues**: Ensure your MongoDB URI is correct and your database server is running.

---
