FROM alpine:3.15.0

LABEL maintainer="Jonathan Henrique Medeiros"

RUN apk add --update npm && \
    npm install -g live-server -y

COPY . /app

WORKDIR /app

EXPOSE 8080

ENTRYPOINT ["live-server", "--no-browser"]
