<?php
if (!isset($data)) {
    $data=[];
}

$havePremium = $_SESSION["user"]["HAVE_PREMIUM"];
$name = $_SESSION["user"]["NAME"];
$username = $_SESSION["user"]["USERNAME"];
$moneyAmount = 0;
if ($_GET["type"] == 0) {
    $moneyAmount = "6.000 ₫";
}
if ($_GET["type"] == 1) {
    $moneyAmount = "59.000 ₫";
}
if ($_GET["type"] == 2) {
    $moneyAmount = "29.500 ₫";
}

?>

<link rel="stylesheet" href="/Src/Client/css/Login/Login.css">
<link rel="stylesheet" href="/Src/Client/css/User/UserOverview.css">
<link rel="stylesheet" href="/Src/Client/css/User/sign.css">


<main class="loginMain d-flex flex-column align-items-center">
    <div class="loginContent ">
        <section class="m-auto mt-5 mb-5 p-5 bg-white rounded-4 text-dark">
            <?php
            if ($havePremium === 1) {
                echo <<<HUH
                    <h1 class="text-center p-4 fw-bold">Bạn đã có Premium</h1>
                    <div class="p-4">
                        <h3>Xin chào {$name}, bạn đã kích hoạt Premium, vào Play để chơi nhạc. </h3>
                    </div>
                    <div class="d-flex justify-content-center">
                        <a href="/Play" class="btn btn-primary p-3 text-break w-100px mb-4">Vào Play</a>
                    </div>
                HUH;
            }
            else {
                echo <<<WUR
                    <h1 class="text-center p-4 fw-bold">Bạn chưa có Premium</h1>
                    <div class="p-4">
                        <h3>Xin chào {$name}, vui lòng đăng ký Premium để nghe nhạc.</h3>
                        <h4>Để đăng ký, bạn hãy chuyển khoản đến:</h4>
                        <div class="mt-4">
                            <label class="h5">Ngân hàng</label>
                            <input type="text" name="sign" class="form-control flex-fill mb-0"
                                   value="TP Bank" disabled>
                        </div>
                        <div class="mt-4">
                            <label class="h5">Số tài khoản</label>
                            <input type="text" name="sign" class="form-control flex-fill mb-0"
                                   value="123456789" disabled>
                        </div>
                        <div class="mt-4">
                            <label class="h5">Tên người nhận</label>
                            <input type="text" name="sign" class="form-control flex-fill mb-0"
                                   value="VO MINH TRI" disabled>
                        </div>
                        <div class="mt-4">
                            <label class="h5">Số tiền</label>
                            <input type="text" name="sign" class="form-control flex-fill mb-0"
                                   value="{$moneyAmount}" disabled>
                        </div>
                        <div class="mt-4">
                            <label class="h5">Nội dung</label>
                            <input type="text" name="sign" class="form-control flex-fill mb-0"
                                   value="{$username} {$_GET["type"]}" disabled>
                        </div>
                        <a href="Receipt?type={$_GET['type']}" class="btn btn-primary form-control mt-4 flex-fill">Xác nhận</a>
                    </div>
                WUR;
            }
            ?>

        </section>
    </div>
</main>
