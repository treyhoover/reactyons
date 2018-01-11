// Determine whether an argument is a valid className (empty strings considered invalid)
export const isValidClassName = (c: any): boolean => {
    if (typeof c !== "string") return false;

    return c.length > 0;
};
