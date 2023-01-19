const main=document.querySelector("#main");
const qna=document.querySelector("#qna");
const result=document.querySelector("#result");

const endPoint=9;   //문제 수 9개

function start(){   //시작하면 희미하게 보여지고, 사라지는 애니메이션 주기
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

function goNext(qIdx) { //질문 보고 답변 박스 클릭 시
    if(qIdx == endPoint) { //문제 수가 다 끝나면
        goResult(); //결과물 페이지로 전환
        return;
    }

    //질문박스 만들기
    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIdx].q;  //질문이 담겨있는 qnaList 배열 인덱스 값에 따라 보여주기

    for(let i in qnaList[qIdx].a) { //답변이 있는 배열
        addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
    }

    // 진행률 표시
    var statusBar = document.querySelector('.statusBar');   //상태 바로 보여주기
    statusBar.style.width = ((qIdx + 1)  /endPoint) * 100 + "%";    //상태 바를 9문제로 나누어 색이 차는 모습을 보여줌

    var countstatusNum = document.querySelector('.countstatusNum'); //진행한 문제 수와 전체 문제 수를 보여줌
    countstatusNum.innerHTML = (qIdx + 1) + "/" + endPoint; //남아 있는 숫자 표시
}

//누적되는 클릭
function addAnswer(answerText, qIdx, idx) {
    var a = document.querySelector('.aBox');    //답변 박스 만들기
    var answer_btn = document.createElement('button');  //답변 박스를 누르는 버튼

    answer_btn.classList.add('answerList');
    answer_btn.classList.add('my-5');
    answer_btn.classList.add('py-3');
    answer_btn.classList.add('mx-auto');
    answer_btn.classList.add("fadeIn");

    a.appendChild(answer_btn);

    answer_btn.innerHTML = answerText;
    answer_btn.id = qnaList[qIdx].a[idx].type;

    answer_btn.addEventListener('click', function(e) { //답변박스 버튼을 클릭하면
        var children = document.querySelectorAll('.answerList');

        for(let i = 0; i<children.length; i++) {    //답변 정보가 담긴 answerList 배열 인덱스 값에 따라 보여주기
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

                switch(qIdx) {  //질문의 인덱스 번호에 따라
                    case 0: //질문1. 개발에 관심있니?
                        if(e.target.id == "T") {    //qnaList의 type이 T인 것을 누르면
                            //개발 언어의 특징을 사람의 특성으로 비교했을 때, 해당되는 것만 count를 플러스 해주는 것으로 코드 구성함
                           p[0].count++; //Java의 count++
                           p[1].count++;    //C의 count++
                           p[2].count++;    //C++의 count++
                           p[3].count++;    //Javascript의 count++
                           p[4].count++;    //Python의 count++
                           p[5].count++;    //Kotlin의 count++
                           p[6].count++;    //C#의 count++
                           p[7].count++;    //SQL의 count++
                           p[8].count++;    //PHP의 count++
                        }
                    break;

                    case 1: //질문2. 코드는 주로 어떤 식으로 짜니?
                        if(e.target.id == "T") {    //qnaList의 type이 T인 것을 누르면
                           p[0].count++;    //Java의 count++
                           p[1].count++;    //C의 count++
                           p[5].count++;    //Kotlin의 count++
                           p[7].count++;    //SQL의 count++
                           p[8].count++;    //PHP의 count++
                        }else { //qnaList의 type이 F인 것을 누르면
                           p[2].count++;    //C++의 count++
                           p[3].count++;    //Javascript의 count++
                           p[4].count++;    //Python의 count++
                           p[6].count++;    //C#의 count++
                        }
                        break; 

                    case 2: //질문3. 에러 발생 시 어떤 식으로 해결하니?
                        if(e.target.id == "T") {    //qnaList의 type이 T인 것을 누르면
                            p[2].count++;   //C++의 count++
                            p[3].count++;   //Javascript의 count++
                            p[5].count++;   //Kotlin의 count++
                            p[6].count++;   //C#의 count++
                            p[7].count++;   //SQL의 count++
                        }else { //qnaList의 type이 F인 것을 누르면
                            p[0].count++;   //Java의 count++
                            p[1].count++;   //C의 count++
                            p[4].count++;   //Python의 count++
                            p[8].count++;   //PHP의 count++
                        }
                        break; 


                    case 3:    //질문4. 프로젝트를 어떻게 진행하고 싶니?
                        if(e.target.id == "T") {    //qnaList의 type이 T인 것을 누르면
                            p[0].count++;   //Java의 count++
                            p[4].count++;   //Python의 count++
                            p[6].count++;   //C#의 count++
                            p[8].count++;   //PHP의 count++
                        }else { //qnaList의 type이 F인 것을 누르면
                            p[1].count++;   //C의 count++
                            p[2].count++;   //C++의 count++
                            p[3].count++;   //Javascript의 count++
                            p[5].count++;   //Kotlin의 count++
                            p[7].count++;   //SQL의 count++
                        }
                        break;

                    case 4: //질문5. 팀플에서 의견 충돌이 생겼어. 어떻게 해결하니?
                        if(e.target.id == "T") {    //qnaList의 type이 T인 것을 누르면
                            p[1].count++;   //C의 count++
                            p[2].count++;   //C++의 count++
                            p[3].count++;   //Javascript의 count++
                            p[6].count++;   //C#의 count++
                            p[7].count++;   //SQL의 count++
                        }else { //qnaList의 type이 F인 것을 누르면
                            p[0].count++;   //Java의 count++
                            p[4].count++;   //Python의 count++
                            p[5].count++;   //Kotlin의 count++
                            p[8].count++;   //PHP의 count++
                        }
                        break;


                    case 5: //질문6. 열심히 노력했는데, 개발이 쉽지 않아. 그럴때 너는?
                        if(e.target.id == "T") {    //qnaList의 type이 T인 것을 누르면
                            p[0].count++;   //Java의 count++
                            p[3].count++;   //Javascript의 count++
                            p[4].count++;   //Python의 count++
                        }else { //qnaList의 type이 F인 것을 누르면
                            p[1].count++;   //C의 count++
                            p[2].count++;   //C++의 count++
                            p[5].count++;   //Kotlin의 count++
                            p[6].count++;   //C#의 count++
                            p[7].count++;   //SQL의 count++
                            p[8].count++;   //PHP의 count++
                        }
                        break; 
                        
                    case 6: //질문7. 프로젝트 기간을 어떻게 활용해?
                        if(e.target.id == "T") {    //qnaList의 type이 T인 것을 누르면
                            p[0].count++;   //Java의 count++
                            p[1].count++;   //C의 count++
                            p[4].count++;   //Python의 count++
                            p[8].count++;   //PHP의 count++
                        }else { //qnaList의 type이 F인 것을 누르면
                            p[2].count++;   //C++의 count++
                            p[3].count++;   //Javascript의 count++
                            p[5].count++;   //Kotlin의 count++
                            p[6].count++;   //C#의 count++
                            p[7].count++;   //SQL의 count++
                        }
                        break;

                    case 7: //질문8. 프로젝트를 잘 마쳤지만, 수상은 하지 못했어. 이럴 때 너는?
                        if(e.target.id == "T") {    //qnaList의 type이 T인 것을 누르면
                            p[1].count++;   //C의 count++
                            p[2].count++;   //C++의 count++
                            p[6].count++;   //C#의 count++
                        }else { //qnaList의 type이 F인 것을 누르면
                            p[0].count++;   //Java의 count++
                            p[3].count++;   //Javascript의 count++
                            p[4].count++;   //Python의 count++
                            p[5].count++;   //Kotlin의 count++
                            p[7].count++;   //SQL의 count++
                            p[8].count++;   //PHP의 count++
                        }
                        break;

                    case 8: //질문9. 열심히 코드를 구현했는데, 이 방법보다 좋은 방법을 알아냈어. 너는?
                        if(e.target.id == "T") {    //qnaList의 type이 T인 것을 누르면
                            p[0].count++;   //Java의 count++
                            p[4].count++;   //Python의 count++
                            p[5].count++;   //Kotlin의 count++
                            p[6].count++;   //C#의 count++
                        }else { //qnaList의 type이 F인 것을 누르면
                            p[1].count++;   //C의 count++
                            p[2].count++;   //C++의 count++
                            p[3].count++;   //Javascript의 count++
                            p[7].count++;   //SQL의 count++
                            p[8].count++;   //PHP의 count++
                        }
                        break;
                }


            for(let i = 0;  i < p.length; i++) {    //언어 정보가 담긴 배열 p의 길이만큼 반복
                console.log(infoList[i].language + ":" + p[i].count);   //답변 배열 클릭시, infoList의 language에 저장된 카운트 수를 출력
            }
            goNext(++qIdx); //다음 문제로 넘어가기
      }, 450);

    }, false);

}


