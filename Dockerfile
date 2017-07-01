# Base image ubuntu
FROM ubuntu

# Create app directory and make it working directory
RUN mkdir -p /usr/src/app/Git-Blogger
WORKDIR /usr/src/app/Git-Blogger

# Install system libraries for development
RUN apt-get update
RUN apt-get -y upgrade
RUN apt-get -y install curl
RUN curl -sL https://deb.nodesource.com/setup_4.x | bash -
RUN apt-get -y install git nodejs

# Install system libraries for running app
RUN apt-get -y install libxss1 libgconf-2-4 libnss3 libgtk2.0-0 libx11-xcb1 libxtst6 libasound2 libcanberra-gtk-module

# Copy app source code
COPY . /usr/src/app/Git-Blogger

# Install app dependencies
COPY package.json /usr/src/app/Git-Blogger
RUN npm install

# Expose port 8080 in case anyone wants to run it as a web app through server.js
EXPOSE 8080

# Command to execute after building
CMD ["/bin/echo", "-e", "Run app with: docker run -it --rm -e DISPLAY=$DISPLAY -v /tmp/.X11-unix/:/tmp/.X11-unix sayakbiswas/git-blogger /usr/bin/npm start --prefix /usr/src/app/Git-Blogger\n OR\n Go inside docker container with: docker run -it sayakbiswas/git-blogger /bin/bash"]
