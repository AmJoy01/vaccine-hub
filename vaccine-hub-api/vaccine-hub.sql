\echo 'Delete and recreate vaccine_hub db?'
\prompt 'Enter for yes or control+c to cancel > ' answer

DROP DATABASE vaccine_hub;
CREATE DATABASE vaccine_hub;
\connect vaccine_hub;

\i vaccine-hub-schema.sql


