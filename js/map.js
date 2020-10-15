window.addEventListener('DOMContentLoaded', function () {
    const data = new XMLHttpRequest();
    let response;
    const ulEle = document.querySelector('.items');
    let liEle = '';

    const form = document.querySelector('.searchbox form');
     const inputSrc = document.querySelector('input');
    let inputVal;

    data.open('Get', 'millonga.json', true);
    data.send(null);
    data.addEventListener('load', dataFun);
    let thumb;
    let url;
    let en;
    let ko;
    let address;
 function inputChange(){
    inputVal = '';
    inputSrc.focus();
 };

    //searching
    function dataFun() {
        
        response = JSON.parse(data.responseText);
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            inputVal =inputSrc.value;
            console.log(inputVal);                           
        response.millonga.forEach(function (el, idx) {
           
             
                                        
                  if (el.en.match(inputVal) || el.ko.match(inputVal)) {
                    thumb = el.thumb;
                    url = el.url;
                    en = el.en;
                    address = el.address;
                    ko = el.ko;
        
                     
                    liEle += "<li class='item item" + idx + " f_b'>";
                    liEle += "<div class='con f_b'> <div class='leftsec'><div class='thumb'><a class='linkA link" + idx + "' href='" + url + "'><img src='" + thumb + "' alt='" + en + "'></a></div></div>";
                    liEle += " <div class='rightsec'> <div class='f_b'><h4 class='f_b'>" + en + "</h4><span>거리m</span></div><h6>" + ko + "</h6>";
                    liEle += " <p class='address'>" + address + "</p></div> </div>";
                    liEle += " <div class='appraisal'><span class='like'>371</span><span class='write'>39</span> </div></li>";

                  ulEle.innerHTML = liEle;
                  inputChange();
                  }
                  else{
                   
                       ulEle.innerHTML = '';
                       inputChange();
                  }
                 
                           
                           
            });


        });
        listDrag();

    }//datafun











    //drag
    function listDrag() {
        const list = ulEle.querySelectorAll('.item');
        const listBox = document.querySelector('.listbox');
        const listLen = list.length;
        idx = 0;

        let isDown = false;
        let startX;
        let endX;
        let scrollLeft;

        listBox.addEventListener('mousedown', (e) => {
            isDown = true;
            listBox.classList.add('active');
            startX = e.pageX - ulEle.offsetLeft;
            scrollLeft = ulEle.scrollLeft;

        });

        listBox.addEventListener('mousemove', (e) => {
            endX = e.pageX - ulEle.offsetLeft;

            if (!isDown) return endX;
            e.preventDefault();


        });

        listBox.addEventListener('mouseleave', (e) => {

            isDown = false;
            listBox.classList.remove('active');

        });

        listBox.addEventListener('mouseup', (e) => {
            isDown = false;
            listBox.classList.remove('active');
            endPos();
        });

        function endPos() {
            if (startX > endX) {
                //next
                if (idx != listLen - 1) idx++;
            } else {
                //prev
                if (idx != 0) idx--;
            }

            setTimeout(function () { ulEle.style = "transform:translateX(" + (-450 * idx) + "px);"; }, 100);
        };
    }//list drag




    //map
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = {
            center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };

    // 지도를 생성합니다    
    var map = new kakao.maps.Map(mapContainer, mapOption);

    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch('제주특별자치도 제주시 첨단로 242', function (result, status) {

        // 정상적으로 검색이 완료됐으면 
        if (status === kakao.maps.services.Status.OK) {

            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

            // 결과값으로 받은 위치를 마커로 표시합니다
            var marker = new kakao.maps.Marker({
                map: map,
                position: coords
            });

            // 인포윈도우로 장소에 대한 설명을 표시합니다
            var infowindow = new kakao.maps.InfoWindow({
                content: '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>'
            });
            infowindow.open(map, marker);

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
        }
    });

});//end