FROM nginx:1.18-alpine

LABEL Maintainer="Gonzalo Plaza <gonzalo@verize.com>" \
      Description="Lightweight container with Nginx 1.18 & Node 16 based on Alpine Linux"

ARG PORT=8080
ENV PORT=${PORT}

# Configure user
RUN addgroup -S appuser \
    && adduser -S appuser -G appuser

RUN touch /run/nginx.pid \
 && chown -R appuser:appuser /run/nginx.pid

# Configure nginx
COPY ./etc/nginx/nginx.conf /etc/nginx/nginx.conf
# Remove default server definition
RUN rm /etc/nginx/conf.d/default.conf

USER appuser

EXPOSE ${PORT}