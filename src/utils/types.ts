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
  | "warning"
  | "arrowLeftSelect"
  | "myDriveSelected"
  | "sharedWithMeSelected"
  | "starredSelected"
  | "recentSelected"
  | "trashSelected"
  | "cloudSelected"
  | "warningSelected"
  | "checkboxIndeterminate"
  | "checkboxChecked"

export type SvgFill =
  | "#5F6368"
  | "#71757A"
  | "#000"
  | "#444746"
  | "#1F1F1F"
  | "#B42921"
  | "#c5221f"

export interface SvgItem {
  type: SvgType
  fill?: SvgFill
  width?: string
  height?: string
}
