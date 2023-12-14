docker build -t local-dev .
docker run --rm -it -p 9229:9229 -p 8080:80 --entrypoint /bin/sh -v .:/app/ local-dev
