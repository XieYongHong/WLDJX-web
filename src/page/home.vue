<template>
    <el-container :class="'home'">
        <Header :activeIndex="'1'"></Header>
        <el-main>
            <div class="block">
                <el-carousel 
                    trigger="click" 
                    arrow="never"
                    height="520px">
                <el-carousel-item v-for="item in images" :key="item.id">
                    <img :src="item.src"/>
                </el-carousel-item>
                </el-carousel>
            </div>
            <div class="contents our_data">
                <div>
                    <el-row>
                        <el-col :span="24"><h2>我们的成绩</h2></el-col>
                        <el-col :span="24"><span class="subtitle">2017年1月1日至2017年12月30日，我们的培训数据</span></el-col>
                        <el-col :span="5">
                            <div style="height:10px;"></div>
                        </el-col>
                        <el-col :span="7">
                            <div class="number">
                                18888
                            </div>
                            <div>
                                累计服务学员
                            </div>
                        </el-col>
                        <el-col :span="7">
                            <div class="number">
                                99.8%
                            </div>
                            <div>
                                考试通过率
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <div class="contents our_whyus">
                <div>
                    <el-col :span="24"><h2>我们的优势</h2></el-col>
                    <el-col :span="24"><span class="subtitle">在万里达驾校，作为一家老牌驾校平台，服务精神是融入我们骨子里的东西</span></el-col>
                    <el-col :span="6">
                        <div class="title">
                            收费阳光
                        </div>
                        <div class="text">
                            无隐形收费，无强制消费
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="title">
                            量身定制培训模式
                        </div>
                        <div class="text">
                            多元化特色培训模式，车型齐全充分满足学车需求
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="title">
                            学员点评系统
                        </div>
                        <div class="text">
                            网上评价驾校、教练员，杜绝教练吃拿卡要
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="title">
                            最快30天那驾证
                        </div>
                        <div class="text">
                            直营团队统一装备，最科学的教学
                        </div>
                    </el-col>
                </div>
            </div>
            <div class="contents our_turn">
                <div>
                    <el-col :span="24"><h2>我们的服务</h2></el-col>
                    <el-col :span="24"><span class="subtitle">我们的教练员，教学资历深厚</span></el-col>
                    <el-col :span="6">
                        <div class="title">
                            最好的老师
                        </div>
                        <div class="text">
                            综合通过率
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="title">
                            科学的教学
                        </div>
                        <div class="text">
                            综合通过率
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="title">
                            优秀的服务
                        </div>
                        <div class="text">
                            综合通过率
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="title">
                            标准的场地
                        </div>
                        <div class="text">
                            综合通过率
                        </div>
                    </el-col>
                </div>
            </div>
            <div class="contents our_observe">
                <div>
                    <el-col :span="24"><h2>学员评价</h2></el-col>
                    <el-col :span="24"><span class="subtitle">帮助您解决实际问题，顺利的获得驾证，是我们存在的根本价值。</span></el-col>
                    <el-col :span="1"><div style="height:10px"></div></el-col>
                    <el-col :span="5">
                        <div class="text">
                            衷心感谢万里达驾校，感谢教练，每次提问都会非常积极热情温馨地解答，学车愉快轻松！
                            <div class="w-triangle"></div>
                        </div>
                        <div class="w-icon">
                            <i class="iconfont icon-message-fill"></i>
                        </div>
                    </el-col>
                    <el-col :span="1"><div style="height:10px"></div></el-col>
                    <el-col :span="5">
                        <div class="text">
                            衷心感谢万里达驾校，感谢教练，每次提问都会非常积极热情温馨地解答，学车愉快轻松！
                            <div class="w-triangle"></div>
                        </div>
                        <div class="w-icon">
                            <i class="iconfont icon-message-fill"></i>
                        </div>
                    </el-col>
                    <el-col :span="1"><div style="height:10px"></div></el-col>
                    <el-col :span="5">
                        <div class="text">
                            衷心感谢万里达驾校，感谢教练，每次提问都会非常积极热情温馨地解答，学车愉快轻松！
                            <div class="w-triangle"></div>
                        </div>
                        <div class="w-icon">
                            <i class="iconfont icon-message-fill"></i>
                        </div>
                    </el-col>
                    <el-col :span="1"><div style="height:10px"></div></el-col>
                    <el-col :span="5">
                        <div class="text">
                            衷心感谢万里达驾校，感谢教练，每次提问都会非常积极热情温馨地解答，学车愉快轻松！
                            <div class="w-triangle"></div>
                        </div>
                        <div class="w-icon">
                            <i class="iconfont icon-message-fill"></i>
                        </div>
                    </el-col>
                </div>
            </div>
            <div class="contents our_register">
                <div><h3>现在报名，即刻畅享万里达驾校极致服务</h3></div>
                <el-button>立刻报名</el-button>
            </div>
            <div class="contents our_tool">
                <span>
                    <i class="el-icon-phone"></i>1111111
                </span>
                <span>
                    <i class="iconfont icon-QQ"></i>12312313
                </span>
                <span>报名地址 ：重庆市永川区xxxxx</span>
                <span>练习场地地址 ：重庆市永川区xxxxx</span>
            </div>
        </el-main>
        <Footer></Footer>
    </el-container>
