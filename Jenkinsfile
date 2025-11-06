pipeline {
    agent any

    stages {
        stage('Clean Up') {
            steps {
                bat 'docker stop food-backend || echo no-backend'
                bat 'docker stop food-frontend || echo no-frontend'
                bat 'docker rm food-backend || echo no-backend'
                bat 'docker rm food-frontend || echo no-frontend'
            }
        }

        stage('Build Backend Image') {
            steps {
                bat 'docker build -t food-backend -f infra/Dockerfile.backend .'
            }
        }

        stage('Build Frontend Image') {
            steps {
                bat 'docker build -t food-frontend -f infra/Dockerfile.frontend .'
            }
        }

        stage('Run Containers') {
            steps {
                bat 'docker run -d -p 8000:8000 --name food-backend food-backend'
                bat 'docker run -d -p 8080:80 --name food-frontend food-frontend'
            }
        }
    }
}
