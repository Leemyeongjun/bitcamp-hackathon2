
(function() {
    document.querySelector('#login-btn').addEventListener('click', function() {
        var id = encodeURIComponent(document.querySelector('#f-id').value);
        var password = encodeURIComponent(document.querySelector('#f-passowrd').value);

        fetch(`http://localhost:8080/members/${no}`, {
            method: 'PUT',
            headers: {
            'Content-type': 'application/x-www-form-urlencoded'
            },
            body: `id=${id}&password=${password}`
        })
        .then((response) => response.json())
        .then((obj) => {
            if (obj.status == "failure") {
            alert("학생 변경 오류!\n" + obj.data);
            return;
            }
            location.href = "index2.html";
        })
        .catch((err) => {
            alert("서버 요청 오류!");
            console.log(err);
        });
    });
})();