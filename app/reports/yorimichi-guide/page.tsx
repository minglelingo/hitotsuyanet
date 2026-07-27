export default function YorimichiGuideReportPage() {
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
        <nav className="desktop-nav" aria-label="メインナビゲーション">
          <a href="/#about">私たちについて</a>
          <a href="/#places">居場所を探す</a>
          <a href="/#join">連絡会に参加する</a>
          <a href="/reports/">活動報告</a>
          <a className="nav-contact" href="/#contact">お問い合わせ</a>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="メニューを開く"><span /><span /><span /></summary>
          <nav aria-label="モバイルナビゲーション">
            <a href="/#about">私たちについて</a>
            <a href="/#places">居場所を探す</a>
            <a href="/#join">連絡会に参加する</a>
            <a href="/reports/">活動報告</a>
            <a href="/#contact">お問い合わせ</a>
          </nav>
        </details>
      </header>

      <article className="article-page">
        <header className="article-hero">
          <p className="section-kicker"><span>REPORT</span><i /></p>
          <time>2026.08.01</time>
          <h1>居場所ガイド『よりみち』を発行しました</h1>
          <p>
            調布・狛江エリアでひらかれている6つの居場所と、
            そこに関わる人たちの想いを紹介する冊子を制作しました。
          </p>
        </header>

        <figure className="article-main-image">
          <img
            src="/yorimichi-printed.png"
            alt="居場所ガイド『よりみち』の冊子"
          />
        </figure>

        <div className="article-body">
          <section>
            <h2>居場所の物語を、一冊に。</h2>
            <p>
              家でも学校や職場でもない、誰もがホッと羽を休められる「地域の居場所」。
              『よりみち』では、調布・狛江の周辺にある6つの居場所を紹介しています。
            </p>
            <p>
              つくったひと、訪れるひと、やってみたいことを持ち込んだひと。
              それぞれの想いとともに、場所ごとに異なる空気や過ごし方を一冊にまとめました。
            </p>
          </section>

          <section>
            <h2>掲載している6つの居場所</h2>
            <p>
              POSTO、ふらっとなんぶ、野川のえんがわ こまち、
              しばさき彩ステーション、ふふ富士見、トビバコを掲載しています。
              どの場所も、誰かと話したいときにも、ただ静かに過ごしたいときにも、
              自分らしく立ち寄れる地域の居場所です。
            </p>
            <p className="article-links">
              <a href="/#places">掲載スポットを見る →</a>
            </p>
          </section>

          <section>
            <h2>あなたの「よりみち」を見つけてください</h2>
            <p>
              冊子をきっかけに、気になった場所へふらりと足を運んでもらえたらうれしいです。
              まちの中に、自分に合った居場所や新しいつながりを見つけてみてください。
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
