<link rel="stylesheet" href="/Src/Client/css/User/sign.css">
<link rel="stylesheet" href="/Src/Client/css/Login/Login.css">
<link rel="stylesheet" href="/Src/Client/css/User/UserOverview.css">

<script src="/Src/Client/js/Premium/sign.js" defer></script>

<main class="loginMain d-flex flex-column align-items-center">
    <div class="loginContent">
        <section class="m-auto mt-5 mb-5 bg-white rounded-4 text-dark">
            <h1 class="text-center p-4 fw-bold">Đăng ký</h1>

            <form action="" onsubmit="validateSignUp(event)" id="signUpForm" class="p-4 needs-validation" novalidate>
                <div class="mt-4">
                    <label class="h5" for="username">Tên tài khoản</label>
                    <input id="username" type=text class="form-control flex-fill mb-0 sign"
                           placeholder="Nhập tên tài khoản" required>
                    <div class="invalid-feedback">
                        Vui lòng nhập tên tài khoản.
                    </div>
                </div>
                <div class="mt-4">
                    <label class="h5">Địa chỉ email </label>
                    <input name="sign" type="email" class="form-control flex-fill mb-0 sign"
                           placeholder="Nhập địa chỉ email" pattern="\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                           required>
                    <div class="invalid-feedback">
                        Vui lòng nhập email dưới dạng user@mail.url.
                    </div>
                </div>
                <div class="mt-4">
                    <label for="password" class="h5">Mật khẩu</label>
                    <input id="password" type="password" class="form-control flex-fill mb-0 sign"
                           placeholder="Nhập mật khẩu" required>
                    <div class="invalid-feedback">
                        Vui lòng nhập mật khẩu.
                    </div>
                </div>
                <div class="mt-4">
                    <label for="name" class="h5">Tên</label>
                    <input id="name" type="text" class="form-control flex-fill mb-0 sign" placeholder="Nhập tên"
                           required>
                    <div class="invalid-feedback">
                        Vui lòng nhập tên.
                    </div>
                </div>
                <div class="mt-4">
                    <label for="birthDate" class="h5">Ngày sinh</label>
                    <input id="birthDate" name="sign" type="date" class="form-control flex-fill mb-0 sign"
                           placeholder="Nhập ngày sinh" required>
                    <div class="invalid-feedback">
                        Vui lòng nhập mật khẩu.
                    </div>
                </div>
                <div class="mt-4">
                    <h5>Giới tính</h5>
                    <label for="male" class="ms-4">Nam</label>
                    <input id="male" type="radio" name="sign" value="male" required>
                    <label for="female" class="ms-4">Nữ</label>
                    <input id="female" type="radio" name="sign" value="female" required>
                    <label for="other" class="ms-4">Khác</label>
                    <input id="other" type="radio" name="sign" value="Other" required>
                </div>
                <p class="text-center mt-4 text-size-16">Bằng việc nhấp vào nút Đăng ký, bạn đồng ý với
                    <a href="#">Điều khoản và điều kiện sử dụng</a> của Spotify.</p>
                <div class="d-flex justify-content-center">
                    <button class="btn-sign rounded-5 text-break w-100px" onclick="">Đăng kí</button>
                </div>
                <div class="text-center m-5 pb-5">Bạn có tài khoản? <a href="SignIn">Đăng nhập</a>.</div>
            </form>
        </section>

    </div>
</main>