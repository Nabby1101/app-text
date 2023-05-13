import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getCategories } from '../../redux/actions/categoryActions';
import { getProducts, getSearch } from '../../redux/actions/productActions';
import { getUser } from '../../redux/actions/userActions';
import { connect } from 'react-redux';

const Header = (props) => {
  const dispatch = useDispatch();
  let history = useHistory();
  const lstCate = useSelector((state) => state.category.categories);
  const lstPro = useSelector((state) => state.product.products_list);
  const numberCart = useSelector((state) => state.cart.numberCart);
  const proCart = useSelector((state) => state.cart.carts);
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const userId = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))._id
    : '';
  const user = useSelector((state) => state.user.user);

  const image = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo')).avatar || ''
    : '';

  // useEffect(() => {
  //   console.log('header', props.user)
  // }, [props.user])

  var total = 0;

  const ToTalPro = (price, quantity) => {
    total += price * quantity;
  };

  const checkImage = (key) => {
    let Arr = [];
    proCart.forEach((value) => {
      const imageArr = value.image.split(',');
      Arr.push(imageArr[0]);
    });
    return Arr[key];
  };

  const formatVND = (value) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(value);
  };

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
    if (userId !== '') {
      dispatch(getUser(userId));
    }
  }, [dispatch, userId]);
  return (
    <header className="global" style={{ left: '0px' }}>
      {/* ナビ：スマホ用メニューONOFF */}
      <div className="hamburger">
        <a>
          <span className="top" />
          {/* <span class="center"></span> */}
          <span className="bottom" />
        </a>
      </div>
      <h1><a href="/"><img src="./assets/common/imgs/logo.svg" alt="IA" /></a></h1>
      {/* グローバルナビ ///////////////////////////////////////////// */}
      <nav className="global">
        <div className="wrap">
          {/* ナビ */}
          <ul className="nav">
            {/**/}
            <li><Link to="/" target>Trang Chủ</Link></li>
            {/**/}
            <li><Link to="/category" target>Sản Phẩm</Link></li>
            {/**/}
            <li><Link to="/gio-hang" target>Giỏ Hàng</Link></li>
            {/**/}
            <li><Link to="/news" target>Tin Tức</Link></li>
            {/**/}
            {/* {props.user && props.user && props.user.isAdmin &&
              <li><Link to="/admin" target>Admin</Link></li>
            } */}
            {/**/}
            <li>{localStorage.getItem('userInfo') ? (
              <Link
                to="/profile"
                className=''
                target
              >
                Trang Cá Nhân
              </Link>
            ) : (
              <Link to="/login" className='' target>Đăng Nhập</Link>
            )}
            </li>
            <li>{JSON.parse(localStorage.getItem('userInfo')) !== null ? (
              <Link
                to="/logout"
                className=''
                target
              >
                Đăng Xuất
              </Link>
            ) : null}
            </li>
          </ul>
          {/* SNSアイコン */}
          <div className="sns">
            <a href="#" target><img src="./assets/common/imgs/top_ytb.png" alt="youtube" /></a>
            <a href="#" target><img src="./assets/common/imgs/top_line.png" alt="LINE" /></a>
            <a href="#" target><img src="./assets/common/imgs/top_tw.png" alt="Twitter" /></a>
            <a href="#" target><img src="./assets/common/imgs/top_fb.png" alt="facebook" /></a>
            <a href="#" target><img src="./assets/common/imgs/top_inst.png" alt="instagram" /></a>
            <a href="/danh-muc-ua-thich" target><i  className='icon_heart_alt' alt="Favorites" /></a>
            {/* <a href="#" target><img src="./assets/common/imgs/top_cart.png" alt="HistoryOrder" /></a> */}
          </div>
          {/* コンタクト */}
          <div className='mail' style={{marginBottom: '3px'}}>
            <Link to='/lich-su-mua-hang' target><img src='./assets/common/imgs/top_cart.png' alt='history_order' /></Link>
          </div>
          <div className="mail">
            <Link to="/contact" target><img src="./assets/common/imgs/contact.svg" alt="contact" /></Link>
          </div>
          {/* 言語 */}
          <div className="lang">
            <div className="btm">
              <img src="./assets/common/imgs/language.svg" alt="language" />
            </div>
            <ul className="select">
              <li data-val="ja|en">English</li>
              <li data-val="ja|es">Spanish</li>
              <li data-val="ja|zh-CN">Chinese (Simplified)</li>
              <li data-val="ja|zh-TW">Chinese (Traditional)</li>
              <li data-val="ja|ja">Japanese</li>
            </ul>
          </div>
        </div>
        {/*gnav-wrap*/}
      </nav>
    </header>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, {})(Header)
