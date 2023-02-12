https://www.youtube.com/watch?v=nqZ7JWLJimk

Date: 09-02-2023
## Docker

### What is Docker ?
- A platform for building, running and shipping applications on the developer machines so that it can run the same
way on other machines.
    - in other machine it could be software version mismatch
    - it could be missing certain files
    - Unavailable of certain environment variables
- In order to run the application in other system all it needs is to have a `Docker` installed.

### Benefits of Docker ?
    - Project set up process will be easier as it matains a separate environment for building and running the application
    - Different version software for different applications can be leveraged without any issue
    - Easy to remove the unnecessary software when the application is obsolete

### What is difference between Container Vs VM ?

Container:
- An isolated environment for running the application.
- They are light weight as they share the operating system of the host instead of cloning it just the way VM does,
- As they share the Operating system it will take less time to start the container, unlike VM's
- They dont need a slice of hardware like (cores, disk space and hardware)
- A single host can run multiple containers.


Virtual machine:
- VM is an abstraction of a machine(physical hardware)
- We can create a multiple VM on a single machine. For example on mac sytem we can create a windows and linux VM machine. But How we do that ?
- By using a tool called Hypervisors ? Hypervisors are nothing but a software that creates the required VM for us. Some of the Hypervisors are (VMware, VirtualBox, Hyper-v(only for windows)). Most of them are cross platform.

### What is the benefit of creating a VM ?
- Run the applications in an isolated environment. Meaning if we create two VM's on a single physical machine, we can run two applications with different version of softwares in it.

### What are problems with VM ?
- Each VM need a full-blown OS
- Hence they are slow to start and they have to load the Operating system every time a VM is started
- VM takes a slice of actual physical resources like harware, memory, CPU cores etc. For example if a mac system is having 4GM RAM and if 2 VM are created then each VM takes 2GM of RAM same applicable for the hard disk space as well.

### Architecture of Docker
- It uses client and server architecture. Server is also called as a `Docker Engine`. Client and Server are communicated thru `Rest API`.
- Docker engine takes care of builing the container which in turn build and runs the application.
- Technically a `Container` is a special kind process running on the machine, just like other processes.
- Container <u>don't clone the operating system instead it shares the operating system</u>, to be more clear it shares the `Kernel` of the operating System.

#### What is Kernel ?
    - Kernel is the heart of any operating system and each operating system has its own kernel. Those kernel's have
    different API's so the application interact with it and do the requied job for us.
    - Basically `kernel` manages the hardware, applications and resources of the OS, just like engine of the car.
    - Windows has inbuilt linux kernel as well hence an linux and windows containers can be run on windows machine. Vice versa is not applicable, a windows container cannot be executed in linux system.
    - Linux machines can run the linux containers that requires Linux OS.
    - Mac OS does not have native support for running the containers hence a separate software is required for it
    that is `Linux VM` for executing the mac containers.

### Dockerizing the application:
- We take any application and add a  `docker file` to it, the file contains the instructions about the software the application requires, environment variable it requires and creates an `image` out of it.
    - Image contains:
        - required OS
        - run time environment like (node, python)
        - application files
        - third party libraries
        - environment variables
- We create the docker file and give it to docker to create the image out of it and once we have an image for an application. Those images can be deployed to the registry(docker hub) and once they are deployed, then we leverage the image to run the application in mulitple environments like (Test/SIT/UAT) or other developer machines.
- Note: Instead of running the application we launch the application thru docker so that the application is running
in a container separate environment.

### Prerequisites:

As Docker is built upon linux, familiarity with linux is utmost important.

## Linux Distributions: or (Distros)
- Linux is an open source software, hence each of the community created their own linux distributions for different purpose/use like mobile etc.
- Few linux distros are:
    - ubuntu
    - alpine
    - fedora
    - centOS

## Few notable commands:
- docker pull <packagename> - if package is not found in the local then it will pull from docker-hub registry
- docker run <packagename> - to run a particular package that exist in the registry or local, here we are not pulling the package to local
- docker ps - it list out list of process that are running or running containers
- docker ps -a - it list out the containers that are ran and stopped as well
- docker run -it <package/image name> - to run the container in the interactive mode, `it` flag stands for that.
    eg: docker run -it ubuntu

### what is shell ?
- `shell` is a program that takes the commands and pass them to kernel for execution
- few shell command:
    - echo
    - whoami
    - echo $0 tells the path of the shell located in the system
    - history to list out the commands we have used previously
- bash is the enhanced version of the shell
- shell commands are case-sensitive
- folders are separated with forwardslash unlike windows where it has backward slash

### what is packages ?
- These days we have package manager for many softwares in the sameway `apt` is package manager for `ubuntu` os.
- `nano` is a texteditor for ubuntu so lets instal it.
    - apt update - for updating the list of packages
    - apt install <packagename> - for install the nano packages into the ubuntu
        eg: apt install nano
    - apt remove nano - for removing the particular package
Note: Before installing a package it is good practise to update the package database by running the command 
    apt update and then install the respective package.

