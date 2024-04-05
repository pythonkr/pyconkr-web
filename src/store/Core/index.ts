import { createSlice } from "@reduxjs/toolkit";

export type CoreState = {
  language: "KOR" | "ENG";
};

const initialState: CoreState = {
  language: "KOR",
};

const core = createSlice({
  name: "core",
  initialState,
  reducers: {
    setLanguage: (state, { payload }: { payload: CoreState["language"] }) => {
      state.language = payload;
    },
  },
});

export const { setLanguage } = core.actions;

export default core.reducer;
