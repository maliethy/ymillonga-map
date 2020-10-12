import React, {useState, useRef } from 'react';

const App = () => {

    return(
        <>
        <div class="header">
        <a>
            <img src="img/logo.png" alt="">
        </a>
    </div>
    <div class="headerback">
        <a>
            <img src="img/logo.png" alt="">
        </a>
    </div>

    <div class="location f_b">
        <span>현위치 : 서초구 서초동</span>
        <button class="f_a">
            <img src="img/ic_location.png" alt=""> 업데이트
        </button>
    </div>
    <div class="background">
        <div class="searchbox">
            <div class="inputarea f_b">
                <input type="text" value placeholder="밀롱가 검색하기">
                <div>
                    <a href="#"><img src="img/ic_search.png" alt=""></a>
                </div>
            </div>
        </div>
        <div class="page">
            <div class="today-list">
                <h2>오늘의 밀롱가</h2>
                <div class="data-wrap">
                    <ul class="today-wrap">
                        <li><a href="#">
                                <div class="thumb">
                                    <img src="img/onada.jpg" alt="">
                                </div>
                                <div class="summary">
                                    <h3>1.Tango O Nada 1,2</h3>
                                    <small>서울특별시 마포구 동교동 동교로 193(193, Donggyo-ro, Mapo-gu,Seoul, Korea)/서울특별시 마포구 연남동
                                        성미산로 81(187 Seongmisan-ro, Seoul,Korea)</small>


                                </div>
                            </a>
                        </li>
                        <li><a href="#">
                                <div class="thumb">
                                    <img src="img/eltango.png" alt="">
                                </div>
                                <div class="summary">
                                    <h3>2.El Tango Cafe</h3>
                                    <small>서울특별시 서초구 강남대로95길 12 (12, Gangnam-daero 95-gil, Seocho-gu, Seoul,
                                        Korea)</small>

                                </div>
                            </a>
                        </li>
                        <li><a href="#">
                                <div class="thumb">
                                    <img src="img/tango-young.png" alt="">
                                </div>
                                <div class="summary">
                                    <h3>3.Tango Young Seoul</h3>
                                    <small>서울특별시 강남구 논현2동 선릉로 705 청운빌딩 B1(705, Seolleung-ro, Gangnam-gu, Seoul, Korea)
                                    </small>

                                </div>
                            </a>
                        </li>
                        <li><a href="#">
                                <div class="thumb">
                                    <img src="img/limetango.png" alt="">
                                </div>
                                <div class="summary">
                                    <h3>4.Lime Tango Cafe</h3>
                                    <small>서울특별시 강남구 역삼동 830-6(Yeoksam-Dong 830-6, Gangnam-Gu, Seoul,Korea)</small>

                                </div>
                            </a>
                        </li>
                        <li><a href="#">
                                <div class="thumb">
                                    <img src="img/elbulin.png" alt="">
                                </div>
                                <div class="summary">
                                    <h3>5.El Bulin</h3>
                                    <small>서울특별시 강남구 도산대로 155(155, Dosan-daero, Gangnam-gu, Seoul,Korea)</small>

                                </div>
                            </a>
                        </li>
                        <li><a href="#">
                                <div class="thumb">
                                    <img src="img/ataniche.jpg" alt="">
                                </div>
                                <div class="summary">
                                    <h3>6.Ataniche</h3>
                                    <small>서울특별시 강남구 도산대로 15길 25 (25, Dosan-daero 15-gil, Gangnam-gu,
                                        Seoul,Korea)</small>

                                </div>
                            </a>
                        </li>
                        <li><a href="#">
                                <div class="thumb">
                                    <img src="img/royal-tango.jpg" alt="">
                                </div>
                                <div class="summary">
                                    <h3>7.Royal Tango</h3>
                                    <small>서울특별시 강남구 도산대로55길 26(26, Dosan-daero 55-gil, Gangnam-gu, Seoul,Korea)</small>

                                </div>
                            </a>
                        </li>
                        <li><a href="#">
                                <div class="thumb">
                                    <img src="img/todo.jpg" alt="">
                                </div>
                                <div class="summary">
                                    <h3>8.Todo Tango</h3>
                                    <small>
                                        서울특별시 강남구 신사동 637-15 대명빌딩 B1(7, Eonju-ro 172-gil, Gangnam-gu, Seoul, Korea)
                                    </small>

                                </div>
                            </a>
                        </li>
                        <li><a href="#">
                                <div class="thumb">
                                    <img src="img/tangocafe.jpg" alt="">
                                </div>
                                <div class="summary">
                                    <h3>9.Tango Cafe</h3>
                                    <small> 서울특별시 중구 필동 퇴계로 202 풍산빌딩 B3F
                                        (202, Toegye-ro, Jung-gu, Seoul, Korea)</small>

                                </div>
                            </a>
                        </li>
                        <li><a href="#">
                                <div class="thumb">
                                    <img src="img/tango-pan.jpg" alt="">
                                </div>
                                <div class="summary">
                                    <h3>10.Gangnam Tango PAN</h3>
                                    <small>서울특별시 강남구 논현로67길 50 (50, Nonhyeon-ro 67-gil, Gangnam-gu, Seoul, Korea)
                                    </small>

                                </div>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>

        </div>
       
        <div class="nearbox">
            <div class="nearby">
            <h3>내주변 밀롱가</h3>
            <p>
                <span id="nearby_count">10</span><span>곳의 밀롱가 (내주변 </span><span id="nearby_dis">500m</span>)
            </p>
        </div>
            <div class="mapbox">
                <div class="distance f_a">
                    <a href="#">100m</a>
                    <a href="#">300m</a>
                    <a href="#">500m</a>
                    <a href="#">1km</a>
                    <a href="#">5km</a>
                    <a href="#">10km</a>
                </div>

                <div class="map"></div>
            </div>
            <div class="listbox">
                <ul>
                    <li class="f_b" >
                        <div class="leftsec"></div>
                        <div class="rightsec">
                            <h4 class="f_b">
                                1. 탱고카페
                                <span class="list_lo">충무로역</span>
                            </h4>
                            <p class="info f_b">
                                밀롱가, 탱고레슨
                                <span class="list_dis">362m</span>
                            </p>
                            <div class="appraisal">
                                <span class="like">371</span>
                                <span class="write">39</span>

                            </div>
                        </div>
                        <a href="#"></a>
                    </li>
                    <li class="f_b" >
                        <div class="leftsec"></div>
                        <div class="rightsec">
                            <h4 class="f_b">
                                1. 탱고카페
                                <span class="list_lo">충무로역</span>
                            </h4>
                            <p class="info f_b">
                                밀롱가, 탱고레슨
                                <span class="list_dis">362m</span>
                            </p>
                            <div class="appraisal">
                                <span class="like">371</span>
                                <span class="write">39</span>

                            </div>
                        </div>
                        <a href="#"></a>
                    </li>
                    <li class="f_b" >
                        <div class="leftsec"></div>
                        <div class="rightsec">
                            <h4 class="f_b">
                                1. 탱고카페
                                <span class="list_lo">충무로역</span>
                            </h4>
                            <p class="info f_b">
                                밀롱가, 탱고레슨
                                <span class="list_dis">362m</span>
                            </p>
                            <div class="appraisal">
                                <span class="like">371</span>
                                <span class="write">39</span>

                            </div>
                        </div>
                        <a href="#"></a>
                    </li>
                </ul>
            </div>
            <div class="morebox f_b">
                <a class="morelist" href="calender.html">
                    달력으로 더보기
                </a>
                <a class="moremap" href="map.html">지도로 더보기</a>
            </div>
            
        </div>

    </div>
    <div class="footLink f_b">
        <a class="home" href="index.html">&milonga</a>
        <a class="search" href="join.html">나의 밀롱가</a>
        <a class="about" href="help.html">도움말</a>
    </div>
    <div class="footLink-back f_b">
        <a class="home" href="index.html">&milonga</a>
        <a class="search" href="join.html">나의 밀롱가</a>
        <a class="about" href="help.html">도움말</a>
    </div>
        </>
    );
};
export default App;