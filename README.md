# Dream 8조

# 프로젝트 명 : Dream

# 목차

[1. 프로젝트 소개](#1.프로젝트-소개) <br/>
[2. 기획](#-2.-기획)  <br/>
3. 디자인 시안(Figma) <br/>
4. 데이터베이스 ERM <br/>
5. 주요기능 
6. 기능별 페이지 분석
7. 팀원 회고


# 1.프로젝트 소개
💖 Dream은 환경 보호와 사회 공헌을 동시에 실현하는 거래, 중고판매 온라인 플랫폼입니다. 사용하지 않는 옷을 버리는 대신 필요한 사람들에게 판매하고, 판매 수익은 사회 공헌 활동에 기부됩니다.

👨‍👩‍👧‍👦Introducing the team
<ul>
<table>
  <tbody>
    <tr>
      <td align="center"><a href=""><img src="https://github.com/FRONTENDSCHOOL8/dream8/assets/147236247/bc3c45d7-3c02-435c-80ed-cc3ca809a800" width="100px" height="120px" alt=""/><br /><sub><b>FE 팀장 : 정서린 </b></sub></a><br /></td>
      <td align="center"><a href=""><img src="https://github.com/FRONTENDSCHOOL8/dream8/assets/147236247/e07f7088-5a4b-4303-a564-36938a00104e" width="100px" height="100px" alt=""/><br /><sub><b>FE 스크럼마스터 : 강태욱 </b></sub></a><br /></td>
      <td align="center"><a href=""><img src="https://github.com/FRONTENDSCHOOL8/dream8/assets/113508075/f559e510-135d-43b0-845c-abcc5cf3be1e" width="100px" height="100px" alt=""/><br /><sub><b>FE 팀원 : 조현돈 </b></sub></a><br /></td>
      <td align="center"><a href=""><img src="https://github.com/FRONTENDSCHOOL8/dream8/assets/147236247/e43331e2-4358-40b6-b86d-69b276519f17" width="100px" height="100px" alt=""/><br /><sub><b>FE 팀원 : 여서윤 </b></sub></a><br /></td>
     </tr>
  </tbody>
</table>
</ul>


  ## 팀원 Github 주소
 
👨‍🚀 정서린 :  https://github.com/lin0211
👨‍🚀 강태욱 :   
👨‍🚀 조현돈 :  
👨‍🚀 여서윤 :  

</br>
</br>



<ul>
      <li> 프로젝트 이름 : Dream </li>
   <li> 프로젝트 기간 :   2024 2월 19일 ~ 3월 14일</li>
   <li> 프로젝트 설치 방법 :
    </br> 패키지 설치
  
      npm i
      npm run dev
      
      
   </li>
      <li>프로젝트 vacel URL :  
        
        https://dream8.vercel.app/ 
        
    
</li>
      <li>작동 화면 :</li>
      <li>기술스택 : </li>
</ul>




# 2. 기획

  기획 발표 URL : https://www.canva.com/design/DAF9ZAMC0L4/PgiIeWpvj1BTwMY_7Yckog/edit





# 3. 디자인 시안(Figma)


<ul>
   <li>  디자인 시안 주소 : https://www.figma.com/file/q0xtysWbr782sTQhpVn4AL/Untitled?type=design&node-id=620%3A2429&mode=design&t=6ICEgpSdzUAjXh5p-1</li>
   <li> 화면 구성:</li>
   <li> 프로젝트 설치 방법 : clone 후 npm i </li>
   <li> 유저 플로우  :</li>
    
</ul>





# 4. 데이터베이스 ERM





# 5. 주요기능 


<ul>
        <li> </li>
   <li> </li>
   <li>  </li>
   <li> </li>
    
</ul>


# 6 기능별 페이지 분석
## 공통 요소
Button, Input 같이 재사용성이 높은 요소는 아토믹 컴포넌트로 제작

## 💻 정서린

**판매페이지**

<ul> 
   <li>Pocketbase/PocketHost를 이용한 상품의 isSale가 참인 상품 리스트 렌더링</li>
   <li>리스트의 카테고리별 상품리스트 필터하여 리스트 렌더링</li>
   <li>상품의 등급별, 가격별, 그리고 created 된 시간의 순서에 따라 정렬하여 리스트 렌더링 </li>
   <li>검색 하여 상품 title에 부합하는 리스트 렌더링</li>
   <li>Lazy Loading을 사용하여 비동기 처리 앱 성능 최적화 </li>
</ul>

**판매디테일 페이지**

<ul> 
   <li>주소창에 저장된 params를 불러와 상품의 아이디에 맞는 데이터의 상세 내역을 렌더링</li>
   <li>상품의 카테고리에 맞으며, 상세페이지에 보여주는 상품은 제외한 상품 리스트(관련상품)를 렌더링</li>
   <li>썸네일 클릭시 상품의 미리보기 기능 </li>
   <li>구매하기 버튼으로 상품을 장바구니 데이터에 전송하고 장바구니 · 결제페이지으로 이동</li>
   <li>장바구니 버튼으로 상품을 장바구니 데이터에 전송하며 보고 있는 페이지에 머무를지 장바구니 · 결제페이지로 이동할지 여부  선택 모달창으로 확인</li>
</ul>

**장바구니 · 결제 페이지**

<ul> 
   <li>장바구니 데이터 렌더링</li>
   <li>x 버튼으로 장바구니 데이터에서 삭제되고 리스트에 보이지 않도록하기 위해 refetch</li>
   <li>상품의 체크 박스 클릭시 선택된 상품들의 가격을 계산하여 구매 정보에 표시</li>
   <li>결제하기 버튼 클릭시 선택된 상품의 상태가 isSale 거짓이 되어 판매리스트에서 제외되도록 데이터 업데이트</li>
   <li>결제하기 버튼 클릭시 장바구니 데이터의 isPayed는 참이 되고 리스트에 보이지 않도록하기 위해 refetch</li>
</ul>

**모달창**

<ul> 
   <li>createPortal을 이용하여 모달을 최상위 레벨에서 렌더링하여 다른 요소들과 겹치지 않고 독립적으로 동작</li>
   <li>재사용성을 위해 제목과 본문을 작성할 수 있게 만듬</li>
</ul>

## 💻 강태욱

<ul>
        <li> ??페이지 : </li>
   <li> </li>
   <li>  </li>
   <li> </li>
    
</ul>

## 💻 조현돈

**교환페이지**
<ul> 
   <li>Pocketbase/PocketHost를 이용한 상품의 isExchange가 참인 상품 리스트 렌더링</li>
   <li>포켓베이스 exchange에 있는 데이터 리스트 렌더링</li>
   <li>더보기 버튼으로 리스트들 더 볼수 있도록 구현 </li>
</ul>

**교환디테일 페이지**
<ul> 
   <li>각 리스트들의 id를 useParams로 가져와서 각 페이지 렌더링</li>
   <li>게시글 작성했다면 수정하기, 삭제하기 기능 추가</li>
   <li>게시글을 작성하지 않은 다른 사용자는 채팅만 가능</li>
</ul>

**교환글 작성 페이지**
<ul> 
   <li>교환을 원하는 상품이 있을시 form 데이터로 글을 작성할 수 있는 패이지 구현</li>
   <li>신청 폼의 글을 비우게 되면 오류가 나도록 validation 구현</li>
   <li>교환 상세 페이지에 300글자 넘어거면 오류 생기도록 validation 구현</li>
</ul>

**교환글 수정 페이지**
<ul> 
   <li>게시글을 작성한 사람이 글을 수정하고 샆을 떄 수정할 수 있도록 구현</li>
   <li>신청 양식에는 기본적인 전에 사용했던 목록을 가져와서 렌더링</li>
   <li>수정글을 아무것도 수정하지 않았다면 오류 나도록 validation 구현</li>
</ul>

**채팅 페이지**
<ul> 
   <li>리얼 타임 데이터 베이스로 사용자들 끼리 1대1 채팅 구현</li>
  <li>아직 완벽하게 구현은 x</li>
</ul>


## 💻 여서윤

**메인페이지**
<ul>
   <li>GSAP을 사용하여 부드러운 스크롤 효과 적용</li>
   <li>영역마다 스크롤 시 GSAP 애니메이션 적용</li>
   <li>드림소식 영역의 카드 클릭 시 각각의 디테일 페이지로 이동</li>
</ul>

**소식페이지**
<ul>
   <li>tanstackQuery를 사용하여 데이터 처리</li>
   <li>PocketBase에 저장된 데이터를 불러와 렌더링</li>
   <li>리스트 클릭 하면 해당하는 데이터의 상세정보 출력</li>
</ul>

**후원, 후원신청페이지**
<ul>
   <li>로그인한 유저만 신청서 작성 가능</li>
   <li>폼 미완성 시 안내 팝업</li>
   <li>폼작성 후 데이터 로컬스토리지에 저장 (삭제가능)</li>
   <li>작성된 데이터 포켓베이스로 전송</li>
</ul>


# 7. 팀원 회고

<ul>
   <li> 정서린 : 프로젝트 전날까지도 불안해서 잠을 못잤던거 같아요. 하지만 막상 시작하면서 모르는 부분에 대해 이야기도 나누고 직접 코드를 작성하며 수업때는 이해 못했던 부분들을 하나하나 이해 되는 순간이 있었습니다.<br/> 때문에 뿌듯한 시간을 보냈다고 생각합니다. 다음에 새로 만날 프로젝트에서도 기억이 될 원동력이 될 것 같습니다. </li>
   <li> 강태욱 :   어쩌구 저쩌구 </li>

   <li> 여서윤 : 기획부터 배포까지 진행하는 동안 팀원과의 소통을 통하여 리액트의 기능과 작동 원리에 대해 더욱 알게 되는 시간이었습니다. <br>
프로젝트 시작 전에는 걱정이 많았지만 팀원들 덕분에 무사히 끝낼 수 있었고, 프로젝트 전과 비교했을때 많이 성장했다고 생각하지만 아직은 부족한 부분이 많은 것 같아 추후에 보완하고 싶습니다. <br>
 이번 프로젝트를 통해 그동안의 학습을 돌아 볼 수 있었고, 다음엔 더 많은 기능 구현에 도전해보겠습니다.</li>
      <li> 조현돈 <br>
         데이터베이스 설계의 미흡(채팅의 경우 알지를 못해서 데이터베이스 설계 잘못했다...) <br>
         디자인 시안을 처음 만들다 보니 매우 미흡했던 점들 <br>
         너무 많은 기술들을 한번에 시도할려다 보니 완성도가 생각보다 떨어졌다... <br>
      </li>
   <li></li>

</ul>


