export default function StampRallyReportPage() {
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
          <time>2025.08.22</time>
          <h1>ひとつやねっと居場所スタンプラリーを実施しました</h1>
          <p>
            調布市・狛江市の6つの居場所をめぐるスタンプラリーを実施しました。
            地域にひらかれた居場所を知り、ふらりと立ち寄るきっかけになる企画です。
          </p>
          <dl className="article-meta">
            <div>
              <dt>実施期間</dt>
              <dd>2025年10月1日〜2026年3月31日</dd>
            </div>
          </dl>
        </header>

        <figure className="article-main-image">
          <img
            src="/reports/ibasho-stamp-rally/ibasho-stamp-rally-soto.png"
            alt="ひとつやねっと居場所スタンプラリーの案内面"
          />
        </figure>

        <div className="article-body">
          <section>
            <h2>企画について</h2>
            <p>
              「ひとつやねっと」は、調布・狛江の周辺エリアで、主に一軒家を地域にひらいた場づくりに取り組む市民のネットワークです。
              それぞれの場所には特色がありますが、共通しているのは、ひとつ屋根の下で、誰でもいつでも気軽に立ち寄れる地域の居場所であることです。
            </p>
            <p>
              今回のスタンプラリーは、地域の居場所をより多くの方に知っていただくための取り組みです。
              2025年は調布市制施行70周年の節目の年であり、「調布よさこい」からリニューアルした「ちょうふ彩咲祭」も、誰もが笑顔で楽しめるインクルーシブな場を目指しています。
              その機会に合わせ、共生社会の充実と促進につながる企画として実施しました。
            </p>
          </section>

          <section>
            <h2>めぐる居場所</h2>
            <p>
              スタンプラリーでめぐるのは、トビバコ、ふふ富士見、しばさき彩ステーション、POSTO、野川のえんがわ こまち、ふらっとなんぶの6か所です。
              家でも学校や職場でもない「第三の居場所」として、誰もがホッとひと息つき、他の誰かとゆるやかにつながれる場所が地域にひらかれています。
            </p>
          </section>

          <figure className="article-spread">
            <img
              src="/reports/ibasho-stamp-rally/ibasho-stamp-rally-naka.png"
              alt="居場所スタンプラリー台紙"
              loading="lazy"
              decoding="async"
            />
            <figcaption>調布市・狛江市の6つの居場所をめぐるスタンプラリー台紙</figcaption>
          </figure>

          <section>
            <h2>完成した方への特典</h2>
            <p>
              スタンプラリーが完成した方には、猿田彦珈琲 京王線沿線店舗で景品をお渡しします。
              景品はコーヒー1杯、アイスクリーム、ドリップバッグ3枚のうちいずれか1点です。
              一部対象外の商品がありますので、詳しくは配布物をご確認ください。
            </p>
            <p>
              引き換え期限は2026年3月31日です。対象店舗は、調布焙煎ホール、アトリエ仙川、下北沢、猿田彦珈琲とティキタカアイスクリームのお店です。
            </p>
          </section>

          <section>
            <h2>猿田彦珈琲株式会社 大塚朝之さんからのメッセージ</h2>
            <blockquote>
              <p>
                僕の生まれ故郷である調布市で、こんなに素晴らしい取り組みをされていると知り、これはもう応援するしかない！と、協賛を決めさせていただきました。
              </p>
              <p>
                猿田彦珈琲は、誰でも気軽に立ち寄れて美味しいコーヒーを楽しめる場所です。
                皆さまにとっての「安らぐ場所」だったり、「アイデアが湧いてくる場所」になれるなら、コーヒー屋としてこれ以上の本望はありません。
              </p>
            </blockquote>
          </section>

          <section className="download-panel">
            <div>
              <h2>配布PDF</h2>
              <p>スタンプラリーの詳細はPDFでもご覧いただけます。印刷・共有用にご利用ください。</p>
            </div>
            <a
              className="button primary"
              href="/reports/ibasho-stamp-rally/ibasho-stamp-rally.pdf"
              download
            >
              PDFをダウンロード <span>↓</span>
            </a>
          </section>
        </div>
      </article>
    </main>
  );
}
