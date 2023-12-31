import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import {Navbar} from "widgets/Navbar";

interface AppRouterProps {
    onToggle?: () => void;
}
export const AppRouter = ({ onToggle }:AppRouterProps) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            <div className="page">
                                <Navbar onToggle={onToggle} />
                                <div className="page-wrapper">
                                    {element}
                                </div>
                            </div>
                        }
                    />
                ))}
            </Routes>
        </Suspense>
    )
}