</template>

<script>
import Header from '@/components/home/header';
import Footer from '@/components/home/footer';
export default {
    components:{
        Header,
        Footer
    },
    data(){
        return {
            images:[{id:1,src:require('../assets/image/home_1.jpg')},
                    {id:2,src:require('../assets/image/home_2.jpg')},
                    {id:3,src:require('../assets/image/home_3.jpg')},
                    {id:4,src:require('../assets/image/home_4.jpg')}]
        }
    },
    methods:{
        
    },
    mounted(){
        window.onscroll=function(){
            var sl=-Math.max(document.body.scrollLeft,document.documentElement.scrollLeft);
            document.getElementById('fixed').style.left=sl+'px';
        }
    }
}
</script>

<style lang="scss">
@import '../assets/icon/iconfont.css';
.el-container{
    display: block !important;
}
.home {
    header{
        height: 85px !important;
        position: fixed;
        z-index: 1001;
        width: 100%;
        min-width: 1366px;
        left: 0;
        top: 0;
        padding: 10px 0;
        // border-bottom: 2px solid #0ba1e4;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        background-color: rgba(255, 255, 255, 0.8);
    }
    main{
        margin-top: 85px;
        padding: 0;
        .contents{
            font-size: 18px;
            color: #777;
            padding: 30px 0 60px 0;
            >div{
                width: 970px;
                margin: 0 auto;
                overflow: hidden;
            }
            h2{
                font-size: 36px;
                font-weight: 300;
                color: #333;
                margin-bottom: 30px;
                position: relative;
                &::after{
                    position: absolute;
                    content: "";
                    width: 70px;
                    height: 2px;
                    background-color: #0ba1e4;
                    bottom: -15px;
                    left: 50%;
                    margin-left: -35px;
                }
            }
            .subtitle{
                margin: 20px 0 35px 0;
                display: inline-block;
            }
        }
        .our_data{
            .number{
                color: #0ba1e4;
                font-size: 65px;
                margin-bottom: 20px;
            }
        }
        .our_whyus{
            background-color: #e1e1e1;
            .title{
                color: #0ba1e4;
                font-size: 18px;
                margin: 20px 0 40px 0;
            }
            .text{
                font-size: 15px;
                padding: 0 30px;
            }
        }
        .our_turn{
            .title{
                color: #fc5e5a;
                font-size: 18px;
                margin: 20px 0 40px 0;
            }
        }
        .our_observe{
            background-color: #f9f9f9;
            .text{
                padding: 20px;
                margin-top: 10px;
                font-size: 14px;
                border: 1px solid #34a263;
                border-radius: 4px;
                position: relative;
                .w-triangle{
                    position: absolute;
                    content: '';
                    bottom: -13px;
                    left: 50%;
                    margin-left: -11px;
                    border-right:13px solid transparent;
                    border-top: 13px solid #34a263;
                    border-left:  13px solid transparent;  
                }
                &::after{
                    position: absolute;
                    content: '';
                    bottom: -12px;
                    left: 50%;
                    margin-left: -10px;
                    border-right:12px solid transparent;
                    border-top: 12px solid #f9f9f9;
                    border-left:  12px solid transparent;
                }
            }
            .w-icon{
                color: #34a263;
                margin-top: 20px;
                >i{
                    font-size: 40px;
                }
            }
        }
        .our_register{
            font-size: 24px;
            button{
                font-size: 18px;
            }
        }
        .our_tool{
            background-color: #585858;
            color:#fff;
            font-size: 15px;
            padding: 30px 0 0 0 ;
            >span{
                display: inline-block;
                &:not(:last-child){
                    margin-right: 15px;
                }
            }
        }
    }
    footer{
        padding: 35px 0;
        height: 100px !important;
        overflow: hidden;
    }
    
    .el-menu--horizontal{
        border-bottom: none;
        background-color: transparent;
        >li{
            font-size: 16px !important;
        }
        .el-submenu__title{
            font-size: 16px !important;
        }
    }
    .el-menu--horizontal>.el-menu-item.is-active{
        border-color: #0ba1e4;
        color: #0ba1e4;
    }
    
}
.el-menu--horizontal .el-menu .el-menu-item{
    color:#333;
}
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover{
    color: #0ba1e4;
}
</style>
