// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: LicenseRef-.amazon.com.-AmznSL-1.0
// Licensed under the Amazon Software License  http://aws.amazon.com/asl/

import * as React from 'react'
import * as Utils from '../../utils'
import * as FruitSkillMetadata from '../../data/fruit_skill_metadata.json'
import { APL, MainTemplate, Container, Image } from 'ask-sdk-jsx-for-apl'
import { AlexaHeader } from 'ask-sdk-jsx-for-apl/alexa-layouts'
import { FruitNutritionInfo } from './FruitNutritionInfo'

export const FruitDetailLargeViewport: React.FC<{
  fruitName: string
}> = ({ fruitName }) => {
  return (
    <APL theme='dark'>
      <MainTemplate>
        <Container width='100vw' height='100vh'>
          <Image
            width='100vw'
            height='100vh'
            position='absolute'
            scale='best-fill'
            source={FruitSkillMetadata.properties.backgroundImageSourceUrl}
          />
          <AlexaHeader headerTitle={Utils.getFruitInfo(fruitName).name} headerBackButton={true} />
          <Container width='100vw' height='60vh' top={50} alignItems='center' direction='row'>
            <Image
              width='50vw'
              height='100%'
              paddingLeft='60dp'
              borderRadius='100vw'
              scale='best-fill'
              source={Utils.getFruitInfo(fruitName).sourceUrl}
            />
            <Container width='50vw' height='100%' alignItems='center'>
              <FruitNutritionInfo fruitName={fruitName} />
            </Container>
          </Container>
        </Container>
      </MainTemplate>
    </APL>
  )
}
