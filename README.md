## Sample Skill - Fruits Nutrition Facts

Personal project to refactor ask-sdk-jsx into tsx

JSX for APL (https://github.com/alexa-labs/ask-sdk-jsx-for-apl)

## Used React APL Components

- Primitive Components (https://developer.amazon.com/en-US/docs/alexa/alexa-presentation-language/apl-component.html) - APL, MainTemplate, Container, Image, Text, Sequence, Touchwrapper.

- Responsive Components (https://developer.amazon.com/en-US/docs/alexa/alexa-presentation-language/apl-layouts-overview.html) - AlexaHeader.

These components are used inside the jsx files under **lambda/apl/** to generate more complex APL Components which forms APL Document pages. Meanwhile generating those APL Document pages, **JSX for APL** gives power to divide each APL page into smaller parts(basically into components). For instance, gettering and viewing nutrition info is executed inside **FruitNutritionInfo** component and it is used by the components in need of nutrition info. Same logic exists for listing the fruits by using **FruitsRow** component.

## Brief Steps

## License

This library is licensed under the Amazon Software License.
