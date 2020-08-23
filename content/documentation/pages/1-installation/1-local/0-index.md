---
path: 'installation/local/'
title: 'Local Machine'
description: 'Local Machine Installation Guide'
summary: true
---

# <a name="local-machine"></a>Local Machine

这部分内容介绍在本地计算机上如何安装企业级 `Core Data` & `Core AI` 统一分析平台 `ANYSCALE Stack`.

`ANYSCALE` 是企业级 `Core Data` & `Core AI` 统一分析平台，通过如下介绍，一步一步搭建 `ANYSCALE Stack` 的集群，从而让你快速部署 `ANYSCALE Stack` 系统服务于您的业务。

如下是一个实例，介绍集群安装需要的硬件、网络、磁盘相关推荐信息。

ANYSCALE 平台集群版本安装要求至少 3 个节点以上，其中涉及的 zookeeper, kafka, clickhouse 都是分布式集群系统，所以需要大于 3 个节点比较合理。

<!--IMPORTANT-->

Note: 如果是测试验证也支持安装单节点版本，生产环境建议使用分布式版本，至少 3 节点以上！

<!--END_IMPORTANT-->
