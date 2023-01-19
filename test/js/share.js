//페이스북 공유
function shareFacebook() {
    var sendUrl = "https://sheepyis.github.io/Programming-Camp/test/language.html"; // 전달할 URL
    window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
}

//카카오톡 공유
function sendLink() {
    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
            title: '프로그래밍 언어 테스트',
            description: '#2023 #한성대 #컴퓨터공학부 #동계 프로그래밍 캠프',
            imageUrl: './image/main.png',
            link: {
                mobileWebUrl: 'https://sheepyis.github.io/Programming-Camp/test/language.html',
                webUrl: 'https://sheepyis.github.io/Programming-Camp/test/language.html',
            },
        },
        buttons: [
            {
                title: '프로그래밍 언어 만나러 가기',
                link: {
                    mobileWebUrl: 'https://sheepyis.github.io/Programming-Camp/test/language.html',
                    webUrl: 'https://sheepyis.github.io/Programming-Camp/test/language.html',
                },
            },
        ],
    })
}

//클립보드에 복사
function clip() {

    var url = 'https://sheepyis.github.io/Programming-Camp/test/language.html';
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    textarea.value = url;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    alert("클립보드에 복사되었습니다.")
}