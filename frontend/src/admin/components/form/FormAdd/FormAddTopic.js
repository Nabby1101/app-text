import { FastField, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import {
    getTopics,
    storeTopic,
    storeTopicAndContinue,
} from "../../../../redux/actions/topicActions";
import AddField from "../../add/AddField";
import MultiSelectField from "../../add/MultiSelectField";
import SelectField from "../../add/SelectField";

const FormAddTopic = () => {
    const dispatch = useDispatch();

    const [topic, setTopic] = useState([]);
    const [save, setSave] = useState("true");

    const lstTopic = useSelector((state) => state.topic.topics);

    const initialValues = {
        name: "",
        parentTopic: "",
        status: "1",
    };

    const setSelectTopic = () => {
        lstTopic.Topics.forEach((value) => {
            let objTopic = { value: value._id, label: value.name };
            setTopic((oldVal) => [...oldVal, objTopic]);
        });
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min("3", "Tên chủ đề tối bài viết thiểu 3 kí tự")
            .max(100, "Tên chủ đề tối bài viết đa 100 kí tự")
            .required("Bạn phải nhập tên chủ đề bài viết"),
        status: Yup.string().required(
            "Bạn phải chọn trạng thái cho chủ đề bài viết"
        ),
    });

    useEffect(() => {
        document.title = "Manage Topics";
        dispatch(getTopics());

        setSelectTopic();

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
                    dispatch(
                        storeTopic({
                            name: values.name,
                            parentTopic: values.parentTopic,
                            status: values.status,
                        })
                    );
                } else {
                    dispatch(
                        storeTopicAndContinue({
                            name: values.name,
                            parentTopic: values.parentTopic,
                            status: values.status,
                        })
                    );
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
                                                <h2>Thêm Chủ Đề</h2>
                                            </div>
                                        </div>
                                        {/* end col */}
                                        <div className="col-md-6">
                                            <div className="breadcrumb-wrapper mb-30">
                                                <nav aria-label="breadcrumb">
                                                    <Link
                                                        to={`/admin/topics`}
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
                                                    label="Tên Chủ Đề"
                                                    name="name"
                                                    component={AddField}
                                                    placeholder="Nhập Tên Chủ Đề"
                                                />
                                                {/* end input */}
                                                <Field
                                                    name="parentTopic"
                                                    label="Chủ Đề Cha"
                                                    component={MultiSelectField}
                                                    placeholder="Chọn chủ đề cha..."
                                                    id="parentTopic"

                                                    options={topic}
                                                    
                                                    // options={[
                                                    //     {
                                                    //         value: "0",
                                                    //         label: "NEWS",
                                                    //     },
                                                    //     {
                                                    //         value: "1",
                                                    //         label: "GOODS",
                                                    //     },
                                                    //     {
                                                    //         value: "2",
                                                    //         label: "HOT",
                                                    //     },
                                                    //     {
                                                    //         value: "2",
                                                    //         label: "SOFTWARE",
                                                    //     },{
                                                    //         value: "2",
                                                    //         label: "EVENT",
                                                    //     }
                                                    // ]}
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

export default FormAddTopic;