function goResult(){    //결과 페이지로 이동 시 애니메이션
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


function setResult(){   //결과 페이지
    //계속 counting 해줬던 count 값들 중 가장 큰 값이 담긴 언어를 선택하는 방식으로 구성하였습니다.
    max = p[0].count;   //count 값 중 가장 큰 값을 담기 위한 max 선언

    for(let i = 0; i<p.length; i++) {   //언어 정보가 담긴 배열 p의 길이만큼 반복
        if(max < p[i].count) {  //맥스 값 찾기
            max = p[i].count;
        }
    }

    console.log(max); //max 값인 언어 출력

    max_idx = 0;
    for(let i = 0; i < p.length; i++) { //언어 배열 p[]의 길이 만큼 반복
        if(max == p[i].count) { //max 값이 언어 배열의 인덱스 요소 값과 같다면 break
            break;
        }
        max_idx++;  //max_idx++의 값 하나 올려줌 -> 인덱스 번호가 max_idx의 저장됨
    }

    //결과 페이지 꾸미기 위함
    const resultName = document.querySelector('.resultName');
    resultName.innerHTML = infoList[max_idx].name;  //max_idx의 인덱스 번호를 갖는 infoList의 name 출력

    const resultTitle = document.querySelector('.resultTitle');
    resultTitle.innerHTML = infoList[max_idx].language; //max_idx의 인덱스 번호를 갖는 infoList의 language 출력

    const resultImg = document.querySelector('#resultImg'); //max_idx의 인덱스 번호를 갖는 infoList의 img 보여줌
    const Image = document.createElement("img");
    Image.src = infoList[max_idx].img;
    resultImg.append(Image);


    const resultExplain = document.querySelector('.resultExplain');
    resultExplain.innerHTML = infoList[max_idx].explain;    //max_idx의 인덱스 번호를 갖는 infoList의 explain 출력

    const resultProgram = document.querySelector('.resultProgram');
    resultProgram.innerHTML = infoList[max_idx].program;    //max_idx의 인덱스 번호를 갖는 infoList의 program 출력

    const resultGood=document.querySelector('.resultGood');
    resultGood.innerHTML=infoList[max_idx].good;    //max_idx의 인덱스 번호를 갖는 infoList의 good 출력

    const resultBad=document.querySelector('.resultBad');
    resultBad.innerHTML=infoList[max_idx].bad;  //max_idx의 인덱스 번호를 갖는 infoList의 bad 출력

    let mbti_result = max;
    const mbti_real_result =infoList.find(name);
}