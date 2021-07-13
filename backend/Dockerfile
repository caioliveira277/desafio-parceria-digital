FROM wyveo/nginx-php-fpm:php74

ADD nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/

COPY . /usr/share/nginx/

RUN chmod -R 775 /usr/share/nginx/storage/*
