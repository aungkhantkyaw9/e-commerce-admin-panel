/**
 * Common Javascript
 *
 * @author aung khant kyaw
 */

/**
 * Test empty or not
 *
 * @param value
 * @reutrn boolean
 */
 export const isEmpty = (val) => {
    return (val === undefined || val == null || val.length <= 0 || val == 'null') ? true : false;
};

/**
 * Check max length
 *
 * @param num
 * @reutrn True (has value) | False (length exceed)
 */
 export const checkMaxLength = (value,num) => {
	if (value.length > num) {
		return false;
	}
    return true;
}