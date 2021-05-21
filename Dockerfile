FROM ruby:2.7.1

RUN apt-get update -qq --fix-missing \
  && curl -sL https://deb.nodesource.com/setup_10.x | bash - \
  && apt-get install -y build-essential nodejs libpq-dev libxml2-dev libxslt1-dev \
  # rmagick libs
  libmagickwand-dev imagemagick \
  && rm -rf /var/lib/apt/lists/* /tmp/*

#ENV RACK_ENV production

RUN mkdir -p /app
WORKDIR /app

COPY Gemfile Gemfile.lock ./
RUN gem install bundler --version 2.2.17 && bundle install --jobs 20 --retry 5

# Copy the main application.
COPY . ./

EXPOSE 80

# Start puma
CMD ["bundle", "exec", "puma", "-p", "80"]
