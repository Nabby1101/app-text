import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import ContentClothes from './ContentClothes';
import ContentAccessory from './ContentAccessory';

import { getCategories } from '../../redux/actions/categoryActions';
import { getPosts } from '../../redux/actions/postActions';
import { getProducts } from '../../redux/actions/productActions';
import { getTopics } from '../../redux/actions/topicActions';
import { getImages } from '../../redux/actions/imageActions';

import {
  getRole,
  getUserFacebook,
  getUserGoogle,
} from '../../redux/actions/userActions';
import ContentNews from './ContentNews';
import ContentProducts from './ContentProducts';

const Home = () => {
  const dispatch = useDispatch();
  const lstCate = useSelector((state) => state.category.categories);
  const lstPro = useSelector((state) => state.product.products_list);
  const listTopic = useSelector((state) => state.topic.topics);
  const listPost = useSelector((state) => state.post.posts_list);

  const id =
    localStorage.getItem('userInfo') !== null
      ? JSON.parse(localStorage.getItem('userInfo'))._id
      : null;

  const authGoogle = localStorage.getItem('authGoogle')
    ? JSON.parse(localStorage.getItem('authGoogle')).isGoogle
    : false;

  const authFacebook = localStorage.getItem('authFacebook')
    ? JSON.parse(localStorage.getItem('authFacebook')).isFacebook
    : false;

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
    dispatch(getPosts());
    dispatch(getTopics());
    dispatch(getImages());

    if (!window.location.hash) {
      window.location = window.location + '#trang-chu';
      window.location.reload();
    }

    if (id) dispatch(getRole(id));

    if (authGoogle === true) {
      dispatch(getUserGoogle());
    }

    if (authFacebook === true) {
      dispatch(getUserFacebook());
    }
  }, [id, dispatch, authGoogle, authFacebook]);

  return (
    <div id="top" className="">
      {/* キービジュアル ///////////////////////////////////////// */}
      <div className="keyvisual flex">
        {/* ロゴ */}
        <div className="logo">
          <img src="./assets/common/imgs/logo.svg" alt="IA" className="ia_logo" style={{ width: '100%' }} />
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
      {/* VIDEO/ CLOTHES ///////////////////////////////////////// */}
      <ContentClothes
        listClothes={lstCate.Categories}
        listProClothes={lstPro.Products}
      />
      {/* ARIA ///////////////////MUSIC/ ACCESSORY ///////////////////// */}
      <ContentAccessory
        listAccessory={lstCate.Categories}
        listProAccessory={lstPro.Products}
      />
      {/* NEWS ///////////////////////////////////////// */}
      <ContentNews
        listNews={listTopic.Topics}
        listProNews={listPost.Posts}
      />
      {/* SHOP ///////////////////////////////////////// */}
      <ContentProducts
        listProducts={lstCate.Categories}
        listProProducts={lstPro.Products}
      />
    </div>
  )
}


export default Home