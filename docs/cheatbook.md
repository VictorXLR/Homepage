# Cheatbook
Interesting commands I use

## Bash
My PS1
```bash
'PS1="\[\033[38;5;081m\]\u\[\033[38;5;245m\]@\[\033[38;5;206m\]\H \[\033[38;5;245m\]\w \[\033[38;5;081m\]# \[\e[0m\]"'
```
List processes using a port
```bash
lsof -i :<port>
```

## Tmux
Create new Window
> <kbd>Ctrl</kbd> + <kbd>B</kbd> + <kbd>C</kbd>

Split pane horizontally
>  <kbd>Ctrl</kbd> + <kbd>B</kbd> + <kbd>"</kbd>

Split pane vertically
> <kbd>Ctrl</kbd> + <kbd>B</kbd> + <kbd>%</kbd>

Delete a pane
> <kbd>Ctrl</kbd> + <kbd>B</kbd> + <kbd>X</kbd>

Rename a window
> <kbd>Ctrl</kbd> + <kbd>B</kbd> + <kbd>,</kbd>

Rename a session
> <kbd>Ctrl</kbd> + <kbd>B</kbd> + <kbd>$</kbd>

List all sessions
> <kbd>Ctrl</kbd> + <kbd>B</kbd> + <kbd>S</kbd>


## Docker

Create a docker container `mongodb` that serves as a mongoDB service
```bash
docker run -d -p 27017-27019:27017-27019 --name mongodb mongo
```
> Share port 27017-27019 between host and container and give name mongodb
> d: detach, i.e. run in background


Connect to container `mongodb` with bash terminal 
```bash
docker exec -it mongodb bash
```
> i: interactive, t: tty

Mount File system access to it
```bash
docker run -d -v c:/Work:/projects -d -p 27017:27017 --name 
```
> This command will mount `c:/Work/Projects` to `/projects`