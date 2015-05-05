FROM debian:wheezy

RUN echo "deb http://ftp.us.debian.org/debian wheezy-backports main" >> /etc/apt/sources.list
RUN apt-get update

# Install Ruby & Node.js
RUN DEBIAN_FRONTEND=noninteractive apt-get -y install ruby1.9.1-full nodejs-legacy curl make git python
RUN curl -L https://www.npmjs.org/install.sh | /bin/bash

WORKDIR /app
ADD . /app

RUN npm install -g grunt-cli
RUN gem install bundler
RUN gem install pygments.rb
RUN bundle install

CMD grunt serve