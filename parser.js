'use strict';

(function(){
	// Parse the template
	window.addEventListener('DOMContentLoaded', setup);

	// Set the virtual DOM up
	let htmlContent = null;

	function setup() {
		htmlContent = document.documentElement.innerHTML;

		const marketoAttributes = [...document.documentElement.querySelectorAll("meta[class^=mkto]")].map(tag => {
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

		marketoAttributes.forEach(tag => {
			// Update the htmlContent value
			const setTagValue = setTagMap[tag.type] || setTagMap['mktoString'];
			htmlContent = setTagValue(tag);
		});

		// Update the actual DOM inner HTML 
		document.documentElement.innerHTML = htmlContent;
	}

	const setTagMap = {
		mktoString: mktoString,
		mktoBoolean: mktoBoolean
	}
	
	function mktoBoolean(tag){
		const value = tag.default === 'true' ? tag.true_value : tag.false_value;
		return htmlContent.replaceAll("${"+ tag.id +"}", value);
	}

	function mktoString(tag){
		return htmlContent.replaceAll("${"+ tag.id +"}", tag.default);
	}
})();
