import {toast} from "react-toastify"
import axios from "axios"
import Swal from "sweetalert2"

let authToken = localStorage.getItem("rjDeveloper")
export const getData = async (base_url, url, type, dataParams = {}, isToken = false, isLoader = true, isHeaderJson = false, default_token = null) => {
    if (isLoader) {
        loader(true)
    }
    let header = {}
    if (isToken && default_token) {
        header = {headers: {Authorization: `Bearer ${default_token}`}}
        if (isHeaderJson) {
            header = {
                headers: {
                    "Access-Control-Allow-Origin": "http://localhost:3000",
                    "Access-Control-Allow-Credentials": "true",
                    "Content-Type": "application/json; charset=utf-8",
                    Authorization: `Bearer ${default_token}`,
                    Accept: "*/*",
                    // "Accept-Encoding": "gzip, deflate, br",
                    // "Access-Control-Allow-Origin" : "*/*",
                    // Connection: "keep-alive"
                }
            }
        }
    } else if (isToken) {
        header = {
            headers: {
                Authorization: `Bearer ${authToken}`,
                "Access-Control-Allow-Origin": "http://localhost:3000"
            }
        }
        if (isHeaderJson) {
            header = {
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    Authorization: `Bearer ${authToken}`,
                    Accept: "*/*",
                    // "Accept-Encoding": "gzip, deflate, br",
                    "Access-Control-Allow-Origin": "*/*",
                    // 'Access-Control-Allow-Origin':'http://localhost:3000',
                    "Access-Control-Allow-Credentials": "true",
                    // Connection: "keep-alive"
                }
            }
        }
    }

    if (type === "post") {
        let formData
        if (isHeaderJson) {
            formData = dataParams
        } else {
            formData = new URLSearchParams()
            for (let key in dataParams) {
                formData.append(key, dataParams[key])
            }
        }
        try {
            const {
                data,
                status
            } = isToken ? await axios.post(base_url + url, formData, header) : await axios.post(base_url + url, formData)
            loader()
            if (status === 200) {
                for (let key in data.messages) {
                    toast.success(data.messages[key])
                }
                return {"status": status, "data": data}
            }

        }
        catch (e) {
            loader()
            if (e.response?.["status"] === 403) {
                if (e.response?.data["errors"]?.["verify_code"]) {
                    return {"status": 403, "error": e.response?.data["errors"]}
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "خطای دسترسی",
                        text: "شما به این بخش دسترسی ندارید",
                    })
                }
            }
            else if (e.response?.["status"] === 400) {
                return {"status": 400, "error": e.response?.data["errors"]}
            }
            else if (e.response?.["status"] === 404) {
                window.location.replace("/404")
                // } else if (e.response?.data['status'] > 404 && e.response?.data['status'] < 500) {
                //     for (let key in e.response?.data.messages) {
                //         toast.error(e.response?.data.messages[key])
                //     }
            }
            else if (e.response?.["status"] === 500 || e.response?.["status"] === 503) {
                Swal.fire({
                    icon: "error",
                    title: "خطای سرور",
                    text: "خطای ناخواسته ای پیش آمده است",
                })
            }
        }

    } else {
        let formData = "?"

        if (Object.keys(dataParams).length === 0 && dataParams.constructor === Object) {
            formData = ""
        }
        for (let key in dataParams) {
            formData += formData.slice(-1) === "?" ? `${key}=${dataParams[key]}` : `&${key}=${dataParams[key]}`
        }

        try {
            const {
                data,
                status
            } = isToken ? await axios.get(base_url + url + formData, header) : await axios.get(base_url + url + formData)
            loader()
            if (status === 200) {
                for (let key in data.messages) {
                    toast.success(data.messages[key])
                }
                return {"status": status, "data": data}
            } else {
                toast.error("خطای ناخواسته ای پیش آمد")
                return false
            }
        } catch (e) {

            loader()
            if (e.message === "Network Error") {
                Swal.fire({
                    icon: "error",
                    title: "لطفا اتصال اینترنت را بررسی فرمایید",
                    allowOutsideClick: false,
                })
            }
            else if (e.response?.["status"] === 400) {
                return {"status": 400, "error": e.response?.data["errors"]}
            }
            else if (e.response?.["status"] === 404) {
                window.location.replace("/404")
                // } else if (e.response?.data['status'] > 404 && e.response?.data['status'] < 500) {
                //     for (let key in e.response?.data.messages) {
                //         toast.error(e.response?.data.messages[key])
                //     }
            }
            else if (e.response?.["status"] === 500 || e.response?.["status"] === 503) {
                Swal.fire({
                    icon: "error",
                    title: "خطای سرور",
                    text: "خطای ناخواسته ای پیش آمده است",
                })
            }
        }

    }
}

export const loader = (state = false) => {

    try {
        state ? document.getElementById("loader").classList.remove("hidden")
            : document.getElementById("loader").classList.add("hidden")
    } catch (e) {
        console.log(e)
    }

}

export const setTitle = (title) => {
    document.title = title
}
// Mobile Number regex
export const mobileRegex = (mobile) => {
    let numRegex = /^(\+98|0)9\d{9}$/

    if (!numRegex.test(mobile)) {
        Swal.fire({
            position: "center",
            icon: "error",
            title: "شماره موبایل نامعتبر است",
            showConfirmButton: false,
            timer: 1500
        })
        return false
    }
}

export const mobileRegexInput = (mobile) => {
    let numRegex = /^(\+98|0)9\d{9}$/
    if (mobile === "" || !numRegex.test(mobile)) {
        return false
    }
}

// Email Address regex
export const emailRegex = (email) => {
    let emailRgx = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
    if (email === "" || !emailRgx.test(email)) {
        Swal.fire({
            position: "center",
            icon: "error",
            title: "آدرس ایمیل نامعتبر است",
            showConfirmButton: false,
            timer: 1500
        })
        // toast.error("Invalid email address");
        return false
    }
}

// success Swal
// Swal.fire({
//     position: 'top-end',
//     icon: 'success',
//     title: 'Your work has been saved',
//     showConfirmButton: false,
//     timer: 1500
// })