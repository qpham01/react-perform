export function classify(key, value=''){
		if(value[0]==='-') value = key+value;
		value = value.split(' -').join(` ${key}-`);
		return `${key} ${value}`;
}