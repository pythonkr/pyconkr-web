import React from 'react'
import { useDispatch } from 'react-redux'

import { closeGlobalDialog } from 'store/Core'
import styled from 'styled-components'

export const ProgramNotHeldOn2024: React.FC<{open?: boolean}> = (props) => {
  const dispatch = useDispatch()
  return <dialog {...props}>
    <DialogAside>
      <div>
        <h1>튜토리얼 및 스프린트 관련 안내</h1>
        올해도 파이썬의 저변을 넓히는 활동의 하나로 튜토리얼 프로그램을 준비하고 있었으나,<br />
        아쉽게도 올해는 내부 사정으로 인해 올해는 튜토리얼 프로그램이 진행되지 않음을 알려드립니다.<br />
        <br />
        이러한 안내를 드리게 되어 저희도 매우 아쉬운 마음이며,<br />
        많은 파이써니스타 여러분들께 너른 양해를 구합니다.<br />
      </div>
      <br />
      <DialogCloseButton onClick={() => dispatch(closeGlobalDialog())}>확인</DialogCloseButton>
    </DialogAside>
  </dialog>
}

const DialogAside = styled.aside`
  background-color: #333;
  padding: 1rem;
  border-radius: 0.25rem;
`

const DialogCloseButton = styled.button`
  width: 100%;
  padding: 0.25rem;
`
