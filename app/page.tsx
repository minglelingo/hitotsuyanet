const places = [
  {
    no: "01",
    name: "POSTO",
    area: "仙川",
    image: "/places/posto.jpg",
    alt: "POSTOの店先に立つ運営者",
    copy: "注文しなくてもいい、屋根のある広場。共有のリビングのように、ふらりと立ち寄れる場所です。",
    address: "調布市仙川町1丁目19-10",
    access: "京王線仙川駅より徒歩2分",
    url: "https://motion-gallery.net/projects/sengawa_posto",
  },
  {
    no: "02",
    name: "ふらっとなんぶ",
    area: "狛江",
    image: "/places/flat-nanbu.jpg",
    alt: "ふらっとなんぶの玄関",
    copy: "赤ちゃんから高齢者、小学生まで。ありのままの自分でいられる、住宅街の地域交流拠点です。",
    address: "狛江市駒井町3丁目7-1",
    access: "こまバス「南部地域センター」下車",
    url: "https://bit.ly/flat_nanbu",
  },
  {
    no: "03",
    name: "野川のえんがわ こまち",
    area: "狛江",
    image: "/places/komachi.jpg",
    alt: "野川のえんがわ こまちの外観",
    copy: "大きな縁側のある、まちの止まり木。羽を休めて、また自分の世界へ飛び立てる場所です。",
    address: "狛江市西野川2丁目31-1",
    access: "こまえ正吉苑入口バス停より徒歩1分",
    url: "https://nogawa.comarch.tokyo/",
  },
  {
    no: "04",
    name: "しばさき彩ステーション",
    area: "柴崎",
    image: "/places/irodori.jpg",
    alt: "しばさき彩ステーションの外観",
    copy: "利用者とサポーターの境目なく、みんなの「やりたい」が場所を動かす、にぎやかな居場所です。",
    address: "調布市柴崎1丁目64-9",
    access: "京王線柴崎駅北口から徒歩6分",
    url: "http://irodori-station.net/",
  },
  {
    no: "05",
    name: "ふふ富士見",
    area: "富士見町",
    image: "/places/fufu.jpg",
    alt: "ふふ富士見の外観",
    copy: "いつ来てもいい、いつでも話せる。相談のハードルを低くする、穏やかにひらかれた一軒家です。",
    address: "調布市富士見町4丁目24-28",
    access: "京王線西調布駅北口から徒歩17分",
    url: "https://www.fufufujimi.org/",
  },
  {
    no: "06",
    name: "トビバコ",
    area: "飛田給",
    image: "/places/tobibako.jpg",
    alt: "トビバコで創作を楽しむ子どもたち",
    copy: "アートとものづくりを軸に、やってみたかったことを試せる、クリエイティブな実験の場です。",
    address: "調布市飛田給3丁目25-30",
    access: "西調布駅・飛田給駅より徒歩10分",
    url: "https://tobibako.minglelingo.art/",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="ひとつやねっと ホーム">
          <span className="brand-mark">ひ</span>
          <span className="brand-text">
            <span>ひとつやねっと</span>
            <small>調布・狛江居場所連絡会</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="メインナビゲーション">
          <a href="#about">私たちについて</a>
          <a href="#places">居場所を探す</a>
          <a href="#join">連絡会に参加する</a>
          <a href="/reports/">活動報告</a>
          <a className="nav-contact" href="#contact">お問い合わせ</a>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="メニューを開く"><span /><span /><span /></summary>
          <nav aria-label="モバイルナビゲーション">
            <a href="#about">私たちについて</a>
            <a href="#places">居場所を探す</a>
            <a href="#join">連絡会に参加する</a>
            <a href="/reports/">活動報告</a>
            <a href="#contact">お問い合わせ</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-orb orb-one" />
        <div className="hero-orb orb-two" />
        <div className="hero-copy">
          <p className="eyebrow">A LOCAL COMMUNITY NETWORK</p>
          <h1>
            <span className="hero-line">ひとつ屋根のもとで、</span>
            <br />
            <span className="hero-line">まちに<span className="accent">つながり</span>を</span>
          </h1>
          <p className="hero-lead">
            家でも学校や職場でもない、
            <br />
            誰もがホッと羽を休められる「地域の居場所」。
            <br />
            調布・狛江のまちで、あなたのよりみちを見つけませんか。
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#places">居場所を見つける <span>→</span></a>
            <a className="text-link" href="#about">ひとつやねっととは</a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <img src="/hero.png" alt="" />
        </div>
        <a href="#about" className="scroll-cue" aria-label="次のセクションへ">SCROLL <span>↓</span></a>
      </section>

      <section className="news section" aria-labelledby="news-heading">
        <div className="section-kicker"><span>NEWS</span><i /></div>
        <div className="news-grid">
          <div>
            <h2 id="news-heading">お知らせ</h2>
            <p>ひとつやねっとの活動や、まちの居場所に関する最新情報をお届けします。</p>
          </div>
          <div className="news-list">
            <article className="news-item">
              <img src="/yorimichi-printed.png" alt="" loading="lazy" decoding="async" />
              <div>
                <time>2026-08-01</time>
                <h3>居場所ガイド『よりみち』を発行しました。</h3>
                <p>調布・狛江エリアの6つの居場所を紹介する冊子を制作しました。</p>
              </div>
            </article>
            <article className="news-item">
              <img src="/reports/ibasho-stamp-rally/ibasho-stamp-rally-soto.png" alt="" loading="lazy" decoding="async" />
              <div>
                <time>2026-03-31</time>
                <h3><a href="/reports/ibasho-stamp-rally/">居場所スタンプラリーを実施しました</a></h3>
                <p>調布市・狛江市の6つの居場所をめぐる企画を実施しました。</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="section-kicker"><span>ABOUT US</span><i /></div>
        <div className="about-grid">
          <h2>誰もが自分らしく、<br />ゆるやかにつながれるまちへ。</h2>
          <div className="about-copy">
            <p>
              ひとつやねっとは、調布・狛江の周辺エリアで
              「地域の居場所」づくりに取り組む市民のネットワークです。
            </p>
            <p>
              たくさんのカタチの居場所が地域にあって、誰もが自分の居心地の良い場所を見つけられること。
              それが共生社会への小さくとも確かな一歩だと信じています。
            </p>
          </div>
        </div>
        <div className="values">
          <article><b>01</b><span className="value-icon">⌂</span><h3>ホッとできる</h3><p>役割や立場から離れて、ありのままでいられる時間。</p></article>
          <article><b>02</b><span className="value-icon">∞</span><h3>ゆるやかにつながる</h3><p>話しても、話さなくてもいい。ほどよい距離の関係。</p></article>
          <article><b>03</b><span className="value-icon">✦</span><h3>やってみる</h3><p>小さな「やりたい」から、まちの新しい風景が生まれます。</p></article>
        </div>
      </section>

      <section className="places section" id="places">
        <div className="section-heading">
          <div>
            <div className="section-kicker light"><span>COMMUNITY PLACES</span><i /></div>
            <h2>まちの居場所を探す</h2>
          </div>
          <p>調布・狛江の周辺で、個性豊かな6つの居場所がひらかれています。</p>
        </div>
        <div className="place-grid">
          {places.map((place) => (
            <article className="place-card" key={place.name}>
              <div className="place-image">
                <img src={place.image} alt={place.alt} loading="lazy" decoding="async" />
                <span>{place.area}</span>
              </div>
              <div className="place-content">
                <b>{place.no}</b>
                <h3>{place.name}</h3>
                <p>{place.copy}</p>
                <dl>
                  <div><dt>住所</dt><dd>{place.address}</dd></div>
                  <div><dt>アクセス</dt><dd>{place.access}</dd></div>
                </dl>
                <a href={place.url} target="_blank" rel="noreferrer">詳しく見る <span>↗</span></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="join section" id="join">
        <div className="section-kicker"><span>JOIN THE NETWORK</span><i /></div>
        <div className="join-grid">
          <div>
            <h2>連絡会に参加する</h2>
            <p className="join-lead">
              「ひとつやねっと」では、地域の居場所づくりに取り組む団体の参加を随時募集しています。
              調布・狛江に限らず、府中市、三鷹市、稲城市、小金井市、武蔵野市など、近隣市で活動する団体も参加できます。
            </p>
          </div>
          <div className="join-copy">
            <p>
              活動は、不定期の食事会を兼ねた意見交換会や、居場所の利用促進・担い手創出につながる広報企画など。
              それぞれの現場の声を持ち寄りながら、地域にある居場所の可能性を一緒に広げています。
            </p>
            <p>
              これまでに、猿田彦珈琲株式会社の協賛による「居場所スタンプラリー」の企画・実施や、
              居場所ガイドブック『よりみち』の編集・配布に取り組んできました。
            </p>
            <a className="button primary" href="#contact">参加について相談する <span>→</span></a>
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-intro">
          <div className="section-kicker"><span>CONTACT</span><i /></div>
          <h2>一緒に、まちの居場所を<br />育てませんか。</h2>
          <p>
            活動への参加、取材、連携のご相談など、お気軽にお問い合わせください。
            内容を確認のうえ、担当者よりご連絡します。
          </p>
          <div className="contact-note">
            <span>✉</span>
            <p><strong>こんなお問い合わせをお待ちしています</strong><br />見学・参加／居場所づくりの相談／取材・連携／その他</p>
          </div>
        </div>
        <form className="contact-form" action="https://formsubmit.co/tatsuya.n@gmail.com" method="POST">
          <input type="hidden" name="_cc" value="ni.cl.ohki@gmail.com" />
          <input type="hidden" name="_subject" value="【ひとつやねっと】ホームページからのお問い合わせ" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="https://hitotsuyanet.pages.dev/thanks.html" />
          <input className="honeypot" type="text" name="_honey" tabIndex={-1} autoComplete="off" />
          <div className="field-row">
            <label>お名前 <em>必須</em><input name="お名前" type="text" required autoComplete="name" placeholder="山田 花子" /></label>
            <label>メールアドレス <em>必須</em><input name="email" type="email" required autoComplete="email" placeholder="example@email.com" /></label>
          </div>
          <div className="field-row">
            <label>電話番号<input name="電話番号" type="tel" autoComplete="tel" placeholder="090-1234-5678" /></label>
            <span aria-hidden="true" />
          </div>
          <label>お問い合わせの種類
            <select name="お問い合わせの種類" defaultValue="">
              <option value="" disabled>選択してください</option>
              <option>見学・参加について</option>
              <option>居場所づくりのご相談</option>
              <option>取材・連携について</option>
              <option>その他</option>
            </select>
          </label>
          <label>お問い合わせ内容 <em>必須</em>
            <textarea name="お問い合わせ内容" required rows={7} placeholder="お問い合わせ内容をご記入ください。" />
          </label>
          <label className="privacy"><input type="checkbox" required /> <span>入力した個人情報を、お問い合わせへの回答に利用することに同意します。</span></label>
          <button className="button primary submit" type="submit">この内容で送信する <span>→</span></button>
        </form>
      </section>

      <footer>
        <div className="footer-main">
          <div>
            <a className="brand footer-brand" href="#top"><span className="brand-mark">ひ</span><span>ひとつやねっと</span></a>
            <p>調布・狛江の周辺エリアで「地域の居場所」づくりに取り組む市民のネットワークです。</p>
          </div>
          <div className="footer-nav">
            <a href="#about">私たちについて</a><a href="#places">居場所を探す</a><a href="#join">連絡会に参加する</a><a href="/reports/">活動報告</a><a href="#contact">お問い合わせ</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 ひとつやねっと</span>
          <span>CHOFU · KOMAE · COMMUNITY</span>
        </div>
      </footer>
    </main>
  );
}
