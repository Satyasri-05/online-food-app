pipeline {
    agent any

    stages {
        stage('Clean Up Old Containers') {
            steps {
                script {
                    echo "🧹 Stopping and removing old containers (if any)..."
                    bat 'docker stop food-backend || echo No backend container'
                    bat 'docker stop food-frontend || echo No frontend container'
                    bat 'docker rm food-backend || echo No backend to remove'
                    bat 'docker rm food-frontend || echo No frontend to remove'
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