### Linux file system ?
- Both linux and windows have tree structure for organizing files and directorys.
- `In linux everything is a file even the folders are files. few folders under the root folder are` 
    - bin
    - dev (for files that reqiure access to devices need to reside here)
    - boot (files related to start)
    - home
    - lib (software library dependencies, frequently updated)
    - proc (process)

#### how to navigate the linux file system ?
- pwd - where we are (the path)
- ls - for listing items
    - ls -l (for listing out the permission, file size of the files)
    - ls <relative/absolute path> that will list out the files in that particular directory 
- cd - for changing the directory path
    - cd .. to exit one level up of the directory
    - cd ~ will take u to root directory
- mv <old file/directory name> <new file/directory name>
    - we can also move one file from one directory to other directory
- touch <filename.extension> to create a new file

##### for creating/reading/remove the files:
- nano <filename> - for creating the new file, nano is default text editor for linux system
    eg: nano hello1.txt
- cat <file name>
    - cat hello1.tx > hello2.txt it will copy the content of the first file to the second file
    - ls -l /etc > longListfilenames.txt, instead of printing those files name on the screen we are writing it to the file system that is named as `longListfilenames.txt`
- more <file name> - if the content of the file is huge then leverage it but we cannot scroll up
- less <filename> - install the package using the `apt` then leverage it 
- rm <filename> - for removing a particular file
- rm -r - for removing the directory as `r` stands for recursive

`>` is called as stdout operation

#### Searching commands:
- grep cmd is used for searching for a word in the file
    - grep hello file1.txt
    - grep  -i hello file1.txt (to ignore the case)
    - grep -i hello file* (to search for multiple files)
    - grep -i -r hello . (to search in the directory and need to mention recursive with -r)
    - we can combine multiple options in linux
        - grep -ir hello .

#### finding files and directories
- find (without any argument will act like list, but it also list hidden files)
    - find <path> (list out files that are in the provided path)
    - find -type d (list out only directories by mentioning the type)
    - find -type f -name f* (list out the files that start with name f)

#### chaining commands in linux
- mkdir test; cd test; echo "combining the commands in one go by using semicolon" --> executing multiple commands ( if one command fails it throws error and execute other commands)
- mkdir test && cd test && echo "if one command fails it wont execute the other commands"
- mkdir test || echo "if the first command is executed then echo will not be printed". if the first command fails then only the echo will print just like javascript OR operator
- ls /bin | less (we are using pipe here to combine two commands, taking the output of first command and passing it to second command. less is package used for reading the content of the file. )
- `backslash` will help in breaking the single line long list command into multiple lines command
    - single long list command
        eg: mkdir newFolderCreation; cd newFolderCreation; echo "Folder is created and navigated to that folder"
    - breaking into multiple line command
        eg: mkdir newFolderCreation;\
        > cd newFolderCreation;\
        > echo "Folder is created and navigated into it but by using multiple line command syntax that is blackslash"

#### Environment variables
- Viewing and setting commands for all environment variables
    - printenv (list our all environment variables)
    - printenv PATH (value a particular an environment variables)
    - export DB_USER=saikrishna (creating a new environment variable only available for the current session)

- In order to persist an environment variable we need to write it to a special file .bashrc, `when linux system
starts .bashrc file is loaded by the system hence those variables will be available`.

    - echo DB_USER=saikrishns >> .bashrc (assuming that you are executing this command in the root directory, `~` will help in identifying the path at which you are in)
        - >> those indicate to append the output of first command to the file rather than overwriting. Here it is 
        creating the variable.

    - printenv DB_USER (prints the value of the environment variable)
    - echo $DB_USER (prints the value of the environment variable we need to prefix with $ when we want to print the value of the environment variable using the echo command)

Note: Never store sensitive information in the environment variables

#### Managing Process & users

- What is a process ?
    - A process is an instance of the running program and to see the list of running process
        - ps (list out all the process that are executing)

- useradd --> for adding the user
- usermod --> for modifying the user
- userdel --> for deleting the user
- adduser --> behind the scenes it uses useradd only and it always run in interactive mode while useradd is not interactive mode.

#### Managing groups:

Why groups ?
all people belong to a group will have same access

where are those groups ?
those are in a file in the etc directory in linux system

- groupadd --> groupadd <name of the group> --> groupadd developers
    - usermod -G developers john (adding john to developers group)
- groupmod --> modifying the group
- groupdel --> delete the group
- groups <name of the person> --> list out the groups that he is part of it.

Note: Every user will have one primary group and the one supplimentary group, so when a file is
create by the user he will have permission on primary and seconday group that is default behaviour of file system

#### File permissions:

