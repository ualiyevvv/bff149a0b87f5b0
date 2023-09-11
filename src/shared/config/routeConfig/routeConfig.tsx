import { RouteProps } from 'react-router-dom';
import MainPage from 'pages/MainPage/ui/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import FriendsPage from 'pages/FriendsPage/ui/FriendsPage';
import MessagesPage from "pages/MessagesPage/ui/MessagesPage";
import SettingsPage from "pages/SettingsPage/ui/SettingsPage";
import RoomsPage from "pages/RoomsPage/ui/RoomsPage";

export enum AppRoutes {
    MAIN = 'main',
    FRIENDS = 'friends',
    MESSAGES = 'messages',
    SETTINGS = 'settings',
    ROOMS = 'rooms',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.FRIENDS]: '/friends',
    [AppRoutes.MESSAGES]: '/messages',
    [AppRoutes.SETTINGS]: '/settings',
    [AppRoutes.ROOMS]: '/rooms',
    // последний
    [AppRoutes.NOT_FOUND]: '*'
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRoutes.FRIENDS]: {
        path: RoutePath.friends,
        element: <FriendsPage />
    },
    [AppRoutes.MESSAGES]: {
        path: RoutePath.messages,
        element: <MessagesPage />
    },
    [AppRoutes.SETTINGS]: {
        path: RoutePath.settings,
        element: <SettingsPage />
    },
    [AppRoutes.ROOMS]: {
        path: RoutePath.rooms,
        element: <RoomsPage />
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />
    }
};
