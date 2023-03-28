import { Outlet, Link } from "react-router-dom";
export default function Root() {
    return (
            <>
            <div id="sidebar">
            <h1> Aibox Contacts</h1>
            <nav>
            <ul>
            <li>
            <Link to={`/setting`}>OpenAI API 设置</Link>
            </li>
            <li>
            <Link to={`/rewrite`}>文本润色</Link>
            </li>
            </ul>
            </nav>
            </div>
            <div id="detail">
            <Outlet />
            </div>
            </>
    );
}
