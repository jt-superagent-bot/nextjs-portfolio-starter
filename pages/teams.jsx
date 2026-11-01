import Head from 'next/head'
import Link from 'next/link'
import TeamInquiryForm from '../components/TeamInquiryForm'
import styles from '../styles/teams.module.css'

const YEAR = new Date().getFullYear()

const FEATURES = [
  {
    title: '年度规划工作坊',
    text: '每年 2 次线上工作坊，对齐年度目标、团队分工与交付节奏，让每个季度都有明确的起点。'
  },
  {
    title: '季度交付评审',
    text: '每季度 1 次交付评审，回顾阶段成果与偏差，调整下一季度的重点和资源安排。'
  },
  {
    title: '专属沟通渠道',
    text: '建立团队专属沟通群组，日常问题在工作日内得到响应，重要决策留有记录。'
  },
  {
    title: '团队工作区',
    text: '最多 20 位成员共享资料、模板与历史记录，新成员可以快速了解既有约定。'
  },
  {
    title: '年度总结报告',
    text: '年末输出一份年度回顾，梳理已交付的成果、遇到的关键问题与下一年度建议。'
  },
  {
    title: '席位灵活调整',
    text: '年框期内可以按团队变化调整席位，不必因为人员流动重新走一遍完整的采购流程。'
  }
]

const FITS = [
  {
    title: '5–20 人的产品与研发团队',
    text: '需要固定的年度节奏，把规划、交付与复盘串成一条线。'
  },
  {
    title: '设计、内容与品牌工作室',
    text: '同时推进多个客户项目，希望用统一的工作区管理资料与交付记录。'
  },
  {
    title: '早期创业团队',
    text: '人数不多但变化快，需要一个可以随团队规模调整的年度协作方案。'
  },
  {
    title: '需要跨季度协作的组织',
    text: '项目周期超过一个季度，希望减少反复沟通和上下文丢失。'
  }
]

const PROCESS = [
  {
    title: '提交询价',
    text: '填写团队信息与需求说明，让我们先了解团队规模和当前的重点。'
  },
  {
    title: '需求沟通',
    text: '2 个工作日内通过邮件回复，确认席位、交付范围与关键节点。'
  },
  {
    title: '签约与排期',
    text: '确认年度费用与结算方式，约定工作坊、评审和日常沟通的时间。'
  },
  {
    title: '按季度交付',
    text: '按年度节奏推进工作坊与评审，在日常协作中持续跟进团队进展。'
  }
]

const PRICE_INCLUDES = [
  '覆盖最多 20 位团队成员',
  '2 次年度规划工作坊与 4 次季度评审',
  '专属沟通渠道与团队工作区',
  '年度总结报告与下一年度建议'
]

function CheckIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.2 6.2 4.8 8.8 9.8 3.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MetaItem({ children }) {
  return (
    <span className={styles.metaItem}>
      <span className={styles.check}>
        <CheckIcon />
      </span>
      <span>{children}</span>
    </span>
  )
}