- chmod -> command is used for modifying the permission on a user or a group
    - below command is for adding permission for others on file name deploy.sh
    - chmod o+x deploy.sh (o - stands for others, +x stands for providing permission to execute and followed by file name), instead of 'o' we have other things to give
    - chmod og+r+w+x <files names either single or multiple separated by spaces>(we are provviding read, write
    and execute permission for the `others` and `secondary` group for the sepecified files )
        - o - others
        - g - group
        - u - user
    - chmod o+r+w deploy.sh (command for providing read and write access to deploy.sh file)
 
    - below command is for removing the permission for others on file name deploy.sh
    - chmod o-x deploy.sh
    - chmod o-r-w deploy.sh (removing read and write access on the file for other users)

## Basics of Docker files:

### Few docker commands:
    - docker exec <container id>
    - docker ps  --> to see the list of process running and ran
    - docker run -it <image name> (running image in interactive mode)
    - docker build -t <image tag name> . (dot at the end tells docker the location of the docker file)
    - docker run -it <image name> sh (sh indicates shell system so that we can look at file system)

### Images and Containers

- Image: It contains all the files required for running and building the application
    - A cut-down OS
    - third party libraries
    - environment variables
    - application files

- Container: it is a kind a VM, provides an isloated environment for running the application
    - can be stopped and started
    - it just a special kind of process because it has its own file system
    
## Creating the Dockerfile
- Copying individual files
    - COPY <source> <destination>
        - COPY package.json readme.md /app/ --> copying individual files(package, readme) to app directory and if app directory does not exit then it will create
        - COPY package*.json /app/ --> wild card copying all the files starts with package into app directory
        - COPY . /app/ --> copy every thing in the project directory to app directory
        - COPY [<array of strings>]  one more format of COPY commands

        - If Workingdirectory is set then we can set source directory relatively

        - WORKDIR /app
        - COPY . . (first dot to copy all files and second dot is for mentioning it is current directory relative to directory mentioned in WORKDIR)
    
    - ADD is similar to copy but it does two additional things
        - ADD <url of the file> /app --> you can copy a file from URL
        - ADD graphqlLearning.zi /app --> it can copy zip files and it will unzip in the destination directory

Note: To exclude certain files we need add `.dockerignore` file 

### RUN VS CMD ?
`RUN` is executed at the build time where as `CMD` is a run time instrution executed after the container has started.

- We can execute commands in two forms
    1. shell form --> CMD npm start --> CMD <command to run>
    2. Exec form --> CMD ["npm", "start"] -> CMD [<array of instructions>]
- In the first syntax docker will executes the command in a separate shell in linux system and in separate `cmd` prompt in windows system

Note: Second syntax is the preferred syntax as there is no need to create a separe processes, cleaning up the resources is easy as well.

### When to use CMD VS ENTRYPOINT ?
- Both of them have similar syntax and used for executing the run time command but the difference is `CMD` can be easily overwritten, when compared with `ENTRYPOINT`

- if we have defined in `Dockerfile` as below
```docker
CMD ["npm", "start"]
ENTRYPOINT ["npm", "start"]
```
When we run the image we can easily override the `CMD` instructions as shown below
    - docker run -it <imagename> echo "I have been overridden the default command mentioned in dockerfile"
    - docker run -it <imagename> --entrypoint "to override the entrypoint command you need to leverage the flag entrypoint hence it is diffficult to remember"

Conclusion: When we are sure of the application start command then we can with `ENTRYPOINT` else with `CMD`

It is individual choice to use based on the need. 

### Deleting the images ?
- We need to remove the tangle images to save up some memory
- docker container prune --> all the cointainers which are started and exited will remain as is in the memory
so we need to prune them, then we can prune the images
- docker image prune ---> to remove the tangle images from the list

### tagging the images ?
- tagging is a kind of versioning so we have two ways to create a tag
    - docker build -t <imagename>:<tagname> <path for the docker file>
        - docker build -t graphqlapp:1 .
    - tagging after the image has been created
        - docker image tag graphqlapp:latest graphqlapp:1
        - docker image tag <imagenamewithtag/tagid> <new tag>

### sharing images ?
- we can publish the images just like git, we have docker-hub
    - docker push <name of the image>:tag
- we can also pull the images from the docker-hub
- we can share the docker image in tar format as well 

## Containers:

### Starting Containers:
- docker run <imagename>
- docker run -it <imagename> sh (interactive mode with shell)
- docker run -d <imagename> running the image in a detach mode
- docker run -d --name <name of the image> <imagename> we are providing name for easy reading 

### Viewing the logs:
- docker logs <container id, first 3 letters is enough>
- docker ps --> to see the running containers and its ids
- docker logs --help to see the different options available for logs
- docker rm <name/id of the container>  --> to remove containers
- docker ps -a | grep <name of the container> --> to filter the container by id

### File system
- Each container has its own filesystem that is invisible to other container
- So if we persist data in a container when we stop those data also will be lost hence we have to use
volumes

### Volume:
- A volume is a storage outside of the container or in the cloud
    - docker volume create <name of the volume>
        - docker volume create app-data
- Command for access the volume data inside the container
    - docker run -d -p <localhostPortNumber>:<container host port number> -v <name of the volume>:<application file system path> <imagename>
    - docker run -v <name of the volume>:<application file system path where volume data should reside> <imagename>