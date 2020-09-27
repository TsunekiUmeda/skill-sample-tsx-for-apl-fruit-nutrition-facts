// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: LicenseRef-.amazon.com.-AmznSL-1.0
// Licensed under the Amazon Software License  http://aws.amazon.com/asl/

import * as React from 'react'
import * as Utils from '../../utils'
import * as FruitSkillMetadata from '../../data/fruit_skill_metadata.json'
import { APL, MainTemplate, Container, Image } from 'ask-sdk-jsx-for-apl'
import { FruitNutritionInfo } from './FruitNutritionInfo'

export const FruitDetailSmallViewport: React.FC<{
  fruitName: string
}> = ({ fruitName }) => {
  return (
    <APL theme='dark'>
      <MainTemplate parameters={['nutritionSpeechData']}>
        <Container width='100vw' height='100vh' alignItems='center'>
          <Image
            width='100vw'
            height='100vh'
            position='absolute'
            scale='best-fill'
            source={FruitSkillMetadata.properties.backgroundImageSourceUrl}
          />
          <FruitNutritionInfo fruitName={fruitName} />
          <Image
            width='40vw'
            height='40vh'
            borderRadius='50vw'
            scale='best-fill'
            source={Utils.getFruitInfo(fruitName).sourceUrl}
          />
        </Container>
      </MainTemplate>
    </APL>
  )
}
