import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <div className="flex justify-self-center items-center">
      <div class="font-sans text-gray-800  w-[1000px] h-[4100px] flex-col items-center ml-20 mt-20 mb-12">
        <div id="doc2" className="flex flex-col items-center">
          <div
            id="inner"
            className=" p-5 mx-auto bg-gray-100 border-t-8 border-gray-600 border-b-2 border-gray-200"
          >
            {/* hero section */}
            <div id="hd" className="mb-8 pb-6 border-b border-gray-300">
              <div className="flex ">
                <div className="w-full ">
                  <h1 className="text-6xl uppercase tracking-wider text-gray-800">
                    Jonathan Doe
                  </h1>
                  <h2 className="text-2xl">Web Designer, Director</h2>
                </div>
                <div className="w-1/5  ">
                  <div className="contact-info mt-2">
                    <div className="flex items-center">
                      <h3 id="cityvalue" className="inline">
                        New York
                      </h3>
                      <h3 className="inline">, </h3>
                      <h3 id="countryvalue" className="inline">
                        USA
                      </h3>
                    </div>
                    <h3
                      id="emailvalue"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <a href="mailto:name@yourdomain.com">
                        name@yourdomain.com
                      </a>
                    </h3>
                    <h3 id="phonevalue">+1 (123) 456-7890</h3>
                  </div>
                </div>
              </div>
            </div>


            <div id="bd">
              <div id="yui-main">
                <div className="flex-col flex-wrap ">
                  <div className="flex  border-b border-gray-300 ">
                    <div>
                      <h2 className="w-[200px] p-5 pr-40  text-2xl font-semibold">
                        Profile
                      </h2>
                    </div>
                    <div className="p-5 pb-10 w-full">
                      <p className="text-lg ">
                        Progressively evolve cross-platform ideas before
                        impactful infomediaries. Energistically visualize
                        tactical initiatives before cross-media catalysts for
                        change.
                      </p>
                    </div>
                  </div>
                  {/* <div className="flex  border-b border-gray-300 ">
                    <div className="">
                      <h2 className=" w-[200px] text-2xl text-center  p-5 pr-40 font-semibold">
                        Skills
                      </h2>
                    </div>
                    <div className="pt-5 w-full  flex ">
                      <div className="pt-1 pb-5 pl-5 pr-5 w-[250px] ">
                        <h2 className="text-2xl font-semibold">Web Design</h2>
                        <p>
                          Assertively exploit wireless initiatives rather than
                          synergistic core competencies.
                        </p>
                      </div>
                      <div className="pt-1 pb-5 pl-5 pr-5 w-[250px]">
                        <h2 id="skill2" className="text-2xl font-semibold">
                          Interface Design
                        </h2>
                        <p id="skilldis2">
                          Credibly streamline mission-critical value with
                          multifunctional functionalities.
                        </p>
                      </div>
                      <div className="pt-1 pb-5 pl-5 pr-5 w-[250px]">
                        <h2 id="skill3" className="text-2xl font-semibold">
                          Project Direction
                        </h2>
                        <p id="skilldis3">
                          Proven ability to lead and manage a wide variety of
                          design and development projects in team and
                          independent situations.
                        </p>
                      </div>
                    </div>
                  </div> */}
                  <div className="w-full flex  border-b border-gray-300 mt-1 mb-2  ">
                    <div>
                      <h2 className=" w-[200px] text-2xl p-5 pr-40 font-semibold">
                        Skills
                      </h2>
                    </div>
                    <div className="pt-2 w-full pl-5 ">
                      <div className="p-1 border-b border-gray-300">
                        <ul className="flex justify-around">
                          <li className="w-[150px]">HTML</li>
                          <li className="w-[150px]">CSS</li>
                          <li className="w-[150px]">Javascript</li>
                        </ul>
                      </div>
                      <div className="p-1 pt-2 border-b border-gray-300">
                        <ul className="talent  flex justify-around">
                          <li className="w-[150px]">Jquery</li>
                          <li className="w-[150px]">PHP</li>
                          <li className="w-[150px]">CVS / Subversion</li>
                        </ul>
                      </div>
                      <div className="p-1  border-b ">
                        <ul className="flex justify-around">
                          <li className="w-[150px]">OS X</li>
                          <li className="w-[150px]">Windows XP/Vista</li>
                          <li className="w-[150px]">Linux</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="w-full flex border-b border-gray-300 pb-8 ">
                    <div>
                      <h2 className=" w-[200px] p-5 pr-32 text-2xl font-semibold">
                        Experience
                      </h2>
                    </div>
                    <div className="flex-col w-full  p-5">
                      <div className=" pt-5 w-full   border-b border-gray-300">
                        <div className="flex justify-between   ">
                          <div className="">
                            <h2 className=" text-2xl font-semibold">
                              Facebook
                            </h2>
                            <h3 id="role1">Senior Interface Designer</h3>
                          </div>
                          <div className="flex p-5">
                            <h4 className="syears" id="jstarte1">
                              2005
                            </h4>
                            <h4 className="desh">-</h4>

                            <h4 id="jsende1">2007</h4>
                          </div>
                        </div>
                        <div>
                          <p id="jobdis1" className="pb-10">
                            Intrinsicly enable optimal core competencies through
                            corporate relationships. Phosfluorescently implement
                            worldwide vortals and client-focused imperatives.
                            Conveniently initiate virtual paradigms and top-line
                            convergence.
                          </p>
                        </div>
                      </div>
                      {/* <div className="border-b border-gray-300 ">
                        <div className="flex justify-between ">
                          <div className="">
                            <h2 className=" text-2xl font-semibold">
                              Facebook
                            </h2>
                            <h3 id="role1">Senior Interface Designer</h3>
                          </div>
                          <div className="flex p-5">
                            <h4 className="syears" id="jstarte1">
                              2005
                            </h4>
                            <h4 className="desh">-</h4>
                            <h4 id="jsende1">2007</h4>
                          </div>
                        </div>
                        <div>
                          <p id="jobdis1" className="pb-10">
                            Intrinsicly enable optimal core competencies through
                            corporate relationships. Phosfluorescently implement
                            worldwide vortals and client-focused imperatives.
                            Conveniently initiate virtual paradigms and top-line
                            convergence.
                          </p>
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <div className="flex w-full border-b border-gray-300">
                      <div className="">
                        <h2 className="w-[200px] p-5 pr-32 text-xl font-semibold">
                          Education
                        </h2>
                      </div>
                     
                        <div>
                          <div className="flex w-full border-b border-gray-300">
                            <div className="w-full pt-5 pb-1 mb-4 p-5  flex-col border-b border-gray-300">
                              <div>
                                <h2 id="Coursename1" className="inline">
                                  2015-2020
                                </h2>
                              </div>
                              <div>
                                <h2 id="Coursename1" className="inline">
                                  Indiana University - Bloomington, Indiana
                                </h2>
                              </div>
                              <div>
                                <h2 id="feildname1" className="inline">
                                  b.tech -
                                </h2>
                                <h3 className="inline"> Grade=</h3>
                                <h3 className="inline">
                                  <strong id="cgpa1">7.8</strong>
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                  <div className="w-full flex">
                    <div className="">
                      <h2 className=" w-[200px]  p-5 pr-32 text-2xl font-semibold">
                        Project
                      </h2>
                    </div>
                    <div className="flex-col w-full p-10 pt-5">
                      <div className="w-full  ">
                        <h2 className="text-2xl font-semibold mb-5">
                          Hu Chu Gujarati-News website
                        </h2>
                        <ul style={{ listStyle: "disc" }}>
                          <li>
                            The "Hu Chu Gujarati" news website is a modern and
                            dynamic platform designed to provide the latest news
                            and updates in the Gujarati language.
                          </li>
                          <li>
                            The website is built using cutting-edge technologies
                            such as React.js for the frontend, Node.js for the
                            backend, and MySQL for data storage.
                          </li>
                          <li>
                            It includes a robust admin panel to manage user
                            roles and ensure accessibility control.
                          </li>
                          <li>
                            Admin can easily add, edit, or delete news articles
                            through a secure and userfriendly admin panel.
                          </li>
                        </ul>
                      </div>
                      <div className="w-full mt-5">
                        <h2 className="text-2xl font-semibold mb-5">
                          Ecommerce Website
                        </h2>
                        <ul style={{ listStyle: "disc" }}>
                          <li>
                            The "Modern Ecommerce Website" is an advanced online
                            shopping platform built with cutting-edge
                            technologies such as React.js, Redux, Redux Saga,
                            Tailwind CSS, HTML, and CSS.
                          </li>
                          <li>
                            A clean and user-friendly interface with intuitive
                            navigation and responsive design for various devices
                            and screen sizes.
                          </li>
                          <li>
                            It includes a robust admin panel to manage user
                            roles and ensure accessibility control.
                          </li>
                          It provides a seamless and visually appealing shopping
                          experience for users, along with robust state
                          management and efficient asynchronous operations.
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
