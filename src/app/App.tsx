import { Suspense, useEffect } from 'react'
import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { classNames } from 'shared/lib/helpers/classNames';
import { Sidebar } from 'widgets/Sidebar';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import {HotMessengerBar} from "widgets/HotMessengerBar/HotMessengerBar";

const App = () => {
    const { theme } = useTheme()

    useEffect(() => {
        console.log(__IS_DEV__)
    })

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<PageLoader />}>
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                    <HotMessengerBar />
                </div>
            </Suspense>
        </div>
    )
}

export default App
