const featuredPlaces = [
  {
    name: "POSTO",
    area: "仙川",
    image: "/places/posto.jpg",
    description: "注文しなくても立ち寄れる、共有のリビングのような屋根のある広場。",
  },
  {
    name: "ふらっとなんぶ",
    area: "狛江",
    image: "/places/flat-nanbu.jpg",
    description: "赤ちゃんから高齢者まで、ありのままの自分で過ごせる地域交流拠点。",
  },
  {
    name: "野川のえんがわ こまち",
    area: "狛江",
    image: "/places/komachi.jpg",
    description: "大きな縁側でひと息つき、また自分の世界へ飛び立てるまちの止まり木。",
  },
  {
    name: "しばさき彩ステーション",
    area: "柴崎",
    image: "/places/irodori.jpg",
    description: "利用する人も支える人も一緒に「やりたい」を育てる、にぎやかな居場所。",
  },
  {
    name: "ふふ富士見",
    area: "富士見町",
    image: "/places/fufu.jpg",
    description: "いつ来ても、いつでも話せる。穏やかにひらかれた一軒家。",
  },
  {
    name: "トビバコ",
    area: "飛田給",
    image: "/places/tobibako.jpg",
    description: "アートとものづくりを軸に、やってみたいことを試せる実験の場。",
  },
];

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
          <time>2026.06.20</time>
          <h1>居場所ガイド『よりみち』を発行しました</h1>
          <p>
            調布・狛江のまちにある6つの居場所を訪ね、そこをひらく人、
            集う人、これから訪れる人へとつながる一冊をつくりました。
          </p>
          <dl className="article-meta">
            <div>
              <dt>発行</dt>
              <dd>2026年6月20日</dd>
            </div>
          </dl>
        </header>

        <figure className="article-main-image">
          <img
            src="/yorimichi-printed.png"
            alt="テーブルに広げられた居場所ガイド『よりみち』"
          />
        </figure>

        <div className="article-body">
          <section>
            <h2>「居場所」を探す人へ、最初の一歩になるガイドを</h2>
            <p>
              地域には、誰でも立ち寄れる場所がいくつもあります。
              けれど、初めて扉を開けるときには「どんな人がいるのだろう」
              「何か用事がなくても大丈夫だろうか」と、少し勇気が必要です。
            </p>
            <p>
              『よりみち』は、住所や開室時間だけを並べた案内ではありません。
              それぞれの場所が生まれた背景、ひらいている人の想い、
              そこでどんな時間が流れているのかを伝えることで、
              読む人が自分に合いそうな場所を想像できるガイドを目指しました。
            </p>
            <p>
              2019年から2023年にかけて、調布・狛江地域ではさまざまな居場所が生まれました。
              背景や運営主体はそれぞれ異なりますが、多くの人が同じ時代の課題に向き合い、
              その答えの一つとして居場所づくりが広がっていったことは、
              現代社会の一側面を表しているのかもしれません。
            </p>
            <p>
              その流れのなかで、2021年に開催された「ポストコロナの居場所づくりを考える」をきっかけに、
              こまち代表の梶川さん、しばさき彩ステーション代表の大木さん、
              調布市職員の八木さんが出会いました。その後の対話や交流を土台として、
              居場所同士のネットワーク「居場所連絡会──ひとつやねっと」が生まれました。
            </p>
            <p>
              語り合いを重ねるなかで、このネットワーク自体が一つの意思を持つようになり、
              「居場所の利用促進と担い手づくり」という共通の目的が見えてきました。
              この居場所ZINE『よりみち』は、その思いをより多くの人へ届けるために生まれました。
            </p>
            <p>
              また、この取り組みには地域の多くの方々から温かい応援をいただいています。
              なかでも猿田彦珈琲の大塚社長には快くご協力いただき、
              『居場所スタンプラリー』への景品提供から本ZINEの店内設置までご支援いただき、
              大きな励ましとなりました。また、本ZINEにご協賛くださった市内企業の皆さまにも、
              この場を借りて感謝申し上げます。
            </p>
            <p>
              この冊子が、誰かにとって新しい居場所との出会いのきっかけになればうれしく思います。
              居場所が必要な人が自然につながり、居場所をつくりたい人が一人で悩まなくてよい。
              そんなまちを目指して、これからも歩みを続けていきます。
              （プロデューサー／トビバコ 西村達也）
            </p>
          </section>

          <section id="guide-places">
            <h2>ひとつ屋根の下にある、6つの物語</h2>
            <p>
              今回掲載したのは、調布・狛江の周辺で活動する6つの居場所です。
              同じ「地域の居場所」でも、成り立ちや得意なこと、過ごし方はさまざま。
              冊子では、その違いも大切な個性として紹介しています。
            </p>
            <div className="guide-place-grid">
              {featuredPlaces.map((place) => (
                <article className="guide-place" key={place.name}>
                  <img src={place.image} alt={`${place.name}の様子`} loading="lazy" decoding="async" />
                  <div>
                    <small>{place.area}</small>
                    <h3>{place.name}</h3>
                    <p>{place.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>冊子づくりで大切にしたこと</h2>
            <dl className="article-details">
              <div>
                <dt>場所の空気を伝える</dt>
                <dd>設備や制度の説明だけでなく、そこで交わされる会話や過ごし方が浮かぶ言葉と写真を選びました。</dd>
              </div>
              <div>
                <dt>関わる人の声を届ける</dt>
                <dd>運営する人だけでなく、訪れる人や地域との関係にも目を向け、場所をつくるさまざまな想いを紹介しています。</dd>
              </div>
              <div>
                <dt>よりみちの余白を残す</dt>
                <dd>「こう過ごす場所」と決めつけず、読む人自身が自分なりの関わり方を見つけられる構成にしました。</dd>
              </div>
            </dl>
          </section>

          <section>
            <h2>つくったひと、訪れるひと、これから出会うひと</h2>
            <p>
              居場所は、建物だけではできません。誰かが場所をひらき、
              誰かが立ち寄り、ときには小さな「やってみたい」を持ち込むことで、
              少しずつその場所らしい風景が育っていきます。
            </p>
            <p>
              6つの場所に共通しているのは、役割や立場から少し離れて、
              そのままの自分でいられる時間を大切にしていること。
              話しても、話さなくてもいい。何かに参加しても、ただ眺めていてもいい。
              そんな選択肢がまちの中にあることを、この冊子を通して伝えたいと考えました。
            </p>
          </section>

          <blockquote>
            <p>
              目的地へまっすぐ向かうだけでは出会えない人や風景があります。
              『よりみち』が、まだ知らないまちの居場所へ足を向ける
              小さなきっかけになればうれしいです。
            </p>
          </blockquote>

          <section>
            <h2>気になった場所へ、ふらりと</h2>
            <p>
              冊子を読んで気になる場所が見つかったら、ぜひ無理のないタイミングで訪ねてみてください。
              開室日や利用方法は場所によって異なるため、最新情報を確認してからのお出かけがおすすめです。
            </p>
            <p className="article-links">
              <a href="/#places">6つの居場所を見る →</a>
              <a href="/#contact">ひとつやねっとへ問い合わせる →</a>
            </p>
          </section>

          <section>
            <h2>発行・制作情報</h2>
            <dl className="article-details">
              <div>
                <dt>掲載団体</dt>
                <dd>
                  <a href="https://motion-gallery.net/projects/sengawa_posto" target="_blank" rel="noreferrer">POSTO</a>、
                  <a href="https://bit.ly/flat_nanbu" target="_blank" rel="noreferrer">ふらっとなんぶ</a>、
                  <a href="https://nogawa.comarch.tokyo/" target="_blank" rel="noreferrer">野川のえんがわ こまち</a>、
                  <a href="http://irodori-station.net/" target="_blank" rel="noreferrer">しばさき彩ステーション</a>、
                  <a href="https://www.fufufujimi.org/" target="_blank" rel="noreferrer">ふふ富士見</a>、
                  <a href="https://tobibako.minglelingo.art/" target="_blank" rel="noreferrer">トビバコ</a>
                </dd>
              </div>
              <div>
                <dt>発行者</dt>
                <dd>ひとつやねっと</dd>
              </div>
              <div>
                <dt>プロデューサー</dt>
                <dd>
                  西村達也（
                  <a href="https://tobibako.minglelingo.art/" target="_blank" rel="noreferrer">トビバコ</a>
                  管理人・
                  <a href="https://minglelingo.art/" target="_blank" rel="noreferrer">みんぐるりんご</a>
                  代表）
                </dd>
              </div>
              <div>
                <dt>取材・撮影</dt>
                <dd>
                  <a href="https://ap-lab.net/" target="_blank" rel="noreferrer">
                    共立女子大学 建築デザイン学部建築デザイン学科 建築計画研究室
                  </a>
                </dd>
              </div>
              <div>
                <dt>編集・デザイン</dt>
                <dd>
                  太田風美（
                  <a href="https://tobibako.minglelingo.art/" target="_blank" rel="noreferrer">トビバコ</a>
                  アトリエ会員／広報担当・
                  <a href="https://pebbles.green/" target="_blank" rel="noreferrer">Green Mind Labo Pebbles</a>
                  代表）
                </dd>
              </div>
              <div>
                <dt>後援</dt>
                <dd>
                  <a href="https://sarutahiko.jp/" target="_blank" rel="noreferrer">猿田彦珈琲株式会社</a>
                </dd>
              </div>
              <div>
                <dt>協賛</dt>
                <dd>アフラック生命保険株式会社、NPO法人あんしんシニアサポート、株式会社Salud、株式会社ピークス</dd>
              </div>
              <div>
                <dt>発行日</dt>
                <dd>2026年6月20日</dd>
              </div>
            </dl>
          </section>

          <section>
            <h2>冊子を配布している場所</h2>
            <p>冊子は以下の場所でもらえます。</p>
            <ul className="distribution-list">
              <li>
                掲載されている
                <a href="#guide-places">6つの場所</a>
              </li>
              <li>ほかは設置され次第、随時更新します。</li>
            </ul>
          </section>

          <section className="download-panel">
            <div>
              <h2>居場所ガイド『よりみち』PDF</h2>
              <p>冊子をPDFでご覧いただけます。保存・共有してご利用ください。</p>
            </div>
            <a
              className="button primary"
              href="/reports/yorimichi-guide/hitotsuyanet-yorimichi-guide-2026.pdf"
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
