CREATE DATABASE IF NOT EXISTS TOSS;
USE TOSS;

CREATE TABLE IF NOT EXISTS `tribe` (
  `id`   bigint(20)  unsigned NOT NULL,
  `name` varchar(255)         NOT NULL,
  PRIMARY KEY (`id`)
)
  COMMENT '대단위	조직';

CREATE TABLE IF NOT EXISTS `squad` (
  `id`       bigint(20)  unsigned NOT NULL,
  `name`     varchar(255)         NOT NULL,
  `tribe_id` bigint(20)  unsigned NOT NULL,
  PRIMARY KEY (`id`)
)
  COMMENT '소단위	조직';

CREATE TABLE IF NOT EXISTS `position` (
  `id`   bigint(20)  unsigned NOT NULL,
  `name` varchar(255)         NOT NULL,
  PRIMARY KEY (`id`)
)
  COMMENT '직무';

CREATE TABLE IF NOT EXISTS `member` (
  `id`          bigint(20)  unsigned NOT NULL,
  `name`        varchar(255)         NOT NULL,
  `squad_id`    bigint(20)  unsigned DEFAULT NULL,
  `position_id` bigint(20)  unsigned DEFAULT NULL,
  PRIMARY KEY (`id`)
)
  COMMENT '구성원';
