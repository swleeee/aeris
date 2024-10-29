import { css } from '@emotion/react'

import { CheckboxGroupProps } from './CheckboxGroup.type'

export const groupContainerStyle = (
  direction: CheckboxGroupProps['direction']
) => css`
  display: flex;
  flex-direction: ${direction === 'horizontal' ? 'row' : 'column'};
  gap: 0.5rem;
`
