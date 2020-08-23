---
path: 'installation/local/manual'
title: 'Manual'
description: 'Manual installation'
---

# 入门指南

## 数据可视化

数据可视化，由一个现代化的企业级商业智能 Web 应用程序 Superset 提供服务。

提供丰富的数据可视化集，一个易于使用的界面，用于探索和可视化数据。

高度可定制化数据可视化工具。

推荐的数据库连接软件包：

| database   |             pypi package              |   SQLAlchemy URI prefix   |
| :--------- | :-----------------------------------: | :-----------------------: |
| MySQL      |        pip install mysqlclient        |         mysql://          |
| Postgres   |         pip install psycopg2          |  postgresql+psycopg2://   |
| Presto     |          pip install pyhive           |         presto://         |
| Oracle     |         pip install cx_Oracle         |         oracle://         |
| sqlite     |            default support            |         sqlite://         |
| Redshift   |    pip install sqlalchemy-redshift    |   redshift+psycopg2://    |
| MSSQL      |          pip install pymssql          |         mssql://          |
| Impala     |          pip install pyhive           |       jdbc+hive://        |
| SparkSQL   |    pip install sqlalchemy-redshift    |   redshift+psycopg2://    |
| Greenplum  |         pip install psycopg2          |  postgresql+psycopg2://   |
| Athena     |   pip install "PyAthenaJDBC>1.0.9"    |     awsathena+jdbc://     |
| Vertica    | pip install sqlalchemy-vertica-python | vertica+vertica_python:// |
| ClickHouse |   pip install sqlalchemy-clickhouse   |       clickhouse://       |
| Kylin      |          pip install kylinpy          |         kylin://          |

目前 JDP Package 提供的 Superset 安装包，默认支持`MySQL`、`Postgres`、`Presto`、`sqlite`、`Impala`、`SparkSQL`、`Greenplum`、`ClickHouse`。

Ambari 管理 Superset 界面提供`Quick Links`，访问 Superset databaseview，配置`数据源` -> `数据库`添加 ClickHouse DataSource，格式如下：

- ClickHouse
  - 连接地址：clickhouse://admin:admin@clickhouse_host_address:8123/default
  - 用户名：admin # 默认 JDP
  - 密码：amdin # 默认 JDP

> 注：`ClickHouse`集群，默认还提供只读用户`ck/admin`。

- MySQL
  - 连接地址：mysql://user:password@your_mysql_address:3306/database
  - 用户名：user
  - 密码： password

## Screenshots

<img src="images/superset_screenshots_1.gif" alt="superset screenshots" width="765"/>
<img src="images/superset_screenshots_2.gif" alt="superset screenshots" width="765"/>
<img src="images/superset_screenshots_3.gif" alt="superset screenshots" width="765"/>
