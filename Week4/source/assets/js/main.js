function myFunction() {
    var x = document.getElementsByClassName("form-control")[0];
    if (x.value == "") {
        console.log("hello");
    }
    x.value = x.value.toUpperCase();
}

function submit() {
    var phep_toan = document.getElementsByName("phep_toan");

    for (i = 0; i < phep_toan.length; i++) {
        if (phep_toan[i].checked) {
            phep_toan = phep_toan[i].value;
            break;
        }
        if (i + 1 == phep_toan.length) {
            document.getElementById("notification--content").innerHTML = "Chưa chọn phép tính ";
            return;
        }
    }

    var so_thu_nhat = document.getElementsByClassName("sothunhat__input")[0].value;
    var so_thu_hai = document.getElementsByClassName("sothuhai__input")[0].value;

    if (so_thu_nhat == "") {
        document.getElementById("notification--content").innerHTML = "Số thứ nhất chưa được nhập";
        return;
    }

    if (so_thu_hai == "") {
        document.getElementById("notification--content").innerHTML = "Số thứ hai chưa được nhập";
        return;
    }

    so_thu_nhat = parseFloat(so_thu_nhat);
    so_thu_nhat = parseFloat(so_thu_hai);

    var result = 0;

    switch (phep_toan) {
        case "+":
            result = so_thu_nhat + so_thu_hai;
            console.log(typeof (so_thu_hai));
            break;

        case "-":
            result = so_thu_nhat - so_thu_hai;
            break;

        case "*":
            result = so_thu_nhat * so_thu_hai;
            break;

        default:
            if (so_thu_hai == 0) {
                document.getElementsByClassName("ketqua__input")[0].value = "";
                document.getElementById("notification--content").innerHTML = "Số thứ hai trong phép chia không được bằng 0 !!!";
                return;
            }
            result = so_thu_nhat / so_thu_hai;
            break;
    }
    document.getElementById("notification--content").innerHTML = "";
    document.getElementsByClassName("ketqua__input")[0].value = result.toString();
}

function moveOverInput(class_name) {
    const val = document.getElementsByClassName(class_name)[0].value
    if (val == "") {
        document.getElementById("notification--content").innerHTML = "Số chưa được nhập vào thành công";
    }
}