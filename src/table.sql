
-- \i /Users/Ifeamarame/Documents/Nodejs/url-shortener/src/table.sql

CREATE TABLE url_table (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    url_code VARCHAR(50) UNIQUE NOT NULL,
    long_url VARCHAR UNIQUE NOT NULL,
    short_url VARCHAR(50) UNIQUE NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT now()
);