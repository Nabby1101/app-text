import React, { Component } from 'react'

export class News extends Component {
  render() {
    return (
        <div id="news" className="second" style={{ paddingTop: '60px' }}>
        <div className="articleList">
          <h1 className="title enFont">
            <div className="bar">
              <div className="cut" />
              <div className="cut" />
              <div className="cut" />
              <div className="cut" />
              <div className="cut" />
              <div className="cut" />
              <div className="cut" />
              <div className="cut" />
              <div className="cut" />
              <div className="cut" />
              <div className="cut" />
              <div className="cut" />
              <div className="cut" />
              <div className="cut" />
              <div className="cut" />
              <div className="cut" />
              <div className="cut" />
              <div className="cut" />
              <div className="cut" />
              <div className="cut" />
              <div className="cut" />
              <div className="cut" />
              <div className="cut" />
              <div className="cut" />
              <div className="cut" />
              <div className="cut" />
              <div className="cut" />
              <div className="cut" />
              <div className="cut" />
              <div className="cut" />
              <div className="cut" />
            </div>
            <div>Tin Tức</div>
          </h1>                
          {/* 記事読み込み ---------------------------- */}                          
          {/*  最新ニュース ------------------ */}
          <div className="topnews clearfix">
            <a href="#">
              <div className="newstop imgfit">
                <img src="./assets/common/imgs/キャンペーン実施中バナー_元素材-scaled.jpg" alt="" />
              </div>
            </a>
            <div className="txt">
              {/* 日付 */}
              <div className="day">04.NOV.2022</div>
              {/*  記事タイトル */}
              <div className="wp_title">
                {/* カテゴリー */}
                <div className="cat">
                  <ul>
                    <ul className="post-categories">
                      <li><a href="#" rel="category tag">EVENT</a></li>
                      <li><a href="#" rel="category tag">LIVE</a></li>
                      <li><a href="#" rel="category tag">NEWS</a></li>
                    </ul>
                  </ul>
                </div>
                <a href="#">「IA」10周年記念ライブ&amp;年越しカウントダウンのゲスト発表第二弾！ ATOLS／Orangestar／OИE／ナノ(NANO)／HIPPI／結月ゆかり</a>
              </div>
            </div>{/* txt */}
          </div>                 
          {/*  メインコンテンツ */}
          <div className="ichiran flex commonPadding">
            {/* 左側カラム（アーカイブ） ------------- */}
            <div className="navColumn">
              <form id="searchBox" action="#" method="get" className="flex">
                <input id="s-box" name="s" type="text" placeholder="Bạn muốn tìm gì?" />
                <button className="btmHover enFont" type="submit"><span>Tìm Kiếm</span></button>
              </form>
              <ul className="beforeLine">
                <li><a href="https://ia-aria.com/news/">Mới</a></li>
                <li><a href="https://ia-aria.com/category/goods/">Nổi Bật</a></li>
                <li><a href="https://ia-aria.com/category/event/">Sự Kiện</a></li>
              </ul>
            </div>       
            {/* 本文 ---------------------------- */}                  
            <div className="main">
              <div className="list container">
                <ul className="thumbList flex post">                
                  <li className="thumb">
                    {/* 日付 */}
                    <div className="day">31.OCT.2022</div>        
                    {/* 画像 */}
                    <a href="#">
                      <div className="imgfit">
                        <img src="./assets/common/imgs/new_1.jpg" alt="【GOODS情報】11/2(火)～11/15(火)期間 西武池袋本店で行われる「IA 10th ANNIVERSARY ART WEEK IN IKESEI」で販売される、新作グッズ情報を公開!!" />
                      </div>
                    </a>                           
                    {/* カテゴリー */}
                    <div className="cat">
                      <ul>
                        <ul className="post-categories">
                          <li><a href="#" rel="category tag">Sự Kiện</a></li>
                          <li><a href="#" rel="category tag">Nổi Bật</a></li>
                        </ul>
                      </ul>
                    </div>      
                    {/* 記事タイトル */}
                    <a href="#">
                      <h1>【GOODS情報】11/2(火)～11/15(火)期間 西武池袋本店で行われる「IA 10th ANNIVERSARY ART WEEK IN IKESEI」で販売される、新作グッズ情報を公開!!</h1>
                    </a>
                  </li>
                  <li className="thumb">
                    {/* 日付 */}
                    <div className="day">27.OCT.2022</div>       
                    {/* 画像 */}
                    <a href="#">
                      <div className="imgfit">
                        <img src="./assets/common/imgs/new_2.png" alt="【ソフトセールINFO】10/27(木)~11/10(木)期間 アニメイトゲームスでIA / OИE 最新CeVIO AIシリーズが20%OFF! さらに10% OFFクーポン適用で、通常価格より28%OFF!!" />
                      </div>
                    </a>                            
                    {/* カテゴリー */}
                    <div className="cat">
                      <ul>
                        <ul className="post-categories">
                          <li><a href="#" rel="category tag">SOFTWARE</a></li>
                        </ul>
                      </ul>
                    </div>
                    {/* 記事タイトル */}
                    <a href="#">
                      <h1>【ソフトセールINFO】10/27(木)~11/10(木)期間 アニメイトゲームスでIA / OИE 最新CeVIO AIシリーズが20%OFF! さらに10% OFFクーポン適用で、通常価格より28%OFF!!</h1>
                    </a>
                  </li>
                  <li className="thumb">
                    {/* 日付 */}
                    <div className="day">26.OCT.2022</div>       
                    {/* 画像 */}
                    <a href="#">
                      <div className="imgfit">
                        <img src="./assets/common/imgs/new_3.jpg" alt="バーチャルアーティストIAと西武池袋本店のスペシャルコラボでIA初のアート展が11月2日よりスタート。志賀匠監督のMV先行公開！10人のアーティストによるIAのアート作品展示や空中庭園でのコラボメニュー、投影上映会も。" />
                      </div>
                    </a>                           
                    {/* カテゴリー */}
                    <div className="cat">
                      <ul>
                        <ul className="post-categories">
                          <li><a href="#" rel="category tag">EVENT</a></li>
                          <li><a href="#" rel="category tag">NEWS</a></li>
                        </ul>
                      </ul>
                    </div>       
                    {/* 記事タイトル */}
                    <a href="#">
                      <h1>バーチャルアーティストIAと西武池袋本店のスペシャルコラボでIA初のアート展が11月2日よりスタート。志賀匠監督のMV先行公開！10人のアーティストによるIAのアート作品展示や空中庭園でのコラボメニュー、投影上映会も。</h1>
                    </a>
                  </li> 
                </ul>
                <ul className="thumbList flex post">                
                  <li className="thumb">
                    {/* 日付 */}
                    <div className="day">31.OCT.2022</div>        
                    {/* 画像 */}
                    <a href="#">
                      <div className="imgfit">
                        <img src="./assets/common/imgs/new_1.jpg" alt="【GOODS情報】11/2(火)～11/15(火)期間 西武池袋本店で行われる「IA 10th ANNIVERSARY ART WEEK IN IKESEI」で販売される、新作グッズ情報を公開!!" />
                      </div>
                    </a>                           
                    {/* カテゴリー */}
                    <div className="cat">
                      <ul>
                        <ul className="post-categories">
                          <li><a href="#" rel="category tag">EVENT</a></li>
                          <li><a href="#" rel="category tag">GOODS</a></li>
                        </ul>
                      </ul>
                    </div>      
                    {/* 記事タイトル */}
                    <a href="#">
                      <h1>【GOODS情報】11/2(火)～11/15(火)期間 西武池袋本店で行われる「IA 10th ANNIVERSARY ART WEEK IN IKESEI」で販売される、新作グッズ情報を公開!!</h1>
                    </a>
                  </li>
                  <li className="thumb">
                    {/* 日付 */}
                    <div className="day">27.OCT.2022</div>       
                    {/* 画像 */}
                    <a href="#">
                      <div className="imgfit">
                        <img src="./assets/common/imgs/new_2.png" alt="【ソフトセールINFO】10/27(木)~11/10(木)期間 アニメイトゲームスでIA / OИE 最新CeVIO AIシリーズが20%OFF! さらに10% OFFクーポン適用で、通常価格より28%OFF!!" />
                      </div>
                    </a>                            
                    {/* カテゴリー */}
                    <div className="cat">
                      <ul>
                        <ul className="post-categories">
                          <li><a href="#" rel="category tag">SOFTWARE</a></li>
                        </ul>
                      </ul>
                    </div>
                    {/* 記事タイトル */}
                    <a href="#">
                      <h1>【ソフトセールINFO】10/27(木)~11/10(木)期間 アニメイトゲームスでIA / OИE 最新CeVIO AIシリーズが20%OFF! さらに10% OFFクーポン適用で、通常価格より28%OFF!!</h1>
                    </a>
                  </li>
                  <li className="thumb">
                    {/* 日付 */}
                    <div className="day">26.OCT.2022</div>       
                    {/* 画像 */}
                    <a href="#">
                      <div className="imgfit">
                        <img src="./assets/common/imgs/new_3.jpg" alt="バーチャルアーティストIAと西武池袋本店のスペシャルコラボでIA初のアート展が11月2日よりスタート。志賀匠監督のMV先行公開！10人のアーティストによるIAのアート作品展示や空中庭園でのコラボメニュー、投影上映会も。" />
                      </div>
                    </a>                           
                    {/* カテゴリー */}
                    <div className="cat">
                      <ul>
                        <ul className="post-categories">
                          <li><a href="#" rel="category tag">EVENT</a></li>
                          <li><a href="#" rel="category tag">NEWS</a></li>
                        </ul>
                      </ul>
                    </div>       
                    {/* 記事タイトル */}
                    <a href="#">
                      <h1>バーチャルアーティストIAと西武池袋本店のスペシャルコラボでIA初のアート展が11月2日よりスタート。志賀匠監督のMV先行公開！10人のアーティストによるIAのアート作品展示や空中庭園でのコラボメニュー、投影上映会も。</h1>
                    </a>
                  </li> 
                </ul>
                <ul className="thumbList flex post">                
                  <li className="thumb">
                    {/* 日付 */}
                    <div className="day">31.OCT.2022</div>        
                    {/* 画像 */}
                    <a href="#">
                      <div className="imgfit">
                        <img src="./assets/common/imgs/new_1.jpg" alt="【GOODS情報】11/2(火)～11/15(火)期間 西武池袋本店で行われる「IA 10th ANNIVERSARY ART WEEK IN IKESEI」で販売される、新作グッズ情報を公開!!" />
                      </div>
                    </a>                           
                    {/* カテゴリー */}
                    <div className="cat">
                      <ul>
                        <ul className="post-categories">
                          <li><a href="#" rel="category tag">EVENT</a></li>
                          <li><a href="#" rel="category tag">GOODS</a></li>
                        </ul>
                      </ul>
                    </div>      
                    {/* 記事タイトル */}
                    <a href="#">
                      <h1>【GOODS情報】11/2(火)～11/15(火)期間 西武池袋本店で行われる「IA 10th ANNIVERSARY ART WEEK IN IKESEI」で販売される、新作グッズ情報を公開!!</h1>
                    </a>
                  </li>
                  <li className="thumb">
                    {/* 日付 */}
                    <div className="day">27.OCT.2022</div>       
                    {/* 画像 */}
                    <a href="#">
                      <div className="imgfit">
                        <img src="./assets/common/imgs/new_2.png" alt="【ソフトセールINFO】10/27(木)~11/10(木)期間 アニメイトゲームスでIA / OИE 最新CeVIO AIシリーズが20%OFF! さらに10% OFFクーポン適用で、通常価格より28%OFF!!" />
                      </div>
                    </a>                            
                    {/* カテゴリー */}
                    <div className="cat">
                      <ul>
                        <ul className="post-categories">
                          <li><a href="#" rel="category tag">SOFTWARE</a></li>
                        </ul>
                      </ul>
                    </div>
                    {/* 記事タイトル */}
                    <a href="#">
                      <h1>【ソフトセールINFO】10/27(木)~11/10(木)期間 アニメイトゲームスでIA / OИE 最新CeVIO AIシリーズが20%OFF! さらに10% OFFクーポン適用で、通常価格より28%OFF!!</h1>
                    </a>
                  </li>
                  <li className="thumb">
                    {/* 日付 */}
                    <div className="day">26.OCT.2022</div>       
                    {/* 画像 */}
                    <a href="#">
                      <div className="imgfit">
                        <img src="./assets/common/imgs/new_3.jpg" alt="バーチャルアーティストIAと西武池袋本店のスペシャルコラボでIA初のアート展が11月2日よりスタート。志賀匠監督のMV先行公開！10人のアーティストによるIAのアート作品展示や空中庭園でのコラボメニュー、投影上映会も。" />
                      </div>
                    </a>                           
                    {/* カテゴリー */}
                    <div className="cat">
                      <ul>
                        <ul className="post-categories">
                          <li><a href="#" rel="category tag">EVENT</a></li>
                          <li><a href="#" rel="category tag">NEWS</a></li>
                        </ul>
                      </ul>
                    </div>       
                    {/* 記事タイトル */}
                    <a href="#">
                      <h1>バーチャルアーティストIAと西武池袋本店のスペシャルコラボでIA初のアート展が11月2日よりスタート。志賀匠監督のMV先行公開！10人のアーティストによるIAのアート作品展示や空中庭園でのコラボメニュー、投影上映会も。</h1>
                    </a>
                  </li> 
                </ul>
              </div>                                      
            </div>           
          </div>{/* ichiran */}          
          <span className="next_posts_link" style={{display: 'none'}}>                       
            <a href="page/2" />               
          </span>           
          {/* ローディング */}
          <div className="page-load-status">
            <div className="infinite-scroll-request"><img src="./assets/common/imgs/loading.gif" alt="" /></div>
          </div>
          {/* さらに読み込み */}
          <div className="more clearfix">
            <a className="btmHover view-more-button"><span>MORE NEWS</span></a>
          </div>            
        </div>
      </div>
    )
  }
}

export default News