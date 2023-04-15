import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MessageBox from '../Box/MessageBox';
import Rate from '../Other/Rate';
import RelatedProducts from '../Other/RelatedProduct';
import { PRODUCT_REVIEW_CREATE_RESET } from '../.././constants/productConstant';
import { addCart } from '../.././redux/actions/cartActions';
import { getCategories } from '../.././redux/actions/categoryActions';
import {
  createReview,
  getColors,
  getProductBySlug,
  getSizes,
} from '../.././redux/actions/productActions';
import { favoritesAdd, getUser } from '../.././redux/actions/userActions';
//import './styles/productDetail.scss';

const ProductDetail = () => {

  const dispatch = useDispatch();
  let match = useRouteMatch('/product/:slug');
  let { url } = useRouteMatch();
  let location = useLocation();
  const slug = match.params.slug;
  const product = useSelector((state) => state.product.product);
  const lstCate = useSelector((state) => state.category.categories);
  const lstColor = useSelector((state) => state.product.colors_list);
  const lstSize = useSelector((state) => state.product.sizes_list);
  const proReview = useSelector((state) => state.product);
  const user = useSelector((state) => state.user.user);
  var [count, setCount] = useState(0);
  const [sizeAct, setSizeAct] = useState('');
  const [sizes, setSizes] = useState('');
  const [colorAct, setColorAct] = useState('');
  const [colors, setColors] = useState('');
  const [quantityPro, setQuantityPro] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const {
    // loading: loadingReviewCreate,
    error: errorReviewCreate,
    success: successReviewCreate,
  } = proReview;

  const pro = product ? product : [];

  var cate = pro.categoryId;

  var userName = '';

  const userId = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))._id
    : '';

  var check = false;
  var noComment = false;

  if (user && pro && user.favorites) {
    user.favorites.forEach((values) => {
      if (values._id === pro._id) {
        return (check = true);
      }
    });
    if (pro.reviews) {
      pro.reviews.forEach((values) => {
        if (values.idUser === user._id) {
          return (noComment = true);
        }
      });
    }
  }

  const [checkAdd, setCheckAdd] = useState(check);

  if (user) {
    userName = user.firstName + ' ' + user.lastName;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (rating === 0) {
      toast.error('Bạn đừng quên đánh giá nhé !.', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    if (comment === '') {
      toast.error('Opps! Bạn quên bình luận rồi.', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    if (rating && comment) {
      if (pro) {
        dispatch(
          createReview(pro._id, {
            id: user._id,
            sex: user.sex,
            rate: rating,
            cmt: comment,
            name: userName,
          })
        );
      }
    }
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const getStar = () => {
    if (pro) {
      return (
        <div className="pd-rating star-pro">
          <i
            className={
              pro.rating >= 1
                ? 'fa fa-star'
                : pro.rating >= 0.5
                  ? 'fa fa-star-half-o'
                  : 'fa fa-star-o'
            }
          />
          <i
            className={
              pro.rating >= 2
                ? 'fa fa-star'
                : pro.rating >= 1.5
                  ? 'fa fa-star-half-o'
                  : 'fa fa-star-o'
            }
          />
          <i
            className={
              pro.rating >= 3
                ? 'fa fa-star'
                : pro.rating >= 2.5
                  ? 'fa fa-star-half-o'
                  : 'fa fa-star-o'
            }
          />
          <i
            className={
              pro.rating >= 4
                ? 'fa fa-star'
                : pro.rating >= 3.5
                  ? 'fa fa-star-half-o'
                  : 'fa fa-star-o'
            }
          />
          <i
            className={
              pro.rating >= 5
                ? 'fa fa-star'
                : pro.rating >= 4.5
                  ? 'fa fa-star-half-o'
                  : 'fa fa-star-o'
            }
          />
          <span>({pro.numReviews})</span>
        </div>
      );
    }
  };

  const notifySuccess = () => {
    toast.success('Đã thêm sản phẩm vào giỏ hàng.', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const notifyErrorSize = () => {
    toast.error('Bạn cần chọn kích thước trước khi thêm sản phẩm vào giỏ hàng.', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const notifyErrorColor = () => {
    toast.error('Bạn cần chọn màu trước khi thêm sản phẩm vào giỏ hàng.', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleAddFavorite = (id) => {
    dispatch(favoritesAdd(id));
    if (checkAdd === false) {
      setCheckAdd(true);
      toast.success('Đã thêm sản phẩm vào mục ưa thích.', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setCheckAdd(false);
      toast.warn('Đã xóa sản phẩm khỏi mục ưa thích.', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleClickSize = (key, value) => {
    setSizeAct(key);
    setSizes(value);
  };

  const handleClickColor = (key, value) => {
    setColorAct(key);
    setColors(value);
  };

  const handleAddCart = (data) => {
    if (!data.getQty) {
      toast.error('Bạn cần nhập số lượng sản phẩm.', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (data.getQty < 1) {
      toast.error('Số lượng sản phẩm phải lớn hơn 0.', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (data.getQty > pro.quantity) {
      toast.error('Số lượng bạn nhập không phù hợp.', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (data.color.length === 0) {
      notifyErrorColor();
    } else if (data.size.length === 0) {
      notifyErrorSize();
    } else {
      dispatch(addCart(data));
      notifySuccess();
    }
  };

  const formatVND = (value) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(value);
  };

  const checkMultiCate = (id) => {
    var catArr = [];
    if (id && lstCate.Categories) {
      lstCate.Categories.forEach((value) => {
        if (id.includes(value._id)) {
          catArr.push(value.name);
        }
      });
    }
    return catArr.toString();
  };

  const checkSingleCate = (id) => {
    var catArr = [];
    if (id && lstCate.Categories) {
      lstCate.Categories.forEach((value) => {
        if (id.includes(value._id)) {
          catArr.push(value.name);
        }
      });
    }
    if (catArr.length === 3) {
      return catArr[2].toString();
    } else if (catArr.length === 2) {
      return catArr[1].toString();
    }
  };

  const checkColor = (id) => {
    var colorArr = [];
    if (id && lstColor && lstColor.Colors) {
      lstColor.Colors.forEach((value) => {
        if (id.includes(value._id)) {
          colorArr.push(value.code);
        }
      });
    }
    return colorArr;
  };

  const checkSize = (id) => {
    var sizeArr = [];
    if (id && lstSize && lstSize.Sizes) {
      lstSize.Sizes.forEach((value) => {
        if (value._id.includes(id)) {
          sizeArr.push(value.name);
        }
      });
    }
    return sizeArr;
  };

  useEffect(() => {
    document.title = 'IA - Chi Tiết Sản Phẩm'
    if (successReviewCreate) {
      toast.success('Cám ơn bạn đã đánh giá !.', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setRating(0);
      setComment('');
      dispatch({ type: PRODUCT_REVIEW_CREATE_RESET });
    }
    dispatch(getProductBySlug(slug));
    dispatch(getCategories());
    dispatch(getColors());
    dispatch(getSizes());
    if (userId !== '') {
      dispatch(getUser(userId));
    }
  }, [dispatch, slug, successReviewCreate, userId]);
  return (
    <div id="software" className="second" style={{ paddingTop: '50px' }}>
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
          <div>Chi Tiết Sản Phẩm</div>
        </h1>
        <div className="commonWidth commonPadding">
          {/* 商品紹介 ---------------------------- */}
          <div className="flex main">
            <div className="info enFont" style={{float: 'left'}}>
              <h1>
                <b></b>
              </h1>
              <h2>
                <div className="cat"></div>
                {pro.name}
              </h2>
              {/* {localStorage.getItem(
                'userInfo'
              ) ? (
                checkAdd === true ? (
                  <div
                    onClick={() =>
                      handleAddFavorite(
                        pro._id
                      )
                    }
                    className=""
                  >
                    <i className="">Xóa</i>
                  </div>
                ) : (
                  <div
                    onClick={() =>
                      handleAddFavorite(
                        pro._id
                      )
                    }
                    className=""
                  >
                    <i className="">Thêm</i>
                  </div>
                )
              ) : null} */}
              <div className='' style={{ fontSize: '15px' }}>Đã bán: <span>{pro.sold}</span></div>
              <div className=''>
                <div className='checkColor' style={{ fontSize: '15px' }}>Màu sắc: </div>
                <div className="pd-color-choose">
                  {pro.color ? (
                    pro.color
                      .split(',')
                      .map((value, key) => {
                        return (
                          <div
                            key={key}
                            className="cc-item"
                          >
                            {colorAct ===
                              key ? (
                              <div
                                className="circle_active"
                                style={{
                                  marginLeft: '2%',
                                  background:
                                    checkColor(
                                      value
                                    ),
                                }}
                              ></div>
                            ) : (
                              <div
                                className="circle"
                                onClick={() =>
                                  handleClickColor(
                                    key,
                                    value
                                  )
                                }
                                style={{
                                  marginLeft: '2%',
                                  background:
                                    checkColor(
                                      value
                                    ),
                                }}
                              ></div>
                            )}
                          </div>
                        );
                        //circle_active
                      })
                  ) : (
                    <div className="cc-item">
                      <div
                        className="circle"
                        style={{
                          background:
                            pro.color,
                        }}
                      ></div>
                    </div>
                  )}
                </div>
              </div>
              <p>&nbsp;</p>
              <div className=''>
                <div className='checkSize' style={{ fontSize: '15px' }}>Kích thước: 
                  <div className="pd-size-choose">
                    {pro.size ? (
                      pro.size
                        .split(',')
                        .map((value, key) => {
                          return (
                            <div
                              key={key}
                              className="sc-item1"
                            >
                              {/* <input
                                type="radio"
                                id="sm-size"
                              /> */}
                              {sizeAct ===
                                key ? (
                                <div
                                  className="active"
                                  style={{
                                    background: '#FF00E2'
                                  }}
                                >
                                  {checkSize(
                                    value
                                  )}
                                </div>
                              ) : (
                                <div
                                  onClick={() =>
                                    handleClickSize(
                                      key,
                                      value
                                    )
                                  }
                                  
                                >
                                  {checkSize(
                                    value
                                  )}
                                </div>
                              )}
                            </div>
                          );
                        })
                    ) : (
                      <div className="sc-item1">
                        <input
                          type="radio"
                          id="sm-size"
                        />
                        <div htmlFor="sm-size"></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <p>&nbsp;</p>
              <div className='' style={{ width: '100%', fontSize: '15px', float: 'left'}}>
                Danh mục: {checkMultiCate(pro.categoryId)}
              </div>
              <div>Giá: <span className='cateName'>{formatVND(pro.price)}</span></div>
              <div>Số lượng còn lại: <span>{pro.quantity}{' '}sản phẩm</span></div>
              <hr/>
              <div className='' style={{ width: '100%' }}>
                {pro.quantity > 0 ? (
                  <div className="quantity">
                    <div className="pro-qty">
                      <span>Nhập số lượng cần mua: </span>
                      <input
                        type="number"
                        defaultValue={1}
                        min={1}
                        max={pro.quantity}
                        className='inputQuantity'
                        onChange={(e) =>
                          setQuantityPro(
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <br/>
                    <Link
                      to={location.pathname}
                      onClick={() =>
                        handleAddCart({
                          ...pro,
                          size: sizes,
                          color: colors,
                          getQty: Number(
                            quantityPro
                          ),
                        })
                      }
                      className="btmHover"
                    >
                      <span>Thêm Giỏ Hàng</span>
                    </Link>
                  </div>
                ) : (
                  <div className="quantity">
                    <h3 className="soldOut">
                      Hết Hàng
                    </h3>
                  </div>
                )}
              </div>
              {/* <div className="link">
                <a href="#" className="btmHover" target="_blank"><span>Vector PCショップ</span></a>
              </div>
              <div className="intro">
                <p>購入者特典はこちら！</p>
                <p><img loading="lazy" className="alignnone size-full wp-image-943" src="https://ia-aria.com/wp-content/uploads/2021/02/IA_SD5-e1618310259425.jpeg" alt="" width={800} height={226} /></p>
                <p>※2021/04/13より、ご購入特典の配布を開始しました。購入後のダウンロードファイルに同梱しております。<br />
                  ※4/13以前にご購入の方も、再度ダウンロードいただければ特典を取得可能です。</p>
                <p>&nbsp;</p>
                <p>深層学習等のAI技術を使い、声質・癖・喋り方をリアルに再現した新世代の音声創作ソフトウェア「CeVIO AI」にバーチャルアーティスト 「IA」のトークボイスが登場。<br />
                  無調整でもハイクオリティな音声が発音されます。</p>
              </div> */}
            </div>
            <div className="list">
              <h1>
                <b></b>
              </h1>
              <h2>
                <div className="cat"></div>
                Thông tin sản phẩm
              </h2>
              <p>※{pro.details}<br /></p>
            </div>
            <div className="img">
              {pro.image ? (
                <img
                  className="product-big-img"
                  src={`http://localhost:8080/uploads/products/${pro.image.split(',')[
                    count
                  ]
                    }`}
                  alt=""
                />
              ) : (
                <img
                  className="product-big-img"
                  src="https://admin-demo.nopcommerce.com/images/thumbs/default-image_100.png"
                  alt=""
                />
              )}
            </div>

            <div>
              <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={[
                  'tablet',
                  'mobile',
                ]}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                {pro.image ? (
                  pro.image
                    .split(',')
                    .map((value, key) => {
                      return (
                        <div
                          key={key}
                          className="pt col-12"
                          onClick={() =>
                            setCount(
                              key
                            )
                          }
                        >
                          <img
                            src={`http://localhost:8080/uploads/products/${value}`}
                            alt=""
                          />
                        </div>
                      );
                    })
                ) : (
                  <div className="pt">
                    <img
                      src="https://admin-demo.nopcommerce.com/images/thumbs/default-image_100.png"
                      alt=""
                    />
                  </div>
                )}
              </Carousel>
            </div>

          </div>
          <div>
          </div>
        </div>
        <div id="backTop" className="more clearfix" style={{ marginBottom: '50px' }}>
          <Link to="/category" className="btmHover enFont"><span>More Products</span></Link>
        </div>
      </div>{/* #ページ名 */}
    </div>
  )
}


export default ProductDetail