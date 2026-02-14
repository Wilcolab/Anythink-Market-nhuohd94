function toKebabCase(str) {
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2') // Insert hyphen before uppercase letters
        .replace(/[\s_]+/g, '-') // Replace spaces and underscores with hyphens
        .replace(/[^a-zA-Z0-9-]/g, '') // Remove non-alphanumeric characters except hyphens
        .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
        .toLowerCase() // Convert to lowercase
        .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}