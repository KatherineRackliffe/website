FROM nginx:latest

# Copy your custom nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Copy your website files from the docs directory into the Nginx html directory
COPY docs /usr/share/nginx/html