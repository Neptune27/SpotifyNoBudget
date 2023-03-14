<div class="p-4 flex-grow-1 flex-shrink-1 divChildMarginBottom" style="background: white; color: black;">
    <h1>Chỉnh sửa hồ sơ</h1>

    <div>
        <span id="Email">Email</span>
        <input type="text" class="form-control"  aria-label="Email" aria-describedby="passwordText" >
    </div>

    <div>
        <span id="passwordText">Password</span>
        <input type="text" class="form-control disabled"  aria-label="Password" aria-describedby="passwordText" disabled readonly>
    </div>

    <div>
        <span id="sexType">Giới Tính</span>
        <select class="form-select" id="inputSex">
            <option selected>Chọn...</option>
            <option value="1">Nam</option>
            <option value="2">Nữ</option>
            <option value="3">Không muốn nói</option>
        </select>
    </div>

    <div>
        <span id="birthDate">Ngày sinh</span>
        <div class="d-flex gap-2">
            <input class="form-control" type="number" placeholder="Ngày">
            <select class="form-select" id="input">
                <option selected>Tháng...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
            </select>
            <input class="form-control" type="number" placeholder="Năm">
        </div>
    </div>

    <div>
        <span id="location">Quốc gia hoặc khu vực</span>
        <select class="form-select" id="inputLocation" disabled readonly>
            <option selected>Việt Nam</option>
        </select>
    </div>

    <div class="d-flex gap-2 p-2" style="justify-content: flex-end; border-top: 1px gray solid">
        <button class="btn btn-outline-dark rounded-2">Hủy</button>
        <button class="btn btn-success rounded-2">Lưu hồ sơ</button>
    </div>

</div>
