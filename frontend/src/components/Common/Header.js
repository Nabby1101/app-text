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

  const onChangeHandler = (text) => {
    let matches = [];
    if (text.charCodeAt(0) === 43) {
      toast.warning(
        'Ký tự bạn nhập không phù hợp. Vui lòng nhập ký tự khác.'
      );
      return;
    }
    if (lstPro && lstPro.Products) {
      matches = lstPro.Products.filter((item) => {
        return item.name.toLowerCase().match(text.toLowerCase());
      });
      setSuggestions(matches);
      setSearch(text);
    }
  };

  const onSuggestHandler = (text) => {
    setSearch('');
    setSuggestions([]);
    if (text.length !== 0) {
      dispatch(getSearch(text.toLowerCase()));
      history.push(`/tim-kiem?key=${text.toLowerCase()}`);
      setSuggestions([]);
    }
  };

  const handleFind = () => {
    if (search.length !== 0) {
      dispatch(getSearch(search.toLowerCase()));
      history.push(`/tim-kiem?key=${search.toLowerCase()}`);
      setSuggestions([]);
    }
  };

  const handleKeypress = (e) => {
    if (e.charCode === 13) {
      handleFind();
    }
  };

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
                Thông Tin Cá Nhân
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
            <a href="#" target><img src="./assets/common/imgs/top_sp.png" alt="Spotify" /></a>
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
        <div className="col-lg-7 col-md-7">
          <div className="advanced-search">
            <div className="input-group">
              <input
                value={search}
                type="text"
                onChange={(e) =>
                  onChangeHandler(e.target.value)
                }
                onBlur={() => {
                  setTimeout(() => {
                    setSuggestions([]);
                  }, 1000);
                }}
                onKeyPress={(e) => handleKeypress(e)}
                placeholder="Nhập từ khóa tìm kiếm"
              />
              <div className="col-md-11 justify-content-md-center show-suggestions">
                {suggestions &&
                  suggestions.map((value, i) => (
                    <div
                      key={i}
                      className="col-md-12 suggest"
                      onClick={() =>
                        onSuggestHandler(
                          value.name
                        )
                      }
                    >
                      {value.name}
                    </div>
                  ))}
              </div>
              <button
                style={{ background: 'black', border: 'none' }}
                type="submit" onClick={handleFind}
                className='btmHover enFont'
              >
                <span>Tìm kiếm</span>
              </button>
            </div>
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
