import { Outlet } from "react-router-dom";

import Directroy from "../../components/directory/directory.components";

function Home() {
    return (
        <div>
            <Outlet />
            <Directroy />
        </div>
    );
}

export default Home;
