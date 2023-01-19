const main=document.querySelector("#main");
const qna=document.querySelector("#qna");
const result=document.querySelector("#result");

const endPoint=9;

function start(){
    main.style.WebkiAnimation="fadeOut ls";
    main.style.animation="fadeOut ls";
    setTimeout(()=>{
        qna.style.WebkitAnimation="fadeIn ls";
        qna.style.animation="fadeIn ls";
        setTimeout(()=>{
            main.style.display="none";
            qna.style.display="block";
        }, 450);
        let qIdx=0;
        goNext(qIdx);
    }, 450);
}

function goNext(qIdx) {
    if(qIdx == endPoint) { //끝나면
        goResult(); //결과물 페이지로 전환
        return;
    }
    //질문박스 만들기
    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIdx].q;

    for(let i in qnaList[qIdx].a) { //답변이 있는 배열
        addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
    }

    // 진행률 표시
    var countstatusNum = document.querySelector('.countstatusNum');
    countstatusNum.innerHTML = (qIdx + 1) + "/" + endPoint; //남아 있는 숫자

    var statusBar = document.querySelector('.statusBar');
    statusBar.style.width = ((qIdx + 1)  /endPoint) * 100 + "%";
}
//누적되는 클릭
function addAnswer(answerText, qIdx, idx) {
    var a = document.querySelector('.aBox');
    var answer_btn = document.createElement('button');

    answer_btn.classList.add('answerList');
    answer_btn.classList.add('my-5');
    answer_btn.classList.add('py-3');
    answer_btn.classList.add('mx-auto');
    answer_btn.classList.add("fadeIn");

    a.appendChild(answer_btn);

    answer_btn.innerHTML = answerText;
    answer_btn.id = qnaList[qIdx].a[idx].type;

    answer_btn.addEventListener('click', function(e) { //클릭하면
        var children = document.querySelectorAll('.answerList');

        for(let i = 0; i<children.length; i++) {
            children[i].disabled = true;
            children[i].style.WebkkitAnimation = "fadeOut 0.5s";
            children[i].style.Animation = "fadeOut 0.5s";
        }

        setTimeout(()=>{
                //add idx to 'select' array
                //    select[qIdx] = idx;
                for(let i = 0; i < children.length; i++){
                    children[i].style.display = 'none';
                }
            //data.js를 수정
                //구별
                console.log(qIdx);
                console.log(e.target.id);

                switch(qIdx) {
                    case 0: //개발
                        if(e.target.id == "T") {
                           p[0].count++;
                           p[1].count++;
                           p[2].count++;
                           p[3].count++;
                           p[4].count++;
                           p[5].count++;
                           p[6].count++;
                           p[7].count++;
                           p[8].count++;
                        }
                    break;

                    case 1: //코드
                        if(e.target.id == "T") {
                           p[0].count++;
                           p[1].count++;
                           p[5].count++;
                           p[7].count++;
                           p[8].count++;
                        }else {
                           p[2].count++;
                           p[3].count++;
                           p[4].count++;
                           p[6].count++;
                        }
                        break; 

                    case 2: //에러
                        if(e.target.id == "T") {
                            p[2].count++;
                            p[3].count++;
                            p[5].count++;
                            p[6].count++;
                            p[7].count++;
                        }else {
                            p[0].count++;
                            p[1].count++;
                            p[4].count++;
                            p[8].count++;
                        }
                        break; 


                    case 3:    //팀플
                        if(e.target.id == "T") {
                            p[0].count++;
                            p[4].count++;
                            p[6].count++;
                            p[8].count++;
                        }else {
                            p[1].count++;
                            p[2].count++;
                            p[3].count++;
                            p[5].count++;
                            p[7].count++;
                        }
                        break;

                    case 4: //의견충돌
                        if(e.target.id == "T") {
                            p[1].count++;
                            p[2].count++;
                            p[3].count++;
                            p[6].count++;
                            p[7].count++;
                        }else {
                            p[0].count++;
                            p[4].count++;
                            p[5].count++;
                            p[8].count++;
                        }
                        break;


                    case 5: //포기
                        if(e.target.id == "T") {
                            p[0].count++;
                            p[3].count++;
                            p[4].count++;
                        }else {
                            p[1].count++;
                            p[2].count++;
                            p[5].count++;
                            p[6].count++;
                            p[7].count++;
                            p[8].count++;
                        }
                        break; 
                        
                    case 6: //일처리
                        if(e.target.id == "T") {
                            p[0].count++;
                            p[1].count++;
                            p[4].count++;
                            p[8].count++;
                        }else {
                            p[2].count++;
                            p[3].count++;
                            p[5].count++;
                            p[6].count++;
                            p[7].count++;
                        }
                        break;
                    case 7: //수상
                        if(e.target.id == "T") {
                            p[1].count++;
                            p[2].count++;
                            p[6].count++;
                        }else {
                            p[0].count++;
                            p[3].count++;
                            p[4].count++;
                            p[5].count++;
                            p[7].count++;
                            p[8].count++;
                        }
                        break;

                    case 8: //방법
                        if(e.target.id == "T") {
                            p[0].count++;
                            p[4].count++;
                            p[5].count++;
                            p[6].count++;
                        }else {
                            p[1].count++;
                            p[2].count++;
                            p[3].count++;
                            p[7].count++;
                            p[8].count++;
                        }
                        break;
                }


            for(let i = 0;  i < p.length; i++) {
                console.log(infoList[i].name + ":" + p[i].count);
            }
            goNext(++qIdx);
      }, 450);

    }, false);

}


function goResult(){
    qna.style.WebkitAnimation = "fadeOut 1s";//크롬애니매이션지원
    qna.style.animation = "fadeOut 1s";
    setTimeout(() => {
      result.style.WebkitAnimation = "fadeIn 1s";
      result.style.animation = "fadeIn 1s";
      setTimeout(() => {
        qna.style.display = "none";
        result.style.display = "block"
      }, 450)})
      setResult();
  }


function setResult(){
    max = p[0].count;

    for(let i = 0; i<p.length; i++) {
        if(max < p[i].count) {
            max = p[i].count;
        }
    }

    console.log(max); //최대값을 구했고

    max_idx = 0;
    for(let i = 0; i < p.length; i++) {
        if(max == p[i].count) {
            break;
        }
        max_idx++;
    }

    const resultName = document.querySelector('.resultName');
    resultName.innerHTML = infoList[max_idx].name;

    const resultTitle = document.querySelector('.resultTitle');
    resultTitle.innerHTML = infoList[max_idx].language;

    const resultImg = document.querySelector('#resultImg');

    const Image = document.createElement("img");
    Image.src = infoList[max_idx].img;
    resultImg.append(Image);


    const resultExplain = document.querySelector('.resultExplain');
    resultExplain.innerHTML = infoList[max_idx].explain;

    const resultProgram = document.querySelector('.resultProgram');
    resultProgram.innerHTML = infoList[max_idx].program;

    const resultGood=document.querySelector('.resultGood');
    resultGood.innerHTML=infoList[max_idx].good;

    const resultBad=document.querySelector('.resultBad');
    resultBad.innerHTML=infoList[max_idx].bad;

    let mbti_result = max;
    const mbti_real_result =infoList.find(name);
}