// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: LicenseRef-.amazon.com.-AmznSL-1.0
// Licensed under the Amazon Software License  http://aws.amazon.com/asl/

import * as FruitInfo from './data/fruit_info.json'
import * as FruitSkillMetadata from './data/fruit_skill_metadata.json'
import * as Alexa from 'ask-sdk'

export type Viewport = {
  size: string
  listRowCount: number
  rowTopMargin: string
  rowHeight: string
  imageWidth: string
  imageHeight: string
}

export type FruitsInfo = {
  name: string
  sourceUrl: string
  nutritionInfo: {
    Amount: string
    'Total Calories': string
    Carbohydrate: string
    Protein: string
    Fat: string
  }
}

export const supportsAPL = (handlerInput: Alexa.HandlerInput): boolean => {
  const supportedInterfaces = Alexa.getSupportedInterfaces(
    handlerInput.requestEnvelope
  )
  const aplInterface = supportedInterfaces['Alexa.Presentation.APL']
  return aplInterface !== null && aplInterface !== undefined
}

export const getPageProperties = (viewportProfile: string): Viewport => {
  switch (viewportProfile) {
    case 'HUB-ROUND-SMALL':
      return FruitSkillMetadata.properties.dimensions.smallRoundViewport
    case 'HUB-LANDSCAPE-SMALL':
      return FruitSkillMetadata.properties.dimensions.smallLandscapeViewport
    default:
      return FruitSkillMetadata.properties.dimensions.largeViewport
  }
}

export const splitArray = (
  input: FruitsInfo[],
  spacing: number
): FruitsInfo[][] => {
  var output = []
  for (var i = 0; i < input.length; i += spacing) {
    output[output.length] = input.slice(i, i + spacing)
  }
  return output
}

export const getFruitInfo = (fruitName: string): FruitsInfo => {
  return FruitInfo.data.filter(
    f => f.name.toLowerCase() === fruitName.toLowerCase()
  )[0]
}

export const getMessage = (message: string): string => {
  return FruitSkillMetadata.messages[message]
}

export const getFruitSpeechDataSource = (fruitName: string): string => {
  const fruitNutritionInfo = getFruitInfo(fruitName).nutritionInfo
  let fruitNutritionInfoSsml = `<speak>Per <say-as interpret-as='cardinal'>${getNumber(
    fruitNutritionInfo.Amount
  )}</say-as> grams`
  fruitNutritionInfoSsml += ` of ${fruitName} contains <say-as interpret-as='cardinal'>${getNumber(
    fruitNutritionInfo.Fat
  )}</say-as> grams of fat,`
  fruitNutritionInfoSsml += ` <say-as interpret-as='cardinal'>${getNumber(
    fruitNutritionInfo.Protein
  )}</say-as> grams of protein,`
  fruitNutritionInfoSsml += ` <say-as interpret-as='cardinal'>${getNumber(
    fruitNutritionInfo.Carbohydrate
  )}</say-as> grams of carbohydrate and`
  fruitNutritionInfoSsml += ` it is <say-as interpret-as='cardinal'>${getNumber(
    fruitNutritionInfo['Total Calories']
  )}</say-as> calories.</speak>`
  return fruitNutritionInfoSsml
}

const getNumber = (numberWithUnit: string): string => {
  if (numberWithUnit.includes('gr')) {
    return numberWithUnit.slice(0, numberWithUnit.indexOf('gr'))
  } else {
    return numberWithUnit.slice(0, numberWithUnit.indexOf('cal'))
  }
}
