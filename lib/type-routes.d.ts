// This file is auto generated by TypescriptableLaravel.
declare namespace App.Route {
    export type Name =
        | "login"
        | "logout"
        | "password.request"
        | "password.reset"
        | "password.update"
        | "user-profile-information.update"
        | "user-password.update"
        | "user/confirm-password"
        | "password.confirmation"
        | "two-factor.login"
        | "two-factor.enable"
        | "two-factor.confirm"
        | "two-factor.qr-code"
        | "two-factor.secret-key"
        | "two-factor.recovery-codes"
        | "profile.show"
        | "other-browser-sessions.destroy"
        | "current-user-photo.destroy"
        | "current-user.destroy"
        | "sanctum.csrf-cookie"
        | "contact.index"
        | "download.show"
        | "feeds"
        | "feeds/{feed_slug}"
        | "home"
        | "page.about"
        | "page.subscribe"
        | "page.p1pdd"
        | "page.pqd2p"
        | "podcasts.index"
        | "podcasts.show"
        | "posts.index"
        | "posts.show"
        | "rss.index"
        | "rss.show"
        | "api/user"
        | "dashboard";
    export type Path =
        | "/login"
        | "/logout"
        | "/forgot-password"
        | "/reset-password/{token}"
        | "/reset-password"
        | "/user/profile-information"
        | "/user/password"
        | "/user/confirm-password"
        | "/user/confirmed-password-status"
        | "/two-factor-challenge"
        | "/user/two-factor-authentication"
        | "/user/confirmed-two-factor-authentication"
        | "/user/two-factor-qr-code"
        | "/user/two-factor-secret-key"
        | "/user/two-factor-recovery-codes"
        | "/user/profile"
        | "/user/other-browser-sessions"
        | "/user/profile-photo"
        | "/user"
        | "/sanctum/csrf-cookie"
        | "/contact"
        | "/download/{podcast_slug}"
        | "/feeds"
        | "/feeds/{feed_slug}"
        | "/"
        | "/a-propos"
        | "/s-abonner"
        | "/p1pdd"
        | "/pqd2p"
        | "/podcasts"
        | "/podcasts/{podcast_slug}"
        | "/blog"
        | "/blog/{post_slug}"
        | "/rss"
        | "/rss/{feed_slug}"
        | "/api/user"
        | "/dashboard";
    export type Params = {
        login: never;
        logout: never;
        "password.request": never;
        "password.reset": {
            token?: App.Route.Param;
        };
        "password.update": never;
        "user-profile-information.update": never;
        "user-password.update": never;
        "user/confirm-password": never;
        "password.confirmation": never;
        "two-factor.login": never;
        "two-factor.enable": never;
        "two-factor.confirm": never;
        "two-factor.qr-code": never;
        "two-factor.secret-key": never;
        "two-factor.recovery-codes": never;
        "profile.show": never;
        "other-browser-sessions.destroy": never;
        "current-user-photo.destroy": never;
        "current-user.destroy": never;
        "sanctum.csrf-cookie": never;
        "contact.index": never;
        "download.show": {
            podcast_slug?: App.Route.Param;
        };
        feeds: never;
        "feeds/{feed_slug}": {
            feed_slug?: App.Route.Param;
        };
        home: never;
        "page.about": never;
        "page.subscribe": never;
        "page.p1pdd": never;
        "page.pqd2p": never;
        "podcasts.index": never;
        "podcasts.show": {
            podcast_slug?: App.Route.Param;
        };
        "posts.index": never;
        "posts.show": {
            post_slug?: App.Route.Param;
        };
        "rss.index": never;
        "rss.show": {
            feed_slug?: App.Route.Param;
        };
        "api/user": never;
        dashboard: never;
    };

    export type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    export interface Link {
        name: App.Route.Name;
        path: App.Route.Path;
        params?: App.Route.Params[Route.Name];
        method: App.Route.Method;
    }

