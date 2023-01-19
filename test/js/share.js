//페이스북 공유
function shareFacebook() {
    var sendUrl = "https://sheepyis.github.io/2022-Programming-Camp/test/language.html"; // 전달할 URL
    window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
}

//카카오톡 공유
function sendLink() {
    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
            title: '프로그래밍 언어 테스트',    //카카오톡 전송 시 제목
            description: '#2023 #한성대 #컴퓨터공학부 #동계 프로그래밍 캠프',   //카카오톡 전송 시 설명에 넣을 문구
            imageUrl: './image/main.png',
            link: {
                mobileWebUrl: 'https://sheepyis.github.io/2022-Programming-Camp/test/language.html',
                webUrl: 'https://sheepyis.github.io/2022-Programming-Camp/test/language.html',
            },
        },
        buttons: [
            {
                title: '프로그래밍 언어 만나러 가기', //카카오톡 전송 시 버튼에 넣을 문구
                link: {
                    mobileWebUrl: 'https://sheepyis.github.io/2022-Programming-Camp/test/language.html',
                    webUrl: 'https://sheepyis.github.io/2022-Programming-Camp/test/language.html',
                },
            },
        ],
    })
}

//클립보드에 복사
function clip() {

    var url = 'https://sheepyis.github.io/2022-Programming-Camp/test/language.html';
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    textarea.value = url;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    alert("클립보드에 복사되었습니다.")
}