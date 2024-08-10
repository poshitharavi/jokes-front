from io import BytesIO

# Content for the README file

readme_content = """

# Jokes Microservices Platform

This platform allows users to submit and view jokes using a microservices architecture. The backend services are built with NestJS, the frontend is developed using Next.js, and the platform is containerized using Docker. It is hosted on Google Cloud Platform (GCP) and Vercel.

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Technologies Used](#technologies-used)
- [Repositories](#repositories)
- [Hosted URLs](#hosted-urls)
- [Environment Setup](#environment-setup)
- [Running Locally](#running-locally)
- [Additional Resources](#additional-resources)

## Overview

This project is a microservices-based joke platform. Users can submit jokes and view them through a frontend interface. The platform consists of two backend services: one for submitting jokes and another for delivering jokes. The frontend is hosted on Vercel, while the backend services are hosted on Google Cloud Run.

## Architecture

- **Frontend**: Built using Next.js and hosted on Vercel.
- **Backend**: Built with NestJS using two microservices:
  - **Submit Jokes Service**: Handles joke submissions and stores them in MongoDB.
  - **Deliver Jokes Service**: Retrieves jokes from a MySQL database and serves them to the frontend.
- **Databases**:
  - **MongoDB**: Used for storing submitted jokes.
  - **MySQL**: Used for storing and retrieving delivered jokes.
- **Message Broker**: RabbitMQ is used to trigger and manage communication between the microservices.

## Technologies Used

- **AI Tools**:
  - [Perplexity AI](https://www.perplexity.ai/)
  - [ChatGPT](https://chatgpt.com)
- **Hosting Platforms**:
  - [Google Cloud Platform (GCP)](https://cloud.google.com/)
  - [Vercel](https://vercel.com/)
- **Databases**:
  - MongoDB (Cloud MongoDB)
  - SQL (Cloud SQL on GCP)
- **Backend Framework**: NestJS
- **Frontend Framework**: Next.js
- **ORM**: Prisma
- **Containerization**: Docker
- **Message Broker**: RabbitMQ

## Repositories

- **Frontend**: [Jokes Frontend Repo](https://github.com/poshitharavi/jokes-front)
- **Submit Jokes Server**: [Submit Jokes Repo](https://github.com/poshitharavi/submit-jokes)
- **Deliver Jokes Server**: [Deliver Jokes Repo](https://github.com/poshitharavi/deliver-jokes)

## Hosted URLs

- **Frontend**: [https://jokes-front.vercel.app/](https://jokes-front.vercel.app/)
- **Submit Jokes Service**: [https://submit-jokes-sopoqaryjq-uc.a.run.app](https://submit-jokes-sopoqaryjq-uc.a.run.app)
- **Deliver Jokes Service**: [https://deliver-jokes-sopoqaryjq-uc.a.run.app](https://deliver-jokes-sopoqaryjq-uc.a.run.app) (Note: Deployed but currently experiencing an error)

## Environment Setup

To run the project locally, clone all the repositories and set up the following environment variables:

### Frontend Environment Variables
