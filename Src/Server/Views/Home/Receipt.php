<?php
$name = $_SESSION["user"]["NAME"];

if (!isset($data)) {
    $data = [];
}
?>

<link rel="stylesheet" href="/Src/Client/css/Login/Login.css">
<link rel="stylesheet" href="/Src/Client/css/User/UserOverview.css">
<link rel="stylesheet" href="/Src/Client/css/User/sign.css">


<main class="loginMain d-flex flex-column align-items-center">
    <div class="loginContent ">
        <section class="m-auto mt-5 mb-5 p-5 bg-white rounded-4 text-dark">
            <h1 class="text-center p-4 fw-bold">Hóa đơn thanh toán</h1>
            <div class="p-4">
                <h3>Xin chào <?php echo $name ?>, hóa đơn thanh toán của bạn là: <?php echo $data["receipt"]["ID_RECEIPT"] ?>
                </h3>
                <h4>Mọi thông tin chi tiết vui lòng vào trang <a href="Support">hỗ trợ để tra cứu</a></h4>

                <a href="/" class="btn btn-primary form-control mt-4 flex-fill">Quay về</a>
            </div>

        </section>