import React, { useEffect } from 'react'
import Admin_header from '../Componets/Admin_header'
import { useNavigate } from 'react-router-dom';


function Admin_gallary() {

    const redirect = useNavigate();
    useEffect(() => {
        if (!(localStorage.getItem('uid_1'))) {
            redirect('/admin_login');
        }
    }, []);
    
  return (

        <div>
            
            <Admin_header/>
            <div className='page'>
                <div className="section-body mt-3">
                    <div className="container-fluid">
                        <div className="row row-cards">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="page-options d-flex">
                                            <div className="input-icon ml-2">
                                                <span className="input-icon-addon">
                                                    {/* <i className="fe fe-search" /> */}
                                                </span>
                                                {/* <input type="text" className="form-control" placeholder="Search photo" /> */}
                                            </div>
                                            <button type="submit" className="btn btn-primary ml-2">Gallery</button>
                                        </div>
                                        {/* <div className="page-subtitle ml-0">1 - 12 of 1713 photos</div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row row-cards">
                            <div className="col-sm-6 col-lg-4">
                                <div className="card p-3">
                                    <a href="javascript:void(0)" className="mb-3">
                                        <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/a/z/b/m-men-hd-sweatshirt-black-being-wanted-original-imaghckfbhzfzquu.jpeg?q=70" alt="Photo by Nathan Guerrero" className="rounded" />
                                    </a>
                                    <div className="d-flex align-items-center px-2">
                                        <img className="avatar avatar-md mr-3" src="Admin/images/xs/avatar1.jpg" alt />
                                        <div>
                                            <div>Nathan Guerrero</div>
                                            <small className="d-block text-muted">12 days ago</small>
                                        </div>
                                        <div className="ml-auto text-muted d-flex">
                                            <h6>$123.00</h6><h6 class="text-muted ml-2"></h6>
                                            <del>$123.00</del>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="card p-3" style={{width:'340px'}}>
                                    <a href="javascript:void(0)" className="mb-3">
                                        <img src="https://rukminim2.flixcart.com/image/612/612/kz1lle80/sweatshirt/j/5/f/xl-sl0029zh-black-slowloris-original-imagb547gzmbfhnh.jpeg?q=70" height={'360px'} width={'300px'} alt="Photo by Nathan Guerrero" className="rounded" />
                                    </a>
                                    <div className="d-flex align-items-center px-2">
                                        <img className="avatar avatar-md mr-3" src="Admin/images/xs/avatar2.jpg" alt />
                                        <div>
                                            <div>Alice Mason</div>
                                            <small className="d-block text-muted">12 days ago</small>
                                        </div>
                                        <div className="ml-auto text-muted d-flex">
                                            <h6>$123.00</h6><h6 class="text-muted ml-2"></h6>
                                            <del>$123.00</del>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="card p-3">
                                    <a href="javascript:void(0)" className="mb-3">
                                        <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/a/w/t/l-hlsh013833-highlander-original-imagg9tes7xm24sm.jpeg?q=70" height={'360px'} width={'370px'} alt="Photo by Rose Bradley" className="rounded" />
                                    </a>
                                    <div className="d-flex align-items-center px-2">
                                        <img className="avatar avatar-md mr-3" src="Admin/images/xs/avatar3.jpg" alt />
                                        <div>
                                            <div>Rose Bradley</div>
                                            <small className="d-block text-muted">4 days ago</small>
                                        </div>
                                        <div className="ml-auto text-muted d-flex">
                                            <h6>$123.00</h6><h6 class="text-muted ml-2"></h6>
                                            <del>$123.00</del>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="card p-3">
                                    <a href="javascript:void(0)" className="mb-3">
                                        <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/n/j/t/s-frml-st2-vebnor-original-imagtyvbmwzuqeyp.jpeg?q=70" alt="Photo by Peter Richards" className="rounded" />
                                    </a>
                                    <div className="d-flex align-items-center px-2">
                                        <img className="avatar avatar-md mr-3" src="Admin/images/xs/avatar4.jpg" alt />
                                        <div>
                                            <div>Peter Richards</div>
                                            <small className="d-block text-muted">18 days ago</small>
                                        </div>
                                        <div className="ml-auto text-muted d-flex">
                                            <h6>$123.00</h6><h6 class="text-muted ml-2"></h6>
                                            <del>$123.00</del>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="card p-3">
                                    <a href="javascript:void(0)" className="mb-3">
                                        <img src="https://rukminim2.flixcart.com/image/612/612/kfoapow0-0/shirt/a/h/x/xl-hlsh009443-highlander-original-imafw2ggzbzkyg6f.jpeg?q=70" height={'380px'} alt="Photo by Wayne Holland" className="rounded" />
                                    </a>
                                    <div className="d-flex align-items-center px-2">
                                        <img className="avatar avatar-md mr-3" src="Admin/images/xs/avatar5.jpg" alt />
                                        <div>
                                            <div>Wayne Holland</div>
                                            <small className="d-block text-muted">16 days ago</small>
                                        </div>
                                        <div className="ml-auto text-muted d-flex">
                                            <h6>$123.00</h6><h6 class="text-muted ml-2"></h6>
                                            <del>$113.00</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="card p-3">
                                    <a href="javascript:void(0)" className="mb-3">
                                        <img src="https://rukminim2.flixcart.com/image/416/416/xif0q/shopsy-shirt/k/x/a/l-spy-schatai91-indiclub-original-imagvp8dvhaqqpea.jpeg?q=70&crop=false" alt="Photo by Michelle Ross" className="rounded" />
                                    </a>
                                    <div className="d-flex align-items-center px-2">
                                        <img className="avatar avatar-md mr-3" src="Admin/images/xs/avatar6.jpg" alt />
                                        <div>
                                            <div>Michelle Ross</div>
                                            <small className="d-block text-muted">4 days ago</small>
                                        </div>
                                        <div className="ml-auto text-muted d-flex">
                                            <h6>$13.00</h6><h6 class="text-muted ml-2"></h6>
                                            <del>$13.00</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="card p-3">
                                    <a href="javascript:void(0)" className="mb-3">
                                        <img src="https://rukminim2.flixcart.com/image/612/612/l4yi7bk0/shirt/e/r/w/xl-men-slim-fit-printed-spread-collar-casual-shirt-sys-bella-original-imagfqvt67zfhk7f.jpeg?q=70" alt="Photo by Debra Beck" className="rounded" />
                                    </a>
                                    <div className="d-flex align-items-center px-2">
                                        <img className="avatar avatar-md mr-3" src="Admin/images/xs/avatar7.jpg" alt />
                                        <div>
                                            <div>Debra Beck</div>
                                            <small className="d-block text-muted">6 days ago</small>
                                        </div>
                                        <div className="ml-auto text-muted d-flex">
                                            <h6>$23.00</h6><h6 class="text-muted ml-2"></h6>
                                            <del>$23.00</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="card p-3">
                                    <a href="javascript:void(0)" className="mb-3">
                                        <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/z/i/s/-original-imaghhfypynjhd6z.jpeg?q=70" alt="Photo by Phillip Peters" className="rounded" />
                                    </a>
                                    <div className="d-flex align-items-center px-2">
                                        <img className="avatar avatar-md mr-3" src="Admin/images/xs/avatar8.jpg" alt />
                                        <div>
                                            <div>Phillip Peters</div>
                                            <small className="d-block text-muted">17 days ago</small>
                                        </div>
                                        <div className="ml-auto text-muted d-flex">
                                            <h6>$23.00</h6><h6 class="text-muted ml-2"></h6>
                                            <del>$23.00</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="card p-3">
                                    <a href="javascript:void(0)" className="mb-3">
                                        <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/g/f/w/xl-solidhoodiew-white-pdkfashions-original-imaggw6c27th8kmc.jpeg?q=70" alt="Photo by Jack Ruiz" className="rounded" />
                                    </a>
                                    <div className="d-flex align-items-center px-2">
                                        <img className="avatar avatar-md mr-3" src="Admin/images/xs/avatar1.jpg" alt />
                                        <div>
                                            <div>Jack Ruiz</div>
                                            <small className="d-block text-muted">15 days ago</small>
                                        </div>
                                        <div className="ml-auto text-muted d-flex">
                                            <h6>$23.00</h6><h6 class="text-muted ml-2"></h6>
                                            <del>$23.00</del>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="card p-3">
                                    <a href="javascript:void(0)" className="mb-3">
                                        <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/r/6/i/xl-tokyo-revenger-hoodie-getsetwear-original-imagyfhaea4m8xjg.jpeg?q=70" alt="Photo by Ronald Bradley" className="rounded" />
                                    </a>
                                    <div className="d-flex align-items-center px-2">
                                        <img className="avatar avatar-md mr-3" src="Admin/images/xs/avatar2.jpg" alt />
                                        <div>
                                            <div>Ronald Bradley</div>
                                            <small className="d-block text-muted">11 days ago</small>
                                        </div>
                                        <div className="ml-auto text-muted d-flex">
                                            <h6>$23.00</h6><h6 class="text-muted ml-2"></h6>
                                            <del>$23.00</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="card p-3">
                                    <a href="javascript:void(0)" className="mb-3">
                                        <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/w/g/j/xl-lavnwhtehood-xl-curtaincart-original-imagycjzcpghgdgr.jpeg?q=70" height={'398px'} alt="Photo by Kathleen Harper" className="rounded" />
                                    </a>
                                    <div className="d-flex align-items-center px-2">
                                        <img className="avatar avatar-md mr-3" src="Admin/images/xs/avatar3.jpg" alt />
                                        <div>
                                            <div>Kathleen Harper</div>
                                            <small className="d-block text-muted">16 days ago</small>
                                        </div>
                                        <div className="ml-auto text-muted d-flex">
                                            <h6>$23.00</h6><h6 class="text-muted ml-2"></h6>
                                            <del>$23.00</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="card p-3">
                                    <a href="javascript:void(0)" className="mb-3">
                                        <img src="https://rukminim2.flixcart.com/image/612/612/kw5ag7k0/sweatshirt/u/3/0/m-hoodie-1000-sancia-original-imag8w7uyahbjdzt.jpeg?q=70" height={'395px'} width={'400px'} alt="Photo by Bobby Knight" className="rounded" />
                                    </a>
                                    <div className="d-flex align-items-center px-2">
                                        <img className="avatar avatar-md mr-3" src="Admin/images/xs/avatar4.jpg" alt />
                                        <div>
                                            <div>Bobby Knight</div>
                                            <small className="d-block text-muted">6 days ago</small>
                                        </div>
                                        <div className="ml-auto text-muted d-flex">
                                            <h6>$23.00</h6><h6 class="text-muted ml-2"></h6>
                                            <del>$23.00</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="row row-cards">
                            <div className="col-sm-6 col-lg-4">
                                <div className="card p-3">
                                    <a href="javascript:void(0)" className="mb-3">
                                        <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/sari/b/b/w/free-braso2-o-combo-lorofy-unstitched-original-imagkymbfmjbfeqj.jpeg?q=70" height={'400px'}  alt="Photo by Nathan Guerrero" className="rounded" />
                                    </a>
                                    <div className="d-flex align-items-center px-2">
                                        <img className="avatar avatar-md mr-3" src="Admin/images/xs/avatar1.jpg" alt />
                                        <div>
                                            <div>Nathan Guerrero</div>
                                            <small className="d-block text-muted">12 days ago</small>
                                        </div>
                                        <div className="ml-auto text-muted d-flex">
                                            <h6>$123.00</h6><h6 class="text-muted ml-2"></h6>
                                            <del>$123.00</del>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="card p-3" style={{width:'340px'}}>
                                    <a href="javascript:void(0)" className="mb-3">
                                        <img src="c" height={'400px'}  alt="Photo by Nathan Guerrero" className="rounded" />
                                    </a>
                                    <div className="d-flex align-items-center px-2">
                                        <img className="avatar avatar-md mr-3" src="Admin/images/xs/avatar2.jpg" alt />
                                        <div>
                                            <div>Alice Mason</div>
                                            <small className="d-block text-muted">12 days ago</small>
                                        </div>
                                        <div className="ml-auto text-muted d-flex">
                                            <h6>$123.00</h6><h6 class="text-muted ml-2"></h6>
                                            <del>$123.00</del>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="card p-3">
                                    <a href="javascript:void(0)" className="mb-3">
                                        <img src="https://rukminim2.flixcart.com/image/612/612/kngd0nk0/jacket/0/l/q/m-12698610-roadster-original-imag24hca3mphszs.jpeg?q=70" height={'398px'} alt="Photo by Rose Bradley" className="rounded" />
                                    </a>
                                    <div className="d-flex align-items-center px-2">
                                        <img className="avatar avatar-md mr-3" src="Admin/images/xs/avatar3.jpg" alt />
                                        <div>
                                            <div>Rose Bradley</div>
                                            <small className="d-block text-muted">4 days ago</small>
                                        </div>
                                        <div className="ml-auto text-muted d-flex">
                                            <h6>$123.00</h6><h6 class="text-muted ml-2"></h6>
                                            <del>$123.00</del>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="card p-3">
                                    <a href="javascript:void(0)" className="mb-3">
                                        <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/dress/f/d/6/xxl-kottywomensdressset09-kotty-original-imagx2ffzzjhr9jx.jpeg?q=70" alt="Photo by Peter Richards" className="rounded" />
                                    </a>
                                    <div className="d-flex align-items-center px-2">
                                        <img className="avatar avatar-md mr-3" src="Admin/images/xs/avatar4.jpg" alt />
                                        <div>
                                            <div>Peter Richards</div>
                                            <small className="d-block text-muted">18 days ago</small>
                                        </div>
                                        <div className="ml-auto text-muted d-flex">
                                            <h6>$123.00</h6><h6 class="text-muted ml-2"></h6>
                                            <del>$123.00</del>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="card p-3">
                                    <a href="javascript:void(0)" className="mb-3">
                                        <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/sari/d/l/4/free-brasosari2-0-lorofy-unstitched-original-imagx7g6npgg6ff9.jpeg?q=70&crop=false"   alt="Photo by Wayne Holland" className="rounded" />
                                    </a>
                                    <div className="d-flex align-items-center px-2">
                                        <img className="avatar avatar-md mr-3" src="Admin/images/xs/avatar5.jpg" alt />
                                        <div>
                                            <div>Wayne Holland</div>
                                            <small className="d-block text-muted">16 days ago</small>
                                        </div>
                                        <div className="ml-auto text-muted d-flex">
                                            <h6>$123.00</h6><h6 class="text-muted ml-2"></h6>
                                            <del>$113.00</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="card p-3">
                                    <a href="javascript:void(0)" className="mb-3">
                                        <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/dress/n/d/z/xs-ttj6009880-tokyo-talkies-original-imagwg7yanvsxzaf.jpeg?q=70" alt="Photo by Michelle Ross" className="rounded" />
                                    </a>
                                    <div className="d-flex align-items-center px-2">
                                        <img className="avatar avatar-md mr-3" src="Admin/images/xs/avatar6.jpg" alt />
                                        <div>
                                            <div>Michelle Ross</div>
                                            <small className="d-block text-muted">4 days ago</small>
                                        </div>
                                        <div className="ml-auto text-muted d-flex">
                                            <h6>$13.00</h6><h6 class="text-muted ml-2"></h6>
                                            <del>$13.00</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="card p-3">
                                    <a href="javascript:void(0)" className="mb-3">
                                        <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/m/r/k/s-emb-dup-set-celtic-fab-original-imagnef9z2rwhs7k.jpeg?q=70" height={'420px'} width={'420px'}  alt="Photo by Debra Beck" className="rounded" />
                                    </a>
                                    <div className="d-flex align-items-center px-2">
                                        <img className="avatar avatar-md mr-3" src="Admin/images/xs/avatar7.jpg" alt />
                                        <div>
                                            <div>Debra Beck</div>
                                            <small className="d-block text-muted">6 days ago</small>
                                        </div>
                                        <div className="ml-auto text-muted d-flex">
                                            <h6>$23.00</h6><h6 class="text-muted ml-2"></h6>
                                            <del>$23.00</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="card p-3">
                                    <a href="javascript:void(0)" className="mb-3">
                                        <img src="https://rukminim2.flixcart.com/image/612/612/l0fm07k0/top/r/2/q/xl-ltp10461-pirateprint-pluss-original-imagc7v74h5jcffu.jpeg?q=70" alt="Photo by Phillip Peters" className="rounded" />
                                    </a>
                                    <div className="d-flex align-items-center px-2">
                                        <img className="avatar avatar-md mr-3" src="Admin/images/xs/avatar8.jpg" alt />
                                        <div>
                                            <div>Phillip Peters</div>
                                            <small className="d-block text-muted">17 days ago</small>
                                        </div>
                                        <div className="ml-auto text-muted d-flex">
                                            <h6>$23.00</h6><h6 class="text-muted ml-2"></h6>
                                            <del>$23.00</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="card p-3">
                                    <a href="javascript:void(0)" className="mb-3">
                                        <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/f/r/k/l-kanganchicken-anushansa-original-imagkqwgmevgzymb.jpeg?q=70" alt="Photo by Jack Ruiz" className="rounded" />
                                    </a>
                                    <div className="d-flex align-items-center px-2">
                                        <img className="avatar avatar-md mr-3" src="Admin/images/xs/avatar1.jpg" alt />
                                        <div>
                                            <div>Jack Ruiz</div>
                                            <small className="d-block text-muted">15 days ago</small>
                                        </div>
                                        <div className="ml-auto text-muted d-flex">
                                            <h6>$23.00</h6><h6 class="text-muted ml-2"></h6>
                                            <del>$23.00</del>
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="card p-3">
                                    <a href="javascript:void(0)" className="mb-3">
                                        <img src="https://rukminim2.flixcart.com/image/612/612/k3khevk0/ethnic-set/4/f/b/l-10356605-here-now-original-imafmnj3fzq47gzc.jpeg?q=70" alt="Photo by Ronald Bradley" className="rounded" />
                                    </a>
                                    <div className="d-flex align-items-center px-2">
                                        <img className="avatar avatar-md mr-3" src="Admin/images/xs/avatar2.jpg" alt />
                                        <div>
                                            <div>Ronald Bradley</div>
                                            <small className="d-block text-muted">11 days ago</small>
                                        </div>
                                        <div className="ml-auto text-muted d-flex">
                                            <h6>$23.00</h6><h6 class="text-muted ml-2"></h6>
                                            <del>$23.00</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="card p-3">
                                    <a href="javascript:void(0)" className="mb-3">
                                        <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/m/9/p/4xl-raji-begani-nw-4xl-gosriki-original-imagrpuhpz32nrtq.jpeg?q=70"  alt="Photo by Kathleen Harper" className="rounded" />
                                    </a>
                                    <div className="d-flex align-items-center px-2">
                                        <img className="avatar avatar-md mr-3" src="Admin/images/xs/avatar3.jpg" alt />
                                        <div>
                                            <div>Kathleen Harper</div>
                                            <small className="d-block text-muted">16 days ago</small>
                                        </div>
                                        <div className="ml-auto text-muted d-flex">
                                            <h6>$23.00</h6><h6 class="text-muted ml-2"></h6>
                                            <del>$23.00</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="card p-3">
                                    <a href="javascript:void(0)" className="mb-3">
                                        <img src="https://rukminim2.flixcart.com/image/612/612/k7gikcw0/ethnic-set/w/y/q/m-10561392-sangria-original-imafpzgvsymmg6ea.jpeg?q=70"  alt="Photo by Bobby Knight" className="rounded" />
                                    </a>
                                    <div className="d-flex align-items-center px-2">
                                        <img className="avatar avatar-md mr-3" src="Admin/images/xs/avatar4.jpg" alt />
                                        <div>
                                            <div>Bobby Knight</div>
                                            <small className="d-block text-muted">6 days ago</small>
                                        </div>
                                        <div className="ml-auto text-muted d-flex">
                                            <h6>$23.00</h6><h6 class="text-muted ml-2"></h6>
                                            <del>$23.00</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


    </div>
  )
}

export default Admin_gallary
