export interface Module {
  MODULE_URL?: string;
  MODULE_NAME: string;
  MODULE_ICON_CLASS: string;
  MODULE_ICON_CLASS_ACTIVE: string;
  SUBMODULES?: Submodule[];
}

export interface Submodule {
  MODULE_URL?: string;
  MODULE_NAME: string;
  openInNew?: boolean;
}