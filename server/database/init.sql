CREATE TABLE PAGES(
   ID INTEGER PRIMARY KEY   AUTOINCREMENT,
   PAGE_NUM INTEGER NOT NULL,
   ATTRIBUT TEXT,
   CONTENT TEXT
);

INSERT INTO PAGES (PAGE_NUM,ATTRIBUT, CONTENT)
VALUES (0, 'text',"Voilà la première page du livre");



