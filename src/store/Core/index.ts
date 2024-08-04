import { createSlice } from "@reduxjs/toolkit"

import { DIALOG_TYPE_PROGRAM_NOT_HELD_ON_2024 } from "./dialog"

export type PossibleLanguage = "KOR" | "ENG";
export type PossibleGlobalDialogTyle = DIALOG_TYPE_PROGRAM_NOT_HELD_ON_2024 | null;
export type CoreState = {
  language: PossibleLanguage;
  globalDialog: PossibleGlobalDialogTyle;
};

const initialState: CoreState = {
  language: "KOR",
  globalDialog: null,
};

const core = createSlice({
  name: "core",
  initialState,
  reducers: {
    // Set page language
    setLanguage: (state, { payload }: { payload: CoreState["language"] }) => {
      state.language = payload;
    },
    // Show global dialog
    openGlobalDialog: (state, { payload }: { payload: PossibleGlobalDialogTyle }) => {
      state.globalDialog = payload;
    },
    closeGlobalDialog: (state) => {
      state.globalDialog = null;
    },
  },
});

export const { setLanguage, openGlobalDialog, closeGlobalDialog } = core.actions;

export default core.reducer;
