import {Outlet} from "react-router-dom";

export default function DefaultLayout() {
    return (
        <>
            <p>default</p>

            <Outlet />
        </>
    )
}
