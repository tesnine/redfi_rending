import React,{useEffect,useState} from "react"
import {gsap,Power1,Power2 }from 'gsap';

const scrollissimo = window.scrollissimo;

function Main(props){
    const [imgFix,setImgFix] = useState(false);
    const [imgFixEnd,setImgFixEnd] = useState(false);
    useEffect(()=>{

        if(window.innerWidth>1200){
            const m1_tl = gsap.timeline();

            m1_tl.from('.m1 .main_img .img_mask .img_item',3,{scale:1.2,ease:Power1.easeIn,},0);
            m1_tl.from('.m1 .main_info .main_copy .mc_mask .mc_t',1.5,{y:"70px",ease:Power2.easeOut,},0.5);
            m1_tl.from('.m1 .main_info .main_desc',1,{x:"50px",opacity:0,ease:Power1.easeIn,},1.2);
            m1_tl.from('.m1 .main_info .bt_section',1,{y:"50px",opacity:0,ease:Power1.easeIn,},1.4);
            m1_tl.from('.m1 .side_info .si_item',0.5,{y:"-80px",opacity:0},1.5);
            m1_tl.from('.m1 .scroll_info .scroll_deco',0.5,{scaleX:0,opacity:0},2);
            m1_tl.from('.m1 .scroll_info .scroll_text',0.5,{x:"30px",opacity:0},2.5);

            const m1_sc_tl = gsap.to(".m1 .main_info",500,{x:-100,opacity:0});
            const m1_sc_tl2 = gsap.to(".m1 .main_img",800,{scale:1.4,y:-200,ease:Power1.easeIn});
            const m1_sc_tl3 = gsap.to(".m1 .scroll_info",800,{x:-200});

            const circle_tl = gsap.from('.m2 .circle_items .cr2',1000,{x:-200});
            const circle_tl2 = gsap.from('.m2 .circle_items .cr3',1000,{x:200});


            const m2_tl = gsap.timeline({paused:true});


            m2_tl.from('.m2 .circle_items .cr_deco_line',1.5,{scaleX:0},0);
            m2_tl.from('.m2 .circle_items .cr_logo',1,{x:'100px',opacity:0},1.2);
            m2_tl.from('.m2 .section_title',1,{x:100,opacity:0},0);
            m2_tl.from('.m2 .main_copy',1,{x:100,opacity:0},0.5);
            m2_tl.from('.m2 .copy_desc',1,{x:100,opacity:0},1);


            const m3_tl = gsap.timeline({paused:true});

            for(let i=0;i<6;i++){
                m3_tl.from('.m3 .character_items .ch'+(i+1),1,{x:100,opacity:0},0.5*i);
            }

            const m4_tl = gsap.timeline({paused:true});
            m4_tl.from('.m4 .section_title',1,{x:100,opacity:0},0);
            m4_tl.from('.m4 .main_copy',1,{x:100,opacity:0},0.5);

            for(let i=0;i<4;i++){
                m4_tl.from('.m4 .pr_item.pr'+(i+1),1,{y:50,opacity:0},0.7+(0.3*i));
                m4_tl.from('.m4 .pr_item.pr'+(i+1)+' .pr_line',0.5,{scaleX:0},1+(0.3*i));
            }


            scrollissimo.add(m1_sc_tl,100,25);
            scrollissimo.add(m1_sc_tl2,100,25);
            scrollissimo.add(m1_sc_tl3,100,25);
            scrollissimo.add(circle_tl,400,25);
            scrollissimo.add(circle_tl2,400,25);
            const scrollEvent = ()=>{
                const scrollY= window.scrollY;

                if(scrollY>document.querySelector('.main.m4').offsetTop-400){
                    m4_tl.play();

                }else if(scrollY>document.querySelector('.main.m3').offsetTop-400){
                    m3_tl.play();

                }else if(scrollY>document.querySelector('.main.m2').offsetTop){
                    m2_tl.play();

                }
                if(scrollY>document.querySelector('.main.m3').offsetTop){
                    setImgFix(true);

                }else{
                    setImgFix(false);

                }
                if(scrollY>document.querySelector('.main.m4').offsetTop-window.innerHeight-(window.innerWidth*0.18)){
                    setImgFixEnd(true);
                }else{
                    setImgFixEnd(false);
                }
            }
            scrollEvent();
            window.addEventListener('scroll',(e)=>{
                scrollissimo.knock();

                scrollEvent();


            })
        }
        else{
            document.querySelector('.m1').style.height = window.innerHeight+"px";
        }

    },[])
    return(
        <div className="contents_wrap">
            <div className={'main m1'}>
                <div className={'logo_section'}><img src={'/img/logo.svg'}/></div>
                <div className={'side_info'}>
                    <div className={'si_item'}>Undisclosed Association<br/>
                        Funding Platform Service</div>
                    <div className={'si_item'}>Business Partnership<br/>
                        Proposal Platform Service</div>
                </div>
                <div className={'main_img'}>
                   <div className={'img_mask'}> <div className={'img_item'} style={{backgroundImage:"url('/img/main01"+(window.innerWidth<1200?'_m':'')+".jpg')"}}></div></div>
                </div>
                <div className={'main_info'}>
                    <div className={'main_copy'}>
                        <div className={'mc_mask'}><div className={'mc_t'}>Beyond the limit</div></div>
                        <div className={'mc_mask'}><div className={'mc_t'}>Vast and Wide Horizon</div></div>
                        <div className={'mc_mask'}><div className={'mc_t'}>of Investment</div></div>
                    </div>
                    <div className={'main_desc'}>
                        한도없는 투자의 새 지평, 투자자와 투자처를 이어주는 플랫폼의<br/>
                        새로운 패러다임. 레드파이가 함께 열어갑니다
                    </div>
                    <div className={'bt_section'}>
                        <div className={'link_bt'}>모집인 참여</div>
                        <div className={'link_bt'}>조합원 참여</div>
                    </div>
                </div>
                <div className={'scroll_info'}>
                    <div className={'scroll_deco'}></div>
                    <div className={'scroll_text'}>scroll down</div>
                </div>
                <div className={'copyright_info'}>Copyright@REDFI co., Ltd. All rights reserved</div>
            </div>
            <div className={'main m2'}>
                <div className={'circle_items'}>
                    <div className={'cr_item cr1'}  style={{backgroundImage:"url('/img/circle_back.jpg')"}}><div className={'cr_deco_line'}></div></div>
                    <div className={'cr_item cr2'} ><span className={'cr_t'}>Individual</span></div>
                    <div className={'cr_item cr3'} ><span className={'cr_t'}>P2P</span></div>
                    <div className={'cr_logo'}><img src={'/img/logo.svg'}/></div>

                </div>
                <div className={'circle_info'}>
                    <div className={'section_title'}>service intro</div>
                    <div className={'main_copy'}>개인투자자 - P2P 투자</div>
                    <div className={'copy_desc'}>
                        개인투자자 자격으로 P2P에 투자할 경우 투자 한도가 발목을 잡습니다.
                        RedFi는 개인투자자를 익명조합에 가입시켜 법인 투자로 전환함으로서 이러한 한계를 벗어납니다.
                        조합 가입부터 출자, 투자 및 이익 분배에 이르기까지 모든 과정을 쉽고 간편하게 이용할 수 있도록 서비스를 제공합니다.
                    </div>
                </div>
            </div>
            <div className={'main m3'}>
                <div className={'main_img'}>
                    <img className={(imgFix?'img_fixed':'')+(imgFixEnd?' img_fixed_end':'')} src={'/img/main03.jpg'}/>
                    <div className={'img_deco_line'}></div>
                </div>
                <div className={'character_items'}>
                    <div className={'ch_item ch1'}>
                        <div className={'main_copy'}>투자 한도 제한 해제</div>
                        <div className={'copy_desc'}>개인 투자자 자격으로 투자하는 경우 존재하는 투자 금액 한도로 인하여 발생하는 투자의 제한을 REDFi 는 법인 투자의 형태로 전환함으로써 풀어드립니다.
                        </div>
                    </div>
                    <div className={'ch_item ch2'}>
                        <div className={'main_copy'}>효율적인 순환</div>
                        <div className={'copy_desc'}>직접 투자를 계속하여 반복해야 하는 기존의 P2P 개인투자의 불편함에서 벗어나, REDFi가 자금의 유휴 기간이 발생하지 않도록 지속적으로 투자금을 순환시켜 이익을 발생시킵니다.
                        </div>
                    </div>
                    <div className={'ch_item ch3'}>
                        <div className={'main_copy'}>비대면 계약 진행</div>
                        <div className={'copy_desc'}>복잡한 서류 업무 및 창구 방문 없이 비대면 전자서명시스템을 통해서 출자 계약을 맺을 수 있습니다. 전자서명시스템은 위변조의 방지를 위하여 감사추적인증서로 관리되며, 해시값을 통한 위변조 여부를 철저히 확인합니다.
                        </div>
                    </div>
                    <div className={'ch_item ch4'}>
                        <div className={'main_copy'}>투자 현황 실시간 확인</div>
                        <div className={'copy_desc'}>REDFi 플랫폼에서 투자 현황을 투명하게 관리하고 공개합니다.  투자부터 회수까지 전 과정을 실시간으로 확인할 수 있습니다.
                        </div>
                    </div>
                    <div className={'ch_item ch5'}>
                        <div className={'main_copy'}>빠른 수익 회수</div>
                        <div className={'copy_desc'}>출자금이 투자되는 시점부터 매일, 매시간 지속적으로 이익이 발생합니다. 분배받은 이익은 플랫폼에서 언제든지 출금이 가능합니다.
                        </div>
                    </div>
                    <div className={'ch_item ch6'}>
                        <div className={'main_copy'}>유연한 투자</div>
                        <div className={'copy_desc'}>투자 이후 연체의 위험과 만기까지의 기나긴 기다림이라는 이중고를 떠안은 고전금융으로부터 벗어나 RedFi에서 유연한 투자를 체험할 수 있습니다.
                        </div>
                    </div>
                </div>
            </div>
            <div className={'main m4'}>
                <div className={'section_title'}>service process</div>
                <div className={'main_copy'}>레드파이를 통한 투자 흐름 설명</div>
                <div className={'process_items'}>
                    <div className={'pr_item pr1'}>
                        <div className={'pr_deco'}>
                            <div className={'pr_circle'}></div>
                            <div className={'pr_line'}></div>
                        </div>
                        <div className={'pr_step'}>step1</div>
                        <div className={'pr_title'}>조합출자</div>
                        <div className={'pr_desc'}>
                            익명조합원으로써 계약을 체결하고 출자를 진행합니다. 출자에 대한 상환 신청이 접수되면 해당 출자금에 익명조합원으로써 계약을 체결하고 출자를 진행합니다.
                        </div>
                    </div>
                    <div className={'pr_item pr2'}>
                        <div className={'pr_deco'}>
                            <div className={'pr_circle'}></div>
                            <div className={'pr_line'}></div>
                        </div>
                        <div className={'pr_step'}>step2</div>
                        <div className={'pr_title'}>법인 형태 투자</div>
                        <div className={'pr_desc'}>
                            조합에 출자된 자금을 REDFi가 영업자로써 법인 형태로 투자를 진행합니다. 출자에 대한 상환 신청이 접수되면 해당 출자금에
                        </div>
                    </div>
                    <div className={'pr_item pr3'}>
                        <div className={'pr_deco'}>
                            <div className={'pr_circle'}></div>
                            <div className={'pr_line'}></div>
                        </div>
                        <div className={'pr_step'}>step3</div>
                        <div className={'pr_title'}>투자 이익에 대한 배분</div>
                        <div className={'pr_desc'}>
                            조합에서 투자에 의한 이익금이 발생하면 발생한 이익금을 실시간으로 지분에 따라 배분합니다.  이익금을 실시간으로 지분에 따라 배분합니다.
                        </div>
                    </div>
                    <div className={'pr_item pr4'}>
                        <div className={'pr_deco'}>
                            <div className={'pr_circle'}></div>
                            <div className={'pr_line'}></div>
                        </div>
                        <div className={'pr_step'}>step4</div>
                        <div className={'pr_title'}>상환</div>
                        <div className={'pr_desc'}>
                            출자에 대한 상환 신청이 접수되면 해당 출자금에 대한 투자금 환수가 이루어지는 시점에 즉시 상환이 이루어집니다. 출자에 대한 상환 신청이 접수되면 해당 출자금에
                        </div>
                    </div>
                </div>

            </div>
            <div className={'main m5'}  style={{backgroundImage:"url('/img/main05.jpg')"}}>
                <div className={'main_copy'}>레드파이와 함께 새로운 투자<br/>
                    패러다임을 만들어갈 Value Planner를 찾습니다.</div>
                <div className={'bt_section'}>
                    <div className={'invest_join_bt'}>투자 모집인 참여</div>
                </div>
                <div className={'bt_desc'}>VALUE PLANNER에 대한 자세한 사항은 contact@redfi.com으로 문의 바랍니다.</div>
            </div>
            <div className={'footer'}>
                <div className={'company_info'}>
                    <ul>
                        <li>레드파이(대표이사: 000/ 개인정보보호책임자: 000)</li>
                        <li>주소 : 서울특별시 강남구 테헤란로86길 31</li>
                        <li>사용자등록번호 : 123-56-01005</li>
                        <li>대표번호 : 010-3026-1271</li><br/>
                        <li>고객센터 : contact@redfi.com</li>
                    </ul>
                </div>
                <div className={'copyright'}>
                    Copyright@WhyNotLink co., Ltd. All rights reserved
                </div>

            </div>
        </div>

    )

}

export default Main;
