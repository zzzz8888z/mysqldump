# mysqldump
# 此工具用于没有mysql环境dump 数据库

##
    mysqldump -h 127.0.0.1 -u root -p 123456 -d database -o data.sql
    
    mysqldump -h 127.0.0.1 -u root -p 123456 -d database -o data.sql -t table1,table2


