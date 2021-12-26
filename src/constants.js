const CONTRACT_ADDRESS = '0x90A56956f6F61Dd1137D035b7ea640309C65a39e';

const transformCharacterData = (characterData) => {
	return {
		name: characterData.name,
		imageURI: characterData.imageURI,
		gender: characterData.gender,
		hp: characterData.hp.toNumber(),
		maxHp: characterData.maxHp.toNumber(),
		level: characterData.level.toNumber(),
	};
};

export { CONTRACT_ADDRESS, transformCharacterData };
