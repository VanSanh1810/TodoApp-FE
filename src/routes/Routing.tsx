import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/auth/LoginPage';
import LandingPage from '../pages/main/LandingPage';

function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />

                {/* <Route
                        exact
                        path="/"
                        element={
                            <Private>
                                <EcommercePage />
                            </Private>
                        }
                    ></Route> */}

                {/* <Route path="*" element={<ErrorPage />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;
