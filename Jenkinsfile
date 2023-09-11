pipeline {
    agent any

    tools {nodejs "node"}

    stages {
        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave Node1') {
                    agent {
                        label "remote_node1"
                    }
                    steps {
                        git url: 'https://github.com/yana-glt/cypress-automation-framework.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run triggerAllTests-autoTestStore'
                    }
                }
                stage('Slave Node2') {
                    agent {
                        label "remote_node2"
                    }
                    steps {
                        git url: 'https://github.com/yana-glt/cypress-automation-framework.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run triggerAllTests-autoTestStore'
                    }
                }
            }
        }
    }
}