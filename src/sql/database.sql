CREATE DATABASE news_portal_nodejs;

    USE news_portal_nodejs;

CREATE TABLE news(
    id_news int NOT NULL  PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(100),
    news TEXT,
    data_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE news;

insert into news (title,news) values ("any title", "content of hte news");

select * from news
