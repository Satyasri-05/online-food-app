pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/<Satyasri-05>/online-food-app.git'
            }
        }

        stage('Build Backend Docker Image') {
            steps {
                script {
                    sh 'docker build -f infra/Dockerfile.backend -t food-backend .'
                }
            }
        }

        stage('Build Frontend Docker Image') {
            steps {
                script {
                    sh 'docker build -f infra/Dockerfile.frontend -t food-frontend .'
                }
            }
        }

        stage('Run Containers') {
            steps {
                script {
                    sh 'docker run -d -p 8000:8000 food-backend'
                    sh 'docker run -d -p 8080:80 food-frontend'
                }
            }
        }
    }
}
