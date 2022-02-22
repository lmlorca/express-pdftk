# FROM ubuntu:xenial
FROM alpine:3.8

RUN mkdir /app && mkdir /template
WORKDIR /app
VOLUME [ "/template" ]
COPY package.json /app

RUN apk update && apk add nodejs && \
	apk add npm && \
	npm install && \
	apk update && apk upgrade \
	&& apk add pdftk

COPY . /app

EXPOSE 5000

CMD ["npm", "start"]