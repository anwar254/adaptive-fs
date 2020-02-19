# Adaptive-fs

Adaptive fs is a command line interface built to create component in adaptive-ui project

##installation
npm i -g adaptive-fs@latest

usage:
    adaptive-fs <action> <type> <name> <theme>

    <action> can be:

    c, create:      used to create a new compoentent / file.
    d, delete:      used to delete a component / file.

    <type> can be:

    file:        this creates files in a given directory <dir>
    component:   this creates components in a given theme

    finally:
    <name>  : this is the name you give your component
    <theme> : this is the theme you want your component to be created.

    other commands:
    -h, --help:  used to print the usage guide
    -v, --version: used to check the version of the package
    -p, --pwd: view the current working directory 
