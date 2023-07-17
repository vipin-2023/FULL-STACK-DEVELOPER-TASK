# React TypeScript Form Application

This is a basic React application with a form that includes various input fields and validations. It is built using TypeScript and utilizes the react-hook-form library for form handling.
## Preview 
![image](https://github.com/vipin-2023/FULL-STACK-DEVELOPER-TASK/assets/109500059/0e68ae43-e1bb-451a-8d95-5b12d55ff92e)
## Prerequisites

- Node.js (v14 or higher) installed on your machine
- Docker (optional) if you prefer to run the application in a Docker container

## Getting Started

Follow the steps below to run the application locally:

1. Clone this repository to your local machine.
 ```bash
   git clone https://github.com/your-username/your-repo.git
   ``` 

2. Navigate to the project directory:
```bash
  cd react-typescript-form
   ``` 

3. Install the dependencies:
```bash
  npm install 
   ``` 

4. Build and start the application:
```bash
  npm start
   ``` 

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Running with Docker

Alternatively, you can run the application in a Docker container. Follow the steps below:

1. Build the Docker image:
```
docker build -t my-react-app .
``` 

2. Run the Docker container:
```
docker run -d -p 3000:3000 my-react-app
``` 
This will start the container and bind port 3000 of the container to port 3000 of your local machine.

3. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

- Fill in the form fields with the required information.
- The form includes validations for the Name, Mobile, Email, Password, and Re-enter Password fields.
- Select an option from the Select Field.
- Check/uncheck the Checkbox field.
- Choose one of the options from the Radio Button field.
- Click the "Submit" button to submit the form.

## License

This project is licensed under the [MIT License](LICENSE).
