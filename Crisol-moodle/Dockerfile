FROM php:8.2-apache

# Install required system packages for Moodle (including libonig-dev for mbstring)
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libzip-dev \
    libicu-dev \
    libxml2-dev \
    libcurl4-openssl-dev \
    libsodium-dev \
    libonig-dev \
    unzip \
    git \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Configure & Install PHP extensions required by Moodle
RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j4 \
        mysqli \
        pdo_mysql \
        gd \
        intl \
        xml \
        soap \
        opcache \
        zip \
        sodium \
        exif \
        mbstring

# Enable Apache rewrite module
RUN a2enmod rewrite

# Download and install Moodle
RUN curl -L https://download.moodle.org/download.php/direct/stable404/moodle-latest-404.tgz -o moodle.tgz \
    && tar -xzf moodle.tgz --strip-components=1 -C /var/www/html \
    && rm moodle.tgz \
    && chown -R www-data:www-data /var/www/html

# Set up moodledata folder with proper permissions
RUN mkdir -p /var/www/moodledata && chown -R www-data:www-data /var/www/moodledata && chmod -R 777 /var/www/moodledata

WORKDIR /var/www/html
