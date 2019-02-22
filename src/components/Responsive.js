import React from 'react'
import Responsive from 'react-responsive'

export const Default = props => <Responsive {...props} maxWidth={575} />
export const SM = props => <Responsive {...props} minWidth={576} />
export const MD = props => <Responsive {...props} minWidth={768} />
export const LG = props => <Responsive {...props} minWidth={992} />
export const XL = props => <Responsive {...props} minWidth={1200} />
