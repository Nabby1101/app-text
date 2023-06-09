import { FastField, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import {
    storePage,
    storePageAndContinue,
} from "../../../../redux/actions/pageActions";
import { getTopics } from "../../../../redux/actions/topicActions";
import AddField from "../../add/AddField";
import CKEditorField from "../../add/CKEditorField";
import SelectField from "../../add/SelectField";
import "../style.scss";

const FormAddPage = () => {
    const dispatch = useDispatch();

    const [save, setSave] = useState("true");

    const initialValues = {
        title: "",
        image: "",
        content: "",
        createdBy: "Biên tập viên Azey",
        status: "1",
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .min(5, "Tên bài viết tối thiểu 5 kí tự")
            .required("Bạn phải nhập tên bài viết"),
        content: Yup.string()
            .min(1000, "Nội dung của bài viết tối thiểu 1000 kí tự")
            .required("Bạn phải nhập nội dung cho bài viết"),
        createdBy: Yup.string().required(
            "Bạn phải nhập tên người tạo bài viết"
        ),
        status: Yup.string().required("Bạn phải chọn trạng thái cho bài viết"),
    });

    useEffect(() => {
        document.title = "Manage Pages";
        dispatch(getTopics());

        // notify();
        // setTimeout(clearMess, 5000);
        // history.push('/');

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                if (save === "true") {
                    dispatch(storePage(values));
                } else {
                    dispatch(storePageAndContinue(values));
                }
            }}
        >
            {(formikProps) => {
                // eslint-disable-next-line no-unused-vars
                const { values } = formikProps;
                return (
                    <section className="tab-components">
                        <Form>
                            <div className="container-fluid">
                                {/* ========== title-wrapper start ========== */}
                                <div className="title-wrapper pt-30">
                                    <div className="row align-items-center">
                                        <div className="col-md-6">
                                            <div className="title mb-30">
                                                <h2>
                                                    Thêm Trang Thông Tin Web
                                                </h2>
                                            </div>
                                        </div>
                                        {/* end col */}
                                        <div className="col-md-6">
                                            <div className="breadcrumb-wrapper mb-30">
                                                <nav aria-label="breadcrumb">
                                                    <Link
                                                        to={`/admin/pages`}
                                                        className="main-btn active-btn btn-hover"
                                                    >
                                                        <i className="fa fa-chevron-circle-left"></i>
                                                        &ensp;Quay Lại Danh Sách
                                                    </Link>
                                                    &nbsp;
                                                    <button
                                                        type="submit"
                                                        className="main-btn success-btn btn-hover"
                                                        onClick={() =>
                                                            setSave("true")
                                                        }
                                                    >
                                                        <i className="fa fa-save"></i>
                                                        &ensp;Lưu
                                                    </button>
                                                    &nbsp;
                                                    <button
                                                        type="submit"
                                                        className="main-btn info-btn btn-hover"
                                                        onClick={() =>
                                                            setSave("false")
                                                        }
                                                    >
                                                        <i className="fa fa-save"></i>
                                                        &ensp;Lưu và tiếp tục
                                                    </button>
                                                </nav>
                                            </div>
                                        </div>
                                        {/* end col */}
                                    </div>
                                    {/* end row */}
                                </div>
                                {/* ========== title-wrapper end ========== */}
                                {/* ========== form-elements-wrapper start ========== */}
                                <div className="form-elements-wrapper">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            {/* input style start */}
                                            <div className="card-style mb-30">
                                                <FastField
                                                    label="Tiêu Đề"
                                                    name="title"
                                                    component={AddField}
                                                    placeholder="Nhập Tiêu Đề"
                                                />
                                                {/* end input */}
                                                <FastField
                                                    label="Nội Dung"
                                                    component={CKEditorField}
                                                    name="content"
                                                />
                                                {/* end input */}
                                                <FastField
                                                    label="Người Tạo"
                                                    name="createdBy"
                                                    component={AddField}
                                                    placeholder="Nhập Tên Người Tạo"
                                                />
                                                {/* end input */}
                                                <FastField
                                                    name="status"
                                                    label="Trạng Thái"
                                                    component={SelectField}
                                                    placeholder="Chọn Trạng Thái"
                                                    id="status"
                                                    options={[
                                                        {
                                                            value: "1",
                                                            label: "Hiện",
                                                        },
                                                        {
                                                            value: "0",
                                                            label: "Ẩn",
                                                        },
                                                    ]}
                                                />
                                                {/* end input */}
                                            </div>
                                            {/* end card */}
                                            {/* ======= input style end ======= */}
                                        </div>
                                        {/* end col */}
                                    </div>
                                    {/* end row */}
                                </div>

                                {/* ========== form-elements-wrapper end ========== */}
                            </div>
                            {/* end container */}
                        </Form>
                    </section>
                );
            }}
        </Formik>
    );
};

export default FormAddPage;
