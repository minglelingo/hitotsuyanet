import { reports } from "./posts";

export default function ReportsPage() {
  const publishedReports = reports.filter((report) => report.published);

  return (
    <main className="sub-page">
      <header className="site-header sub-header">
        <a className="brand" href="/#top" aria-label="ひとつやねっと ホーム">
          <span className="brand-mark">ひ</span>
          <span className="brand-text">
            <span>ひとつやねっと</span>
            <small>調布・狛江居場所連絡会</small>
          </span>
        </a>
        <nav aria-label="メインナビゲーション">
          <a href="/#about">私たちについて</a>
          <a href="/#places">居場所を探す</a>
          <a href="/#join">連絡会に参加する</a>
          <a href="/reports/">活動報告</a>
          <a className="nav-contact" href="/#contact">お問い合わせ</a>
        </nav>
      </header>

      <section className="reports-hero section">
        <div className="section-kicker"><span>REPORTS</span><i /></div>
        <h1>活動報告</h1>
        <p>
          ひとつやねっとの企画や広報活動、地域の居場所をめぐる取り組みをお知らせします。
        </p>
      </section>

      <section className="reports-list section">
        {publishedReports.map((report) => (
          <article className="report-card" key={report.slug}>
            <a href={report.href}>
              <img src={report.image} alt="" loading="lazy" decoding="async" />
              <div>
                <time>{report.date}</time>
                <h2>{report.title}</h2>
                <p>{report.excerpt}</p>
                <span>記事を読む →</span>
              </div>
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}
