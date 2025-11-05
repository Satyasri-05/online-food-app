pipeline {
    agent any

    stages {
        stage('Clean Up Old Containers') {
            steps {
                script {
                    echo "🧹 Stopping and removing old containers (if any)..."
                    sh '''
                        docker stop $(docker ps -q) || true
                        docker rm $(docker ps -aq) || true
                    '''
                }
            }
        }

        stage('Build Backend Docker Image') {
            steps {
                script {
                    echo "🐳 Building backend Docker image..."
                    sh 'docker build -f infra/Dockerfile.backend -t food-backend .'
                }
            }
        }

        stage('Build Frontend Docker Image') {
            steps {
                script {
                    echo "🐳 Building frontend Docker image..."
                    sh 'docker build -f infra/Dockerfile.frontend -t food-frontend .'
                }
            }
        }

        stage('Run Containers') {
            steps {
                script {
                    echo "🚀 Running backend and frontend containers..."
                    sh 'docker run -d -p 8000:8000 --name food-backend food-backend'
                    sh 'docker run -d -p 8080:80 --name food-frontend food-frontend'
                }
            }
        }
    }
}

