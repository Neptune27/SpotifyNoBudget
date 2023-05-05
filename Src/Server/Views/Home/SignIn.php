<link rel="stylesheet" href="/Src/Client/css/Login/Login.css">
<link rel="stylesheet" href="/Src/Client/css/User/UserOverview.css">
<link rel="stylesheet" href="/Src/Client/css/User/sign.css">

<script src="/Src/Client/js/Premium/sign.js" defer></script>
<style>
    .errorMsg {
        color: red;
    }
</style>

<main class="loginMain d-flex flex-column align-items-center">
    <div class="loginContent ">
        <section class="m-auto mt-5 mb-5 bg-white rounded-4 text-dark">
            <h1 class="text-center p-4 fw-bold">Đăng nhập</h1>
            <h3 class="p-4 text-center fw-bold errorMsg" id="error" style="display: none"></h3>
            <form action="" onsubmit="validate(event)" id="signInForm" class="p-4 needs-validation">

                <div class="mt-4 has-validation">
                    <label for="email" class="h5">Tên tài khoản</label>
                    <input type="text" name="sign" class="form-control flex-fill mb-0"
                           placeholder="Địa chỉ email hoặc tên tài khoản" id="email">
                </div>
                <div class="mt-4">
                    <label for="password" class="h5">Mật khẩu</label>
                    <input type="password" name="sign" class="form-control flex-fill mb-0"
                           placeholder="Nhập mật khẩu của bạn" id="password" required>
                </div>
                <div class="d-flex justify-content-center">
                    <button type="submit" class="btn-sign rounded-5 text-break w-100px mt-5">Đăng nhập</button>
                </div>
                <div class="text-center m-2 pb-2">Bạn chưa tài khoản? <a href="SignUp">Đăng ký</a>.</div>
            </form>
        </section>
    </div>
</main>
