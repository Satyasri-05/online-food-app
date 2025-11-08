pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code from GitHub...'
                git url: 'https://github.com/Satyasri-05/online-food-app.git', branch: 'main'
            }
        }

        stage('Verify Docker') {
            steps {
                echo 'Checking if Docker is accessible...'
                bat 'docker --version'
                bat 'docker info'
            }
        }

        stage('Cleanup Existing Container') {
            steps {
                echo 'Stopping and removing existing container (if any)...'
                bat 'docker stop online-food-app-container || echo Container not running'
                bat 'docker rm online-food-app-container || echo Container not found'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                bat 'docker build -t online-food-app .'
            }
        }

        stage('Run Docker Container') {
            steps {
                echo 'Running Docker container...'
                bat 'docker run -d -p 8090:80 --name online-food-app-container online-food-app'
            }
        }
    }

    post {
        success {
            echo 'Build and container run successful!'
        }
        failure {
            echo 'Build failed. Check the logs above.'
        }
    }
}
