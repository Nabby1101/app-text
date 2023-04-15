import React, { useEffect, useState, Component } from 'react';
import { useSelector } from 'react-redux';
import { Link, Redirect, useRouteMatch } from 'react-router-dom'
import './stylePro.scss';

const Category = (props) => {

  var arrCate = [];
  var [typeCate, setTypeCate] = useState();
  var [actCate, setActCat] = useState();
  var [childCate, setChildCate] = useState(arrCate);
  var [grandChildCate, setGrandChildCate] = useState(null);
  const [isOpen, setOpen] = useState(false);
  var [count, setCount] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const lstCate = props.listCate;
  const lstColor = props.listColor;
  const lstSize = props.listSize;
  const product = useSelector((state) => state.product.product);
  let match = useRouteMatch('/category/:slug');
  let match2 = useRouteMatch('/product/:slug');

  const checkSlug = (id) => {
    var catArr = [];
    if (id && lstCate) {
      lstCate.forEach((value) => {
        if (id.includes(value._id)) {
          catArr.push(value.slug);
        }
      });
    }
    return catArr[0];
  };

  var slugCate = match
    ? match.params.slug
    : match2
      ? checkSlug(localStorage.getItem('proCate'))
      : '';

  var lstParentCate = [];

  if (lstCate) {
    lstParentCate = lstCate.filter(
      (value) => value.parentCate === '' && value.status === '1'
    );
  }

  const getChild = (id) => {
    setChildCate([]);
    lstCate.forEach((value, key) => {
      if (value.deleted === false && value.status === '1') {
        if (value.parentCate.includes(id)) {
          setChildCate((oldVal) => [...oldVal, value]);
        }
      }
    });
  };
  const getGrandChild = (id, parentType) => {
    setGrandChildCate([]);
    lstCate.forEach((value, key) => {
      if (value.deleted === false && value.status === '1') {
        if (value.parentCate.includes(id)) {
          if (value.type === parentType || value.type === '0') {
            setGrandChildCate((oldVal) => [...oldVal, value]);
          } else if (
            value.type === '3' &&
            (parentType === '0' || parentType === '1')
          ) {
            setGrandChildCate((oldVal) => [...oldVal, value]);
          } else if (
            value.type === '4' &&
            (parentType === '0' || parentType === '1')
          ) {
            setGrandChildCate((oldVal) => [...oldVal, value]);
          } else if (
            value.type === '5' &&
            (parentType === '2' || parentType === '2')
          ) {
            setGrandChildCate((oldVal) => [...oldVal, value]);
          } else if (
            value.type === '9' &&
            (parentType === '3' || parentType === '1')
          ) {
            setGrandChildCate((oldVal) => [...oldVal, value]);
          } else if (
            value.type === '6' &&
            (parentType === '5' || parentType === '2')
          ) {
            setGrandChildCate((oldVal) => [...oldVal, value]);
          } else if (
            value.type === '7' &&
            (parentType === '5' || parentType === '2')
          ) {
            setGrandChildCate((oldVal) => [...oldVal, value]);
          } else if (
            value.type === '8' &&
            (parentType === '5' || parentType === '2')
          ) {
            setGrandChildCate((oldVal) => [...oldVal, value]);
          } else if (
            value.type === '10' &&
            (parentType === '4' || parentType === '1')
          ) {
            setGrandChildCate((oldVal) => [...oldVal, value]);
          }
        }
      }
    });
  };

  const toggleDropdown = (key, data) => {
    getGrandChild(data._id, typeCate);
    setOpen(!isOpen);
    setCount(key);
    // setItem(grandChildCate)
  };

  const handleItemClick = (id) => {
    selectedItem === id ? setSelectedItem(null) : setSelectedItem(id);
  };


  useEffect(() => {
    var arrActCate = '';
    var idCate = '';
    lstParentCate.forEach((value) => {
      if (value.slug === slugCate) {
        arrActCate = value.name;
        idCate = value._id;
        setTypeCate(value.type);
      }
    });
    if (lstCate) {
      lstCate.forEach((value) => {
        if (
          value.parentCate.includes(idCate) &&
          value.deleted === false &&
          value.status === '1'
        ) {
          arrCate.push(value);
        }
      });
    }
    setActCat(arrActCate);
  }, [lstParentCate, lstCate]);

  return (
    <>
      <div className="navColumn">
      
        {/* <ul className="beforeLine">
          <h1>Trang Phục</h1>
          <li><a href="#">Trung Quốc</a></li>
          <li><a href="#">Hàn Quốc</a></li>
          <li><a href="#">Nhật Bản</a></li>
        </ul>
        <ul className="beforeLine">
          <h1>Vật Phẩm Khác</h1>
          <li><a href="#">Phụ Kiện</a></li>
          <li><a href="#">Tóc Giả</a></li>
          <li><a href="#">Figure</a></li>
        </ul> */}
        <div>
          <h1>Danh Mục</h1>
          <ul className='beforeLine'>
            {lstParentCate.map((cate, key) => {
              if (cate.slug !== slugCate) {
                return (
                  <li key={key}
                    onClick={() => {
                      getChild(cate._id);
                    }}
                  >
                    <Link to={`/category/${cate.slug}`}>
                      {cate.name}
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </div>
        <div className="filter-widget">
          <h4 className="cateName">{actCate}</h4>
          <div className="dropdown cate-child">
            {actCate ? (
              childCate.map((value, key) => {
                // var ddmenu = key + 1;
                return (
                  <div key={key}>
                    <div
                      className="dropdown-header cate-name"
                      onClick={() =>
                        toggleDropdown(key, value)
                      }
                    >
                      {value.name}
                    </div>
                    {key === count ? (
                      <div
                        className={`dropdown-body ${isOpen && 'open'
                          }`}
                      >
                        {grandChildCate !== null ? (
                          grandChildCate.length > 0 ? (
                            grandChildCate.map(
                              (item, key) => (
                                <div
                                  className="dropdown-item"
                                  onClick={(e) =>
                                    handleItemClick(
                                      e.target
                                        .id
                                    )
                                  }
                                  key={key}
                                >
                                  <span
                                    className={`dropdown-item-dot ${item.id ===
                                      selectedItem &&
                                      'selected'
                                      }`}
                                  >
                                    •{' '}
                                  </span>
                                  <Link
                                    className="grandChildCate"
                                    to={`/category/${slugCate}/${value.slug}/${item.slug}`}
                                  >
                                    {item.name}
                                  </Link>
                                </div>
                              )
                            )
                          ) : (
                            <Redirect
                              to={`/category/${slugCate}/${value.slug}`}
                            />
                          )
                        ) : null}
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                );
              })
            ) : (
              <div></div>
            )}
          </div>
        </div><hr />
        {match || match2 ? (
          <>
            <div className="sc-item">
              <h4 className="cateName">Size</h4>
              <div className="sc-itemSize">
                {lstSize && lstSize.length !== 0 ? (
                  lstSize.slice(0, 10).map((value, key) => {
                    if (value.deleted === false) {
                      return (
                        <div key={key} className="sc-item">
                          <Link
                            to={`/category/${slugCate}/size/${value.slug}`}
                          >
                            <div className='cs-item1'>
                              {value.name}
                            </div>
                          </Link>
                        </div>
                      );
                    }
                  })
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="sc-item">
              <h4 className="cateName">Màu</h4>
              <div className="sc-itemSize">
                {lstColor && lstColor.length !== 0 ? (
                  lstColor.slice(0, 12).map((value, key) => {
                    if (value.deleted === false) {
                      return (
                        <div key={key} className="cs-item">
                          <Link
                            to={`/category/${slugCate}/color/${value.slug}`}
                          >
                            <div
                              className="circle"
                              style={{
                                background:
                                  value.code,
                              }}
                            ></div>
                            <div className="name-color">
                              {value.name}
                            </div>
                          </Link>
                        </div>
                      );
                    }
                  })
                ) : (
                  <></>
                )}
              </div>
            </div>
          </>
        ) : (
          <div></div>
        )}

      </div>
    </>
  )
}


export default Category