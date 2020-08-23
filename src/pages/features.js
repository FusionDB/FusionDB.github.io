import React from 'react'

import { Layout } from '../components/common/layout'
import { Seo } from '../components/common/seo'

const FeaturesPage = () => (
  <Layout className='page-features'>
    <Seo title='Features' />
    {/* <div className='band'>
      <div className='band-background'>
        <div className='container'>
          <div className='text'>
            <p className='title'>
              Fusionlab Project <strong>Anyscale</strong>
            </p>
            <p className='description'>
              Microservice based <strong>Streaming</strong> and{' '}
              <strong>Batch</strong> data processing for{' '}
              <a
                href='https://www.cloudfoundry.org/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Cloud Foundry
              </a>{' '}
            and{' '}
              <a
                href='https://kubernetes.io/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Kubernetes
              </a>
            </p>
          </div>
          <div className='player'>
            <Video />
          </div>
        </div>
      </div>
    </div> */}
    <div className='container'>
      <div className='layout-basic'>
        <div className='page-title'>
          <h1>特性</h1>
        </div>

        <div className='colset'>
          <div className='col'>
            <article>
              <h2>One-stop</h2>
              <p>一体化 & 简单 & 易用 & 云原生 & 分布式。</p>
            </article>

            <article>
              <h2>高性能</h2>
              <p>实时写入，万亿数据秒级响应，融合计算。</p>
            </article>

            <article>
              <h2>扩展性</h2>
              <p>存储计算弹性伸缩，上千台集群规模，提供PB级数据存储。</p>
            </article>

            <article>
              <h2>Fusionlab 数据产品</h2>
              <p>
                准备好连接 Fusionlab 数据产品 Anyscale, FusionDB and Ambari-plus
              </p>
            </article>
          </div>

          <div className='col'>
            <article>
              <h2>可视化</h2>
              <p>可视化数据收集、存储、分析、数据报表。</p>
            </article>
            <article>
              <h2>可靠性</h2>
              <p>集群提供副本容错机制，硬件故障不会造成数据丢失。</p>
            </article>
            <article>
              <h2>简单运维</h2>
              <p>日志、监控、报警、配置、服务一栈式管理。</p>
            </article>
          </div>
          <div className='col'>
            <article>
              <h2>简单易用</h2>
              <p>提供标准 SQL，拖拽式数据分析。</p>
            </article>
            <article>
              <h2>数据闭环</h2>
              <p>Load Data -> SQL Analysis -> Save Data</p>
            </article>
            <article>
              <h2>多云协作</h2>
              <p>多云协作、分析、处理数据，例如：S3、ADLS、GCP、OSS等</p>
            </article>
            <article>
              <h2>ALL in SQL & SQL for Everyone</h2>
              <p>连接一切，Mixed Engine 多模态数据统一管理</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default FeaturesPage
