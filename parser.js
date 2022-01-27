/**
 * Marketo Template Parser
 *
 * Speeds up the development of Marketo templates by prefilling the default values for the mkto meta tags.
 *
 * @link   	https://github.com/stuartajd/marketo-template-parser
 * @author 	Stuart Davidson <me@stuartd.co.uk>
 * @version 0.1
 */
(() => {
	/**
	 * Configuration options for the specific tags that may change value 
	 */
	const mktoFunctionMap = {
		mktoBoolean: mktoBoolean
	}

	/**
	 * Sets the value of any elements that need have a boolean meta tag.
	 */
	function mktoBoolean(htmlContent, tag) {
		const value = tag.default === 'true' ? tag.true_value : tag.false_value;
		return htmlContent.replaceAll("${"+ tag.id +"}", value);
	}

	/**
	 * Sets the value of any elements to be the default value.
	 */
	function mktoDefault(htmlContent, tag) {
		return htmlContent.replaceAll("${"+ tag.id +"}", tag.default);
	}

	window.addEventListener('DOMContentLoaded', () => {
		let htmlContent = document.documentElement.innerHTML;

		/** 
		 * Grab out the meta elements that contain Marketo editable tags.
		 * Update each of the elements & update our htmlContent variable.
		 * Set the innerHTML of the document to be our htmlContent once for performance.
		 */
		const marketoAttributes = [...document.documentElement.querySelectorAll("meta[class^=mkto]")].map((tag) => {
			return {
				id: tag.id,
				type: tag.classList[0],
				name: tag.getAttribute("mktoName"),
				default: tag.getAttribute("default"),
				allowhtml: tag.getAttribute("allowhtml"),
				true_value: tag.getAttribute("true_value"),
				false_value: tag.getAttribute("false_value"),
				true_value_name: tag.getAttribute("true_value_name"),
				false_value_name: tag.getAttribute("false_value_name")
			}
		});

		marketoAttributes.forEach((tag) => {
			const mktoFunction = mktoFunctionMap[tag.type] || mktoDefault;
			htmlContent = mktoFunction(htmlContent, tag);
		});

		document.documentElement.innerHTML = htmlContent;	
	});
})();
