# Use the official Ruby image
FROM ruby:2.7

# Install required packages
RUN apt-get update -qq && apt-get install -y build-essential libssl-dev libreadline-dev zlib1g-dev

# Install Jekyll and Bundler
RUN gem install jekyll bundler

# Set the working directory
WORKDIR /srv/jekyll

# Copy the Gemfile and Gemfile.lock
COPY Gemfile* ./

# Install dependencies
RUN bundle install

# Copy the rest of the application code
COPY . .

# Expose the port Jekyll runs on
EXPOSE 4000

# Command to run Jekyll
CMD ["jekyll", "serve", "--host", "0.0.0.0"]
