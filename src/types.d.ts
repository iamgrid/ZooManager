export interface dataItem {
	id: string;
	name: string;
	species: string;
	date_of_birth: string;
	gender: 'Male' | 'Female' | 'Other';
	location: 'With us' | 'On loan';
	enclosure:
		| 'In transit'
		| 'Aviary'
		| 'Elephant House'
		| 'Great Ape House'
		| 'Savanna'
		| 'Monkey World'
		| 'Madagascar House'
		| 'India House';
	dietary_restrictions: string;
	notes: string;
}

export interface rawCommonFieldConfigItem {
	name: string;
	inputType: string;
	regexType: string;
	minLength: number;
	maxLength: number;
	options: string;
	initialValue: string;
	description: string;
}

export interface rawExpositionFieldConfigItem {
	id: string;
	required: boolean;
	editable: boolean;
	sectionLinePosition: string;
	icon: string;
	fontSize: string;
	cssClass: string;
	prefix: string;
	suffix: string;
}

export interface completeExpositionFieldConfigItem
	extends rawCommonFieldConfigItem,
		rawExpositionFieldConfigItem {}

export interface expositionFieldConfig {
	[section: number]: {
		[line: number]: {
			[entry: number]: completeExpositionFieldConfigItem;
		};
	};
}

export interface rawVerseFieldConfigItem {
	id: string;
	visible: boolean;
	sectionLinePosition: string;
	fontSize: string;
	cssClass: string;
	prefix: string;
	suffix: string;
}

export interface completeVerseFieldConfigItem
	extends rawCommonFieldConfigItem,
		rawVerseFieldConfigItem {}

export interface verseFieldConfig {
	[section: number]: {
		[line: number]: {
			[entry: number]: completeVerseFieldConfigItem;
		};
	};
}

export interface rawFieldConfigs {
	common: {
		[prop: string]: rawCommonFieldConfigItem;
	};
	exposition: rawExpositionFieldConfigItem[];
	verse: rawVerseFieldConfigItem[];
}

export interface fieldConfigs {
	exposition: expositionFieldConfig;
	verse: verseFieldConfig;
}
