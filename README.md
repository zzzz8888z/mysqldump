# mysqldump
### 此工具用于没有mysql环境下dump指定数据库的指定表

##
    mysqldump -h 127.0.0.1 -u root -p 123456 -d database -o data.sql
    mysqldump -h 127.0.0.1 -u root -p 123456 -d database -o data.sql -t table1,table2

不加table（t参数）默认导出全部表

    select concat(round(sum(DATA_LENGTH/1024/1024/1024),2),'GB') as data from TABLES;

可用上面参数查询全库大小

    select *,concat(round(DATA_LENGTH/1024/1024/1024,2),'GB') as data from TABLES;

可用上面参数查询表大小