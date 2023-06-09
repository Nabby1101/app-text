import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import Swal from 'sweetalert2';
import { deleteUsers, getUsers } from '../../../redux/actions/userActions';
import UserTable from '../../components/table/UserTable';

const ListUsers = () => {
    let { url } = useRouteMatch();
    const dispatch = useDispatch();
    const [deleteItems, setDeleteItems] = useState([]);
    const lstUsers = useSelector((state) => state.user.users);

    const ClickDeleteHandler = () => {
        Swal.fire({
            title: 'Bạn muốn xóa tài khoản này ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#218838',
            cancelButtonColor: '#dc3545',
            confirmButtonText: 'Có, tôi muốn!',
            cancelButtonText: 'Không, cám ơn!',
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteUsers(deleteItems.toString()));
            }
        });
    };

    const checkButtonDelete = () => {
        if (deleteItems.length > 0) {
            return (
                <button
                    className="main-btn danger-btn btn-hover"
                    onClick={() => ClickDeleteHandler()}
                >
                    <i className="fa fa-minus-circle"></i>&ensp;Xóa(Đã Chọn)
                </button>
            );
        } else {
            return (
                <button className="main-btn danger-btn-outline" disabled>
                    <i className="fa fa-minus-circle"></i>&ensp;Xóa
                </button>
            );
        }
    };

    useEffect(() => {
        document.title = 'Manage Users';
        dispatch(getUsers());
    }, [dispatch]);

    return (
        <section className="table-components">
            <div className="container-fluid">
                {/*-- ========== title-wrapper start ========== --*/}
                <div className="title-wrapper pt-30">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="title mb-30">
                                <h2>Danh Sách Người Dùng</h2>
                            </div>
                        </div>
                        {/*-- end col --*/}
                        <div className="col-md-6">
                            <div className="breadcrumb-wrapper mb-30">
                                <nav aria-label="breadcrumb">
                                    {checkButtonDelete()}
                                    &nbsp;
                                    <Link
                                        to={`${url}/trash`}
                                        className="main-btn warning-btn btn-hover"
                                    >
                                        <i className="fa fa-trash-alt"></i>
                                        &ensp;Thùng Rác ({lstUsers.deletedCount}
                                        )
                                    </Link>
                                </nav>
                            </div>
                        </div>
                        {/*-- end col --*/}
                    </div>
                    {/*-- end row --*/}
                </div>
                {/*-- ========== title-wrapper end ========== --*/}
                <UserTable
                    list={lstUsers.Users}
                    setDeleteItems={setDeleteItems}
                />
            </div>
            {/*-- end container --*/}
        </section>
    );
};

export default ListUsers;
