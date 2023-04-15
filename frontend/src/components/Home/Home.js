import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class home extends Component {
  render() {
    return (
      <div id="top" className="">
        {/* キービジュアル ///////////////////////////////////////// */}
        <div className="keyvisual flex">             
          {/* ロゴ */}
          <div className="logo">
            <img src="./assets/common/imgs/logo.svg" alt="IA" className="ia_logo" style={{width: '100%'}} />
            <div className="blinking"><img src="./assets/common/imgs/arrow_down.svg" alt="arrow" /></div>
          </div>               
          画像
          <div className="slide">
            <div className="swiper-container">                
              <div className="swiper-wrapper">                       
                <div className="swiper-slide">                               
                  <picture>
                    <source media="(min-width: 480px)" srcSet="./assets/common/imgs/名称未設定-3.png" />
                    <img src="./assets/common/imgs/mob_main_202010_-1.jpg" className="slide-img" />
                  </picture>
                </div>
              </div>                   
              {/* ページネーションを表示する場合 */}
              <div className="swiper-pagination" />                    
            </div>
          </div>               
        </div>	
        {/* VIDEO ///////////////////////////////////////// */}
        <div id="videoTop" className="video">       
          <div className="img sticky"><img src="./assets/common/imgs/top_live.jpg" alt="" /></div>
          <div className="list">           
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
              <div>VIDEOS</div>
              <div className="link">
                <img src="./assets/common/imgs/youtube.png" alt="youtube" className="youtubelogo" /><br />
                <a href="#" target>1st PLACE OFFICIAL</a>
                <a href="#" target>IA &amp; ONE OFFICIAL</a>
              </div>
            </h1>
            <ul className="flex imgHover">                       
              <li data-aos="zoom-out" data-aos-delay={0} className="aos-init">
                <img src="./assets/common/imgs/video_1.png" alt="サムネイル" />
                <div className="mask">
                  <div className="caption">
                    <p>【TRAILER】2022.1.19 ON SALE! IA SUPER BEST -THE ARTIST-</p>
                    <Link to="./productDetail">WATCH</Link>
                  </div>
                </div>
              </li>                    
              <li data-aos="zoom-out" data-aos-delay={200} className="aos-init">
                <img src="./assets/common/imgs/video_2.png" alt="サムネイル" />
                <div className="mask">
                  <div className="caption">
                    <p>【TRAILER】2022.1.19 ON SALE! IA SUPER BEST -THE CREATORS-</p>
                    <a href="#">WATCH</a>
                  </div>
                </div>
              </li>                   
              <li data-aos="zoom-out" data-aos-delay={400} className="aos-init">
                <img src="./assets/common/imgs/video_3.jpg" alt="サムネイル" />
                <div className="mask">
                  <div className="caption">
                    <p>pray for real feat.MINMI 【MUSIC VIDEO】</p>
                    <a href="#">WATCH</a>
                  </div>
                </div>
              </li>                    
              <li data-aos="zoom-out" data-aos-delay={600} className="aos-init">
                <img src="./assets/common/imgs/video_4.png" alt="サムネイル" />
                <div className="mask">
                  <div className="caption">
                    <p>Conqueror-DANTZ Remix【MUSIC VIDEO】</p>
                    <a href="#">WATCH</a>
                  </div>
                </div>
              </li>                        
            </ul>                   
            {/* more */}
            <div className="more clearfix">
              <a href="#" className="btmHover"><span>MORE VIDEOS</span></a>
            </div>
          </div>                
        </div>		
        {/* NEWS ///////////////////////////////////////// */}
        <div className="news">
          <div className="articleList">
            <h1 className="title enFont">
              {/*Light is so beautiful*/}
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
              <div>NEWS</div>
            </h1>
            {/*  最新ニュース ------------------ */}
            <div className="topnews clearfix">        
              <a href="#">
                <div className="newstop imgfit">
                  <img src="./assets/common/imgs/キャンペーン実施中バナー_元素材-scaled.jpg" alt="" />
                </div>
              </a>
              <div className="txt">
                {/* 日付 */}
                <div className="day">22.SEP.2022</div>
                {/*  記事タイトル */}
                <div className="wp_title">
                  {/* カテゴリー */}
                  <div className="cat">
                    <ul className="post-categories">
                      <li><a href rel="category tag">GOODS</a></li>
                    </ul>
                  </div>
                  <a href="#">【グッズ/キャンペーンINFO】10/6(木)23:59まで、1st PLACE Official Shop -HACHIMAKI-でIA / OИE / HIPPI 新作グッズ発売記念キャンペーンスタート！</a>
                </div>
              </div>{/* txt */}
            </div>
            {/* 本文 ---------------------------- */}
            <div className="ichiran flex commonPadding">       
              <ul className="thumbList flex">                      
                <li className="thumb aos-init" data-aos="zoom-out" data-aos-delay={0}>
                  {/* 日付 */}
                  <div className="day">16.SEP.2022</div>
                  {/* 画像 */}
                  <a href="#">
                    <div className="imgfit">
                      <img src="./assets/common/imgs/キャンペーン実施中バナー_元素材-scaled.jpg" alt="" />
                    </div>
                  </a>
                  {/* カテゴリー */}
                  <div className="cat">
                    <ul className="post-categories">
                      <li><a href="#" rel="category tag">EVENT</a></li>
                      <li><a href="#" rel="category tag">GOODS</a></li>
                    </ul>
                  </div>
                  {/* 記事タイトル */}
                  <a href="#">
                    <h1>【グッズ / キャンペーン INFO】9/22(木)18:00~ 1st PLACE Official Shop -HACHIMAKI-でIA / OИE / HIPPI 新作グッズ発売記念キャンペーン実施決定！</h1>
                  </a>
                </li>
                <li className="thumb aos-init" data-aos="zoom-out" data-aos-delay={200}>
                  {/* 日付 */}
                  <div className="day">15.SEP.2022</div>
                  {/* 画像 */}
                  <a href="#">
                    <div className="imgfit">
                      <img src="./assets/common/imgs/new_1.jpg" alt="" />
                    </div>
                  </a>
                  {/* カテゴリー */}
                  <div className="cat">
                    <ul className="post-categories">
                      <li><a href="#" rel="category tag">SOFTWARE</a></li>
                    </ul>
                  </div>
                  {/* 記事タイトル */}
                  <a href="#">
                    <h1>【ソフトセールINFO】本日9/15(木)～29(木)期間 IA / OИE 最新CeVIO AIシリーズが20%OFF!! ベクターPCショップ上半期ランキングセール開催!!</h1>
                  </a>
                </li>
                <li className="thumb aos-init" data-aos="zoom-out" data-aos-delay={400}>
                  {/* 日付 */}
                  <div className="day">09.SEP.2022</div>
                  {/* 画像 */}
                  <a href="#">
                    <div className="imgfit">
                      <img src="./assets/common/imgs/new_2.png" alt="" />
                    </div>
                  </a>
                  {/* カテゴリー */}
                  <div className="cat">
                    <ul className="post-categories">
                      <li><a href="#" rel="category tag">EVENT</a></li>
                      <li><a href="#" rel="category tag">LIVE</a></li>
                    </ul>
                  </div>
                  {/* 記事タイトル */}
                  <a href="#">
                    <h1>【チケット情報】バーチャルミュージックフェス「CeVIO PARTY」の視聴チケットが本日発売スタート！</h1>
                  </a>
                </li>
                <li className="thumb aos-init" data-aos="zoom-out" data-aos-delay={600}>
                  {/* 日付 */}
                  <div className="day">02.SEP.2022</div>
                  {/* 画像 */}
                  <a href="#">
                    <div className="imgfit">
                      <img src="./assets/common/imgs/new_3.jpg" alt="" />
                    </div>
                  </a>
                  {/* カテゴリー */}
                  <div className="cat">
                    <ul className="post-categories">
                      <li><a href rel="category tag">EVENT</a></li>
                    </ul>
                  </div>
                  {/* 記事タイトル */}
                  <a href="#">
                    <h1>IA 10th PROJECT ファンアートコンテスト受賞結果発表!!</h1>
                  </a>
                </li>
              </ul>
            </div>{/* ichiran */}
            {/* more */}
            <div className="more clearfix">
              <a href="#" className="btmHover">
                <span>MORE NEWS</span>
              </a>
            </div>            
          </div>
        </div>		
        {/* ARIA ///////////////////////////////////////// */}
        <div className="ariaBox">           
          <a href="#" target className="sticky">
            <img src="./assets/common/imgs/aria.jpg" alt="ARIA –IA MUSICAL & LIVE SHOW–" />
          </a>               
          {/* MUSIC ///////////////////////////////////////// */}
          <div className="music">
            <div className="musiclist">
              <h1 className="title enFont">
                {/*Light is so beautiful*/}
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
                <div>MUSIC</div>
              </h1>
              {/* 一覧表示 ---------------------------- */}
              <div className="item">
                <ul className="flex commonPadding imgHover">
                  <li data-aos="zoom-out" data-aos-delay={0} className="aos-init">
                    <img src="./assets/common/imgs/music_1.jpg" alt="ジャケット画像" />
                    <div className="mask">
                      <div className="caption">
                        <p>IA SUPER BEST ［初回盤］</p>
                        <a href="#">INFO</a>
                      </div>
                    </div>
                  </li>
                  <li data-aos="zoom-out" data-aos-delay={200} className="aos-init">
                    <img src="./assets/common/imgs/music_2.png" alt="ジャケット画像" />
                    <div className="mask">
                      <div className="caption">
                        <p>IA SUPER BEST -THE ARTIST-</p>
                        <a href="#">INFO</a>
                      </div>
                    </div>
                  </li>
                  <li data-aos="zoom-out" data-aos-delay={400} className="aos-init">
                    <img src="./assets/common/imgs/music_3.png" alt="ジャケット画像" />
                    <div className="mask">
                      <div className="caption">
                        <p>IA SUPER BEST -THE CREATORS-</p>
                        <a href="#">INFO</a>
                      </div>
                    </div>
                  </li>
                  <li data-aos="zoom-out" data-aos-delay={600} className="aos-init">
                    <img src="./assets/common/imgs/music_4.jpg" alt="ジャケット画像" />
                    <div className="mask">
                      <div className="caption">
                        <p>pray for real</p>
                        <a href="#">INFO</a>
                      </div>
                    </div>
                  </li>
                  <li data-aos="zoom-out" data-aos-delay={800} className="aos-init">
                    <img src="./assets/common/imgs/music_5.jpg" alt="ジャケット画像" />
                    <div className="mask">
                      <div className="caption">
                        <p>ARIA –IA MUSICAL &amp; LIVE SHOW–</p>
                        <a href="#">INFO</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>{/* item */}
              {/* more */}
              <div className="more clearfix"><a href="#" className="btmHover"><span>MORE MUSIC</span></a></div>
            </div>
          </div>               
        </div>{/* aria */}       
        {/* SHOP ///////////////////////////////////////// */}
        <div className="shop">               
          <h1 className="title enFont">
            {/*Light is so beautiful*/}
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
            <div>SHOP</div>
          </h1>
          <div className="commonPadding">
            <div className="item">
              <ul className="imgHover">
                <li data-aos="zoom-out" data-aos-delay={200} className="aos-init">
                  <img src="./assets/common/imgs/product_test.jpg" alt="2021 LOGO TEE" />
                  <div className="mask">
                    <div className="caption">
                      <p>2021 LOGO TEE</p>
                      <a href="./Detail.html" target>INFO</a>
                    </div>
                  </div>
                </li>
                <li data-aos="zoom-out" data-aos-delay={400} className="aos-init">
                  <img src="./assets/common/imgs/shop.jpeg" alt="2021 LOGO デイパック" />
                  <div className="mask">
                    <div className="caption">
                      <p>2021 LOGO デイパック</p>
                      <a href="#" target>INFO</a>
                    </div>
                  </div>
                </li>
                <li data-aos="zoom-out" data-aos-delay={200} className="aos-init">
                  <img src="./assets/common/imgs/product_test.jpg" alt="2021 LOGO スポーツタオル" />
                  <div className="mask">
                    <div className="caption">
                      <p>2021 LOGO スポーツタオル</p>
                      <a href="#" target>INFO</a>
                    </div>
                  </div>
                </li>
                <li data-aos="zoom-out" data-aos-delay={400} className="aos-init">
                  <img src="./assets/common/imgs/shop.jpeg" alt="ARIA SPECIAL SHOWCASE A4クリアファイル" />
                  <div className="mask">
                    <div className="caption">
                      <p>ARIA SPECIAL SHOWCASE A4クリアファイル</p>
                      <a href="#" target>INFO</a>
                    </div>
                  </div>
                </li>
                <li data-aos="zoom-out" data-aos-delay={200} className="aos-init">
                  <img src="./assets/common/imgs/product_test.jpg" alt="IA & OИE Sports クリアファイル" />
                  <div className="mask">
                    <div className="caption">
                      <p>IA &amp; OИE Sports クリアファイル</p>
                      <a href="#" target>INFO</a>
                    </div>
                  </div>
                </li>
                <li data-aos="zoom-out" data-aos-delay={400} className="aos-init">
                  <img src="./assets/common/imgs/shop.jpeg" alt="IA Sports BIGアクリルスタンド" />
                  <div className="mask">
                    <div className="caption">
                      <p>IA Sports BIGアクリルスタンド</p>
                      <a href="#" target>INFO</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* shop */}
          <div className="shopLink">
            <div className="btm">
              <a href="#" target>
                <img src="./assets/common/imgs/shop_hachimaki.png" alt="HACHIMAKI" />
              </a>
              <small>国内販売サイト</small>
            </div>
            <div className="btm">
              <a href="#" target>
                <img src="./assets/common/imgs/shop_otaku.png" alt="OTAKU MODE" />
              </a>
              <small>海外販売サイト</small>
            </div> 
          </div>      
          {/* more */}
          <div className="more clearfix">
            <a href="/category" target className="btmHover"><span>MORE PRODUCTS</span></a>
          </div>       
        </div>	
      </div>
    )
  }
}

export default home