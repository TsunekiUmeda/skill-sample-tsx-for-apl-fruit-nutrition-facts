// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: LicenseRef-.amazon.com.-AmznSL-1.0
// Licensed under the Amazon Software License  http://aws.amazon.com/asl/

import * as React from 'react'
import { Container, Text, Image, TouchWrapper } from 'ask-sdk-jsx-for-apl'
import { FruitsInfo, Viewport } from '../utils'

type Command = {
  type: string
  [key: string]: any
}

type FruitsRowProps = {
  fruitRowData: FruitsInfo[]
  pageProperties: Viewport
}

export const FruitsRow = (props: FruitsRowProps): JSX.Element => {
  const fruitRowData = props.fruitRowData
  const pageProperties = props.pageProperties

  return (
    <Container direction='row' width='100vw' height={pageProperties.rowHeight}>
      {fruitRowData.map(fruit => {
        const touchCommand: Command[] = [
          {
            type: 'SendEvent',
            arguments: [fruit.name],
          },
        ]
        return (
          <Container
            width={`${100 / fruitRowData.length}vw`}
            top={pageProperties.rowTopMargin}
            height='100%'
            alignItems='center'
            paddingLeft='16dp'
            paddingBottom='16dp'
            paddingRight='16dp'>
            <Text
              width='100%'
              height='52dp'
              paddingBottom='12dp'
              textAlign='center'
              textAlignVertical='center'
              fontSize='22dp'
              text={fruit.name}
            />
            <TouchWrapper onPress={touchCommand}>
              <Image
                width={pageProperties.imageWidth}
                height={pageProperties.imageHeight}
                borderRadius='100vw'
                scale='best-fill'
                align='center'
                source={fruit.sourceUrl}
              />
            </TouchWrapper>
          </Container>
        )
      })}
    </Container>
  )
}
