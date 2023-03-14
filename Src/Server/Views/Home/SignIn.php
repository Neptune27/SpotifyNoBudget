<link rel="stylesheet" href="/Src/Client/css/Login/Login.css">
<link rel="stylesheet" href="/Src/Client/css/User/UserOverview.css">
<link rel="stylesheet" href="/Src/Client/css/User/sign.css">

<script src="/Src/Client/js/Premium/sign.js" defer></script>


<main class="loginContent ">
    <section class="m-auto mt-5 mb-5 bg-white rounded-4 text-dark">
        <h1 class="text-center p-4 fw-bold">Đăng nhập</h1>

        <form action="" onsubmit="validate(event)" id="signInForm" class="p-4 needs-validation" novalidate>

            <div class="mt-4 has-validation">
                <label for="email" class="h5">Địa chỉ email hoặc tên tài khoản</label>
                <input type="text" name="sign" class="form-control flex-fill mb-0"
                       placeholder="Địa chỉ email hoặc tên tài khoản" id="email" required>
                <div class="invalid-feedback">
                    Vui lòng nhập email hoặc tên tài khoản.
                </div>
            </div>
            <div class="mt-4">
                <label for="password" class="h5">Mật khẩu</label>
                <input type="password" name="sign" class="form-control flex-fill mb-0"
                       placeholder="Nhập mật khẩu của bạn" id="password" required>
                <div class="invalid-feedback">
                    Vui lòng nhập mật khẩu.
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <button type="submit" class="btn-sign rounded-5 text-break w-100px mt-5">Đăng nhập</button>
            </div>
            <div class="text-center m-2 pb-2">Bạn chưa tài khoản? <a href="SignUp">Đăng kí</a>.</div>
        </form>
    </section>
</main>
