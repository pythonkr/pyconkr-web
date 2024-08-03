import React, { useCallback } from 'react'
import { useSelector } from "react-redux"

import { RootState } from "store"
import { PossibleGlobalDialogTyle } from "store/Core"
import { DIALOG_CONST_PROGRAM_NOT_HELD_ON_2024, DIALOG_TYPE_PROGRAM_NOT_HELD_ON_2024 } from 'store/Core/dialog'
import { ProgramNotHeldOn2024 } from './program'

export const useGlobalDialog = () => {
  const globalDialogState = useSelector<RootState, PossibleGlobalDialogTyle>((state) => state.core.globalDialog);
  return useCallback((key: DIALOG_TYPE_PROGRAM_NOT_HELD_ON_2024) => globalDialogState === key, [globalDialogState]);
};

export const DialogCollection: React.FC = () => {
  const dialogOpenMgr = useGlobalDialog();
  return <>
    <ProgramNotHeldOn2024 open={dialogOpenMgr(DIALOG_CONST_PROGRAM_NOT_HELD_ON_2024)} />
  </>
}
