import React from 'react'
import img1 from '../img/css-icon 1.png'
import img2 from '../img/html-icon 1.png'
import img3 from '../img/url-icon 1.png'
function Graph() {
      return (
            <div className='2xl:grid 2xl:grid-cols-3 gap-4 mt-[38px] xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-3 md:grid md:grid-cols-1'>
                  <div >
                        <div>
                              <h5 className='2xl:text-[24px] xl:text-[24px] lg:text-[20px] md:text-[18px] font-[700] pb-[18px] '>
                                    Lorem ipsum dolor sit amet
                              </h5>
                        </div>
                        <div >
                              <div className='flex'>
                                    <img className='2xl:w-[128px] 2xl:h-[128px] xl:w-[128px] xl:h-[128px] md:w-[90px] sm:w-[70px] max-[650px]:w-[100px]  md:h-[90px] sm:h-[70px] max-[659px]:h-[100px]' src={img1} />
                                    <p className='text-[14px]'>
                                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor.
                                    </p>
                              </div>
                              <p className=' text-[14px]'>Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</p>
                        </div>
                  </div>
                  <div >
                        <div>
                              <h5 className='2xl:text-[24px] xl:text-[24px] lg:text-[20px] md:text-[18px] font-[700] pb-[18px] '>
                                    Lorem ipsum dolor sit amet
                              </h5>
                        </div>
                        <div >
                              <div className='flex'>
                                    <img className='2xl:w-[128px] 2xl:h-[128px] xl:w-[128px] xl:h-[128px] md:w-[90px] sm:w-[70px] max-[650px]:w-[100px]  md:h-[90px] sm:h-[70px] max-[659px]:h-[100px]' src={img2} />
                                    <p className='text-[14px]'>
                                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. 
                                    </p>
                              </div>
                              <p className=' text-[14px]'>Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</p>
                        </div>
                  </div>
                  <div >
                        <div>
                              <h5 className='2xl:text-[24px] xl:text-[24px] lg:text-[20px] md:text-[18px] font-[700] pb-[18px] '>
                                    Lorem ipsum dolor sit amet
                              </h5>
                        </div>
                        <div >
                              <div className='flex'>
                                    <img className='2xl:w-[128px] 2xl:h-[128px] xl:w-[128px] xl:h-[128px] md:w-[90px] sm:w-[70px] max-[650px]:w-[100px]  md:h-[90px] sm:h-[70px] max-[659px]:h-[100px]' src={img3} />
                                    <p className='text-[14px]'>
                                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor.
                                    </p>
                              </div>
                              <p className=' text-[14px]'> Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</p>
                        </div>
                  </div>
            </div>
      )
}

export default Graph