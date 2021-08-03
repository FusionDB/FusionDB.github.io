---
path: 'design/'
title: 'Design'
description: 'FusionDB design guides'
summary: true
auth: xiliu
---

# Design

开设 Design 章节内容，主要是为阐述 FusionDB 之道，系统中关键的 sql、core、runtime、hetu stroage、ha、调度等核心模块的设计权衡都会提供详细的 Desgin 文档，方便跟多人学习了解，快速融入 FusionDB 社区。

FusioniDB 是一个开源的分布式数据库，主要包括两部分：FusionDB 和 Hetu 存储。

FusionDB 是创新型在线分布式数据库系统，计算层采用 MPP 和 BSP 混算引擎，支撑万亿数据秒及响应能力。

存储层基于 RAFT & 2PC 等技术保障分布式数据的可靠性，Hetu 存储高度抽象，每个元素都能单独进行扩展和定制。

数据库元数据统一由 Hetu Manager 进行管理，利用 RAFT 提供高可靠 HA，元数据存储的是关系数据库的元信息，提供： Database、Table、Partition、Tablet 等概念。

数据存储层统一由 Hetu Container Manager 进行管理，利用 RAFT 提供多数据副本的可靠性，抽象 Data Container、Block 等概念，Data 容器是数据分布式存、调度、移动的最新单位，Block 和 元数据

信息中的 Tablet 等价，一个 Tablet 对应一个 Block 或多个 Block； 一个 Data 容器包行多个 Block； 一个 Data 容器大小建议：10 - 20 GB，默认 10 GB

Data Container 拥有不同的存储引擎实现，内置两种存储引擎实现，行存(LStore)、 列存（CStore）； 支持独立扩展存储引擎。

Block 的分配根据算法进行均匀打散到集群中的不同 Data Container 中。

整个存储层 Storage Layer 设计高度抽象，稍微扩展，就能支撑新的场景，分布式存储集群层面的调度、Replica、一致性、Data Balancer、快照、迁移、故障自愈等都提供是通用化的能力，只需要极致优化或扩展单机存储引擎，
而不用关心复杂的分布式系统问题。

整个计算层 SQL Layer 设计，支持多种计算模型融合； 离在线一体化，支撑 Online 响应，有能很好的支持 Batch 的离线计算。
