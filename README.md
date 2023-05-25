# BarEazy.CustomerClient

This repository contains a the code for a customer client for BarEazy.

## Installation Guide

Follow these steps to set up and run the project on your local machine:

### Prerequisites

- Node.js (version 17 or above) should be installed on your system. You can download it from [https://nodejs.org](https://nodejs.org).

### Step 1: Clone the repository

Clone this repository to your local machine using Git:

```shell
git clone <repository-url>
```

### Step 2: Install dependencies

Navigate to the project directory and install the required dependencies using npm:

```shell
npm install
```

### Step 3: Start the development server

Start the development server using the following command:

```shell
npm run dev
```
This will launch the application in your default browser, and you can start making changes to the code.

### Step 4: Setup tailwind watcher

```shell
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```
This will generate all necessary Tailwind classes.

### Step 5: Build the project for production

When you're ready to deploy your application, build the project using the following command:

```shell
npm run build
```

This will generate an optimized production-ready build in the `dist` directory.
