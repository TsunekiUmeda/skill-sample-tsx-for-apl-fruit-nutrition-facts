// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: LicenseRef-.amazon.com.-AmznSL-1.0
// Licensed under the Amazon Software License  http://aws.amazon.com/asl/

import * as React from 'react'
import * as Utils from '../../utils'
import { Text } from 'ask-sdk-jsx-for-apl'

export const FruitNutritionInfo: React.FC<{ fruitName: string }> = ({ fruitName }): JSX.Element => {
  const fruitInfo = Utils.getFruitInfo(fruitName)

  const renderedText = Object.keys(fruitInfo.nutritionInfo).map(nutritionName => {
    const nutritionValue = fruitInfo.nutritionInfo[nutritionName]
    return (
      <Text
        width='100%'
        height='52dp'
        color='#F8F8FF'
        paddingTop='12dp'
        paddingBottom='12dp'
        textAlign='center'
        textAlignVertical='center'
        fontSize='22dp'
        text={`${nutritionName}: ${nutritionValue}`}
      />
    )
  })

  return <div>{renderedText}</div>
}
