# Git-Blogger
A cross-platform desktop blogging application based on Electron and React.js. I am developing this for using it with my personal [blog](http://sayakbiswas.github.io) which is based on Sergio Kopplin's Indigo theme. Ideally this could be adapted to other Github Pages hosted blogs with minor changes.

## Developing with Docker
A docker file is provided in the repository. After cloning the repo, you can run the following from within the Git-Blogger directory to create an image:

```shell
docker build -t <your username>/git-blogger .
```

You can get inside the container using:

```shell
docker run -it <your username>/git-blogger /bin/bash
```

You can test your changes be running the following from outside the container:

```shell
docker run -it --rm -e DISPLAY=$DISPLAY -v /tmp/.X11-unix/:/tmp/.X11-unix <your username>/git-blogger /usr/bin/npm start --prefix /usr/src/app/Git-Blogger
```
