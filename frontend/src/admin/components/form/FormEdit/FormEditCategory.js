import { FastField, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import {
    getCategories,
    getCategory,
    updateCategory,
} from "../../../../redux/actions/categoryActions";
import AddField from "../../add/AddField";
import ImageField from "../../add/ImageField";
import MultiSelectField from "../../add/MultiSelectField";
import SelectField from "../../add/SelectField";

const FormEditCategory = (props) => {
    const dispatch = useDispatch();
    const id = props.match.params.id;

    const [cate, setCate] = useState([]);
    const [file, setFile] = useState([]);

    const set_category = useSelector((state) => state.category.category);
    const lstCate = useSelector((state) => state.category.categories);

    const initialValues = {
        name: "",
        image: "",
        parentCate: "",
        type: "0",
        status: "1",
    };

    const setSelectCate = () => {
        lstCate.Categories.forEach((value) => {
            let objCate = { value: value._id, label: value.name };
            setCate((oldVal) => [...oldVal, objCate]);
        });
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min("2", "Tên danh mục sản phẩm tối thiểu 2 kí tự")
            .max(100, "Tên danh mục sản phẩm tối đa 100 kí tự")
            .required("Bạn phải nhập tên danh mục sản phẩm"),
        parentCate: Yup.string().required("Bạn phải chọn danh mục cha"),
        type: Yup.string().required("Bạn phải chọn kiểu cho danh mục sản phẩm"),
        status: Yup.string().required(
            "Bạn phải chọn trạng thái cho danh mục sản phẩm"
        ),
    });

    useEffect(() => {
        document.title = "Manage Products";
        if (id) dispatch(getCategory(id));
        dispatch(getCategories());

        setSelectCate();

        // notify();
        // setTimeout(clearMess, 5000);
        // history.push('/');

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);


    console.log('set_category.image', set_category.image)

    return (
        <Formik
            enableReinitialize
            initialValues={set_category || initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                const value = {
                    name: values.name,
                    image: values.image,
                    parentCate: values.parentCate,
                    type: values.type,
                    status: values.status,
                };
                const formData = new FormData();
                for (let i = 0; i < file.length; i++) {
                    formData.append("image", file[i]);
                }
                formData.append("infos", JSON.stringify(value));
                dispatch(
                    updateCategory({
                        formData: formData,
                        id: props.match.params.id,
                    })
                );
            }}
        // enableReinitialize
        >
            {(formikProps) => {
                return (
                    <section className="tab-components">
                        <Form>
                            <div className="container-fluid">
                                {/* ========== title-wrapper start ========== */}
                                <div className="title-wrapper pt-30">
                                    <div className="row align-items-center">
                                        <div className="col-md-6">
                                            <div className="title mb-30">
                                                <h2>Chỉnh Sửa Danh Mục</h2>
                                            </div>
                                        </div>
                                        {/* end col */}
                                        <div className="col-md-6">
                                            <div className="breadcrumb-wrapper mb-30">
                                                <nav aria-label="breadcrumb">
                                                    <Link
                                                        to={`/admin/categories`}
                                                        className="main-btn active-btn btn-hover"
                                                    >
                                                        <i className="fa fa-chevron-circle-left"></i>
                                                        &ensp;Quay Lại Danh Sách
                                                    </Link>
                                                    &nbsp;
                                                    <button
                                                        type="submit"
                                                        className="main-btn success-btn btn-hover"
                                                    >
                                                        <i className="fa fa-save"></i>
                                                        &ensp;Cập Nhật
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
                                                    label="Tên Danh Mục"
                                                    name="name"
                                                    component={AddField}
                                                    value={set_category.name}
                                                />
                                                {/* end input */}
                                                <FastField
                                                    setFile={setFile}
                                                    name="image"
                                                    id="customFile"
                                                    component={ImageField}
                                                    data={set_category.image}
                                                />
                                                {/* end input */}
                                                <Field
                                                    name="parentCate"
                                                    label="Danh Mục Cha"
                                                    component={MultiSelectField}
                                                    placeholder="Chọn danh mục cha..."
                                                    id="parentCate"
                                                    options={cate}

                                                />
                                                {/* end input */}
                                                <FastField
                                                    name="type"
                                                    label="Phân Loại"
                                                    component={SelectField}
                                                    placeholder="Chọn phân loại..."
                                                    id="type"
                                                    options={[
                                                        {
                                                            value: "0",
                                                            label: "Tất cả",
                                                        },
                                                        {
                                                            value: "1",
                                                            label: "Trang Phục",
                                                        },
                                                        {
                                                            value: "2",
                                                            label: "Vật Phẩm Khác",
                                                        },
                                                        {
                                                            value: '3',
                                                            label: 'Quần Áo',
                                                        },
                                                        {
                                                            value: '4',
                                                            label: 'Đồ Đi Kèm',
                                                        },
                                                        {
                                                            value: '5',
                                                            label: 'Phụ Kiện Lẻ',
                                                        },
                                                        // {
                                                        //     value: "3",
                                                        //     label: "Đời Thường",
                                                        // },
                                                        // {
                                                        //     value: "4",
                                                        //     label: "Theo Truyện/Game/Anime",
                                                        // },
                                                        // {
                                                        //     value: "5",
                                                        //     label: "Phụ Kiện",
                                                        // },
                                                        // {
                                                        //     value: "6",
                                                        //     label: "Tóc Giả",
                                                        // },
                                                        // {
                                                        //     value: "7",
                                                        //     label: "Figure",
                                                        // },
                                                        // {
                                                        //     value: "8",
                                                        //     label: "Đồ Đi Kèm"
                                                        // },
                                                        // {
                                                        //     value: "9",
                                                        //     label: "Trang Phục Đời Thường"
                                                        // },
                                                        // {
                                                        //     value: "10",
                                                        //     label: "Trang Phục Khác"
                                                        // }
                                                    ]}
                                                />
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

export default FormEditCategory;
