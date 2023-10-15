class TimeLimitedCache {
	constructor() {
			this.cache = new Map();
	}
	set(key, value, duration) {
			this.key = key;
			this.value = value;
			this.duration = duration;
			const existingKey = this.cache.get(key);
			if(existingKey) {
					clearTimeout(existingKey.timeout);
			}
			const timeout = setTimeout(() => {
					this.cache.delete(key);
			}, duration);
			this.cache.set(key, {value, timeout});
			return Boolean(existingKey)
	}
	get(key) {
			return this.cache.has(key) ? this.cache.get(key).value : -1
	}
	count() {
			return this.cache.size;
	}
}

const timeLimitedCache = new TimeLimitedCache()
timeLimitedCache.set(1, 42, 1000); // false
timeLimitedCache.get(1) // 42
timeLimitedCache.count() // 1