export default function TeamsPage() {
  return (
    <div className={styles.page} lang="zh-CN">
      <Head>
        <title>团队年框 · $1,990/年</title>
        <meta
          name="description"
          content="为 5–20 人团队准备的年度协作方案：年度规划工作坊、季度交付评审、专属沟通渠道与团队工作区。年费 $1,990。"
        />
        <meta property="og:title" content="团队年框 · $1,990/年" />
        <meta
          property="og:description"
          content="为 5–20 人团队准备的年度协作方案：年度规划工作坊、季度交付评审、专属沟通渠道与团队工作区。"
        />
      </Head>

      <header className={styles.header}>
        <div className={styles.container}>
          <nav className={styles.nav} aria-label="页面导航">
            <Link href="/" className={styles.brand}>
              <span className={styles.brandMark} aria-hidden="true">
                T
              </span>
              <span>团队年框</span>
            </Link>
            <div className={styles.navLinks}>
              <Link href="/" className={styles.navLink}>
                返回首页
              </Link>
              <a href="#inquiry" className={styles.navCta}>
                提交询价
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div>
                <p className={styles.eyebrow}>Team annual plan</p>
                <h1 className={styles.title}>
                  为团队建立一套
                  <br />
                  可持续的年度协作节奏
                </h1>
                <p className={styles.lead}>
                  团队年框把规划、交付与复盘放进同一份年度约定里，让 5–20
                  人的团队在一整年里保持清晰的方向和稳定的产出。
                </p>
                <div className={styles.heroMeta}>
                  <MetaItem>
                    按年签约，覆盖最多 20 位成员，席位可按团队变化调整
                  </MetaItem>
                  <MetaItem>
                    年度规划工作坊、季度交付评审与日常沟通同步推进
                  </MetaItem>
                  <MetaItem>提交询价后 2 个工作日内回复初步方案</MetaItem>
                </div>
              </div>

              <aside className={styles.priceCard} aria-label="团队年框价格">
                <p className={styles.priceTag}>年度方案</p>
                <div className={styles.priceRow}>
                  <span className={styles.price}>$1,990</span>
                  <span className={styles.pricePeriod}>/ 年</span>
                </div>
                <p className={styles.priceSub}>覆盖最多 20 位团队成员</p>
                <ul className={styles.priceList}>
                  {PRICE_INCLUDES.map((item) => (
                    <li key={item}>
                      <span className={styles.check}>
                        <CheckIcon />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="#inquiry" className={styles.priceCta}>
                  提交团队询价
                </a>
                <p className={styles.priceFootnote}>
                  按年结算，签约前会确认交付范围。
                </p>
              </aside>
            </div>
          </div>
        </section>

        <section className={styles.section} id="included">
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <p className={styles.kicker}>What&apos;s included</p>
              <h2 className={styles.h2}>一份年框，覆盖团队一整年的协作</h2>
              <p className={styles.sectionLead}>
                我们把年度协作拆成可以执行的动作：固定的规划节点、按季度的交付评审，以及日常可以直接使用的团队工作区。
              </p>
            </div>
            <div className={styles.featureGrid}>
              {FEATURES.map((feature, index) => (
                <div className={styles.card} key={feature.title}>
                  <p className={styles.cardIndex}>
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className={styles.cardTitle}>{feature.title}</h3>
                  <p className={styles.cardText}>{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} id="who">
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <p className={styles.kicker}>Who it&apos;s for</p>
              <h2 className={styles.h2}>适合什么样的团队</h2>
              <p className={styles.sectionLead}>
                团队年框面向 5–20 人、需要跨季度协作的团队。人数超过 20
                人时，可以在询价中说明，我们会单独评估。
              </p>
            </div>
            <div className={styles.fitGrid}>
              {FITS.map((fit) => (
                <div className={styles.fitCard} key={fit.title}>
                  <h3 className={styles.fitTitle}>{fit.title}</h3>
                  <p className={styles.fitText}>{fit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} id="delivery">
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <p className={styles.kicker}>How it works</p>
              <h2 className={styles.h2}>从询价到交付，四步确定年度安排</h2>
              <p className={styles.sectionLead}>
                整个过程以线上协作为主，关键节点会提前排期。年费 $1,990 覆盖最多
                20 人，签约后按年度节奏推进。
              </p>
            </div>
            <div className={styles.processGrid}>
              {PROCESS.map((step, index) => (
                <div className={styles.processItem} key={step.title}>
                  <p className={styles.processStep}>
                    STEP {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className={styles.processTitle}>{step.title}</h3>
                  <p className={styles.processText}>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.inquirySection} id="inquiry">
          <div className={styles.container}>
            <div className={styles.inquiryGrid}>
              <div className={styles.inquiryCopy}>
                <p className={styles.kicker}>Inquiry</p>
                <h2 className={styles.h2}>提交团队询价</h2>
                <p className={styles.sectionLead}>
                  填写团队信息与需求说明，我们会在 2
                  个工作日内通过邮件联系你，确认团队规模与年度安排。
                </p>
                <p className={styles.priceLine}>
                  团队年框 <strong>$1,990</strong> / 年
                </p>
                <ul className={styles.inquiryList}>
                  <li>
                    <span className={styles.check}>
                      <CheckIcon />
                    </span>
                    <span>先确认团队规模与席位，再确定交付范围</span>
                  </li>
                  <li>
                    <span className={styles.check}>
                      <CheckIcon />
                    </span>
                    <span>年度费用在签约时确认，本页不提供在线支付</span>
                  </li>
                  <li>
                    <span className={styles.check}>
                      <CheckIcon />
                    </span>
                    <span>询价信息仅用于本次沟通，不会用于其他用途</span>
                  </li>
                </ul>
              </div>
              <TeamInquiryForm />
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerInner}>
            <span>© {YEAR} 团队年框</span>
            <div className={styles.footerLinks}>
              <Link href="/" className={styles.footerLink}>
                返回首页
              </Link>
              <a href="#inquiry" className={styles.footerLink}>
                提交询价
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
