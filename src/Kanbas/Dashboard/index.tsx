export default function(){
    return(
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                        href="#/Kanbas/Courses/1234/Home">
                        CS1234 React JS
                        </a>
                        <p className="wd-dashboard-course-title">
                        Full Stack software developer
                        </p>
                        <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course"> 
                <img src="/images/reactjs.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                        href="#/Kanbas/Courses/1235/Home">
                        CS1235 SQL Databases
                        </a>
                        <p className="wd-dashboard-course-title">
                        Back end relational database
                        </p>
                        <a href="#/Kanbas/Courses/1235/Home"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                <img src="/images/reactjs.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                        href="#/Kanbas/Courses/1236/Home">
                        CS1236 MongoDB
                        </a>
                        <p className="wd-dashboard-course-title">
                        Backend non-relational database
                        </p>
                        <a href="#/Kanbas/Courses/1236/Home"> Go </a>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                <img src="/images/reactjs.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                        href="#/Kanbas/Courses/1237/Home">
                        CS1237 Python
                        </a>
                        <p className="wd-dashboard-course-title">
                        Introduction to programming
                        </p>
                        <a href="#/Kanbas/Courses/1237/Home"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                <img src="/images/reactjs.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                        href="#/Kanbas/Courses/1235/Home">
                        CS1238 Java
                        </a>
                        <p className="wd-dashboard-course-title">
                        Oject-oriented programming
                        </p>
                        <a href="#/Kanbas/Courses/1235/Home"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                <img src="/images/reactjs.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                        href="#/Kanbas/Courses/1239/Home">
                        CS1239 C
                        </a>
                        <p className="wd-dashboard-course-title">
                        Low level programming
                        </p>
                        <a href="#/Kanbas/Courses/1239/Home"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                <img src="/images/reactjs.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                        href="#/Kanbas/Courses/1240/Home">
                        CS1240 Git
                        </a>
                        <p className="wd-dashboard-course-title">
                        revision control
                        </p>
                        <a href="#/Kanbas/Courses/1240/Home"> Go </a>
                    </div>
                </div>

            </div>
        </div>
    );
}