import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { getCategories } from '../../../redux/actions/categoryActions';
import {
    destroyImages,
    getTrashImages,
    restoreImages,
} from '../../../redux/actions/imageActions';
import ImageTable from '../../components/table/ImageTable';

const ListTrashImages = () => {
    const dispatch = useDispatch();
    const [deleteItems, setDeleteItems] = useState([]);
    const lstImages = useSelector((state) => state.image.images);

    const checkButtonDestroy = () => {
        if (deleteItems.length > 0) {
            return (
                <button
                    className="main-btn danger-btn btn-hover"
                    onClick={() => {
                        Swal.fire({
                            title: 'Bạn muốn xóa hình này ?',
                            text: 'Hình sẽ bị xóa vĩnh viễn!',
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#218838',
                            cancelButtonColor: '#dc3545',
                            confirmButtonText: 'Có, tôi muốn!',
                            cancelButtonText: 'Không, cám ơn!',
                        }).then((result) => {
                            if (result.isConfirmed) {
                                dispatch(destroyImages(deleteItems.toString()));
                            }
                        });
                    }}
                >
                    <i className="fa fa-minus-circle"></i>&ensp;Xóa Vĩnh Viễn
                </button>
            );
        } else {
            return (
                <button className="main-btn danger-btn-outline" disabled>
                    <i className="fa fa-minus-circle"></i>&ensp;Xóa Vĩnh Viễn
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
                            title: 'Bạn muốn phục hồi hình này ?',
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#218838',
                            cancelButtonColor: '#dc3545',
                            confirmButtonText: 'Có, tôi muốn!',
                            cancelButtonText: 'Không, cám ơn!',
                        }).then((result) => {
                            if (result.isConfirmed) {
                                dispatch(restoreImages(deleteItems.toString()));
                            }
                        });
                    }}
                >
                    <i className="fa fa-eraser"></i>&ensp;Phục Hồi
                </button>
            );
        } else {
            return (
                <button className="main-btn info-btn-outline" disabled>
                    <i className="fa fa-eraser"></i>&ensp;Phục Hồi
                </button>
            );
        }
    };

    useEffect(() => {
        document.title = 'Manage Images';
        dispatch(getTrashImages());
        dispatch(getCategories());
    }, [dispatch]);

    return (
        <section className="table-components">
            <div className="container-fluid">
                {/*-- ========== title-wrapper start ========== --*/}
                <div className="title-wrapper pt-30">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="title mb-30">
                                <h2>Danh Sách Hình Đã Xóa</h2>
                            </div>
                        </div>
                        {/*-- end col --*/}
                        <div className="col-md-6">
                            <div className="breadcrumb-wrapper mb-30">
                                <nav aria-label="breadcrumb">
                                    <Link
                                        to="/admin/images"
                                        className="main-btn secondary-btn btn-hover"
                                    >
                                        <i className="fa fa-clipboard-list"></i>
                                        &ensp;Danh Sách Hình Ảnh
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
                {lstImages && lstImages.length ? (
                    <ImageTable
                        list={lstImages}
                        setDeleteItems={setDeleteItems}
                    />
                ) : (
                    <ImageTable list={[]} setDeleteItems={setDeleteItems} />
                )}
            </div>
            {/*-- end container --*/}
        </section>
    );
};

export default ListTrashImages;
