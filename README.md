Jokes Microservices Platform
This platform allows users to submit and view jokes using a microservices architecture. The backend services are built with NestJS, the frontend is developed using Next.js, and the platform is containerized using Docker. It is hosted on Google Cloud Platform (GCP) and Vercel.

Table of Contents
Overview
Architecture
Technologies Used
Repositories
Hosted URLs
Environment Setup
Running Locally
Additional Resources
Overview
This project is a microservices-based joke platform. Users can submit jokes and view them through a frontend interface. The platform consists of two backend services: one for submitting jokes and another for delivering jokes. The frontend is hosted on Vercel, while the backend services are hosted on Google Cloud Run.

Architecture
Frontend: Built using Next.js and hosted on Vercel.
Backend: Built with NestJS using two microservices:
Submit Jokes Service: Handles joke submissions and stores them in MongoDB.
Deliver Jokes Service: Retrieves jokes from a MySQL database and serves them to the frontend.
Databases:
MongoDB: Used for storing submitted jokes.
MySQL: Used for storing and retrieving delivered jokes.
Message Broker: RabbitMQ is used to trigger and manage communication between the microservices.
Technologies Used
AI Tools:
Perplexity AI
ChatGPT
Hosting Platforms:
Google Cloud Platform (GCP)
Vercel
Databases:
MongoDB (Cloud MongoDB)
SQL (Cloud SQL on GCP)
Backend Framework: NestJS
Frontend Framework: Next.js
ORM: Prisma
Containerization: Docker
Message Broker: RabbitMQ
Repositories
Frontend: Jokes Frontend Repo
Submit Jokes Server: Submit Jokes Repo
Deliver Jokes Server: Deliver Jokes Repo
Hosted URLs
Frontend: https://jokes-front.vercel.app/
Submit Jokes Service: https://submit-jokes-sopoqaryjq-uc.a.run.app
Deliver Jokes Service: https://deliver-jokes-sopoqaryjq-uc.a.run.app (Note: Deployed but currently experiencing an error)
Environment Setup
To run the project locally, clone all the repositories and set up the following environment variables:

Frontend Environment Variables
makefile
Copy code
DELIVERY_JOKE="http://localhost:3010/api"
SUBMIT_JOKE="http://localhost:3011/api"
Submit Jokes Backend Environment Variables
makefile
Copy code
DATABASE_URL="mongodb+srv://jokeUser:cc09UC26vEdEGU92@jokescluster.gqctc.mongodb.net/jokesDatabase?retryWrites=true&w=majority&appName=JokesCluster"
PORT=3011
Deliver Jokes Backend Environment Variables
makefile
Copy code
DATABASE_URL="mysql://testUser:8n{sg&oHaD6Ch@35.184.42.224:3306/jokes"
PORT=3010
If the Cloud SQL database connection does not work due to GCP security settings, use the following local database connection:

ruby
Copy code

# DATABASE_URL="mysql://root:12345678@localhost:3306/jokes"

Running Locally
Backend
Navigate to the Submit Jokes and Deliver Jokes Repositories:

bash
Copy code
cd submit-jokes
cd deliver-jokes
Push Database Schema to DB:

bash
Copy code
yarn prisma db push
Start Development Server:

bash
Copy code
yarn start:dev
Start RabbitMQ Listener:

bash
Copy code
yarn listen
Frontend
Navigate to the Jokes Frontend Repository:

bash
Copy code
cd jokes-front
Start the Frontend Development Server:

bash
Copy code
yarn next dev
Additional Resources
RabbitMQ: Used for triggering and managing communication between microservices.
Prisma: Used as the ORM for both MongoDB and MySQL databases.
Docker: Used for containerizing the application for deployment on Google Cloud Run.