    export type Param = string | number | boolean | undefined;
    export type Type =
        | App.Route.Typed.LoginGET
        | App.Route.Typed.LogoutPOST
        | App.Route.Typed.ForgotPasswordGET
        | App.Route.Typed.ResetPasswordTokenGET
        | App.Route.Typed.ResetPasswordPOST
        | App.Route.Typed.UserProfileInformationPUT
        | App.Route.Typed.UserPasswordPUT
        | App.Route.Typed.UserConfirmPasswordGET
        | App.Route.Typed.UserConfirmedPasswordStatusGET
        | App.Route.Typed.TwoFactorChallengeGET
        | App.Route.Typed.UserTwoFactorAuthenticationPOST
        | App.Route.Typed.UserConfirmedTwoFactorAuthenticationPOST
        | App.Route.Typed.UserTwoFactorQrCodeGET
        | App.Route.Typed.UserTwoFactorSecretKeyGET
        | App.Route.Typed.UserTwoFactorRecoveryCodesGET
        | App.Route.Typed.UserProfileGET
        | App.Route.Typed.UserOtherBrowserSessionsDELETE
        | App.Route.Typed.UserProfilePhotoDELETE
        | App.Route.Typed.UserDELETE
        | App.Route.Typed.SanctumCsrfCookieGET
        | App.Route.Typed.ContactGET
        | App.Route.Typed.DownloadPodcastSlugGET
        | App.Route.Typed.FeedsGET
        | App.Route.Typed.FeedsFeedSlugGET
        | App.Route.Typed.GET
        | App.Route.Typed.AProposGET
        | App.Route.Typed.SAbonnerGET
        | App.Route.Typed.P1pddGET
        | App.Route.Typed.Pqd2pGET
        | App.Route.Typed.PodcastsGET
        | App.Route.Typed.PodcastsPodcastSlugGET
        | App.Route.Typed.BlogGET
        | App.Route.Typed.BlogPostSlugGET
        | App.Route.Typed.RssGET
        | App.Route.Typed.RssFeedSlugGET
        | App.Route.Typed.ApiUserGET
        | App.Route.Typed.DashboardGET;
    export type TypeGet =
        | App.Route.Typed.LoginGET
        | App.Route.Typed.ForgotPasswordGET
        | App.Route.Typed.ResetPasswordTokenGET
        | App.Route.Typed.UserConfirmPasswordGET
        | App.Route.Typed.UserConfirmedPasswordStatusGET
        | App.Route.Typed.TwoFactorChallengeGET
        | App.Route.Typed.UserTwoFactorQrCodeGET
        | App.Route.Typed.UserTwoFactorSecretKeyGET
        | App.Route.Typed.UserTwoFactorRecoveryCodesGET
        | App.Route.Typed.UserProfileGET
        | App.Route.Typed.SanctumCsrfCookieGET
        | App.Route.Typed.ContactGET
        | App.Route.Typed.DownloadPodcastSlugGET
        | App.Route.Typed.FeedsGET
        | App.Route.Typed.FeedsFeedSlugGET
        | App.Route.Typed.GET
        | App.Route.Typed.AProposGET
        | App.Route.Typed.SAbonnerGET
        | App.Route.Typed.P1pddGET
        | App.Route.Typed.Pqd2pGET
        | App.Route.Typed.PodcastsGET
        | App.Route.Typed.PodcastsPodcastSlugGET
        | App.Route.Typed.BlogGET
        | App.Route.Typed.BlogPostSlugGET
        | App.Route.Typed.RssGET
        | App.Route.Typed.RssFeedSlugGET
        | App.Route.Typed.ApiUserGET
        | App.Route.Typed.DashboardGET;
    export type TypePost =
        | App.Route.Typed.LogoutPOST
        | App.Route.Typed.ResetPasswordPOST
        | App.Route.Typed.UserTwoFactorAuthenticationPOST
        | App.Route.Typed.UserConfirmedTwoFactorAuthenticationPOST;
    export type TypePut =
        | App.Route.Typed.UserProfileInformationPUT
        | App.Route.Typed.UserPasswordPUT;
    export type TypePatch = never;
    export type TypeDelete =
        | App.Route.Typed.UserOtherBrowserSessionsDELETE
        | App.Route.Typed.UserProfilePhotoDELETE
        | App.Route.Typed.UserDELETE;
}

