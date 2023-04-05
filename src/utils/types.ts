export type SvgType =
    | "arrowDownSelect"
    | "arrowToggleSidePanel"
    | "close"
    | "cloud"
    | "computers"
    | "getLink"
    | "googleApps"
    | "listLayout"
    | "menuSquared"
    | "modified"
    | "moreOptions"
    | "myDrive"
    | "myDriveMini"
    | "new"
    | "preview"
    | "recent"
    | "searchGoogleDrive"
    | "settings"
    | "share"
    | "sharedWithMe"
    | "showSearchIcon"
    | "starred"
    | "support"
    | "toggleDetails"
    | "trash"
    | "warning";

export type SvgFill = "#5F6368" | "#71757A" | "#000";

export interface SvgItem {
    type: SvgType;
    fill?: SvgFill;
}
