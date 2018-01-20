/*
* @Author: yang
* @Date:   2018-01-20 16:40:33
* @Last Modified by:   yang
* @Last Modified time: 2018-01-20 16:49:30
*/

class DomFunc{
	
	/**
	 * 获取dom元素的高度
	 * @return {[type]} [description]
	 */
	static getObjHeight($select){
		return $($select).height();
	}

	static getCss($select,attr){
		return  $($select).css(attr);
	}

	static setCss($select,attr){
		$($select).css(attr);
	}
}


export default DomFunc;