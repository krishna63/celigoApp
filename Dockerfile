# Basic this file contains the instruction on how to build and run the
# application.
# Docker provides certain built in templates which can be found in docker-hub
# based on the need we can pick a template and below statement is like an inheritance from
# that particular template. we pick the template by taking required run time environment
# and OS into consideration.
# alpine is a kind of linux based OS with node built in it and it does not have
# bash so we cannot execute bash scripts
FROM node:14.16.1-alpine3.13

# setting the working director/root folder path so that other files can take it as a basepath
# below mentioned path is the one that is created in the image file system that is mentioned
# in the line number 11
WORKDIR /graphqlLearningApp

# creating a group called graphqlApp and a user name as dev
# concatinating multiple commands with double ambersand
# -S indicates a system user which we are creating now and setting a primary group for that user
# devUser is created and his primary group is graphqlApp
#RUN addgroup graphqlApp && adduser -S -G graphqlApp devUser
#USER devUser:graphqlApp
#RUN chmod o+r+w+x .

# we have broken the copy task into multiple steps because:
# docker does the following steps when ever an image is built
# 1. It creates the layers for all the instructions mentioned in the docker file
# 2. When we re-build it has an algorithm to compare with previous image and if any difference in the layer
# is detected then it will re-create a new layer by using that particular instruction.
# 3. For certain tasks like copying the entire code is difficult to differentiate whether that layer is changed
# or not so for such kind of instruction it will just recreate the layers, and following instructions
# from that point will also be re-created.
# 4. Hence copying the entire code base instruction has been moved after npm install, because it cannot find out 
# if any code is changed or not
# 5. Here we are copying only the package and package.lock file so this layer will be recreated only if any
# change is deducted in that particular file, so docker will skip the installation of node_modules
# as their is no change in package file
# 6. For this reason we need to split the copying tasks into multiple steps.
COPY package*.json .
# we are installing the node_modules in the container as we have excluded it in the dockerignore file
RUN npm i

# to copy the code into that particular directory in the image.
# when we create an image it has a its own filesystem and in that we are going to create
# the folder graphqlLearningApp.
# we are copying all the files of the repo by mentioning `dot` into the directory
# `graphqlLearningApp`. If the `graphqlLearningApp` does not exist then it will be created.
COPY . .
# Setting the environment variables
ENV API_URL = http://api.myapp.com
# We have multiple ways of setting the environment url
#    printenv
#    printenv API_URL(name of the environment variable)
#    echo $API_URL

# added belwo command just to show how to read the environment variable
# when we run the image those environment variables will be set by default
#USER root
#CMD printenv

# to map the host/system port number to the container port number 
# with expose command we are saying that this port is exposed next
# we need to map to container port number
EXPOSE 3000

# Prefer executing the command in Exec form so that a separate process is not created
ENTRYPOINT [ "npm", "run", "serve" ]
