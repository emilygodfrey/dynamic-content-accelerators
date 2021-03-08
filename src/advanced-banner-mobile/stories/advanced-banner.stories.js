import {
  storiesOf
} from '@storybook/html';

import addons from '@storybook/addons';
import CoreEvents from '@storybook/core-events';

import {
  renderContent
} from '../../../.storybook/rendering-service';

import globalBannerStyles from '../../common/css/o-dc-components.css';
import advancedBannerStyles from '../css/advanced-banner.scss';

export const sampleContent = {
	"@id": "http://content.cms.amplience.com/8fecf907-34da-4abe-83d3-4c4eb167fbd2",
	"hasVideo": false,
	"descriptionStyle": "white",
	"descriptionFontSize": "small",
	"_meta": {
		"schema": "https://unpkg.com/dc-accelerators-content-rendering-service/dist/contentTypes/banner.json",
		"name": "summer---banner"
	},
	"description": "Auf ausgewählte Waren. Der Rabatt erscheint automatisch in deinem Warenkorb.",
	"video": {
		"backgroundEffect": false,
		"backgroundFullScreen": false,
		"_meta": {
			"schema": "https://unpkg.com/dc-accelerators-content-rendering-service/dist/contentTypes/video.json"
		}
	},
	"smallerheight": false,
	"hideMobileText": true,
	"textPositionVertical": "middle",
	"showVideoTitle": false,
	"headerStyle": "white",
	"textPositionHorizontal": "center",
	"backgroundGradient": "left",
	"button": {
		"buttonBackgroundColour": "transparent",
		"buttonStyle": "tiny",
		"buttonLink": "https://eu.wrangler.com/de-de/shop/sale/damen--30-c090400",
		"buttonBorderStyle": "dashed",
		"buttonBorderColour": "white",
		"_meta": {
			"schema": "https://unpkg.com/dc-accelerators-content-rendering-service/dist/contentTypes/button.json"
		},
		"buttonLabel": "30% Rabatt für sie"
	},
	"bannerImage": {
		"image": {
			"@id": "http://image.cms.amplience.com/e24f87cc-d12a-4847-a955-8998997e137d",
			"endpoint": "dem",
			"defaultHost": "1qsp9jqe0mztt1m86vvc1muff6.staging.bigcontent.io",
			"name": "salestep-red",
			"_meta": {
				"schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
			},
			"id": "e24f87cc-d12a-4847-a955-8998997e137d",
			"mediaType": "image"
		},
		"_meta": {
			"schema": "https://unpkg.com/dc-accelerators-content-rendering-service/dist/contentTypes/image.json"
		},
		"gifImage": false,
    "togglePOI": false,
    "imageEffect": "Double-line Horizontal"
	},
	"subheader": "BIS ZU 50% RABATT",
	"headerFontSize": "small",
	"subheaderStyle": "white",
	"subheaderFontWeight": "bold",
	"showscrollarrow": false,
	"header": "SUMMER SALE",
	"togglePOI": false,
	"subheaderFontSize": "medium",
	"@type": "https://unpkg.com/dc-accelerators-content-rendering-service/dist/contentTypes/banner.json"
};

storiesOf('Advanced Banner', module)
  .add('Example Content', () => renderContent('amp-template-advanced-banner', sampleContent));