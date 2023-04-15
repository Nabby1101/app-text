import moment from 'moment';
import React, { useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
    CONTACT_DELETE_RESET,
    CONTACT_DESTROY_RESET,
    CONTACT_RESTORE_RESET,
    CONTACT_STATUS_RESET,
} from '../../../constants/contactConstant';
import {
    listContact,
    listTrashContact,
} from '../../../redux/actions/contactAction';
import './style.scss';

const ContactTable = (props) => {
    const list = props.list;
    const dispatch = useDispatch();
    let { url } = useRouteMatch();
    const [itemsChecked, setItemsChecked] = useState([]);
    const [activePage, setCurrentPage] = useState(1);

    const handelContact = useSelector((state) => state.contact);

    const {
        error: errorHandle,
        active: activeContact,
        trash: pushContactToTrash,
        delete: deleteContact,
        restore: restoreContact,
    } = handelContact;

    const indexOfLastTodo = activePage * 5;

    const indexOfFirstTodo = indexOfLastTodo - 5;

    var currentTodos = [];
    if (list && list.length !== 0) {
        currentTodos = list.slice(indexOfFirstTodo, indexOfLastTodo);
    }

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const isChecked = (e, id) => {
        const checked = e.target.checked;
        if (checked) {
            setItemsChecked((oldval) => [...oldval, id]);
        } else {
            setItemsChecked(
                itemsChecked.filter((item) => {
                    return item !== id;
                })
            );
        }
    };

    useEffect(() => {
        if (errorHandle && errorHandle.length !== 0) {
            toast.error(errorHandle);
        }

        if (activeContact && activeContact === true) {
            dispatch(listContact());
            dispatch({ type: CONTACT_STATUS_RESET });
        }

        if (pushContactToTrash && pushContactToTrash === true) {
            var inputs = document.querySelectorAll('#checkbox-1');
            for (var i = 0; i < inputs.length; i++) {
                inputs[i].checked = false;
            }
            setItemsChecked([]);
            dispatch(listContact());
            dispatch({ type: CONTACT_DELETE_RESET });
        }

        if (deleteContact && deleteContact === true) {
            var inputsTrash = document.querySelectorAll('#checkbox-1');
            for (var j = 0; j < inputsTrash.length; j++) {
                inputsTrash[j].checked = false;
            }
            setItemsChecked([]);
            dispatch(listTrashContact());
            dispatch({ type: CONTACT_DESTROY_RESET });
        }

        if (restoreContact && restoreContact === true) {
            var inputTrash = document.querySelectorAll('#checkbox-1');
            for (var k = 0; k < inputTrash.length; k++) {
                inputTrash[k].checked = false;
            }
            setItemsChecked([]);
            dispatch(listTrashContact());
            dispatch({ type: CONTACT_RESTORE_RESET });
        }

        props.setDeleteItems(itemsChecked);
    }, [
        activeContact,
        deleteContact,
        dispatch,
        errorHandle,
        itemsChecked,
        props,
        pushContactToTrash,
        restoreContact,
    ]);

    return (
        <div className="tables-wrapper">
            <div className="row">
                <div className="col-lg-12">
                    <div className="card-style mb-30">
                        <div className="table-wrapper table-responsive">
                            <table className="table table-bordered text-center">
                                <thead>
                                    <tr>
                                        <th>
                                            <h6>#</h6>
                                        </th>
                                        <th>
                                            <h6>Tên Khách Hàng</h6>
                                        </th>
                                        <th>
                                            <h6>Email</h6>
                                        </th>
                                        <th>
                                            <h6>Vấn Đề</h6>
                                        </th>
                                        <th>
                                            <h6>Phản Hồi</h6>
                                        </th>
                                        <th>
                                            <h6>Thời Điểm Phản Hồi</h6>
                                        </th>
                                        {url === '/admin/contacts/trash' ? (
                                            <th>
                                                <h6>Thời Điểm Xóa</h6>
                                            </th>
                                        ) : (
                                            <th>
                                                <h6>Chức Năng</h6>
                                            </th>
                                        )}
                                    </tr>
                                    {/*-- end table row--*/}
                                </thead>
                                {currentTodos.length === 0 ? (
                                    <p className="text-center">
                                        Không Có Vấn Đề Nào Cả
                                    </p>
                                ) : (
                                    <tbody>
                                        {currentTodos.map((value, key) => {
                                            return (
                                                <tr key={key} id={value._id}>
                                                    <td>
                                                        <div className="check-input-primary">
                                                            <input
                                                                className="form-check-input check-admin"
                                                                type="checkbox"
                                                                id="checkbox-1"
                                                                onClick={(e) =>
                                                                    isChecked(
                                                                        e,
                                                                        value._id
                                                                    )
                                                                }
                                                            />
                                                        </div>
                                                    </td>
                                                    <td className="min-width">
                                                        <p>{value.name}</p>
                                                    </td>
                                                    <td className="min-width">
                                                        <p>{value.email}</p>
                                                    </td>
                                                    <td className="min-width">
                                                        <p>{value.message}</p>
                                                    </td>
                                                    <td className="min-width">
                                                        <p>{value.reply}</p>
                                                    </td>
                                                    <td className="min-width">
                                                        <p>
                                                            {moment(
                                                                value.repliedAt
                                                            )
                                                                .utc()
                                                                .format(
                                                                    'DD-MM-YYYY HH:ss'
                                                                )}
                                                        </p>
                                                    </td>
                                                    {value.deleted === false ? (
                                                        <td>
                                                            <div className="action">
                                                                <Link
                                                                    to={`${url}/${value._id}`}
                                                                    className="text-primary"
                                                                    title="Edit"
                                                                >
                                                                    <p className='text-center' style={{color: '#FF00E2'}}>Chỉnh Sửa</p>
                                                                    <i className="fas fa-pen-square"></i>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    ) : (
                                                        <td className="min-width">
                                                            <p>
                                                                {moment(
                                                                    value.deletedAt
                                                                )
                                                                    .utc()
                                                                    .format(
                                                                        'DD-MM-YYYY HH:ss'
                                                                    )}
                                                            </p>
                                                        </td>
                                                    )}
                                                </tr>
                                            );
                                        })}
                                        {/*-- end table row --*/}
                                    </tbody>
                                )}
                            </table>
                            {/*-- end table --*/}
                            <Pagination
                                itemClass="page-item"
                                linkClass="page-link"
                                activePage={activePage}
                                itemsCountPerPage={5}
                                totalItemsCount={list ? list.length : 0}
                                pageRangeDisplayed={5}
                                onChange={handlePageChange}
                            />
                        </div>
                    </div>
                    {/*-- end card --*/}
                </div>
                {/*-- end col --*/}
            </div>
            {/*-- end row --*/}
        </div>
    );
};

export default ContactTable;
