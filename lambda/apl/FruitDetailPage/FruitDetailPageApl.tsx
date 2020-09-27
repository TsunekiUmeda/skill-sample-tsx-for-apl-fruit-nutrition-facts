// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: LicenseRef-.amazon.com.-AmznSL-1.0
// Licensed under the Amazon Software License  http://aws.amazon.com/asl/

import * as React from 'react'
import { FruitDetailLargeViewport } from './FruitDetailLargeViewport'
import { FruitDetailSmallViewport } from './FruitDetailSmallViewport'
import { Viewport } from '../../utils'

type FruitDetailPageAplProps = {
  fruitName: string
  pageInfo: Viewport
}

export const FruitDetailPageApl = (props: FruitDetailPageAplProps) => {
  const fruitName = props.fruitName
  const pageInfo = props.pageInfo

  if (pageInfo.size === 'small') {
    return <FruitDetailSmallViewport fruitName={fruitName} />
  } else {
    return <FruitDetailLargeViewport fruitName={fruitName} />
  }
}
