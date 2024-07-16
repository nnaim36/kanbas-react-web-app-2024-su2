import "../styles.css";
export default function(){
    return(
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                <div className="wd-dashboard-course col" style={{width:"300px"}}>
                    
                    <div className="card">
                        <a className="wd-dashboard-course-link text-decoration-none text-dark"
                        href="#/Kanbas/Courses/1234/Home">
                        <img src="/images/reactjs.jpg" width="100%" />
                        <div className="card-body">
                            <h5 className="wd-dashboard-course-title card-title">
                            CS1234 React JS
                            </h5>
                        <p className="card-text">
                        Full Stack software developer
                        </p>
                        {/*<a href="#/Kanbas/Courses/1234/Home"> Go </a>*/}
                        <button className="btn btn-primary">Go</button>
                    </div>
                    </a>
                    </div>
                </div>
                
                <div className="wd-dashboard-course col" style={{width:"300px"}}>
                    
                    <div className="card">
                        <a className="wd-dashboard-course-link text-decoration-none text-dark"
                        href="#/Kanbas/Courses/1235/Home">
                        <img src="/images/reactjs.jpg" width="100%" />
                        <div className="card-body">
                            <h5 className="wd-dashboard-course-title card-title">
                            CS1235 SQL Databases
                            </h5>
                        <p className="card-text">
                        Back end relational database
                        </p>
                        {/*<a href="#/Kanbas/Courses/1234/Home"> Go </a>*/}
                        <button className="btn btn-primary">Go</button>
                    </div>
                    </a>
                    </div>
                </div>
                <div className="wd-dashboard-course col" style={{width:"300px"}}>
                    
                    <div className="card">
                        <a className="wd-dashboard-course-link text-decoration-none text-dark"
                        href="#/Kanbas/Courses/1236/Home">
                        <img src="/images/reactjs.jpg" width="100%" />
                        <div className="card-body">
                            <h5 className="wd-dashboard-course-title card-title">
                            CS1236 MongoDB
                            </h5>
                        <p className="card-text">
                        Backend non-relational database
                        </p>
                        {/*<a href="#/Kanbas/Courses/1234/Home"> Go </a>*/}
                        <button className="btn btn-primary">Go</button>
                    </div>
                    </a>
                    </div>
                </div>
                <div className="wd-dashboard-course col" style={{width:"300px"}}>
                    
                    <div className="card">
                        <a className="wd-dashboard-course-link text-decoration-none text-dark"
                        href="#/Kanbas/Courses/1237/Home">
                        <img src="/images/reactjs.jpg" width="100%" />
                        <div className="card-body">
                            <h5 className="wd-dashboard-course-title card-title">
                            CS1237 Python
                            </h5>
                        <p className="card-text">
                        Introduction to programming
                        </p>
                        {/*<a href="#/Kanbas/Courses/1234/Home"> Go </a>*/}
                        <button className="btn btn-primary">Go</button>
                    </div>
                    </a>
                    </div>
                </div>
                <div className="wd-dashboard-course col" style={{width:"300px"}}>
                    
                    <div className="card">
                        <a className="wd-dashboard-course-link text-decoration-none text-dark"
                        href="#/Kanbas/Courses/1238/Home">
                        <img src="/images/reactjs.jpg" width="100%" />
                        <div className="card-body">
                            <h5 className="wd-dashboard-course-title card-title">
                            CS1238 Java
                            </h5>
                        <p className="card-text">
                        Oject-oriented programming
                        </p>
                        {/*<a href="#/Kanbas/Courses/1234/Home"> Go </a>*/}
                        <button className="btn btn-primary">Go</button>
                    </div>
                    </a>
                    </div>
                </div>
                <div className="wd-dashboard-course col" style={{width:"300px"}}>
                    
                    <div className="card">
                        <a className="wd-dashboard-course-link text-decoration-none text-dark"
                        href="#/Kanbas/Courses/1238/Home">
                        <img src="/images/reactjs.jpg" width="100%" />
                        <div className="card-body">
                            <h5 className="wd-dashboard-course-title card-title">
                            CS1239 C
                            </h5>
                        <p className="card-text">
                        Low level programming
                        </p>
                        {/*<a href="#/Kanbas/Courses/1234/Home"> Go </a>*/}
                        <button className="btn btn-primary">Go</button>
                    </div>
                    </a>
                    </div>
                </div>
                <div className="wd-dashboard-course col" style={{width:"300px"}}>
                    
                    <div className="card">
                        <a className="wd-dashboard-course-link text-decoration-none text-dark"
                        href="#/Kanbas/Courses/1238/Home">
                        <img src="/images/reactjs.jpg" width="100%" />
                        <div className="card-body">
                            <h5 className="wd-dashboard-course-title card-title">
                            CS1240 Git
                            </h5>
                        <p className="card-text">
                        revision control
                        </p>
                        {/*<a href="#/Kanbas/Courses/1234/Home"> Go </a>*/}
                        <button className="btn btn-primary">Go</button>
                    </div>
                    </a>
                    </div>
                </div>
                

            </div>
            </div>
        </div>
    );
}