pipeline {
    agent any

    stages {
        stage('Clean Up Old Containers') {
            steps {
                script {
                    echo "🧹 Stopping and removing old containers (if any)..."
                    // Add "returnStatus: true" to prevent failure
                    bat(returnStatus: true, script: 'docker stop food-backend')
                    bat(returnStatus: true, script: 'docker stop food-frontend')
                    bat(returnStatus: true, script: 'docker rm food-backend')
                    bat(returnStatus: true, script: 'docker rm food-frontend')
                }
            }
        }

        stage('Build Backend Docker Image') {
            steps {
                script {
                    bat 'docker build -f infra/Dockerfile.backend -t food-backend .'
                }
            }
        }

        stage('Build Frontend Docker Image') {
            steps {
                script {
                    bat 'docker build -f infra/Dockerfile.frontend -t food-frontend .'
                }
            }
        }

        stage('Run Containers') {
            steps {
                script {
                    bat 'docker run -d -p 8000:8000 --name food-backend food-backend'
                    bat 'docker run -d -p 8080:80 --name food-frontend food-frontend'
                }
            }
        }
    }
}
