import React from 'react'
import { Link } from 'gatsby'

import { IconGithub } from '../components/common/icons'
import { Image } from '../components/home'
import { Latest } from '../components/news'
import { Layout } from '../components/common/layout'
import { Seo } from '../components/common/seo'

const IndexPage = () => (
  <Layout className='home-page'>
    <Seo />

    <div className='band'>
      <div className='container'>
        <div className='band-content'>
          <div className='image'>
            <Image />
          </div>
          <div className='text'>
            <p className='description'>
              <strong>企业级 Core Data & Core AI 统一分析平台</strong> 开箱即用{' '}
              <strong>&</strong> 开发者友好， 支持{' '}
              <a
                href='https://www.fusionlab.cn/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Cloud、 Kubernetes
              </a>{' '}
              and{' '}
              <a
                href='https://www.fusionlab.cn/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Data Center
              </a>
            </p>
            <ul className='links'>
              <li>
                <strong>基础理念：</strong> 基于分布式数据存储和计算引擎设计
              </li>
              <li>
                <strong>开发工具：</strong> 利用 ambari-plus 管理平台组件
              </li>
              <li>
                <strong>基础构成：</strong> 高性能的分布式 Mixed Engine
                计算引擎，支撑万亿数据秒级响应和存储能力
              </li>
              <li>
                <strong>核心功能：</strong> Core Data & Core AI：Core
                Data提供高度易用的统一数据分析体验，真正的统一 Batch & Streaming
                计算模型。Core AI
                提供分布式系统上的AI能力，帮助企业智能化转型，提供低
                TCO、全自动化、智能化 AI 应用构建。
              </li>
              <li>
                <strong>基础运维：</strong> 开箱即用，可视化运维管理系统
                ambari-plus，提供核心的服务管理与配置中心功能，保障集群的稳定可靠，简单高效的管理大规模分布式系统。
              </li>
              <li>
                <strong>100% 开源</strong>，Apache Licensed
              </li>
            </ul>
            <p>
              <Link className='button' to='/getting-started/'>
                Getting Started
              </Link>{' '}
              <a
                className='button light icon'
                href='https://github.com/fuslab/anyscale'
                target='_blank'
                rel='noreferrer noopener'
              >
                <IconGithub />
                View on Github
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className='container'>
      <div className='layout-basic'>
        <div className='colset'>
          <div className='col col-1'>
            <a href='/docs/concepts/'>
              <h2>Core Data</h2>
              <p>
                提供高度易用的统一数据分析体验，真正的统一 Batch & Streaming
                计算模型 <br />
                Mixed Engine。
                <br />
                简单易用，实现跨数据源融合计算能力。
              </p>
              <p>
                <span>Read more</span>
              </p>
            </a>
          </div>
          <div className='col col-2'>
            <a href='/docs/concepts/tooling/'>
              <h2>Core AI</h2>
              <p>
                分布式系统上的 AI 能力，帮助企业智能化转型 <br />
                提供低 TCO、全自动化、智能化 AI 应用构建。
                <br />
                CoreData 提供海量数据存储和高性能算力支撑。
              </p>
              <p>
                <span>Read more</span>
              </p>
            </a>
          </div>
          <div className='col col-3'>
            <a href='/getting-started/'>
              <h2>Open Source</h2>
              <p>
                100% 开源，Apache Licensed
                <br />
                企业级 Core Data & Core AI
                统一分析平台，完全分布式开源系统构建，高效的管理大规模分布式系统。
              </p>
              <p>
                <span>Read more</span>
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className='home-news'>
      <div className='container'>
        <h1>博客</h1>
        <div className='news-list'>
          <Latest />
        </div>
        <p className='readmore'>
          <a href='/news/' className='button'>
            Read more
          </a>
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
