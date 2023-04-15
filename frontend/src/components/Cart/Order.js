import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PayPalButton } from 'react-paypal-button-v2';
import Swal from 'sweetalert2';
import api from '../../api';
import {
    detailsOrder,
    payOrder,
    statusOrder,
} from '../../redux/actions/orderActions';
import { ORDER_PAY_RESET } from '../../constants/orderConstant';
import MessageBox from '../../components/Box/MessageBox';
import moment from 'moment';
// import { useParams } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
// import './styles/payment.scss';

const Order = (props) => {
    const dispatch = useDispatch();
    // const { id } = useParams();
    const orderId = props.match.params.id;
    const [sdkReady, setSdkReady] = useState(false);
    const orderDetails = useSelector((state) => state.order);
    const { order } = orderDetails;

    const oderPay = useSelector((state) => state.order);
    const { success: successPay } = oderPay;

    const formatVND = (value) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        }).format(value);
    };

    const successPaymentHandler = (paymentResult) => {
        dispatch(payOrder(order, paymentResult));
    };

    useEffect(() => {
        document.title = 'IA - Đơn Hàng Cá Nhân'
        const addPayPalScript = async () => {
            const { data } = await api.get('/api/config/paypal');
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
            script.async = true;
            script.onload = () => {
                setSdkReady(true);
            };
            document.body.appendChild(script);
        };
        if (!order || successPay || (order && order._id !== orderId)) {
            dispatch({ type: ORDER_PAY_RESET });
            dispatch(detailsOrder(orderId));
        } else {
            if (!order.isPaid) {
                if (!window.paypal) {
                    addPayPalScript();
                } else {
                    setSdkReady(true);
                }
            }
        }
    }, [dispatch, order, orderId, sdkReady, successPay]);

    return order && order.length !== 0 ? (
        <div id="news" className="second" style={{ paddingTop: '60px' }}>
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
                    <div>Trạng Thái Thanh Toán</div>
                </h1>
                <div className="commonPadding">
                    <div className="row">
                        <div className="col-lg-6">
                            <h4>Chi Tiết Khách Hàng</h4>
                            <div className="row">
                                <div className="col-lg-6">
                                    <label htmlFor="fir">Họ</label>
                                    <p>
                                        <strong>
                                            {
                                                order.shippingAddress
                                                    .firstName
                                            }
                                        </strong>
                                    </p>
                                </div>
                                <div className="col-lg-6">
                                    <label htmlFor="last">Tên</label>
                                    <p>
                                        <strong>
                                            {order.shippingAddress.lastName}
                                        </strong>
                                    </p>
                                </div>
                                <div className="col-lg-12">
                                    <label htmlFor="street">Địa Chỉ</label>
                                    <p>
                                        <strong>
                                            {order.shippingAddress.address}
                                        </strong>
                                    </p>
                                </div>
                                <div className="col-lg-6">
                                    <label htmlFor="email">Email</label>
                                    <p>
                                        <strong>
                                            {
                                                order.shippingAddress
                                                    .emailAddress
                                            }
                                        </strong>
                                    </p>
                                </div>
                                <div className="col-lg-6">
                                    <label htmlFor="phone">
                                        Số Điện Thoại
                                    </label>
                                    <p>
                                        <strong>
                                            {order.shippingAddress.phone}
                                        </strong>
                                    </p>
                                </div>
                                {order.shippingAddress.note.length !== 0 ? (
                                    <div className="col-lg-12">
                                        <label htmlFor="note">Lưu Ý</label>
                                        <p>{order.shippingAddress.note}</p>
                                    </div>
                                ) : (
                                    <div></div>
                                )}

                                {order.status !== 'Cancel' ? (
                                    order.delivered === 'Delivered' ? (
                                        <MessageBox variant="success">
                                            Đã Giao Hàng Lúc{' '}
                                            {new Date(
                                                order.deliveredAt
                                            ).toLocaleString('en-CA')}
                                        </MessageBox>
                                    ) : order.delivered === 'Delivering' ? (
                                        <MessageBox variant="warning">
                                            Đang Giao Hàng
                                        </MessageBox>
                                    ) : (
                                        <MessageBox variant="danger">
                                            Đang Chuẩn Bị
                                        </MessageBox>
                                    )
                                ) : (
                                    <MessageBox variant="danger">
                                        Đơn hàng đã được hủy
                                    </MessageBox>
                                )}
                                {order.status === 'Completed' &&
                                    order.delivered !== 'Delivered' ? (
                                    <MessageBox variant="warning">
                                        Thời gian giao hàng dự kiến:{' '}
                                        {new Date(order.deliveredAt)
                                            .toLocaleString('en-CA')
                                            .substring(0, 10)}
                                    </MessageBox>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="place-order">
                                <h4>Đơn Hàng Của Bạn</h4>
                                <div className="order-total">
                                    <ul className="order-table">
                                        <li>
                                            Sản Phẩm <span>Tổng</span>
                                        </li>
                                        {order.orderItems.map(
                                            (item, key) => {
                                                return (
                                                    <li
                                                        key={key}
                                                        className="fw-normal"
                                                    >
                                                        {item.name} x{' '}
                                                        {item.quantity}
                                                        <span>
                                                            {formatVND(
                                                                item.price *
                                                                item.quantity
                                                            )}
                                                        </span>
                                                    </li>
                                                );
                                            }
                                        )}
                                        <li className="fw-normal">
                                            Tạm Tính{' '}
                                            <span>
                                                {formatVND(
                                                    order.totalPrice -
                                                    order.shippingFee
                                                )}
                                            </span>
                                        </li>
                                        <li className="fw-normal">
                                            Phí Giao Hàng
                                            <span>
                                                {formatVND(
                                                    order.shippingFee
                                                )}
                                            </span>
                                        </li>
                                        <li className="fw-normal">
                                            Giảm giá
                                            <span>
                                                -{' '}
                                                {formatVND(
                                                    order.discount || 0
                                                )}
                                            </span>
                                        </li>
                                        <li className="total-price">
                                            Tổng tiền{' '}
                                            <span>
                                                {formatVND(
                                                    order.totalPrice -
                                                    order.discount
                                                )}{' '}
                                                = $
                                                {(
                                                    (order.totalPrice -
                                                        order.discount) /
                                                    25000
                                                ).toFixed(2)}
                                            </span>
                                        </li>
                                    </ul>
                                    {order.isPaid ? (
                                        <MessageBox variant="success">
                                            Thanh Toán Lúc{' '}
                                            {moment(order.paidAt)
                                                .utc()
                                                .format('DD-MM-YYYY HH:ss')}
                                        </MessageBox>
                                    ) : (
                                        <MessageBox variant="danger">
                                            Chưa Thanh Toán
                                        </MessageBox>
                                    )}
                                    <div className="payment-check payment-method">
                                        <label>
                                            Phương thức thanh toán:{' '}
                                        </label>
                                        <p>
                                            <strong>
                                                {order.paymentMethod}
                                            </strong>
                                        </p>
                                    </div>

                                    <div>
                                        {sdkReady &&
                                            order.paymentMethod === 'Paypal' &&
                                            order.isPaid === false &&
                                            order.status !== 'Cancel' ? (
                                            <PayPalButton
                                                amount={(
                                                    order.totalPrice / 25000
                                                ).toFixed(2)}
                                                onSuccess={
                                                    successPaymentHandler
                                                }
                                            ></PayPalButton>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                    {order.status === 'Pending' ? (
                                        <div className="cancel-order">
                                            <button
                                                className="cancel-btn"
                                                onClick={() => {
                                                    Swal.fire({
                                                        title: 'Bạn muốn hủy đơn hàng này ?',
                                                        text: 'Đơn hàng bị hủy sẽ không thể khôi phục!',
                                                        icon: 'warning',
                                                        showCancelButton: true,
                                                        confirmButtonColor:
                                                            '#218838',
                                                        cancelButtonColor:
                                                            '#dc3545',
                                                        confirmButtonText:
                                                            'Có, tôi muốn!',
                                                        cancelButtonText:
                                                            'Không, cám ơn!',
                                                    }).then((result) => {
                                                        if (
                                                            result.isConfirmed
                                                        ) {
                                                            dispatch(
                                                                statusOrder(
                                                                    {
                                                                        id: order._id,
                                                                        saveStatus:
                                                                            'Cancel',
                                                                    }
                                                                )
                                                            );
                                                        }
                                                    });
                                                }}
                                            >
                                                Huỷ Đơn Hàng
                                            </button>
                                        </div>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div id="news" className="second" style={{ paddingTop: '60px' }}>
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
                    <div></div>
                </h1>
                <div className="commonPadding">
                    <h1 className='text-center'>Nothing Apprear</h1>
                </div>
            </div>
        </div>
    );
};

export default withRouter(Order);
