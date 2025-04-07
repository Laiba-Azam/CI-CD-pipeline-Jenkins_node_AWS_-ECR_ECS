pipeline {
    agent any
    triggers {
        pollSCM '*/5 * * * *'
    }
    stages {
        stage('Build') {
            steps {
                echo "Building.. "
                sh '''
                pwd
                echo "pwd"
                '''
            }
        }
        stage('Test') {
            steps {
                echo "Testing.."
                sh '''
                echo "test"
                '''
            }
        }
        stage('Deliver') {
            steps {
                echo 'Deliver....'
                sh '''
                echo "deliver."
                '''
            }
        }
    }
}
