import { Outlet, Link } from "react-router-dom";
export default function Root() {
    return (

            <div class="row">
            <div id="sidebar" class="bg-light col-lg-3 col-md-4 col-sm-12">
            <ul class="nav flex-column">
            <li class="nav-item ">
            <Link class="nav-link text-reset" to={`/setting`}>OpenAI API 设置</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link text-reset" to={`/rewrite`}>文本润色</Link>
            </li>
            </ul>
            </div>
            <div id="detail" class="col-lg-9 col-md-8 col-sm-12">
            <Outlet />
            </div>
            </div>
    );
}
