import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import {
    destroyPages,
    getTrashPages,
    restorePages,
} from '../../../redux/actions/pageActions';
import PageTable from '../../components/table/PageTable';

const ListTrashPages = () => {
    const dispatch = useDispatch();
    const [deleteItems, setDeleteItems] = useState([]);
    const lstPages = useSelector((state) => state.page.pages_list);

    const checkButtonDestroy = () => {
        if (deleteItems.length > 0) {
            return (
                <button
                    className="main-btn danger-btn btn-hover"
                    onClick={() => {
                        Swal.fire({
                            title: 'Bạn muốn xóa trang này ?',
                            text: 'Trang sẽ bị xóa vĩnh viễn!',
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#218838',
                            cancelButtonColor: '#dc3545',
                            confirmButtonText: 'Có, tôi muốn!',
                            cancelButtonText: 'Không, cám ơn!',
                        }).then((result) => {
                            if (result.isConfirmed) {
                                dispatch(destroyPages(deleteItems.toString()));
                            }
                        });
                    }}
                >
                    <i className="fas fa-minus-circle"></i>&ensp;Xóa Vĩnh Viễn
                </button>
            );
        } else {
            return (
                <button className="main-btn danger-btn-outline" disabled>
                    <i className="fas fa-minus-circle"></i>&ensp;Xóa Vĩnh Viễn
                </button>
            );
        }
    };

    const checkButtonRestore = () => {
        if (deleteItems.length > 0) {
            return (
                <button
                    className="main-btn info-btn btn-hover"
                    onClick={() => {
                        Swal.fire({
                            title: 'Bạn muốn phục hồi trang này ?',
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#218838',
                            cancelButtonColor: '#dc3545',
                            confirmButtonText: 'Có, tôi muốn!',
                            cancelButtonText: 'Không, cám ơn!',
                        }).then((result) => {
                            if (result.isConfirmed) {
                                dispatch(restorePages(deleteItems.toString()));
                            }
                        });
                    }}
                >
                    <i className="fas fa-minus-circle"></i>&ensp;Phục Hồi
                </button>
            );
        } else {
            return (
                <button className="main-btn info-btn-outline" disabled>
                    <i className="fas fa-minus-circle"></i>&ensp;Phục Hồi
                </button>
            );
        }
    };

    useEffect(() => {
        document.title = 'Manage Pages';
        dispatch(getTrashPages());
    }, [dispatch]);

    return (
        <section className="table-components">
            <div className="container-fluid">
                {/*-- ========== title-wrapper start ========== --*/}
                <div className="title-wrapper pt-30">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="title mb-30">
                                <h2>Danh Sách Bài Viết Đã Xóa</h2>
                            </div>
                        </div>
                        {/*-- end col --*/}
                        <div className="col-md-6">
                            <div className="breadcrumb-wrapper mb-30">
                                <nav aria-label="breadcrumb">
                                    <Link
                                        to="/admin/pages"
                                        className="main-btn secondary-btn btn-hover"
                                    >
                                        <i className="fas fa-clipboard-list"></i>
                                        &ensp;Danh Sách Bài Viết
                                    </Link>
                                    &nbsp;
                                    {checkButtonRestore()}
                                    &nbsp;
                                    {checkButtonDestroy()}
                                    &nbsp;
                                </nav>
                            </div>
                        </div>
                        {/*-- end col --*/}
                    </div>
                    {/*-- end row --*/}
                </div>
                {/*-- ========== title-wrapper end ========== --*/}
                {lstPages && lstPages.length ? (
                    <PageTable
                        list={lstPages}
                        setDeleteItems={setDeleteItems}
                    />
                ) : (
                    <PageTable list={[]} setDeleteItems={setDeleteItems} />
                )}
            </div>
            {/*-- end container --*/}
        </section>
    );
};

export default ListTrashPages;
