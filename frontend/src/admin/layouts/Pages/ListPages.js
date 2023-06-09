/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import Swal from 'sweetalert2';
import { deletePages, getPages } from '../../../redux/actions/pageActions';
import PageTable from '../../components/table/PageTable';

const ListPages = () => {
    let { url } = useRouteMatch();
    const dispatch = useDispatch();
    const [deleteItems, setDeleteItems] = useState([]);
    const lstPages = useSelector((state) => state.page.pages_list);

    const ClickDeleteHandler = () => {
        Swal.fire({
            title: 'Bạn muốn xóa trang này ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#218838',
            cancelButtonColor: '#dc3545',
            confirmButtonText: 'Có, tôi muốn!',
            cancelButtonText: 'Không, cám ơn!',
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deletePages(deleteItems.toString()));
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
                    <i className="fa fa-minus-circle"></i>&ensp;Đã Chọn
                </button>
            );
        }
    };

    useEffect(() => {
        document.title = 'Manage Pages';
        dispatch(getPages());
    }, [dispatch]);

    return (
        <section className="table-components">
            <div className="container-fluid">
                {/*-- ========== title-wrapper start ========== --*/}
                <div className="title-wrapper pt-30">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="title mb-30">
                                <h2>Danh Sách Bài Viết Của Shop</h2>
                            </div>
                        </div>
                        {/*-- end col --*/}
                        <div className="col-md-6">
                            <div className="breadcrumb-wrapper mb-30">
                                <nav aria-label="breadcrumb">
                                    <Link
                                        to={`${url}/add`}
                                        className="main-btn success-btn btn-hover"
                                    >
                                        <i className="fa fa-plus"></i>
                                        &ensp;Thêm
                                    </Link>
                                    &nbsp;
                                    {checkButtonDelete()}
                                    &nbsp;
                                    <Link
                                        to={`${url}/trash`}
                                        className="main-btn warning-btn btn-hover"
                                    >
                                        <i className="fa fa-trash-alt"></i>
                                        &ensp;Thùng Rác({lstPages.deletedCount})
                                    </Link>
                                </nav>
                            </div>
                        </div>
                        {/*-- end col --*/}
                    </div>
                    {/*-- end row --*/}
                </div>
                {/*-- ========== title-wrapper end ========== --*/}
                <PageTable
                    list={lstPages.Pages}
                    setDeleteItems={setDeleteItems}
                />
            </div>
            {/*-- end container --*/}
        </section>
    );
};

export default ListPages;