declare namespace App.Route.Typed {
    type LoginGET = {
        name: "login";
        params?: undefined;
        query?: Record<string, App.Route.Param>;
        hash?: string;
    };
    type LogoutPOST = {
        name: "logout";
        params?: undefined;
        query?: Record<string, App.Route.Param>;
        hash?: string;
    };
    type ForgotPasswordGET = {
        name: "password.request";
        params?: undefined;
        query?: Record<string, App.Route.Param>;
        hash?: string;
    };
    type ResetPasswordTokenGET = {
        name: "password.reset";
        params: {
            token: App.Route.Param;
        };
        query?: Record<string, App.Route.Param>;
        hash?: string;
    };
    type ResetPasswordPOST = {
        name: "password.update";
        params?: undefined;
        query?: Record<string, App.Route.Param>;
        hash?: string;
    };
    type UserProfileInformationPUT = {
        name: "user-profile-information.update";
        params?: undefined;
        query?: Record<string, App.Route.Param>;
        hash?: string;
    };
    type UserPasswordPUT = {
        name: "user-password.update";
        params?: undefined;
        query?: Record<string, App.Route.Param>;
        hash?: string;
    };
    type UserConfirmPasswordGET = {
        name: "user/confirm-password";
        params?: undefined;
        query?: Record<string, App.Route.Param>;
        hash?: string;
    };
    type UserConfirmedPasswordStatusGET = {
        name: "password.confirmation";
        params?: undefined;
        query?: Record<string, App.Route.Param>;
        hash?: string;
    };
    type TwoFactorChallengeGET = {
        name: "two-factor.login";
        params?: undefined;
        query?: Record<string, App.Route.Param>;
        hash?: string;
    };
    type UserTwoFactorAuthenticationPOST = {
        name: "two-factor.enable";
        params?: undefined;
        query?: Record<string, App.Route.Param>;
        hash?: string;
    };
    type UserConfirmedTwoFactorAuthenticationPOST = {
        name: "two-factor.confirm";
        params?: undefined;
        query?: Record<string, App.Route.Param>;
        hash?: string;
    };
    type UserTwoFactorQrCodeGET = {
        name: "two-factor.qr-code";
        params?: undefined;
        query?: Record<string, App.Route.Param>;
        hash?: string;
    };
    type UserTwoFactorSecretKeyGET = {
        name: "two-factor.secret-key";
        params?: undefined;
        query?: Record<string, App.Route.Param>;
        hash?: string;
    };
    type UserTwoFactorRecoveryCodesGET = {
        name: "two-factor.recovery-codes";
        params?: undefined;
        query?: Record<string, App.Route.Param>;
        hash?: string;
    };
    type UserProfileGET = {
        name: "profile.show";
        params?: undefined;
        query?: Record<string, App.Route.Param>;
        hash?: string;
    };
    type UserOtherBrowserSessionsDELETE = {
        name: "other-browser-sessions.destroy";
        params?: undefined;
        query?: Record<string, App.Route.Param>;
        hash?: string;
    };
    type UserProfilePhotoDELETE = {
        name: "current-user-photo.destroy";
        params?: undefined;
        query?: Record<string, App.Route.Param>;
        hash?: string;
    };
    type UserDELETE = {
        name: "current-user.destroy";
        params?: undefined;
        query?: Record<string, App.Route.Param>;
        hash?: string;
    };
    type SanctumCsrfCookieGET = {
        name: "sanctum.csrf-cookie";
        params?: undefined;
        query?: Record<string, App.Route.Param>;
        hash?: string;
    };
    type ContactGET = {
        name: "contact.index";
        params?: undefined;
        query?: Record<string, App.Route.Param>;
        hash?: string;
    };
    type DownloadPodcastSlugGET = {
        name: "download.show";
        params: {
            podcast_slug: App.Route.Param;
        };
        query?: Record<string, App.Route.Param>;
        hash?: string;
    };
    type FeedsGET = {
        name: "feeds";
        params?: undefined;
        query?: Record<string, App.Route.Param>;
        hash?: string;
    };
    type FeedsFeedSlugGET = {
        name: "feeds/{feed_slug}";
        params: {
            feed_slug: App.Route.Param;
        };
        query?: Record<string, App.Route.Param>;
        hash?: string;
    };
    type GET = {
        name: "home";
        params?: undefined;
        query?: Record<string, App.Route.Param>;
        hash?: string;
    };
    type AProposGET = {
        name: "page.about";
        params?: undefined;
        query?: Record<string, App.Route.Param>;
        hash?: string;
    };
    type SAbonnerGET = {
        name: "page.subscribe";
        params?: undefined;
        query?: Record<string, App.Route.Param>;
        hash?: string;
    };
    type P1pddGET = {
        name: "page.p1pdd";
        params?: undefined;
        query?: Record<string, App.Route.Param>;
        hash?: string;
    };
    type Pqd2pGET = {
        name: "page.pqd2p";
        params?: undefined;
        query?: Record<string, App.Route.Param>;
        hash?: string;
    };
    type PodcastsGET = {
        name: "podcasts.index";
        params?: undefined;
        query?: Record<string, App.Route.Param>;
        hash?: string;
    };
    type PodcastsPodcastSlugGET = {
        name: "podcasts.show";
        params: {
            podcast_slug: App.Route.Param;
        };
        query?: Record<string, App.Route.Param>;
        hash?: string;
    };
    type BlogGET = {
        name: "posts.index";
        params?: undefined;
        query?: Record<string, App.Route.Param>;
        hash?: string;
    };
    type BlogPostSlugGET = {
        name: "posts.show";
        params: {
            post_slug: App.Route.Param;
        };
        query?: Record<string, App.Route.Param>;
        hash?: string;
    };
    type RssGET = {
        name: "rss.index";
        params?: undefined;
        query?: Record<string, App.Route.Param>;
        hash?: string;
    };
    type RssFeedSlugGET = {
        name: "rss.show";
        params: {
            feed_slug: App.Route.Param;
        };
        query?: Record<string, App.Route.Param>;
        hash?: string;
    };
    type ApiUserGET = {
        name: "api/user";
        params?: undefined;
        query?: Record<string, App.Route.Param>;
        hash?: string;
    };
    type DashboardGET = {
        name: "dashboard";
        params?: undefined;
        query?: Record<string, App.Route.Param>;
        hash?: string;
    };
}