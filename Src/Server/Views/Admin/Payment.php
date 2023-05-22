<link rel="stylesheet" href="/Src/Client/css/GlobalStyle.css">
<link rel="stylesheet" href="/Src/Client/css/Admin/AdminHeader.css">
<link rel="stylesheet" href="/Src/Client/css/ResGrid.css">
<link rel="stylesheet" href="/Src/Client/css/User/UserOverview.css">
<link rel="stylesheet" href="/Src/Client/css/Breadcrumb.css">
<link rel="stylesheet" href="/Src/Client/css/Login/Login.css">

<?php
if (!isset($data)) {
    $data=[];
}
print_r($data);
?>

<main style="min-height: 100vh; position: relative;">


    <div style="padding: 2rem 0">

        <div class="loginMain d-flex flex-column align-items-center">
            <div class="loginContent">
                <section class="m-auto bg-white p-4 rounded-4 text-dark">
                    <h1 class="text-center p-4 fw-bold">Bảng thanh toán</h1>
                    <table class="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">User ID</th>
                            <th scope="col">Username</th>
                            <th scope="col">Total</th>
                            <th scope="col">Status</th>
                            <th scope="col">Accept</th>
                            <th scope="col">Delete</th>
                        </tr>
                        </thead>
                        <tbody>

                        <?php
                        foreach ($data["receipt"] as $index => $datum) {
                            $status = "Đang xử lý";
                            $accept = "";
                            $delete = "";
                            if ($datum["IS_VERIFY"] == 0) {
                                $accept = <<<wut
                                    <a href="/Admin/PaymentAccept/{$datum["ID_RECEIPT"]}" class="btn btn-primary">Accept</a>
                                wut;
                                $delete = <<<wut
                                    <a href="/Admin/PaymentDelete/{$datum["ID_RECEIPT"]}" class="btn btn-danger">Delete</a>
                                wut;
                            }
                            else if ($datum["IS_VERIFY"] == 1) {
                                $status = "Đã xác nhận";
                            }
                            else {
                                $status = "Đã hủy";
                            }
                            echo <<<JIT
                            <tr>
                                <th scope="row">{$datum["ID_RECEIPT"]}</th>
                                <td>{$datum["ID_USER"]}</td>
                                <td>{$datum["USERNAME"]}</td>
                                <td>{$datum["TOTAL_PRICE"]}</td>
                                <td>{$status}</td>
                                <td>{$accept}</td>
                                <td>{$delete}</td>
                            </tr>
                            JIT;

                        }

                        ?>
                        </tbody>
                    </table>
                </section>
            </div>
        </div>


    </div>

</main>