pipeline {
    agent any
    environment {
        EMAIL_ADDRESS = 'davidossantosbalbinomarcelino@gmail.com'
        PATH = "${env.PATH}:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }
        stage('Execute Tests') {
            steps {
                script {
                    sh 'npm run test'
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    sh 'npm run build'
                }
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: '**', fingerprint: true
            script {
                // Chamar script para enviar e-mail
                sh 'echo "Pipeline executado!" | msmtp --debug -a default $EMAIL_ADDRESS'
            }
        }
    }
}
